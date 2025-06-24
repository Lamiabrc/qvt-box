
import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { X, Building2, Heart, Star, Check, ArrowRight } from "lucide-react";

interface SubscriptionPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const SubscriptionPopup = ({ isOpen, onClose }: SubscriptionPopupProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 border-2 border-teal-200">
        <div className="absolute right-4 top-4 z-50">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={onClose}
            className="h-8 w-8 rounded-full hover:bg-white/50"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        <DialogHeader className="text-center pb-6">
          <div className="flex justify-center mb-4">
            <img 
              src="/lovable-uploads/eb868b40-9250-499c-b6ba-c0bc0a57c078.png" 
              alt="QVT Box Logo" 
              className="h-20 w-20 rounded-full object-cover shadow-lg animate-pulse"
            />
          </div>
          <DialogTitle className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
            🎉 Offre de Lancement QVT Box
          </DialogTitle>
          <DialogDescription className="text-lg text-teal-700 font-medium">
            Découvrez nos abonnements révolutionnaires pour le bien-être
          </DialogDescription>
          <div className="flex justify-center gap-2 mt-2">
            <Badge className="bg-red-500 text-white animate-bounce">Nouveau !</Badge>
            <Badge className="bg-green-500 text-white">-50% Premier mois</Badge>
          </div>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-6">
          {/* QVT Box Entreprise */}
          <Card className="relative overflow-hidden border-2 border-teal-300 hover:border-teal-400 transition-all duration-300 hover:shadow-xl">
            <div className="absolute top-0 right-0 bg-gradient-to-l from-teal-500 to-cyan-500 text-white px-3 py-1 rounded-bl-lg text-sm font-bold">
              Populaire
            </div>
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
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
                  <span>Évaluateur bien-être IA (2 min)</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-green-600" />
                  <span>Dashboard RH complet</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-green-600" />
                  <span>Box mensuelles personnalisées</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-green-600" />
                  <span>Prédiction burn-out</span>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>

              <Button className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white shadow-lg">
                Commencer l'essai gratuit
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>

          {/* QVTeen Box Famille */}
          <Card className="relative overflow-hidden border-2 border-purple-300 hover:border-purple-400 transition-all duration-300 hover:shadow-xl">
            <div className="absolute top-0 right-0 bg-gradient-to-l from-purple-500 to-pink-500 text-white px-3 py-1 rounded-bl-lg text-sm font-bold">
              Nouveau
            </div>
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
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
                  <span>Diagnostic familial rapide</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-green-600" />
                  <span>Mood-tracker intergénérationnel</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-green-600" />
                  <span>Teen Box & Family Box</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-green-600" />
                  <span>SafeZone pour ados</span>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>

              <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg">
                Commencer l'essai gratuit
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 text-center space-y-4">
          <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-teal-200">
            <h3 className="font-bold text-teal-800 mb-2">🎁 Bonus Offre de Lancement</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-600" />
                <span>1 mois offert à partir du 6ème mois</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-600" />
                <span>Consultation coach QVT incluse</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-600" />
                <span>Support prioritaire 7j/7</span>
              </div>
            </div>
          </div>
          
          <p className="text-xs text-gray-600">
            Offre limitée valable jusqu'au 31 janvier 2025. Sans engagement, résiliable à tout moment.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SubscriptionPopup;
