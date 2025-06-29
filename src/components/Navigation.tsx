import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Heart, Building2, ShoppingBag, Phone, User } from "lucide-react";

const Navigation = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white/95 backdrop-blur-lg shadow-lg sticky top-0 z-50 border-b border-teal-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="relative">
              <img 
                src="/lovable-uploads/bed0f5ad-cedc-4afa-8b5d-24f9bf8ec5ff.png" 
                alt="QVT Box - Sortez de votre bulle, on veille sur vous" 
                className="h-12 w-12 object-contain drop-shadow-lg hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-400 rounded-full animate-pulse opacity-80"></div>
            </div>
            <div>
              <span className="text-xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                QVT BOX
              </span>
              <p className="text-xs text-teal-600 font-medium">Sortez de votre bulle</p>
            </div>
          </Link>

          {/* Navigation Menu */}
          <NavigationMenu>
            <NavigationMenuList>
              {/* Univers Famille */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-purple-700 hover:bg-purple-50 transition-colors duration-300">
                  <Heart className="w-4 h-4 mr-2" />
                  Famille
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 w-80 bg-gradient-to-br from-purple-50 to-pink-50 backdrop-blur-lg border border-purple-200">
                    <div className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link 
                          to="/famille"
                          className="flex h-full w-full select-none flex-col justify-end rounded-2xl bg-gradient-to-b from-purple-500/60 to-purple-700/60 p-6 no-underline outline-none focus:shadow-md hover:scale-105 transition-transform duration-300 backdrop-blur-sm"
                        >
                          <Heart className="h-6 w-6 text-white drop-shadow-lg" />
                          <div className="mb-2 mt-4 text-lg font-medium text-white drop-shadow-md">
                            QVTeen Box Famille
                          </div>
                          <p className="text-sm leading-tight text-white/90">
                            Choisissez votre profil famille
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </div>
                    
                    {/* Keep existing navigation links with bubble styling */}
                    <NavigationMenuLink asChild>
                      <Link to="/teens-home" className="block select-none space-y-1 rounded-xl p-3 leading-none no-underline outline-none transition-colors hover:bg-purple-100/80 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground backdrop-blur-sm">
                        <div className="text-sm font-medium leading-none">Espace Ados (11-18 ans)</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Interface dédiée aux adolescents avec zones étendues
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/parent-dashboard" className="block select-none space-y-1 rounded-xl p-3 leading-none no-underline outline-none transition-colors hover:bg-purple-100/80 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground backdrop-blur-sm">
                        <div className="text-sm font-medium leading-none">Espace Parents</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Suivi et accès aux informations des ados
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/family-parent-simulator" className="block select-none space-y-1 rounded-xl p-3 leading-none no-underline outline-none transition-colors hover:bg-purple-100/80 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground backdrop-blur-sm">
                        <div className="text-sm font-medium leading-none">Simulateur Parent</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Évaluation bien-être parental
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/family-teen-simulator" className="block select-none space-y-1 rounded-xl p-3 leading-none no-underline outline-none transition-colors hover:bg-purple-100/80 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground backdrop-blur-sm">
                        <div className="text-sm font-medium leading-none">Simulateur Ado</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Évaluation bien-être adolescent
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Univers Entreprise */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-teal-700 hover:bg-teal-50 transition-colors duration-300">
                  <Building2 className="w-4 h-4 mr-2" />
                  Entreprise
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 w-80 bg-gradient-to-br from-teal-50 to-cyan-50 backdrop-blur-lg border border-teal-200">
                    <div className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link 
                          to="/enterprise"
                          className="flex h-full w-full select-none flex-col justify-end rounded-2xl bg-gradient-to-b from-teal-500/60 to-teal-700/60 p-6 no-underline outline-none focus:shadow-md hover:scale-105 transition-transform duration-300 backdrop-blur-sm"
                        >
                          <Building2 className="h-6 w-6 text-white drop-shadow-lg" />
                          <div className="mb-2 mt-4 text-lg font-medium text-white drop-shadow-md">
                            QVT Box Entreprise
                          </div>
                          <p className="text-sm leading-tight text-white/90">
                            Choisissez votre profil entreprise
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </div>
                    
                    {/* Keep existing enterprise links with bubble styling */}
                    <NavigationMenuLink asChild>
                      <Link to="/employee-dashboard" className="block select-none space-y-1 rounded-xl p-3 leading-none no-underline outline-none transition-colors hover:bg-teal-100/80 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground backdrop-blur-sm">
                        <div className="text-sm font-medium leading-none">Espace Salarié</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Dashboard personnel du salarié
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/team-leader-dashboard" className="block select-none space-y-1 rounded-xl p-3 leading-none no-underline outline-none transition-colors hover:bg-teal-100/80 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground backdrop-blur-sm">
                        <div className="text-sm font-medium leading-none">Chef d'Équipe</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Gestion et suivi d'équipe
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/qvt-manager-dashboard" className="block select-none space-y-1 rounded-xl p-3 leading-none no-underline outline-none transition-colors hover:bg-teal-100/80 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground backdrop-blur-sm">
                        <div className="text-sm font-medium leading-none">Responsable QVT</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Pilotage qualité de vie au travail
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/executive-dashboard" className="block select-none space-y-1 rounded-xl p-3 leading-none no-underline outline-none transition-colors hover:bg-teal-100/80 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground backdrop-blur-sm">
                        <div className="text-sm font-medium leading-none">Direction</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Vue exécutive et KPI stratégiques
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/enterprise-manager-simulator" className="block select-none space-y-1 rounded-xl p-3 leading-none no-underline outline-none transition-colors hover:bg-teal-100/80 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground backdrop-blur-sm">
                        <div className="text-sm font-medium leading-none">Simulateur Manager</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Évaluation QVT managériale
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/enterprise-employee-simulator" className="block select-none space-y-1 rounded-xl p-3 leading-none no-underline outline-none transition-colors hover:bg-teal-100/80 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground backdrop-blur-sm">
                        <div className="text-sm font-medium leading-none">Simulateur Salarié</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Évaluation bien-être salarié
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Boutique */}
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link 
                    to="/shop" 
                    className={`group inline-flex h-10 w-max items-center justify-center rounded-full bg-background px-4 py-2 text-sm font-medium transition-all duration-300 hover:bg-gradient-to-r hover:from-cyan-50 hover:to-teal-50 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 hover:scale-105 ${isActive('/shop') ? 'bg-gradient-to-r from-cyan-100 to-teal-100 text-accent-foreground' : ''}`}
                  >
                    <ShoppingBag className="w-4 h-4 mr-2" />
                    Boutique
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* Contact */}
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link 
                    to="/contact" 
                    className={`group inline-flex h-10 w-max items-center justify-center rounded-full bg-background px-4 py-2 text-sm font-medium transition-all duration-300 hover:bg-gradient-to-r hover:from-cyan-50 hover:to-teal-50 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 hover:scale-105 ${isActive('/contact') ? 'bg-gradient-to-r from-cyan-100 to-teal-100 text-accent-foreground' : ''}`}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Contact
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            <Link to="/login">
              <Button variant="outline" size="sm" className="rounded-full border-2 border-teal-200 hover:bg-gradient-to-r hover:from-teal-50 hover:to-cyan-50 hover:border-teal-300 transition-all duration-300 hover:scale-105">
                <User className="w-4 h-4 mr-2" />
                Connexion
              </Button>
            </Link>
            <Link to="/admin-login">
              <Button variant="outline" size="sm" className="rounded-full border-2 border-gray-200 text-gray-600 hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 hover:scale-105">
                Admin
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
