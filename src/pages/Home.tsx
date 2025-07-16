
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 to-secondary/10">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Bienvenue sur QVT Box</h1>
        <div className="grid md:grid-cols-3 gap-8">
          <Link to="/family-portal" className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-semibold mb-4">Famille</h2>
            <p>Renforcez les liens familiaux et le bien-être de tous</p>
          </Link>
          <Link to="/enterprise-portal" className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-semibold mb-4">Entreprise</h2>
            <p>Améliorez la QVT de vos équipes</p>
          </Link>
          <Link to="/independent-portal" className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-semibold mb-4">Indépendant</h2>
            <p>Prenez soin de votre bien-être personnel</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
