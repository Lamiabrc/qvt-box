import React from 'react';
import { Link } from 'react-router-dom';
import { User, Briefcase, Heart } from 'lucide-react';
import FloatingBubbles from '@/components/FloatingBubbles'; // bulle animée

const Simulator = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
      <FloatingBubbles />

      <div className="container mx-auto px-4 py-16 relative z-10">
        <h1 className="text-5xl font-extrabold text-center text-purple-800 mb-4">
          🌈 Ma Bulle Attentionnée
        </h1>
        <p className="text-xl text-center text-gray-700 mb-12 max-w-2xl mx-auto">
          Choisissez votre univers et recevez des recommandations personnalisées pour améliorer votre bien-être.
        </p>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Link
            to="/family-portal"
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transform hover:-translate-y-1 transition duration-300 border-2 border-purple-100 hover:border-purple-400 text-center"
          >
            <Heart className="w-10 h-10 text-pink-500 mx-auto mb-3" />
            <h3 className="text-xl font-semibold text-purple-700 mb-2">Simulateur Famille</h3>
            <p className="text-sm text-gray-600">Parents, enfants, adolescents… un espace pour toute la tribu</p>
          </Link>

          <Link
            to="/enterprise-portal"
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transform hover:-translate-y-1 transition duration-300 border-2 border-cyan-100 hover:border-cyan-400 text-center"
          >
            <Briefcase className="w-10 h-10 text-cyan-600 mx-auto mb-3" />
            <h3 className="text-xl font-semibold text-cyan-700 mb-2">Simulateur Entreprise</h3>
            <p className="text-sm text-gray-600">Pour les salariés, managers et responsables RH</p>
          </Link>

          <Link
            to="/independent-portal"
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transform hover:-translate-y-1 transition duration-300 border-2 border-emerald-100 hover:border-emerald-400 text-center"
          >
            <User className="w-10 h-10 text-emerald-600 mx-auto mb-3" />
            <h3 className="text-xl font-semibold text-emerald-700 mb-2">Simulateur Indépendant</h3>
            <p className="text-sm text-gray-600">Auto-entrepreneurs, freelances, travailleurs autonomes</p>
          </Link>
        </div>

        <div className="text-center mt-12">
          <Link to="/contact">
            <span className="inline-block mt-4 text-sm text-purple-600 hover:underline">
              Vous hésitez ? Contactez-nous pour vous guider.
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Simulator;
