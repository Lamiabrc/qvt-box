
import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const SimulatorResults = () => {
  const location = useLocation();
  const { score, recommendations } = location.state || { score: 0, recommendations: [] };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 to-secondary/10">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Vos Résultats</h1>
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <div className="text-6xl font-bold text-primary mb-4">{score}/15</div>
            <p className="text-lg text-gray-600">Score de bien-être QVT</p>
          </div>
          
          {recommendations && recommendations.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Recommandations personnalisées</h2>
              <ul className="space-y-2">
                {recommendations.map((rec: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>{rec}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          <div className="text-center space-y-4">
            <Link 
              to="/my-box" 
              state={{ score, userType: 'individual' }}
              className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Voir mes box recommandées
            </Link>
            <div>
              <Link to="/" className="text-primary hover:underline">
                Retour à l'accueil
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimulatorResults;
