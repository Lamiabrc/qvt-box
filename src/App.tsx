import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./contexts/AuthContext";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Account from "./pages/Account";
import EmployeeDashboard from "./pages/EmployeeDashboard";
import TeamLeaderDashboard from "./pages/TeamLeaderDashboard";
import EmployeePersonalSpace from "./pages/EmployeePersonalSpace";
import EmployeeTeamSpace from "./pages/EmployeeTeamSpace";
import EmployeeWellnessActivities from "./pages/EmployeeWellnessActivities";
import EmployeeCheckin from "./pages/EmployeeCheckin";
import EmployeeProfile from "./pages/EmployeeProfile";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <div className="min-h-screen flex flex-col">
              <Navigation />
              <main className="flex-1">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/account" element={<Account />} />
                  <Route path="/employee-dashboard" element={<EmployeeDashboard />} />
                  <Route path="/team-leader-dashboard" element={<TeamLeaderDashboard />} />
                  <Route path="/employee-personal-space" element={<EmployeePersonalSpace />} />
                  <Route path="/employee-team-space" element={<EmployeeTeamSpace />} />
                  <Route path="/employee-wellness-activities" element={<EmployeeWellnessActivities />} />
                  <Route path="/employee-checkin" element={<EmployeeCheckin />} />
                  
                  <Route path="/employee-profile" element={<EmployeeProfile />} />
                  
                </Routes>
              </main>
              <Footer />
            </div>
          </BrowserRouter>
        </TooltipProvider>
      </AuthContextProvider>
    </QueryClientProvider>
  );
}

export default App;
