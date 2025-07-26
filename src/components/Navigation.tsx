import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Menu,
  Zap,
  Users,
  ShoppingBag,
  HelpCircle,
  FileText,
  LayoutDashboard,
  HeartHandshake,
} from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: 'Accueil', href: '/', icon: LayoutDashboard },
    { name: 'Solutions QVT', href: '/enterprise-solutions', icon: HeartHandshake },
    { name: 'Simulateur Entreprise', href: '/simulator', icon: Zap },
    { name: 'Boutique', href: '/shop', icon: ShoppingBag },
    { name: 'Tarifs', href: '/pricing', icon: FileText },
    { name: 'FAQ', href: '/faq', icon: HelpCircle },
    { name: 'Contact', href: '/contact', icon: Users }
  ];

  const isActivePath = (path: string) => location.pathname === path;

  return (
    <nav className="bg-qvt-dark/95 backdrop-blur-sm border-b border-qvt-glacier sticky top-0 z-50 text-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src="/logo-qvt.png" alt="QVT Box" className="w-10 h-10" />
            <span className="text-xl font-bold text-qvt-glacier">QVT Box</span>
          </Link>

          {/* Navigation desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map(({ name, href, icon: Icon }) => (
              <Link
                key={name}
                to={href}
                className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActivePath(href)
                    ? 'text-qvt-turquoise bg-white/10'
                    : 'text-white hover:text-qvt-turquoise hover:bg-white/5'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{name}</span>
              </Link>
            ))}
          </div>

          {/* Actions desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login">
              <Button
                variant="outline"
                className="border-qvt-glacier text-white hover:bg-white/10 hover:text-qvt-turquoise"
              >
                Connexion
              </Button>
            </Link>
            <Link to="/pricing">
              <Button className="bg-gradient-to-r from-qvt-turquoise to-qvt-glacier text-qvt-dark hover:brightness-110">
                <Zap className="w-4 h-4 mr-2" />
                Commencer
              </Button>
            </Link>
          </div>

          {/* Menu mobile */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Menu className="w-6 h-6 text-white" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-qvt-dark text-white">
                <div className="flex items-center justify-between mb-8">
                  <Link to="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
                    <img src="/logo-qvt.png" alt="QVT Box" className="w-10 h-10" />
                    <span className="text-xl font-bold text-qvt-glacier">QVT Box</span>
                  </Link>
                </div>

                <div className="space-y-4">
                  {navigationItems.map(({ name, href, icon: Icon }) => (
                    <Link
                      key={name}
                      to={href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                        isActivePath(href)
                          ? 'text-qvt-turquoise bg-white/10'
                          : 'text-white hover:text-qvt-turquoise hover:bg-white/5'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{name}</span>
                    </Link>
                  ))}
                </div>

                <div className="mt-8 space-y-4">
                  <Link to="/login" onClick={() => setIsOpen(false)}>
                    <Button variant="outline" className="w-full border-qvt-glacier text-white hover:bg-white/10 hover:text-qvt-turquoise">
                      Connexion
                    </Button>
                  </Link>
                  <Link to="/pricing" onClick={() => setIsOpen(false)}>
                    <Button className="w-full bg-gradient-to-r from-qvt-turquoise to-qvt-glacier text-qvt-dark hover:brightness-110">
                      <Zap className="w-4 h-4 mr-2" />
                      Commencer
                    </Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
