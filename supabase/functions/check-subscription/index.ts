
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@14.21.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const logStep = (step: string, details?: any) => {
  const detailsStr = details ? ` - ${JSON.stringify(details)}` : '';
  console.log(`[CHECK-SUBSCRIPTION] ${step}${detailsStr}`);
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  const supabaseClient = createClient(
    Deno.env.get("SUPABASE_URL") ?? "",
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
    { auth: { persistSession: false } }
  );

  try {
    logStep("Function started");

    const stripeKey = Deno.env.get("STRIPE_SECRET_KEY");
    if (!stripeKey) throw new Error("STRIPE_SECRET_KEY is not set");

    const authHeader = req.headers.get("Authorization");
    if (!authHeader) throw new Error("No authorization header provided");

    const token = authHeader.replace("Bearer ", "");
    const { data: userData, error: userError } = await supabaseClient.auth.getUser(token);
    if (userError) throw new Error(`Authentication error: ${userError.message}`);
    
    const user = userData.user;
    if (!user?.email) throw new Error("User not authenticated or email not available");
    logStep("User authenticated", { userId: user.id, email: user.email });

    const stripe = new Stripe(stripeKey, { apiVersion: "2023-10-16" });
    
    // Find customer
    const customers = await stripe.customers.list({ email: user.email, limit: 1 });
    
    if (customers.data.length === 0) {
      logStep("No customer found, updating unsubscribed state");
      
      // Update or create subscription record
      await supabaseClient.from("active_subscriptions").upsert({
        user_id: user.id,
        status: 'inactive',
        total_price: 0,
        updated_at: new Date().toISOString(),
      });

      return new Response(JSON.stringify({ 
        subscribed: false, 
        subscription: null 
      }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      });
    }

    const customerId = customers.data[0].id;
    logStep("Found Stripe customer", { customerId });

    // Get active subscriptions
    const subscriptions = await stripe.subscriptions.list({
      customer: customerId,
      status: "active",
      limit: 1,
    });

    const hasActiveSub = subscriptions.data.length > 0;
    let subscriptionData = null;

    if (hasActiveSub) {
      const subscription = subscriptions.data[0];
      const planId = subscription.metadata?.plan_id;
      
      subscriptionData = {
        id: subscription.id,
        status: subscription.status,
        current_period_end: new Date(subscription.current_period_end * 1000).toISOString(),
        plan_id: planId,
        user_count: parseInt(subscription.metadata?.user_count || '1'),
        box_subscription: subscription.metadata?.with_box === 'true',
        total_price: subscription.items.data[0]?.price.unit_amount ? 
          subscription.items.data[0].price.unit_amount / 100 : 0,
      };

      logStep("Active subscription found", subscriptionData);

      // Update subscription in database
      await supabaseClient.from("active_subscriptions").upsert({
        user_id: user.id,
        plan_id: planId,
        stripe_subscription_id: subscription.id,
        status: 'active',
        user_count: subscriptionData.user_count,
        box_subscription: subscriptionData.box_subscription,
        total_price: subscriptionData.total_price,
        current_period_start: new Date(subscription.current_period_start * 1000).toISOString(),
        current_period_end: subscriptionData.current_period_end,
        updated_at: new Date().toISOString(),
      });
    } else {
      logStep("No active subscription found");
      
      await supabaseClient.from("active_subscriptions").upsert({
        user_id: user.id,
        status: 'inactive',
        total_price: 0,
        updated_at: new Date().toISOString(),
      });
    }

    return new Response(JSON.stringify({
      subscribed: hasActiveSub,
      subscription: subscriptionData
    }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    logStep("ERROR in check-subscription", { message: errorMessage });
    return new Response(JSON.stringify({ error: errorMessage }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});
