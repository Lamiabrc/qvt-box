
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import MobileWrapper from "./components/MobileWrapper";
import RealtimeChatBot from "./components/RealtimeChatBot";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Auth from "./pages/Auth";
import AuthCallback from "./pages/AuthCallback";
import EmailConfirmation from "./pages/EmailConfirmation";
import Contact from "./pages/Contact";
import ChatAdmin from "./pages/ChatAdmin";
import AdminLogin from "./pages/AdminLogin";
import EmployeeDashboard from "./pages/EmployeeDashboard";
import TeamLeaderDashboard from "./pages/TeamLeaderDashboard";
import EmployeePersonalSpace from "./pages/EmployeePersonalSpace";
import EmployeeTeamSpace from "./pages/EmployeeTeamSpace";
import EmployeeWellnessActivities from "./pages/EmployeeWellnessActivities";
import EmployeeCheckIn from "./pages/EmployeeCheckIn";
import EmployeeProfile from "./pages/EmployeeProfile";
import ConceptQVT from "./pages/ConceptQVT";
import MyColleagues from "./pages/MyColleagues";
import MyFriends from "./pages/MyFriends";
import Payment from "./pages/Payment";
import EnterpriseOrientation from "./pages/EnterpriseOrientation";
import FamilyOrientation from "./pages/FamilyOrientation";
import TeensHome from "./pages/TeensHome";
import ParentDashboard from "./pages/ParentDashboard";
import NotFound from "./pages/NotFound";
import PaymentSuccess from "./pages/PaymentSuccess";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import SimulatorHome from "./pages/SimulatorHome";
import SimulatorHub from "./pages/SimulatorHub";
import SimulatorSelector from "./pages/SimulatorSelector";
import EnterpriseSimulator from "./pages/EnterpriseSimulator";
import EnterpriseManagerSimulator from "./pages/EnterpriseManagerSimulator";
import EnterpriseEmployeeSimulator from "./pages/EnterpriseEmployeeSimulator";
import FamilySimulator from "./pages/FamilySimulator";
import FamilyParentSimulator from "./pages/FamilyParentSimulator";
import FamilyTeenSimulator from "./pages/FamilyTeenSimulator";
import FamilyEnterpriseSimulator from "./pages/FamilyEnterpriseSimulator";
import FamilyComparativeSimulator from "./pages/FamilyComparativeSimulator";
import WorkplaceComparativeSimulator from "./pages/WorkplaceComparativeSimulator";
import IntelligentRecommendations from "./pages/IntelligentRecommendations";
import ManagerTeamEvaluation from "./pages/ManagerTeamEvaluation";
import TeensQuickAlert from "./pages/TeensQuickAlert";
import EnterprisePortal from "./pages/EnterprisePortal";
import FamilyPortal from "./pages/FamilyPortal";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <TooltipProvider>
          <MobileWrapper>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <div className="min-h-screen flex flex-col">
                <Navigation />
                <main className="flex-1">
                  <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/auth/callback" element={<AuthCallback />} />
                    <Route path="/email-confirmation" element={<EmailConfirmation />} />
                    <Route path="/concept-qvt" element={<ConceptQVT />} />
                    <Route path="/entreprise" element={<EnterprisePortal />} />
                    <Route path="/famille" element={<FamilyPortal />} />
                    <Route path="/entreprise-orientation" element={<EnterpriseOrientation />} />
                    <Route path="/famille-orientation" element={<FamilyOrientation />} />
                    <Route path="/teens-home" element={<TeensHome />} />
                    <Route path="/teens-quick-alert" element={<TeensQuickAlert />} />
                    <Route path="/parent-dashboard" element={<ParentDashboard />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/payment" element={<Payment />} />
                    <Route path="/payment-success" element={<PaymentSuccess />} />
                    <Route path="/simulator-home" element={<SimulatorHome />} />
                    <Route path="/simulator-hub" element={<SimulatorHub />} />
                    <Route path="/simulator-selector" element={<SimulatorSelector />} />
                    <Route path="/enterprise-simulator" element={<EnterpriseSimulator />} />
                    <Route path="/enterprise-manager-simulator" element={<EnterpriseManagerSimulator />} />
                    <Route path="/enterprise-employee-simulator" element={<EnterpriseEmployeeSimulator />} />
                    <Route path="/family-simulator" element={<FamilySimulator />} />
                    <Route path="/family-parent-simulator" element={<FamilyParentSimulator />} />
                    <Route path="/family-teen-simulator" element={<FamilyTeenSimulator />} />
                    <Route path="/family-enterprise-simulator" element={<FamilyEnterpriseSimulator />} />
                    <Route path="/family-comparative-simulator" element={<FamilyComparativeSimulator />} />
                    <Route path="/workplace-comparative-simulator" element={<WorkplaceComparativeSimulator />} />
                    <Route path="/intelligent-recommendations" element={<IntelligentRecommendations />} />
                    <Route path="/manager-team-evaluation" element={<ManagerTeamEvaluation />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/admin-login" element={<AdminLogin />} />
                    <Route path="/register" element={<Auth />} />
                    <Route path="/account" element={<Auth />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/chat-admin" element={<ChatAdmin />} />
                    <Route path="/employee-dashboard" element={<EmployeeDashboard />} />
                    <Route path="/team-leader-dashboard" element={<TeamLeaderDashboard />} />
                    <Route path="/employee-personal-space" element={<EmployeePersonalSpace />} />
                    <Route path="/employee-team-space" element={<EmployeeTeamSpace />} />
                    <Route path="/employee-wellness-activities" element={<EmployeeWellnessActivities />} />
                    <Route path="/employee-checkin" element={<EmployeeCheckIn />} />
                    <Route path="/employee-profile" element={<EmployeeProfile />} />
                    <Route path="/my-colleagues" element={<MyColleagues />} />
                    <Route path="/my-friends" element={<MyFriends />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </main>
                <Footer />
                <RealtimeChatBot />
              </div>
            </BrowserRouter>
          </MobileWrapper>
        </TooltipProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
