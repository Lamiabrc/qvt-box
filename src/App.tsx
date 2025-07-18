
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuthProvider } from './contexts/AuthContext';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
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
import BoxShop from './components/BoxShop';
import MyBox from "./pages/MyBox";
import ParentDashboard from "./pages/ParentDashboard";
import ConceptQVT from "./pages/ConceptQVT";
import Error404 from "./pages/Error404";
import IntelligentRecommendations from "./pages/IntelligentRecommendations";
import HREmotionalHeatmap from "./components/HREmotionalHeatmap";
import TeensInterface from "./components/TeensInterface";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";
import Faq from "./pages/Faq";
import EnterpriseSolutions from "./pages/EnterpriseSolutions";
import QuestionnaireSelector from "./pages/QuestionnaireSelector";
import Login from "./pages/Login";
import CGU from "./pages/CGU";
import Confidentiality from "./pages/Confidentiality";
import LegalMentions from "./pages/LegalMentions";
import AdminLogin from "./pages/AdminLogin";

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
                <Route path="/box-shop/enterprise" element={<BoxShop universe="enterprise" />} />
                <Route path="/box-shop/family" element={<BoxShop universe="family" />} />
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
