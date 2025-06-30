
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Building2, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo et Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/bed0f5ad-cedc-4afa-8b5d-24f9bf8ec5ff.png" 
                alt="QVT Box Logo" 
                className="h-8 w-auto"
              />
              <span className="text-xl font-bold">QVT Box</span>
            </div>
            <p className="text-gray-400 text-sm">
              Solution phygitale de santé mentale à double impact : entreprise & famille. 
              Intelligence artificielle, accompagnement humain et objets physiques pour le bien-être.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Univers Famille */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center">
              <Heart className="w-5 h-5 mr-2 text-purple-400" />
              Univers Famille
            </h3>
            <ul className="space-y-2">
              <li><Link to="/famille" className="text-gray-400 hover:text-purple-400 transition-colors">QVTeen Box Famille</Link></li>
              <li><Link to="/teens-home" className="text-gray-400 hover:text-purple-400 transition-colors">Espace Ados</Link></li>
              <li><Link to="/parent-dashboard" className="text-gray-400 hover:text-purple-400 transition-colors">Espace Parents</Link></li>
              <li><Link to="/family-simulator" className="text-gray-400 hover:text-purple-400 transition-colors">Simulateur Famille</Link></li>
            </ul>
          </div>

          {/* Univers Entreprise */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center">
              <Building2 className="w-5 h-5 mr-2 text-teal-400" />
              Univers Entreprise
            </h3>
            <ul className="space-y-2">
              <li><Link to="/employee-dashboard" className="text-gray-400 hover:text-teal-400 transition-colors">Espace Salarié</Link></li>
              <li><Link to="/team-leader-dashboard" className="text-gray-400 hover:text-teal-400 transition-colors">Chef d'Équipe</Link></li>
              <li><Link to="/qvt-manager-dashboard" className="text-gray-400 hover:text-teal-400 transition-colors">Responsable QVT</Link></li>
              <li><Link to="/concept-qvt" className="text-gray-400 hover:text-teal-400 transition-colors">Concept QVT</Link></li>
              <li><Link to="/devenir-prestataire" className="text-gray-400 hover:text-teal-400 transition-colors">Devenir Prestataire</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <Mail className="w-4 h-4 mr-2" />
                contact@qvtbox.fr
              </li>
              <li className="flex items-center text-gray-400">
                <Phone className="w-4 h-4 mr-2" />
                06 76 43 55 51
              </li>
              <li className="flex items-center text-gray-400">
                <MapPin className="w-4 h-4 mr-2" />
                Rennes, France
              </li>
            </ul>
            <div className="pt-4">
              <Link to="/contact" className="text-blue-400 hover:text-blue-300 transition-colors">
                Nous contacter →
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 QVT Box. Tous droits réservés.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/mentions-legales" className="text-gray-400 hover:text-white text-sm transition-colors">
                Mentions légales
              </Link>
              <Link to="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Politique de confidentialité
              </Link>
              <Link to="/cgu" className="text-gray-400 hover:text-white text-sm transition-colors">
                CGU
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
