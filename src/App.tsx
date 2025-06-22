
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AdminLogin from "./pages/AdminLogin";
import AdminPanel from "./pages/AdminPanel";
import Auth from "./pages/Auth";
import CoachQVT from "./pages/CoachQVT";
import ConceptQVT from "./pages/ConceptQVT";
import Contact from "./pages/Contact";
import Famille from "./pages/Famille";
import FamilySimulator from "./pages/FamilySimulator";
import Login from "./pages/Login";
import TeensHome from "./pages/TeensHome";
import SimulatorHome from "./pages/SimulatorHome";
import SimulatorHub from "./pages/SimulatorHub";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
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
          <Route path="/famille" element={<Famille />} />
          <Route path="/family-simulator" element={<FamilySimulator />} />
          <Route path="/login" element={<Login />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/teens-home" element={<TeensHome />} />
          <Route path="/simulator-home" element={<SimulatorHome />} />
          <Route path="/simulator-hub" element={<SimulatorHub />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
