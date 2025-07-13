
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import ProfileSelection from "./pages/ProfileSelection";
import Login from "./pages/Login";
import EmailConfirmation from "./pages/EmailConfirmation";
import NotFound from "./pages/NotFound";
import Unauthorized from "./pages/Unauthorized";
import AdminLogin from "./pages/AdminLogin";
import EmployeeDashboard from "./pages/EmployeeDashboard";
import TeamLeaderDashboard from "./pages/TeamLeaderDashboard";
import EnterprisePortal from "./pages/EnterprisePortal";
import IntelligentRecommendations from "./pages/IntelligentRecommendations";
import SimulatorHub from "./pages/SimulatorHub";
import SimulatorSelector from "./pages/SimulatorSelector";
import EnterpriseSimulator from "./pages/EnterpriseSimulator";
import EnterpriseManagerSimulator from "./pages/EnterpriseManagerSimulator";
import EnterpriseEmployeeSimulator from "./pages/EnterpriseEmployeeSimulator";
import WorkplaceComparativeSimulator from "./pages/WorkplaceComparativeSimulator";

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
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile-selection" element={<ProfileSelection />} />
            <Route path="/login" element={<Login />} />
            <Route path="/email-confirmation" element={<EmailConfirmation />} />
            <Route path="/admin-login" element={<AdminLogin />} />
            <Route path="/employee-dashboard" element={<EmployeeDashboard />} />
            <Route path="/team-leader-dashboard" element={<TeamLeaderDashboard />} />
            <Route path="/entreprise" element={<EnterprisePortal />} />
            <Route path="/intelligent-recommendations" element={<IntelligentRecommendations />} />
            <Route path="/simulator-hub" element={<SimulatorHub />} />
            <Route path="/simulator-home" element={<SimulatorSelector />} />
            <Route path="/enterprise-simulator" element={<EnterpriseSimulator />} />
            <Route path="/enterprise-manager-simulator" element={<EnterpriseManagerSimulator />} />
            <Route path="/enterprise-employee-simulator" element={<EnterpriseEmployeeSimulator />} />
            <Route path="/workplace-comparative-simulator" element={<WorkplaceComparativeSimulator />} />
            <Route path="/unauthorized" element={<Unauthorized />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
