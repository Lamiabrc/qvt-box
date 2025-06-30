
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import AdminGuard from "@/components/auth/AdminGuard";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Index from "./pages/Index";
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
import TeensCheckIn from "./pages/TeensCheckIn";
import Login from "./pages/Login";
import Unauthorized from "./pages/Unauthorized";
import FamilyTeenSimulator from "./pages/FamilyTeenSimulator";
import KidsHome from "./pages/KidsHome";
import FriendsSpace from "./pages/FriendsSpace";
import FamilySpace from "./pages/FamilySpace";

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

                <Route path="/kids-home" element={
                  <ProtectedRoute>
                    <KidsHome />
                  </ProtectedRoute>
                } />
                
                {/* Admin routes with proper protection */}
                <Route path="/admin-login" element={<AdminLogin />} />
                
                <Route path="/admin-panel" element={
                  <AdminGuard>
                    <AdminPanel />
                  </AdminGuard>
                } />
                
                <Route path="/admin-content-manager" element={
                  <AdminGuard>
                    <AdminContentManager />
                  </AdminGuard>
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

                <Route path="/family-teen-simulator" element={
                  <ProtectedRoute>
                    <FamilyTeenSimulator />
                  </ProtectedRoute>
                } />
                
                <Route path="/teen-checkin" element={
                  <ProtectedRoute>
                    <TeensCheckIn />
                  </ProtectedRoute>
                } />

                <Route path="/friends-space" element={
                  <ProtectedRoute>
                    <FriendsSpace />
                  </ProtectedRoute>
                } />

                <Route path="/family-space" element={
                  <ProtectedRoute>
                    <FamilySpace />
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
