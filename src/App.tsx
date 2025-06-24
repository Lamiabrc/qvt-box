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
import AdminContentEditor from "./pages/AdminContentEditor";
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
import ExecutiveDashboard from "./pages/ExecutiveDashboard";
import Payment from "./pages/Payment";
import EnterpriseSimulator from "./pages/EnterpriseSimulator";

// Import des pages teens
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
              <Route path="/admin-content-editor" element={<AdminContentEditor />} />
              
              <Route path="/auth" element={<Auth />} />
              <Route path="/coach-qvt" element={<CoachQVT />} />
              <Route path="/coach-dashboard" element={<CoachDashboard />} />
              <Route path="/concept-qvt" element={<ConceptQVT />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/payment" element={<Payment />} />
              
              {/* Orientation pages */}
              <Route path="/famille" element={<FamilyOrientation />} />
              <Route path="/enterprise" element={<EnterpriseOrientation />} />
              
              {/* Simulators */}
              <Route path="/simulator-home" element={<SimulatorHome />} />
              <Route path="/simulator-hub" element={<SimulatorHub />} />
              <Route path="/enterprise-simulator" element={<EnterpriseSimulator />} />
              
              {/* Family universe */}
              <Route path="/family-simulator" element={<FamilySimulator />} />
              <Route path="/login" element={<Login />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/teens-home" element={<TeensHome />} />
              
              {/* Teen pages */}
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
