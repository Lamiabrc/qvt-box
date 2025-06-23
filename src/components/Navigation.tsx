
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
import { Heart, Building2, Users, GraduationCap, ShoppingBag, Phone, User } from "lucide-react";

const Navigation = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/eb868b40-9250-499c-b6ba-c0bc0a57c078.png" 
              alt="QVT Box Logo" 
              className="h-8 w-auto"
            />
            <span className="text-xl font-bold text-teal-800">QVT Box</span>
          </Link>

          {/* Navigation Menu */}
          <NavigationMenu>
            <NavigationMenuList>
              {/* Univers Famille */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-purple-700">
                  <Heart className="w-4 h-4 mr-2" />
                  Famille
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 w-80">
                    <div className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link 
                          to="/famille"
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-purple-500/50 to-purple-700/50 p-6 no-underline outline-none focus:shadow-md"
                        >
                          <Heart className="h-6 w-6 text-white" />
                          <div className="mb-2 mt-4 text-lg font-medium text-white">
                            QVTeen Box Famille
                          </div>
                          <p className="text-sm leading-tight text-white/90">
                            Choisissez votre profil famille
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </div>
                    <NavigationMenuLink asChild>
                      <Link to="/teens-home" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Espace Ados (11-18 ans)</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Interface dédiée aux adolescents
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/parent-dashboard" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Espace Parents</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Suivi et accompagnement parental
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/family-simulator" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Simulateur Famille</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Outils d'évaluation familiale
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Univers Entreprise */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-teal-700">
                  <Building2 className="w-4 h-4 mr-2" />
                  Entreprise
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 w-80">
                    <div className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link 
                          to="/enterprise"
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-teal-500/50 to-teal-700/50 p-6 no-underline outline-none focus:shadow-md"
                        >
                          <Building2 className="h-6 w-6 text-white" />
                          <div className="mb-2 mt-4 text-lg font-medium text-white">
                            QVT Box Entreprise
                          </div>
                          <p className="text-sm leading-tight text-white/90">
                            Choisissez votre profil entreprise
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </div>
                    <NavigationMenuLink asChild>
                      <Link to="/employee-dashboard" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Espace Salarié</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Dashboard personnel du salarié
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/team-leader-dashboard" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Chef d'Équipe</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Gestion et suivi d'équipe
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/qvt-manager-dashboard" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Responsable QVT</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Pilotage qualité de vie au travail
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/executive-dashboard" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Direction</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Vue exécutive et KPI stratégiques
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/concept-qvt" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Concept QVT</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Découvrir notre approche QVT
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Coach */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-blue-700">
                  <GraduationCap className="w-4 h-4 mr-2" />
                  Coach
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 w-80">
                    <NavigationMenuLink asChild>
                      <Link to="/coach-dashboard" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Dashboard Coach</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Suivi des clients et sessions
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/coach-qvt" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Coach QVT</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Outils spécialisés QVT
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
                    className={`group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 ${isActive('/shop') ? 'bg-accent text-accent-foreground' : ''}`}
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
                    className={`group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 ${isActive('/contact') ? 'bg-accent text-accent-foreground' : ''}`}
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
              <Button variant="outline" size="sm">
                <User className="w-4 h-4 mr-2" />
                Connexion
              </Button>
            </Link>
            <Link to="/admin-login">
              <Button variant="outline" size="sm" className="text-gray-600">
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
