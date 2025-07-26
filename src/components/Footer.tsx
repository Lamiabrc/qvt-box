import React from 'react';
import { Link } from 'react-router-dom';
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo + description */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-3">
              <img
                src="/logo-qvt.png"
                alt="Logo QVT Box"
                className="w-12 h-12 object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://via.placeholder.com/48x48.png?text=QVT';
                }}
              />
              <span className="text-2xl font-semibold text-qvt-glacier">QVT Box</span>
            </Link>
            <p className="text-slate-300 text-sm">
              Améliorez votre qualité de vie au travail et en famille avec nos solutions personnalisées et nos box bien-être mensuelles.
            </p>
            <div className="flex space-x-4 mt-2">
              <a href="#" aria-label="Facebook" className="hover:text-qvt-turquoise">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-qvt-turquoise">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-qvt-turquoise">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-qvt-turquoise">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Solutions</h3>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li><Link to="/enterprise-solutions" className="hover:text-white">Entreprises</Link></li>
              <li><Link to="/family-simulator" className="hover:text-white">Familles</Link></li>
              <li><Link to="/questionnaires" className="hover:text-white">Questionnaires</Link></li>
              <li><Link to="/shop" className="hover:text-white">Boutique</Link></li>
              <li><Link to="/teens-shop" className="hover:text-white">Teen Shop</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Support</h3>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li><Link to="/faq" className="hover:text-white">FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-white">Nous contacter</Link></li>
              <li><Link to="/pricing" className="hover:text-white">Tarifs</Link></li>
              <li><a href="mailto:contact@qvtbox.com" className="hover:text-white">Support technique</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3 text-slate-300 text-sm">
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:contact@qvtbox.com" className="hover:text-white">contact@qvtbox.com</a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <a href="tel:+33676435551" className="hover:text-white">06 76 43 55 51</a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1" />
                <span>QVT Box<br />Rennes, France</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider + footer bottom */}
        <div className="border-t border-slate-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-slate-400 text-xs">
          <div className="flex flex-wrap gap-4 mb-4 md:mb-0">
            <Link to="/legal-mentions" className="hover:text-white">Mentions légales</Link>
            <Link to="/cgu" className="hover:text-white">CGU</Link>
            <Link to="/confidentiality" className="hover:text-white">Confidentialité</Link>
            <Link to="/admin-login" className="hover:text-qvt-glacier">Administration</Link>
          </div>
          <div>© {new Date().getFullYear()} QVT Box. Tous droits réservés.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
