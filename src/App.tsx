
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from '@/contexts/AuthContext';
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import FamilySimulator from "./pages/FamilySimulator";
import QuestionnaireSelector from "./pages/QuestionnaireSelector";
import Pricing from "./pages/Pricing";
import Payment from "./pages/Payment";
import PaymentSuccess from "./pages/PaymentSuccess";
import Faq from "./pages/Faq";
import LegalMentions from "./pages/LegalMentions";
import CGU from "./pages/CGU";
import Confidentiality from "./pages/Confidentiality";
import Error404 from "./pages/Error404";
import Dashboard from "./pages/Dashboard";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import TeensShop from "./pages/TeensShop";
import EnterpriseSolutions from "./pages/EnterpriseSolutions";
import NotFound from "./pages/NotFound";
import AuthCallback from "./pages/AuthCallback";
import PasswordReset from "./pages/PasswordReset";
import EmailConfirmation from "./pages/EmailConfirmation";
import IntelligentRecommendations from "./pages/IntelligentRecommendations";
import EnterprisePortal from "./pages/EnterprisePortal";
import FamilyPortal from "./pages/FamilyPortal";
import IndependentPortal from "./pages/IndependentPortal";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/auth/callback" element={<AuthCallback />} />
            <Route path="/password-reset" element={<PasswordReset />} />
            <Route path="/email-confirmation" element={<EmailConfirmation />} />
            <Route path="/family-simulator" element={<FamilySimulator />} />
            <Route path="/questionnaires" element={<QuestionnaireSelector />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/payment-success" element={<PaymentSuccess />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/legal-mentions" element={<LegalMentions />} />
            <Route path="/cgu" element={<CGU />} />
            <Route path="/confidentiality" element={<Confidentiality />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/teens-shop" element={<TeensShop />} />
            <Route path="/enterprise-solutions" element={<EnterpriseSolutions />} />
            <Route path="/intelligent-recommendations" element={<IntelligentRecommendations />} />
            <Route path="/enterprise-portal" element={<EnterprisePortal />} />
            <Route path="/family-portal" element={<FamilyPortal />} />
            <Route path="/independent-portal" element={<IndependentPortal />} />
            <Route path="/404" element={<Error404 />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
