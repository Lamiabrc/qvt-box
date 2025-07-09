
import React from 'react';
import { Button } from "@/components/ui/button";
import { Home, Search, ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import FloatingBubbles from '@/components/FloatingBubbles';

const Error404 = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden flex items-center justify-center">
      <FloatingBubbles />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-slate-300 mb-4">404</h1>
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Oups ! Page non trouvée
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              La page que vous recherchez semble avoir pris des vacances bien-être. 
              Elle reviendra peut-être après un bon questionnaire QVT !
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
            <Search className="w-16 h-16 text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-slate-800 mb-4">
              Que souhaitez-vous faire ?
            </h3>
            <div className="grid gap-4">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/">
                  <Button className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto">
                    <Home className="w-4 h-4 mr-2" />
                    Retour à l'accueil
                  </Button>
                </Link>
                <Button 
                  variant="outline" 
                  onClick={() => navigate(-1)}
                  className="w-full sm:w-auto"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Page précédente
                </Button>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 text-left">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h4 className="font-semibold text-slate-800 mb-3">Pages populaires</h4>
              <ul className="space-y-2 text-slate-600">
                <li><Link to="/questionnaires" className="hover:text-blue-600">Questionnaires QVT</Link></li>
                <li><Link to="/pricing" className="hover:text-blue-600">Nos tarifs</Link></li>
                <li><Link to="/family-simulator" className="hover:text-blue-600">Simulateur famille</Link></li>
                <li><Link to="/contact" className="hover:text-blue-600">Nous contacter</Link></li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h4 className="font-semibold text-slate-800 mb-3">Besoin d'aide ?</h4>
              <ul className="space-y-2 text-slate-600">
                <li><Link to="/faq" className="hover:text-blue-600">Questions fréquentes</Link></li>
                <li><Link to="/contact" className="hover:text-blue-600">Support client</Link></li>
                <li><a href="mailto:support@qvtbox.com" className="hover:text-blue-600">support@qvtbox.com</a></li>
                <li><a href="tel:+33123456789" className="hover:text-blue-600">01 23 45 67 89</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-8 text-center text-slate-500">
            <p className="text-sm">
              Si le problème persiste, n'hésitez pas à nous contacter. 
              Nous sommes là pour vous aider ! 💙
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error404;
