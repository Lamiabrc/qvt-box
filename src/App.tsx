import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import EmployeeDashboard from "./pages/EmployeeDashboard";
import ParentDashboard from "./pages/ParentDashboard";
import TeensHome from "./pages/TeensHome";
import AdminPanel from "./pages/AdminPanel";
import AdminLogin from "./pages/AdminLogin";
import AdminContentManager from "./pages/AdminContentManager";
import Contact from "./pages/Contact";
import MentionsLegales from "./pages/MentionsLegales";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CGU from "./pages/CGU";
import ConceptQVT from "./pages/ConceptQVT";
import Famille from "./pages/Famille";
import TeamLeaderDashboard from "./pages/TeamLeaderDashboard";
import QVTManagerDashboard from "./pages/QVTManagerDashboard";
import CoachDashboard from "./pages/CoachDashboard";
import FamilySimulator from "./pages/FamilySimulator";
import TeenCheckin from "./pages/TeenCheckin";
import TeenMoodTracker from "./pages/TeenMoodTracker";
import TeenActivities from "./pages/TeenActivities";
import TeenSupport from "./pages/TeenSupport";
import TeenProgress from "./pages/TeenProgress";
import ParentInsights from "./pages/ParentInsights";
import ParentCommunication from "./pages/ParentCommunication";
import ParentResources from "./pages/ParentResources";
import ParentSettings from "./pages/ParentSettings";
import EmployeeWellness from "./pages/EmployeeWellness";
import EmployeeActivities from "./pages/EmployeeActivities";
import EmployeeSupport from "./pages/EmployeeSupport";
import EmployeeProgress from "./pages/EmployeeProgress";
import TeamManagement from "./pages/TeamManagement";
import TeamAnalytics from "./pages/TeamAnalytics";
import TeamActivities from "./pages/TeamActivities";
import QVTAnalytics from "./pages/QVTAnalytics";
import QVTPrograms from "./pages/QVTPrograms";
import QVTReports from "./pages/QVTReports";
import CoachClients from "./pages/CoachClients";
import CoachSessions from "./pages/CoachSessions";
import CoachResources from "./pages/CoachResources";
import CoachAnalytics from "./pages/CoachAnalytics";
import SocialTeam from "./pages/SocialTeam";
import SocialFamily from "./pages/SocialFamily";
import SocialFriends from "./pages/SocialFriends";
import Login from "./pages/Login";
import Unauthorized from "./pages/Unauthorized";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <BrowserRouter>
            <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
              <Navigation />
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/login" element={<Login />} />
                <Route path="/unauthorized" element={<Unauthorized />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/mentions-legales" element={<MentionsLegales />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/cgu" element={<CGU />} />
                <Route path="/concept-qvt" element={<ConceptQVT />} />
                <Route path="/famille" element={<Famille />} />
                
                <Route path="/dashboard" element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                } />
                
                <Route path="/employee-dashboard" element={
                  <ProtectedRoute>
                    <EmployeeDashboard />
                  </ProtectedRoute>
                } />
                
                <Route path="/parent-dashboard" element={
                  <ProtectedRoute>
                    <ParentDashboard />
                  </ProtectedRoute>
                } />
                
                <Route path="/teens-home" element={
                  <ProtectedRoute>
                    <TeensHome />
                  </ProtectedRoute>
                } />
                
                <Route path="/admin-panel" element={
                  <ProtectedRoute requireAdmin>
                    <AdminPanel />
                  </ProtectedRoute>
                } />
                
                <Route path="/admin-login" element={
                  <ProtectedRoute requireAdmin>
                    <AdminLogin />
                  </ProtectedRoute>
                } />
                
                <Route path="/admin-content-manager" element={
                  <ProtectedRoute requireAdmin>
                    <AdminContentManager />
                  </ProtectedRoute>
                } />
                
                <Route path="/team-leader-dashboard" element={
                  <ProtectedRoute>
                    <TeamLeaderDashboard />
                  </ProtectedRoute>
                } />
                
                <Route path="/qvt-manager-dashboard" element={
                  <ProtectedRoute>
                    <QVTManagerDashboard />
                  </ProtectedRoute>
                } />
                
                <Route path="/coach-dashboard" element={
                  <ProtectedRoute>
                    <CoachDashboard />
                  </ProtectedRoute>
                } />
                
                <Route path="/family-simulator" element={
                  <ProtectedRoute>
                    <FamilySimulator />
                  </ProtectedRoute>
                } />
                
                <Route path="/teen-checkin" element={
                  <ProtectedRoute>
                    <TeenCheckin />
                  </ProtectedRoute>
                } />
                
                <Route path="/teen-mood-tracker" element={
                  <ProtectedRoute>
                    <TeenMoodTracker />
                  </ProtectedRoute>
                } />
                
                <Route path="/teen-activities" element={
                  <ProtectedRoute>
                    <TeenActivities />
                  </ProtectedRoute>
                } />
                
                <Route path="/teen-support" element={
                  <ProtectedRoute>
                    <TeenSupport />
                  </ProtectedRoute>
                } />
                
                <Route path="/teen-progress" element={
                  <ProtectedRoute>
                    <TeenProgress />
                  </ProtectedRoute>
                } />
                
                <Route path="/parent-insights" element={
                  <ProtectedRoute>
                    <ParentInsights />
                  </ProtectedRoute>
                } />
                
                <Route path="/parent-communication" element={
                  <ProtectedRoute>
                    <ParentCommunication />
                  </ProtectedRoute>
                } />
                
                <Route path="/parent-resources" element={
                  <ProtectedRoute>
                    <ParentResources />
                  </ProtectedRoute>
                } />
                
                <Route path="/parent-settings" element={
                  <ProtectedRoute>
                    <ParentSettings />
                  </ProtectedRoute>
                } />
                
                <Route path="/employee-wellness" element={
                  <ProtectedRoute>
                    <EmployeeWellness />
                  </ProtectedRoute>
                } />
                
                <Route path="/employee-activities" element={
                  <ProtectedRoute>
                    <EmployeeActivities />
                  </ProtectedRoute>
                } />
                
                <Route path="/employee-support" element={
                  <ProtectedRoute>
                    <EmployeeSupport />
                  </ProtectedRoute>
                } />
                
                <Route path="/employee-progress" element={
                  <ProtectedRoute>
                    <EmployeeProgress />
                  </ProtectedRoute>
                } />
                
                <Route path="/team-management" element={
                  <ProtectedRoute>
                    <TeamManagement />
                  </ProtectedRoute>
                } />
                
                <Route path="/team-analytics" element={
                  <ProtectedRoute>
                    <TeamAnalytics />
                  </ProtectedRoute>
                } />
                
                <Route path="/team-activities" element={
                  <ProtectedRoute>
                    <TeamActivities />
                  </ProtectedRoute>
                } />
                
                <Route path="/qvt-analytics" element={
                  <ProtectedRoute>
                    <QVTAnalytics />
                  </ProtectedRoute>
                } />
                
                <Route path="/qvt-programs" element={
                  <ProtectedRoute>
                    <QVTPrograms />
                  </ProtectedRoute>
                } />
                
                <Route path="/qvt-reports" element={
                  <ProtectedRoute>
                    <QVTReports />
                  </ProtectedRoute>
                } />
                
                <Route path="/coach-clients" element={
                  <ProtectedRoute>
                    <CoachClients />
                  </ProtectedRoute>
                } />
                
                <Route path="/coach-sessions" element={
                  <ProtectedRoute>
                    <CoachSessions />
                  </ProtectedRoute>
                } />
                
                <Route path="/coach-resources" element={
                  <ProtectedRoute>
                    <CoachResources />
                  </ProtectedRoute>
                } />
                
                <Route path="/coach-analytics" element={
                  <ProtectedRoute>
                    <CoachAnalytics />
                  </ProtectedRoute>
                } />
                
                <Route path="/social-team" element={
                  <ProtectedRoute>
                    <SocialTeam />
                  </ProtectedRoute>
                } />
                
                <Route path="/social-family" element={
                  <ProtectedRoute>
                    <SocialFamily />
                  </ProtectedRoute>
                } />
                
                <Route path="/social-friends" element={
                  <ProtectedRoute>
                    <SocialFriends />
                  </ProtectedRoute>
                } />
              </Routes>
              <Footer />
            </div>
          </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
