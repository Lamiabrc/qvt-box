
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, User, LogOut, Shield } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useAuth } from "@/contexts/AuthContext";
import { useSecureAuth } from "@/hooks/useSecureAuth";
import AuthGuard from "@/components/auth/AuthGuard";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, isAdmin } = useAuth();
  const { secureSignOut } = useSecureAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await secureSignOut();
      navigate('/');
    } catch (error) {
      console.error('Sign out error:', error);
    }
  };

  const getUserInitials = () => {
    if (!user?.email) return 'Connexion';
    return user.email.charAt(0).toUpperCase();
  };

  const getDashboardRoute = () => {
    // Redirect to appropriate dashboard based on user role/context
    if (isAdmin) {
      return '/admin-panel';
    }
    // Default dashboard routes - you can customize this logic based on user roles
    return '/employee-dashboard';
  };

  return (
    <nav className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/78366c32-9e56-4378-9668-a89bc6ff3a9d.png" 
              alt="QVT Box Logo" 
              className="h-8 w-auto"
            />
            <span className="text-xl font-bold text-gray-900">QVT Box</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/concept-qvt" className="text-gray-700 hover:text-teal-600 transition-colors">
              Concept QVT
            </Link>
            <Link to="/entreprise" className="text-gray-700 hover:text-teal-600 transition-colors">
              Entreprise
            </Link>
            <Link to="/famille" className="text-gray-700 hover:text-purple-600 transition-colors">
              Famille
            </Link>
            <Link to="/shop" className="text-gray-700 hover:text-blue-600 transition-colors">
              Boutique
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">
              Contact
            </Link>

            <AuthGuard
              requireAuth={false}
              fallback={
                <Link to="/login">
                  <Button variant="default" className="bg-teal-600 hover:bg-teal-700">
                    Connexion
                  </Button>
                </Link>
              }
            >
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-teal-600 text-white">
                        {getUserInitials()}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 bg-white" align="end" forceMount>
                  <div className="flex items-center justify-start gap-2 p-2">
                    <div className="flex flex-col space-y-1 leading-none">
                      <p className="font-medium">{user?.email}</p>
                      {isAdmin && (
                        <p className="text-xs text-teal-600">Administrateur</p>
                      )}
                    </div>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to={getDashboardRoute()} className="flex items-center w-full cursor-pointer">
                      <User className="mr-2 h-4 w-4" />
                      <span>Tableau de bord</span>
                    </Link>
                  </DropdownMenuItem>
                  <AuthGuard requireAdmin>
                    <DropdownMenuItem asChild>
                      <Link to="/admin-panel" className="flex items-center w-full cursor-pointer">
                        <Shield className="mr-2 h-4 w-4" />
                        <span>Administration</span>
                      </Link>
                    </DropdownMenuItem>
                  </AuthGuard>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem 
                    className="cursor-pointer"
                    onClick={handleSignOut}
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Déconnexion</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </AuthGuard>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-teal-600 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2">
            <Link 
              to="/concept-qvt" 
              className="block px-3 py-2 text-gray-700 hover:text-teal-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Concept QVT
            </Link>
            <Link 
              to="/entreprise" 
              className="block px-3 py-2 text-gray-700 hover:text-teal-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Entreprise
            </Link>
            <Link 
              to="/famille" 
              className="block px-3 py-2 text-gray-700 hover:text-purple-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Famille
            </Link>
            <Link 
              to="/shop" 
              className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Boutique
            </Link>
            <Link 
              to="/contact" 
              className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            
            <AuthGuard
              requireAuth={false}
              fallback={
                <Link 
                  to="/login" 
                  className="block px-3 py-2"
                  onClick={() => setIsOpen(false)}
                >
                  <Button className="w-full bg-teal-600 hover:bg-teal-700">
                    Connexion
                  </Button>
                </Link>
              }
            >
              <div className="px-3 py-2 border-t">
                <p className="text-sm font-medium text-gray-900 mb-2">
                  {user?.email}
                </p>
                <div className="space-y-1">
                  <Link 
                    to={getDashboardRoute()} 
                    className="block py-2 text-gray-700 hover:text-teal-600"
                    onClick={() => setIsOpen(false)}
                  >
                    Tableau de bord
                  </Link>
                  <AuthGuard requireAdmin>
                    <Link 
                      to="/admin-panel" 
                      className="block py-2 text-gray-700 hover:text-teal-600"
                      onClick={() => setIsOpen(false)}
                    >
                      Administration
                    </Link>
                  </AuthGuard>
                  <button
                    onClick={() => {
                      handleSignOut();
                      setIsOpen(false);
                    }}
                    className="block w-full text-left py-2 text-red-600 hover:text-red-700"
                  >
                    Déconnexion
                  </button>
                </div>
              </div>
            </AuthGuard>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
