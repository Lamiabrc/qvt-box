import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuthProvider } from './contexts/AuthContext';

import Navigation from './components/Navigation';
import Footer from './components/Footer';

import Home from "./pages/Home";
import AdminContentEditor from "./pages/AdminContentEditor";
import AdminContentManager from "./pages/AdminContentManager";
import AdminLogin from "./pages/AdminLogin";
import AdminMarketResearch from "./pages/AdminMarketResearch";
import AdminPanel from "./pages/AdminPanel";
import Auth from "./pages/Auth";
import AuthCallback from "./pages/AuthCallback";
import ChatAdmin from "./pages/ChatAdmin";
import CoachDashboard from "./pages/CoachDashboard";
import Confidentiality from "./pages/Confidentiality";
import Dashboard from "./pages/Dashboard";
import DevenirPrestataire from "./pages/DevenirPrestataire";
import EmailConfirmation from "./pages/EmailConfirmation";
import EmployeeCheckIn from "./pages/EmployeeCheckIn";
import EmployeeCustomization from "./pages/EmployeeCustomization";
import EmployeeDashboard from "./pages/EmployeeDashboard";
import EmployeePersonalSpace from "./pages/EmployeePersonalSpace";
import EmployeeProfile from "./pages/EmployeeProfile";
import EmployeeTeamSpace from "./pages/EmployeeTeamSpace";
import EmployeeWellnessActivities from "./pages/EmployeeWellnessActivities";
import EnterpriseEmployeeSimulator from "./pages/EnterpriseEmployeeSimulator";
import EnterpriseManagerSimulator from "./pages/EnterpriseManagerSimulator";
import EnterpriseOrientation from "./pages/EnterpriseOrientation";
import ExecutiveDashboard from "./pages/ExecutiveDashboard";
import Famille from "./pages/Famille";
import FamilyComparativeSimulator from "./pages/FamilyComparativeSimulator";
import FamilyEnterpriseSimulator from "./pages/FamilyEnterpriseSimulator";
import FamilyOrientation from "./pages/FamilyOrientation";
import FamilyParentSimulator from "./pages/FamilyParentSimulator";
import FamilySimulator from "./pages/FamilySimulator";
import FamilySpace from "./pages/FamilySpace";
import FamilyTeenSimulator from "./pages/FamilyTeenSimulator";
import FriendsSpace from "./pages/FriendsSpace";
import Index from "./pages/Index";
import KidsHome from "./pages/KidsHome";
import LegalMentions from "./pages/LegalMentions";
import ManagerTeamEvaluation from "./pages/ManagerTeamEvaluation";
import MarketResearchLanding from "./pages/MarketResearchLanding";
import MentionsLegales from "./pages/MentionsLegales";
import MyColleagues from "./pages/MyColleagues";
import MyFriends from "./pages/MyFriends";
import NotFound from "./pages/NotFound";
import PasswordReset from "./pages/PasswordReset";
import Payment from "./pages/Payment";
import PaymentSuccess from "./pages/PaymentSuccess";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import QVTManagerDashboard from "./pages/QVTManagerDashboard";
import SimulatorHome from "./pages/SimulatorHome";
import SimulatorHub from "./pages/SimulatorHub";
import SimulatorSelector from "./pages/SimulatorSelector";
import TeamLeaderDashboard from "./pages/TeamLeaderDashboard";
import TeamSpace from "./pages/TeamSpace";
import TeensAIEvaluation from "./pages/TeensAIEvaluation";
import TeensCalendar from "./pages/TeensCalendar";
import TeensCheckIn from "./pages/TeensCheckIn";
import TeensCustomization from "./pages/TeensCustomization";
import TeensFamilySpace from "./pages/TeensFamilySpace";
import TeensFunSolutions from "./pages/TeensFunSolutions";
import TeensJournal from "./pages/TeensJournal";
import TeensParentalAccess from "./pages/TeensParentalAccess";
import TeensPersonalSpace from "./pages/TeensPersonalSpace";
import TeensPlaylist from "./pages/TeensPlaylist";
import TeensQuickAlert from "./pages/TeensQuickAlert";
import Unauthorized from "./pages/Unauthorized";
import WorkplaceComparativeSimulator from "./pages/WorkplaceComparativeSimulator";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Router>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admincontenteditor" element={<AdminContentEditor />} />
            <Route path="/admincontentmanager" element={<AdminContentManager />} />
            <Route path="/adminlogin" element={<AdminLogin />} />
            <Route path="/adminmarketresearch" element={<AdminMarketResearch />} />
            <Route path="/adminpanel" element={<AdminPanel />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/authcallback" element={<AuthCallback />} />
            <Route path="/chatadmin" element={<ChatAdmin />} />
            <Route path="/coachdashboard" element={<CoachDashboard />} />
            <Route path="/confidentiality" element={<Confidentiality />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/devenirprestataire" element={<DevenirPrestataire />} />
            <Route path="/emailconfirmation" element={<EmailConfirmation />} />
            <Route path="/employeecheckin" element={<EmployeeCheckIn />} />
            <Route path="/employeecustomization" element={<EmployeeCustomization />} />
            <Route path="/employeedashboard" element={<EmployeeDashboard />} />
            <Route path="/employeepersonalspace" element={<EmployeePersonalSpace />} />
            <Route path="/employeeprofile" element={<EmployeeProfile />} />
            <Route path="/employeeteamspace" element={<EmployeeTeamSpace />} />
            <Route path="/employeewellnessactivities" element={<EmployeeWellnessActivities />} />
            <Route path="/enterpriseemployeesimulator" element={<EnterpriseEmployeeSimulator />} />
            <Route path="/enterprisemanagersimulator" element={<EnterpriseManagerSimulator />} />
            <Route path="/enterpriseorientation" element={<EnterpriseOrientation />} />
            <Route path="/executivedashboard" element={<ExecutiveDashboard />} />
            <Route path="/famille" element={<Famille />} />
            <Route path="/familycomparativesimulator" element={<FamilyComparativeSimulator />} />
            <Route path="/familyenterprisesimulator" element={<FamilyEnterpriseSimulator />} />
            <Route path="/familyorientation" element={<FamilyOrientation />} />
            <Route path="/familyparentsimulator" element={<FamilyParentSimulator />} />
            <Route path="/familysimulator" element={<FamilySimulator />} />
            <Route path="/familyspace" element={<FamilySpace />} />
            <Route path="/familyteensimulator" element={<FamilyTeenSimulator />} />
            <Route path="/friendsspace" element={<FriendsSpace />} />
            <Route path="/index" element={<Index />} />
            <Route path="/kidshome" element={<KidsHome />} />
            <Route path="/legalmentions" element={<LegalMentions />} />
            <Route path="/managerteamevaluation" element={<ManagerTeamEvaluation />} />
            <Route path="/marketresearchlanding" element={<MarketResearchLanding />} />
            <Route path="/mentionslegales" element={<MentionsLegales />} />
            <Route path="/mycolleagues" element={<MyColleagues />} />
            <Route path="/myfriends" element={<MyFriends />} />
            <Route path="/notfound" element={<NotFound />} />
            <Route path="/passwordreset" element={<PasswordReset />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/paymentsuccess" element={<PaymentSuccess />} />
            <Route path="/privacypolicy" element={<PrivacyPolicy />} />
            <Route path="/qvtmanagerdashboard" element={<QVTManagerDashboard />} />
            <Route path="/simulatorhome" element={<SimulatorHome />} />
            <Route path="/simulatorhub" element={<SimulatorHub />} />
            <Route path="/simulatorselector" element={<SimulatorSelector />} />
            <Route path="/teamleaderdashboard" element={<TeamLeaderDashboard />} />
            <Route path="/teamspace" element={<TeamSpace />} />
            <Route path="/teensaievaluation" element={<TeensAIEvaluation />} />
            <Route path="/teenscalendar" element={<TeensCalendar />} />
            <Route path="/teenscheckin" element={<TeensCheckIn />} />
            <Route path="/teenscustomization" element={<TeensCustomization />} />
            <Route path="/teensfamilyspace" element={<TeensFamilySpace />} />
            <Route path="/teensfunsolutions" element={<TeensFunSolutions />} />
            <Route path="/teensjournal" element={<TeensJournal />} />
            <Route path="/teensparentalaccess" element={<TeensParentalAccess />} />
            <Route path="/teenspersonalspace" element={<TeensPersonalSpace />} />
            <Route path="/teensplaylist" element={<TeensPlaylist />} />
            <Route path="/teensquickalert" element={<TeensQuickAlert />} />
            <Route path="/unauthorized" element={<Unauthorized />} />
            <Route path="/workplacecomparativesimulator" element={<WorkplaceComparativeSimulator />} />
            <Route path="*" element={<Home />} />
          </Routes>
          <Footer />
        </Router>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
