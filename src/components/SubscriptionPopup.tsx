
import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Heart, Star, Check, ArrowRight } from "lucide-react";

interface SubscriptionPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const SubscriptionPopup = ({ isOpen, onClose }: SubscriptionPopupProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 border-2 border-teal-200 relative">
        {/* Bulles de savon flottantes dans le popup */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-4 left-8 w-8 h-8 bg-gradient-to-br from-cyan-200/50 to-teal-200/50 rounded-full animate-floating-gentle backdrop-blur-sm border border-cyan-300/30">
            <div className="absolute top-1 left-2 w-2 h-2 bg-white/60 rounded-full"></div>
          </div>
          <div className="absolute top-12 right-12 w-6 h-6 bg-gradient-to-br from-purple-200/50 to-pink-200/50 rounded-full animate-pulse backdrop-blur-sm border border-purple-300/30" style={{ animationDelay: '1s' }}>
            <div className="absolute top-1 left-1 w-1 h-1 bg-white/70 rounded-full"></div>
          </div>
          <div className="absolute bottom-8 left-16 w-10 h-10 bg-gradient-to-br from-teal-300/40 to-cyan-300/40 rounded-full animate-bounce backdrop-blur-sm border border-teal-400/40" style={{ animationDelay: '0.5s' }}>
            <div className="absolute top-2 left-2 w-2 h-2 bg-white/50 rounded-full"></div>
          </div>
          <div className="absolute bottom-16 right-8 w-5 h-5 bg-gradient-to-br from-purple-300/45 to-cyan-300/45 rounded-full animate-floating-gentle backdrop-blur-sm border border-purple-400/35" style={{ animationDelay: '2s' }}>
            <div className="absolute top-1 right-1 w-1 h-1 bg-white/65 rounded-full"></div>
          </div>
        </div>

        <DialogHeader className="text-center pb-6 relative z-10">
          <div className="flex justify-center mb-4">
            <div className="relative group">
              {/* Effet holographique autour du nouveau logo */}
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full blur-xl opacity-30 group-hover:opacity-50 animate-pulse transition-opacity duration-1000"></div>
              <div className="absolute -inset-2 bg-gradient-to-r from-teal-300 to-cyan-300 rounded-full blur-lg opacity-40 group-hover:opacity-60 animate-bounce transition-opacity duration-700" style={{ animationDuration: '3s' }}></div>
              
              <img 
                src="/lovable-uploads/bed0f5ad-cedc-4afa-8b5d-24f9bf8ec5ff.png" 
                alt="QVT Box - Sortez de votre bulle, on veille sur vous" 
                className="relative h-20 w-20 object-contain drop-shadow-2xl transform hover:scale-110 transition-transform duration-700 rounded-full"
              />
              
              {/* Bulles flottantes autour du logo */}
              <div className="absolute -top-2 -right-2 w-3 h-3 bg-gradient-to-br from-cyan-300 to-teal-300 rounded-full animate-bounce opacity-80"></div>
              <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full animate-pulse opacity-70" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </div>
          
          <DialogTitle className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
            🫧 Offre de Lancement QVT Box
          </DialogTitle>
          <DialogDescription className="text-lg text-teal-700 font-medium italic">
            "Sortez de votre bulle, on veille sur vous"
          </DialogDescription>
          <div className="flex justify-center gap-2 mt-2">
            <Badge className="bg-red-500 text-white animate-bounce soap-bubble-effect">Nouveau !</Badge>
            <Badge className="bg-green-500 text-white soap-bubble-effect">-50% Premier mois</Badge>
          </div>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-6 relative z-10">
          {/* QVT Box Entreprise avec thème bulle de savon */}
          <Card className="relative overflow-hidden border-2 border-teal-300 hover:border-teal-400 transition-all duration-300 hover:shadow-xl soap-bubble-effect">
            <div className="absolute top-0 right-0 bg-gradient-to-l from-teal-500 to-cyan-500 text-white px-3 py-1 rounded-bl-lg text-sm font-bold soap-bubble-effect">
              Populaire
            </div>
            
            {/* Bulles flottantes sur la carte entreprise */}
            <div className="absolute top-4 left-4 w-4 h-4 bg-gradient-to-br from-teal-300/60 to-cyan-300/60 rounded-full animate-pulse opacity-70 backdrop-blur-sm border border-teal-400/40">
              <div className="absolute top-0.5 left-0.5 w-1 h-1 bg-white/70 rounded-full"></div>
            </div>
            <div className="absolute bottom-6 right-6 w-3 h-3 bg-gradient-to-br from-cyan-400/50 to-teal-400/50 rounded-full animate-bounce opacity-60 backdrop-blur-sm border border-cyan-500/40" style={{ animationDelay: '1s' }}>
              <div className="absolute top-0.5 right-0.5 w-0.5 h-0.5 bg-white/80 rounded-full"></div>
            </div>
            
            <CardHeader className="text-center pb-4 relative">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg soap-bubble-effect bubble-highlight">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl text-teal-800">QVT Box Entreprise</CardTitle>
              <p className="text-teal-600">Prévention des risques psychosociaux</p>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-3xl font-bold text-teal-700">16,50€</span>
                  <span className="text-lg text-gray-500 line-through">33€</span>
                </div>
                <p className="text-sm text-teal-600">par salarié/mois (1er mois)</p>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-green-600" />
                  <span>🫧 Évaluateur bien-être IA (2 min)</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-green-600" />
                  <span>📊 Dashboard RH complet</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-green-600" />
                  <span>📦 Box mensuelles personnalisées</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-green-600" />
                  <span>⚠️ Prédiction burn-out</span>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>

              <Button className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white shadow-lg soap-bubble-effect">
                🫧 Commencer l'essai gratuit
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>

          {/* QVTeen Box Famille avec thème bulle de savon */}
          <Card className="relative overflow-hidden border-2 border-purple-300 hover:border-purple-400 transition-all duration-300 hover:shadow-xl soap-bubble-effect">
            <div className="absolute top-0 right-0 bg-gradient-to-l from-purple-500 to-pink-500 text-white px-3 py-1 rounded-bl-lg text-sm font-bold soap-bubble-effect">
              Nouveau
            </div>
            
            {/* Bulles flottantes sur la carte famille */}
            <div className="absolute top-6 left-6 w-5 h-5 bg-gradient-to-br from-purple-300/60 to-pink-300/60 rounded-full animate-pulse opacity-60 backdrop-blur-sm border border-purple-400/40">
              <div className="absolute top-1 left-1 w-1 h-1 bg-white/70 rounded-full"></div>
            </div>
            <div className="absolute bottom-4 right-4 w-3 h-3 bg-gradient-to-br from-pink-400/50 to-purple-400/50 rounded-full animate-bounce opacity-70 backdrop-blur-sm border border-pink-500/40" style={{ animationDelay: '0.8s' }}>
              <div className="absolute top-0.5 right-0.5 w-0.5 h-0.5 bg-white/80 rounded-full"></div>
            </div>
            
            <CardHeader className="text-center pb-4 relative">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg soap-bubble-effect bubble-highlight">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl text-purple-800">QVTeen Box Famille</CardTitle>
              <p className="text-purple-600">Harmonie familiale ados & parents</p>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-3xl font-bold text-purple-700">12,50€</span>
                  <span className="text-lg text-gray-500 line-through">25€</span>
                </div>
                <p className="text-sm text-purple-600">par famille/mois (1er mois)</p>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-green-600" />
                  <span>🫧 Diagnostic familial rapide</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-green-600" />
                  <span>📈 Mood-tracker intergénérationnel</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-green-600" />
                  <span>📦 Teen Box & Family Box</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-green-600" />
                  <span>🛡️ SafeZone pour ados</span>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>

              <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg soap-bubble-effect">
                🫧 Commencer l'essai gratuit
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 text-center space-y-4 relative z-10">
          <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-teal-200 soap-bubble-effect relative">
            {/* Bulles décoratives dans le bonus */}
            <div className="absolute top-2 right-4 w-3 h-3 bg-gradient-to-br from-cyan-300/50 to-teal-300/50 rounded-full animate-pulse opacity-60">
              <div className="absolute top-0.5 left-0.5 w-0.5 h-0.5 bg-white/70 rounded-full"></div>
            </div>
            <div className="absolute bottom-2 left-6 w-2 h-2 bg-gradient-to-br from-purple-300/50 to-pink-300/50 rounded-full animate-bounce opacity-50" style={{ animationDelay: '1s' }}>
              <div className="absolute top-0.5 right-0.5 w-0.5 h-0.5 bg-white/80 rounded-full"></div>
            </div>
            
            <h3 className="font-bold text-teal-800 mb-2">🎁 Bonus Offre de Lancement</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-600" />
                <span>🫧 1 mois offert à partir du 6ème mois</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-600" />
                <span>👨‍💼 Consultation coach QVT incluse</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-600" />
                <span>🛡️ Support prioritaire 7j/7</span>
              </div>
            </div>
          </div>
          
          <p className="text-xs text-gray-600 italic">
            "Sortez de votre bulle, on veille sur vous" - Offre limitée valable jusqu'au 31 janvier 2025. Sans engagement, résiliable à tout moment.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SubscriptionPopup;
