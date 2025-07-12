
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-blue-500 rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">QVT Box</span>
            </Link>
            <p className="text-slate-300 text-sm leading-relaxed">
              Améliorez votre qualité de vie au travail et en famille avec nos solutions personnalisées et nos box bien-être mensuelles.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Solutions</h3>
            <ul className="space-y-2 text-slate-300">
              <li><Link to="/enterprise-solutions" className="hover:text-white transition-colors">Entreprises</Link></li>
              <li><Link to="/family-simulator" className="hover:text-white transition-colors">Familles</Link></li>
              <li><Link to="/questionnaires" className="hover:text-white transition-colors">Questionnaires QVT</Link></li>
              <li><Link to="/shop" className="hover:text-white transition-colors">Boutique</Link></li>
              <li><Link to="/teens-shop" className="hover:text-white transition-colors">Teen Shop</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Support</h3>
            <ul className="space-y-2 text-slate-300">
              <li><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Nous contacter</Link></li>
              <li><Link to="/pricing" className="hover:text-white transition-colors">Tarifs</Link></li>
              <li><a href="mailto:contact@qvtbox.com" className="hover:text-white transition-colors">Support technique</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <div className="space-y-3 text-slate-300">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:lamia.brechet@outlook.fr" className="hover:text-white transition-colors">
                  lamia.brechet@outlook.fr
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <a href="tel:+33647851507" className="hover:text-white transition-colors">
                  06 47 85 15 07
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1" />
                <span className="text-sm">
                  QVT Box<br />
                  Normandie, France
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Séparateur */}
        <div className="border-t border-slate-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Liens légaux */}
            <div className="flex flex-wrap justify-center md:justify-start space-x-6 text-sm text-slate-400">
              <Link to="/legal-mentions" className="hover:text-white transition-colors">
                Mentions légales
              </Link>
              <Link to="/cgu" className="hover:text-white transition-colors">
                CGU
              </Link>
              <Link to="/confidentiality" className="hover:text-white transition-colors">
                Confidentialité
              </Link>
              <Link to="/admin-login" className="hover:text-teal-400 transition-colors">
                Administration
              </Link>
            </div>

            {/* Copyright */}
            <div className="text-sm text-slate-400">
              © {new Date().getFullYear()} QVT Box. Tous droits réservés.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
