
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import Shop from "./pages/Shop";
import Payment from "./pages/Payment";
import TeensHome from "./pages/TeensHome";
import TeensPersonalSpace from "./pages/TeensPersonalSpace";
import TeensCheckIn from "./pages/TeensCheckIn";
import TeensAIEvaluation from "./pages/TeensAIEvaluation";
import TeensCalendar from "./pages/TeensCalendar";
import TeensJournal from "./pages/TeensJournal";
import TeensFamilySpace from "./pages/TeensFamilySpace";
import TeensFunSolutions from "./pages/TeensFunSolutions";
import TeensCustomization from "./pages/TeensCustomization";
import TeensPlaylist from "./pages/TeensPlaylist";
import TeensShop from "./pages/TeensShop";
import TeensQuickAlert from "./pages/TeensQuickAlert";
import TeensParentalAccess from "./pages/TeensParentalAccess";
import AdminLogin from "./pages/AdminLogin";
import AdminPanel from "./pages/AdminPanel";
import AdminContentManager from "./pages/AdminContentManager";
import AdminContentEditor from "./pages/AdminContentEditor";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/payment" element={<Payment />} />
            
            {/* Teen Pages */}
            <Route path="/teens-home" element={<TeensHome />} />
            <Route path="/teens-personal-space" element={<TeensPersonalSpace />} />
            <Route path="/teens-checkin" element={<TeensCheckIn />} />
            <Route path="/teens-ai-evaluation" element={<TeensAIEvaluation />} />
            <Route path="/teens-calendar" element={<TeensCalendar />} />
            <Route path="/teens-journal" element={<TeensJournal />} />
            <Route path="/teens-family-space" element={<TeensFamilySpace />} />
            <Route path="/teens-fun-solutions" element={<TeensFunSolutions />} />
            <Route path="/teens-customization" element={<TeensCustomization />} />
            <Route path="/teens-playlist" element={<TeensPlaylist />} />
            <Route path="/teens-shop" element={<TeensShop />} />
            <Route path="/teens-quick-alert" element={<TeensQuickAlert />} />
            <Route path="/teens-parental-access" element={<TeensParentalAccess />} />
            
            {/* Admin Pages */}
            <Route path="/admin-login" element={<AdminLogin />} />
            <Route path="/admin-panel" element={<AdminPanel />} />
            <Route path="/admin-content-manager" element={<AdminContentManager />} />
            <Route path="/admin-content-editor" element={<AdminContentEditor />} />
            
            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
