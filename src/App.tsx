import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AdminLogin from "./pages/AdminLogin";
import AdminPanel from "./pages/AdminPanel";
import AdminContentManager from "./pages/AdminContentManager";
import Auth from "./pages/Auth";
import CoachQVT from "./pages/CoachQVT";
import CoachDashboard from "./pages/CoachDashboard";
import ConceptQVT from "./pages/ConceptQVT";
import Contact from "./pages/Contact";
import Famille from "./pages/Famille";
import FamilySimulator from "./pages/FamilySimulator";
import Login from "./pages/Login";
import Shop from "./pages/Shop";
import TeensHome from "./pages/TeensHome";
import SimulatorHome from "./pages/SimulatorHome";
import SimulatorHub from "./pages/SimulatorHub";
import ParentDashboard from "./pages/ParentDashboard";
import EmployeeDashboard from "./pages/EmployeeDashboard";
import TeamLeaderDashboard from "./pages/TeamLeaderDashboard";
import QVTManagerDashboard from "./pages/QVTManagerDashboard";
import MentionsLegales from "./pages/MentionsLegales";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CGU from "./pages/CGU";
import FamilyOrientation from "./pages/FamilyOrientation";
import EnterpriseOrientation from "./pages/EnterpriseOrientation";
import KidsHome from "./pages/KidsHome";
import ExecutiveDashboard from "./pages/ExecutiveDashboard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/admin-login" element={<AdminLogin />} />
              <Route path="/admin-panel" element={<AdminPanel />} />
              <Route path="/admin-content" element={<AdminContentManager />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/coach-qvt" element={<CoachQVT />} />
              <Route path="/coach-dashboard" element={<CoachDashboard />} />
              <Route path="/concept-qvt" element={<ConceptQVT />} />
              <Route path="/contact" element={<Contact />} />
              
              {/* Orientation pages */}
              <Route path="/famille" element={<FamilyOrientation />} />
              <Route path="/enterprise" element={<EnterpriseOrientation />} />
              
              {/* Family universe */}
              <Route path="/family-simulator" element={<FamilySimulator />} />
              <Route path="/login" element={<Login />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/teens-home" element={<TeensHome />} />
              <Route path="/kids-home" element={<KidsHome />} />
              <Route path="/simulator-home" element={<SimulatorHome />} />
              <Route path="/simulator-hub" element={<SimulatorHub />} />
              
              {/* User spaces */}
              <Route path="/parent-dashboard" element={<ParentDashboard />} />
              <Route path="/employee-dashboard" element={<EmployeeDashboard />} />
              <Route path="/team-leader-dashboard" element={<TeamLeaderDashboard />} />
              <Route path="/qvt-manager-dashboard" element={<QVTManagerDashboard />} />
              <Route path="/executive-dashboard" element={<ExecutiveDashboard />} />
              
              {/* Legal pages */}
              <Route path="/mentions-legales" element={<MentionsLegales />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/cgu" element={<CGU />} />
              
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
