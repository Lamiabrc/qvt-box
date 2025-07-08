import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import Index from "./pages/Index";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";
import LegalMentions from "./pages/LegalMentions";
import Cgu from "./pages/Cgu";
import Confidentiality from "./pages/Confidentiality";
import Error404 from "./pages/Error404";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import FamilySimulator from "./pages/FamilySimulator";
import EntrepriseSolutions from "./pages/EntrepriseSolutions";
import QuestionnaireSelector from "./pages/QuestionnaireSelector";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/legal-mentions" element={<LegalMentions />} />
          <Route path="/cgu" element={<Cgu />} />
          <Route path="/confidentiality" element={<Confidentiality />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/family-simulator" element={<FamilySimulator />} />
          <Route path="/entreprise-solutions" element={<EntrepriseSolutions />} />
          <Route path="*" element={<Error404 />} />
          <Route path="/questionnaires" element={<QuestionnaireSelector />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
