
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Users, Building2, GraduationCap, Target, X } from "lucide-react";

interface TallyMarketResearchPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const TallyMarketResearchPopup = ({ isOpen, onClose }: TallyMarketResearchPopupProps) => {
  const handleFormAccess = (url: string) => {
    window.open(url, '_blank');
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="flex items-center gap-2 text-2xl">
              <Target className="w-6 h-6 text-teal-600" />
              Étude RH responsable QVT - QVT Box
            </DialogTitle>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="h-6 w-6 p-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          <p className="text-gray-600 text-center mt-2">
            Choisissez l'étude qui correspond le mieux à votre profil
          </p>
        </DialogHeader>
        
        <div className="space-y-4 p-6">
          {/* Étude RH responsable QVT */}
          <div className="border-2 border-teal-200 rounded-lg p-6 hover:shadow-lg transition-all">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-teal-800">Étude RH responsable QVT</h3>
                <p className="text-teal-600 text-sm">Pour tous les profils</p>
              </div>
            </div>
            <Button 
              onClick={() => handleFormAccess('https://tally.so/r/mRebOK')}
              className="w-full bg-teal-600 hover:bg-teal-700"
            >
              Participer à l'étude RH
            </Button>
          </div>

          {/* Étude Parents Salariés */}
          <div className="border-2 border-purple-200 rounded-lg p-6 hover:shadow-lg transition-all">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-purple-800">Parents Salariés</h3>
                <p className="text-purple-600 text-sm">Équilibre vie pro/perso</p>
              </div>
            </div>
            <Button 
              onClick={() => handleFormAccess('https://tally.so/r/mYBqaz')}
              className="w-full bg-purple-600 hover:bg-purple-700"
            >
              Participer à l'étude parents
            </Button>
          </div>

          {/* Étude Adolescents */}
          <div className="border-2 border-blue-200 rounded-lg p-6 hover:shadow-lg transition-all">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blue-800">Adolescents</h3>
                <p className="text-blue-600 text-sm">Bien-être des jeunes</p>
              </div>
            </div>
            <Button 
              onClick={() => handleFormAccess('https://tally.so/r/3EVaQ2')}
              className="w-full bg-blue-600 hover:bg-blue-700"
            >
              Participer à l'étude ados
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TallyMarketResearchPopup;
