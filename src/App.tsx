import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuthProvider } from './contexts/AuthContext';

import Navigation from './components/Navigation';
import Footer from './components/Footer';

// Import pages
import Home from './pages/Home';
import Simulator from './pages/Simulator';
import SimulatorResults from './pages/SimulatorResults';
import IndependentPortal from './pages/IndependentPortal';
import EnterprisePortal from './pages/EnterprisePortal';
import FamilyPortal from './pages/FamilyPortal';
import TeensHome from './pages/TeensHome';
import Shop from './pages/Shop';
import TeensShop from './pages/TeensShop';
import Cart from './pages/Cart';
import MyBox from './pages/MyBox';
import ParentDashboard from './pages/ParentDashboard';
import ConceptQVT from './pages/ConceptQVT';
import Error404 from './pages/Error404';
import IntelligentRecommendations from './pages/IntelligentRecommendations';
import HREmotionalHeatmap from './components/HREmotionalHeatmap';
import TeensInterface from './components/TeensInterface';
import Contact from './pages/Contact';
import Pricing from './pages/Pricing';
import Faq from './pages/Faq';
import EnterpriseSolutions from './pages/EnterpriseSolutions';
import QuestionnaireSelector from './pages/QuestionnaireSelector';
import Login from './pages/Login';
import CGU from './pages/CGU';
import Confidentiality from './pages/Confidentiality';
import LegalMentions from './pages/LegalMentions';
import AdminLogin from './pages/AdminLogin';
import EmployeeDashboard from './pages/EmployeeDashboard';
import EnterpriseSimulator from './pages/EnterpriseSimulator';
import EnterpriseManagerSimulator from './pages/EnterpriseManagerSimulator';
import EnterpriseEmployeeSimulator from './pages/EnterpriseEmployeeSimulator';
import SimulatorHub from './pages/SimulatorHub';

