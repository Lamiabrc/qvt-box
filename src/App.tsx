
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuthProvider } from './contexts/AuthContext';
import Index from './pages/Index';
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

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Router>
          <div className="min-h-screen bg-background">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/home" element={<Home />} />
              <Route path="/simulator" element={<Simulator />} />
              <Route path="/simulator-results" element={<SimulatorResults />} />
              <Route path="/independent-portal" element={<IndependentPortal />} />
              <Route path="/enterprise-portal" element={<EnterprisePortal />} />
              <Route path="/family-portal" element={<FamilyPortal />} />
              <Route path="/teens-home" element={<TeensHome />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/teens-shop" element={<TeensShop />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/box-shop/enterprise" element={<BoxShop universe="enterprise" />} />
              <Route path="/box-shop/family" element={<BoxShop universe="family" />} />
              <Route path="/my-box" element={<MyBox />} />
              <Route path="/parent-dashboard" element={<ParentDashboard />} />
              <Route path="/concept-qvt" element={<ConceptQVT />} />
              <Route path="/intelligent-recommendations" element={<IntelligentRecommendations />} />
              <Route path="*" element={<Error404 />} />
            </Routes>
          </div>
        </Router>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
