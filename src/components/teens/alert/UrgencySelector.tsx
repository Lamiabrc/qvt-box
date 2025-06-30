
import React from 'react';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

interface UrgencySelectorProps {
  urgencyLevel: string;
  setUrgencyLevel: (level: string) => void;
}

const UrgencySelector = ({ urgencyLevel, setUrgencyLevel }: UrgencySelectorProps) => {
  return (
    <div>
      <Label className="text-base font-semibold mb-4 block">
        Niveau d'urgence *
      </Label>
      <RadioGroup value={urgencyLevel} onValueChange={setUrgencyLevel}>
        <div className="space-y-3">
          <div className="flex items-center space-x-3 p-3 rounded-lg border-2 border-red-200 hover:bg-red-50">
            <RadioGroupItem value="critique" id="critique" />
            <Label htmlFor="critique" className="cursor-pointer flex-1">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                <div>
                  <p className="font-semibold text-red-800">🚨 Critique - J'ai besoin d'aide MAINTENANT</p>
                  <p className="text-sm text-red-600">Je me sens en danger ou j'ai des pensées qui me font peur</p>
                </div>
              </div>
            </Label>
          </div>
          
          <div className="flex items-center space-x-3 p-3 rounded-lg border-2 border-orange-200 hover:bg-orange-50">
            <RadioGroupItem value="urgent" id="urgent" />
            <Label htmlFor="urgent" className="cursor-pointer flex-1">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
                <div>
                  <p className="font-semibold text-orange-800">⚠️ Urgent - Ça va vraiment pas</p>
                  <p className="text-sm text-orange-600">Je me sens très mal, j'ai besoin de parler rapidement</p>
                </div>
              </div>
            </Label>
          </div>
          
          <div className="flex items-center space-x-3 p-3 rounded-lg border-2 border-yellow-200 hover:bg-yellow-50">
            <RadioGroupItem value="modere" id="modere" />
            <Label htmlFor="modere" className="cursor-pointer flex-1">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                <div>
                  <p className="font-semibold text-yellow-800">💛 Modéré - J'ai besoin de soutien</p>
                  <p className="text-sm text-yellow-600">Je traverse une période difficile</p>
                </div>
              </div>
            </Label>
          </div>
        </div>
      </RadioGroup>
    </div>
  );
};

export default UrgencySelector;
