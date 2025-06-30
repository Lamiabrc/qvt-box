
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from "@/components/ui/toaster";
import { AuthProvider } from './contexts/AuthContext';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Index from './pages/Index';
import SimulatorHome from './pages/SimulatorHome';
import Contact from './pages/Contact';
import CGU from './pages/CGU';
import MentionsLegales from './pages/MentionsLegales';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Payment from './pages/Payment';
import TeensHome from './pages/TeensHome';
import Famille from './pages/Famille';
import Shop from './pages/Shop';
import EnterpriseSimulator from './pages/EnterpriseSimulator';
import FamilyParentSimulator from './pages/FamilyParentSimulator';
import FamilyTeenSimulator from './pages/FamilyTeenSimulator';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/simulator-home" element={<SimulatorHome />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cgu" element={<CGU />} />
              <Route path="/mentions-legales" element={<MentionsLegales />} />
              <Route path="/confidentialite" element={<PrivacyPolicy />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/teens-home" element={<TeensHome />} />
              <Route path="/famille" element={<Famille />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/enterprise-simulator" element={<EnterpriseSimulator />} />
              <Route path="/family-parent-simulator" element={<FamilyParentSimulator />} />
              <Route path="/family-teen-simulator" element={<FamilyTeenSimulator />} />
            </Routes>
          </main>
          <Footer />
        </div>
        <Toaster />
      </Router>
    </AuthProvider>
  );
}

export default App;
