
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const openAIApiKey = Deno.env.get('OPENAI_API_KEY');

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { assessmentHistory, userProfile, currentScores } = await req.json();

    console.log('Generating AI recommendations for user:', userProfile);

    // Construire le contexte pour l'IA
    const contextPrompt = `
Tu es une IA spécialisée en intelligence émotionnelle et bien-être. Analyse l'historique d'évaluations suivant et génère des recommandations personnalisées qui évoluent selon les patterns détectés.

PROFIL UTILISATEUR:
- Type: ${userProfile.type || 'Non spécifié'}
- Contexte: ${userProfile.context || 'Non spécifié'}

HISTORIQUE D'ÉVALUATIONS (chronologique):
${assessmentHistory.map((assessment: any, index: number) => `
Évaluation ${index + 1} (${assessment.date}):
- Score total: ${assessment.score}%
- Niveau de risque: ${assessment.riskLevel}
- Domaines critiques: ${assessment.criticalAreas?.join(', ') || 'Aucun'}
- Améliorations notées: ${assessment.improvements?.join(', ') || 'Aucune'}
`).join('\n')}

SCORES ACTUELS:
- Score global: ${currentScores.totalScore}%
- Niveau de risque: ${currentScores.riskLevel}
- Tendance: ${currentScores.trend || 'Stable'}

INSTRUCTIONS:
1. Analyse les patterns d'évolution dans l'historique
2. Identifie les domaines qui s'améliorent/se dégradent
3. Génère des recommandations QUI ÉVOLUENT par rapport aux précédentes
4. Propose des box spécifiques adaptées au contexte
5. Donne des conseils d'actions concrètes et personnalisées

Réponds UNIQUEMENT en JSON avec cette structure exacte:
{
  "evolutionAnalysis": "Analyse de l'évolution détectée",
  "personalizedInsights": ["insight1", "insight2", "insight3"],
  "recommendedBoxes": [
    {
      "name": "Nom de la box",
      "reason": "Pourquoi cette box maintenant",
      "priority": "high|medium|low"
    }
  ],
  "actionableAdvice": ["conseil1", "conseil2", "conseil3"],
  "nextSteps": ["étape1", "étape2"],
  "confidenceScore": 0.85
}
`;

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { 
            role: 'system', 
            content: 'Tu es une IA experte en intelligence émotionnelle qui génère des recommandations personnalisées évolutives. Tu réponds TOUJOURS en JSON valide.' 
          },
          { role: 'user', content: contextPrompt }
        ],
        temperature: 0.7,
        max_tokens: 1500,
      }),
    });

    if (!response.ok) {
      throw new Error(`OpenAI API error: ${response.status}`);
    }

    const data = await response.json();
    let aiRecommendations;

    try {
      aiRecommendations = JSON.parse(data.choices[0].message.content);
    } catch (parseError) {
      console.error('Failed to parse AI response:', data.choices[0].message.content);
      // Fallback si le parsing échoue
      aiRecommendations = {
        evolutionAnalysis: "Analyse en cours...",
        personalizedInsights: ["Continuez vos efforts", "Restez attentif à votre bien-être"],
        recommendedBoxes: [
          {
            name: "Box Bien-être Général",
            reason: "Recommandation par défaut",
            priority: "medium"
          }
        ],
        actionableAdvice: ["Prenez du temps pour vous", "Maintenez vos bonnes habitudes"],
        nextSteps: ["Nouvelle évaluation dans 1 semaine"],
        confidenceScore: 0.5
      };
    }

    console.log('AI recommendations generated successfully');

    return new Response(JSON.stringify({
      success: true,
      recommendations: aiRecommendations,
      generatedAt: new Date().toISOString()
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in ai-recommendations function:', error);
    return new Response(JSON.stringify({ 
      success: false,
      error: error.message,
      fallbackRecommendations: {
        evolutionAnalysis: "Impossible d'analyser l'évolution pour le moment",
        personalizedInsights: ["Système de recommandations en maintenance"],
        recommendedBoxes: [],
        actionableAdvice: ["Contactez le support si le problème persiste"],
        nextSteps: ["Réessayez plus tard"],
        confidenceScore: 0.1
      }
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