import Dashboard from './pages/Dashboard';
import DevenirPrestataire from './pages/DevenirPrestataire';
import EmailConfirmation from './pages/EmailConfirmation';
import EmployeeCheckIn from './pages/EmployeeCheckIn';
import EmployeeCustomization from './pages/EmployeeCustomization';
import EmployeePersonalSpace from './pages/EmployeePersonalSpace';
import EmployeeProfile from './pages/EmployeeProfile';
import EmployeeTeamSpace from './pages/EmployeeTeamSpace';
import EmployeeWellnessActivities from './pages/EmployeeWellnessActivities';
import EnterpriseOrientation from './pages/EnterpriseOrientation';
import ExecutiveDashboard from './pages/ExecutiveDashboard';
import Famille from './pages/Famille';
import FamilyComparativeSimulator from './pages/FamilyComparativeSimulator';
import FamilyEnterpriseSimulator from './pages/FamilyEnterpriseSimulator';
import FamilyOrientation from './pages/FamilyOrientation';
import FamilyParentSimulator from './pages/FamilyParentSimulator';
import FamilySimulator from './pages/FamilySimulator';
import FamilyTeenSimulator from './pages/FamilyTeenSimulator';
import FamilySpace from './pages/FamilySpace';
import FriendsSpace from './pages/FriendsSpace';
import KidsHome from './pages/KidsHome';
import ManagerTeamEvaluation from './pages/ManagerTeamEvaluation';
import MarketResearchLanding from './pages/MarketResearchLanding';
import MentionsLegales from './pages/MentionsLegales';
import MyColleagues from './pages/MyColleagues';
import MyFriends from './pages/MyFriends';
import NotFound from './pages/NotFound';
import PasswordReset from './pages/PasswordReset';
import Payment from './pages/Payment';
import PaymentSuccess from './pages/PaymentSuccess';
import PrivacyPolicy from './pages/PrivacyPolicy';
import QVTManagerDashboard from './pages/QVTManagerDashboard';
import SimulatorHome from './pages/SimulatorHome';
import SimulatorSelector from './pages/SimulatorSelector';
import TeamLeaderDashboard from './pages/TeamLeaderDashboard';
import TeamSpace from './pages/TeamSpace';
import TeensAIEvaluation from './pages/TeensAIEvaluation';
import TeensCalendar from './pages/TeensCalendar';
import TeensCheckIn from './pages/TeensCheckIn';
import TeensCustomization from './pages/TeensCustomization';
import TeensFamilySpace from './pages/TeensFamilySpace';
import TeensFunSolutions from './pages/TeensFunSolutions';
import TeensJournal from './pages/TeensJournal';
import TeensParentalAccess from './pages/TeensParentalAccess';
import TeensPersonalSpace from './pages/TeensPersonalSpace';
import TeensPlaylist from './pages/TeensPlaylist';
import TeensQuickAlert from './pages/TeensQuickAlert';
import Unauthorized from './pages/Unauthorized';
import WorkplaceComparativeSimulator from './pages/WorkplaceComparativeSimulator';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Router>
          <div className="min-h-screen bg-background flex flex-col">
            <Navigation />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/simulator" element={<Simulator />} />
                <Route path="/simulator-results" element={<SimulatorResults />} />
                <Route path="/independent-portal" element={<IndependentPortal />} />
                <Route path="/enterprise-portal" element={<EnterprisePortal />} />
                <Route path="/family-portal" element={<FamilyPortal />} />
                <Route path="/teens-home" element={<TeensHome />} />
                <Route path="/teens-interface" element={<TeensInterface />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/teens-shop" element={<TeensShop />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/my-box" element={<MyBox />} />
                <Route path="/parent-dashboard" element={<ParentDashboard />} />
                <Route path="/hr-heatmap" element={<HREmotionalHeatmap />} />
                <Route path="/concept-qvt" element={<ConceptQVT />} />
                <Route path="/intelligent-recommendations" element={<IntelligentRecommendations />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="/enterprise-solutions" element={<EnterpriseSolutions />} />
                <Route path="/questionnaires" element={<QuestionnaireSelector />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cgu" element={<CGU />} />
                <Route path="/confidentiality" element={<Confidentiality />} />
                <Route path="/legal-mentions" element={<LegalMentions />} />
                <Route path="/admin-login" element={<AdminLogin />} />
                <Route path="/employee-dashboard" element={<EmployeeDashboard />} />
                <Route path="/enterprise-simulator" element={<EnterpriseSimulator />} />
                <Route path="/enterprise-manager-simulator" element={<EnterpriseManagerSimulator />} />
                <Route path="/enterprise-employee-simulator" element={<EnterpriseEmployeeSimulator />} />
                <Route path="/simulator-hub" element={<SimulatorHub />} />

                {/* Pages supplémentaires manquantes */}
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/devenir-prestataire" element={<DevenirPrestataire />} />
                <Route path="/email-confirmation" element={<EmailConfirmation />} />
                <Route path="/employee-checkin" element={<EmployeeCheckIn />} />
                <Route path="/employee-customization" element={<EmployeeCustomization />} />
                <Route path="/employee-personal-space" element={<EmployeePersonalSpace />} />
                <Route path="/employee-profile" element={<EmployeeProfile />} />
                <Route path="/employee-team-space" element={<EmployeeTeamSpace />} />
                <Route path="/employee-wellness-activities" element={<EmployeeWellnessActivities />} />
                <Route path="/enterprise-orientation" element={<EnterpriseOrientation />} />
                <Route path="/executive-dashboard" element={<ExecutiveDashboard />} />
                <Route path="/famille" element={<Famille />} />
                <Route path="/family-comparative-simulator" element={<FamilyComparativeSimulator />} />
                <Route path="/family-enterprise-simulator" element={<FamilyEnterpriseSimulator />} />
                <Route path="/family-orientation" element={<FamilyOrientation />} />
                <Route path="/family-parent-simulator" element={<FamilyParentSimulator />} />
                <Route path="/family-simulator" element={<FamilySimulator />} />
                <Route path="/family-teen-simulator" element={<FamilyTeenSimulator />} />
                <Route path="/family-space" element={<FamilySpace />} />
                <Route path="/friends-space" element={<FriendsSpace />} />
                <Route path="/kids-home" element={<KidsHome />} />
                <Route path="/manager-team-evaluation" element={<ManagerTeamEvaluation />} />
                <Route path="/market-research-landing" element={<MarketResearchLanding />} />
                <Route path="/mentions-legales" element={<MentionsLegales />} />
                <Route path="/my-colleagues" element={<MyColleagues />} />
                <Route path="/my-friends" element={<MyFriends />} />
                <Route path="/password-reset" element={<PasswordReset />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/payment-success" element={<PaymentSuccess />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/qvt-manager-dashboard" element={<QVTManagerDashboard />} />
                <Route path="/simulator-home" element={<SimulatorHome />} />
                <Route path="/simulator-selector" element={<SimulatorSelector />} />
                <Route path="/team-leader-dashboard" element={<TeamLeaderDashboard />} />
                <Route path="/team-space" element={<TeamSpace />} />
                <Route path="/teens-ai-evaluation" element={<TeensAIEvaluation />} />
                <Route path="/teens-calendar" element={<TeensCalendar />} />
                <Route path="/teens-checkin" element={<TeensCheckIn />} />
                <Route path="/teens-customization" element={<TeensCustomization />} />
                <Route path="/teens-family-space" element={<TeensFamilySpace />} />
                <Route path="/teens-fun-solutions" element={<TeensFunSolutions />} />
                <Route path="/teens-journal" element={<TeensJournal />} />
                <Route path="/teens-parental-access" element={<TeensParentalAccess />} />
                <Route path="/teens-personal-space" element={<TeensPersonalSpace />} />
                <Route path="/teens-playlist" element={<TeensPlaylist />} />
                <Route path="/teens-quick-alert" element={<TeensQuickAlert />} />
                <Route path="/unauthorized" element={<Unauthorized />} />
                <Route path="/workplace-comparative-simulator" element={<WorkplaceComparativeSimulator />} />

                {/* Catch-all route */}
                <Route path="*" element={<Error404 />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
