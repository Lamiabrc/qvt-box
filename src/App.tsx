
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import FamilySimulator from "./pages/FamilySimulator";
import QuestionnaireSelector from "./pages/QuestionnaireSelector";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/family-simulator" element={<FamilySimulator />} />
          <Route path="/questionnaires" element={<QuestionnaireSelector />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
