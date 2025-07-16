import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { QueryClient } from 'react-query';
import { AuthProvider } from './contexts/AuthContext';
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

function App() {
  return (
    <QueryClient>
      <AuthProvider>
        <Router>
          <div className="min-h-screen bg-background">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/simulator" element={<Simulator />} />
              <Route path="/simulator-results" element={<SimulatorResults />} />
              <Route path="/independent-portal" element={<IndependentPortal />} />
              <Route path="/enterprise-portal" element={<EnterprisePortal />} />
              <Route path="/family-portal" element={<FamilyPortal />} />
              <Route path="/teens-home" element={<TeensHome />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/teens-shop" element={<TeensShop />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/box-shop/:universe" element={<BoxShop />} />
              
              <Route path="/my-box" element={<MyBox />} />
              
            </Routes>
          </div>
        </Router>
      </AuthProvider>
    </QueryClient>
  );
}

export default App;
