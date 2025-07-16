
import React from 'react';
import { Link } from 'react-router-dom';

const Simulator = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 to-secondary/10">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Simulateur de Bien-être</h1>
        <div className="max-w-2xl mx-auto">
          <p className="text-lg text-center mb-8">
            Évaluez votre bien-être et recevez des recommandations personnalisées
          </p>
          <div className="space-y-4">
            <Link 
              to="/family-portal" 
              className="block w-full p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center"
            >
              <h3 className="text-xl font-semibold mb-2">Simulateur Famille</h3>
              <p>Pour les parents et adolescents</p>
            </Link>
            <Link 
              to="/enterprise-portal" 
              className="block w-full p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center"
            >
              <h3 className="text-xl font-semibold mb-2">Simulateur Entreprise</h3>
              <p>Pour les salariés et managers</p>
            </Link>
            <Link 
              to="/independent-portal" 
              className="block w-full p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center"
            >
              <h3 className="text-xl font-semibold mb-2">Simulateur Indépendant</h3>
              <p>Pour les travailleurs autonomes</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Simulator;
