
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Brain } from "lucide-react";

interface EnergySliderProps {
  energy: number;
  setEnergy: (value: number) => void;
}

const EnergySlider = ({ energy, setEnergy }: EnergySliderProps) => {
  return (
    <Card className="border-orange-200 bg-gradient-to-r from-orange-50 to-yellow-50">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-orange-800">
          <Brain className="w-6 h-6" />
          Niveau d'énergie
        </CardTitle>
        <CardDescription>As-tu de l'énergie aujourd'hui ?</CardDescription>
      </CardHeader>
      <CardContent>
        <Slider
          value={[energy]}
          onValueChange={(value) => setEnergy(value[0])}
          max={10}
          min={1}
          step={1}
          className="w-full"
        />
        <div className="flex justify-between text-sm text-gray-600 mt-2">
          <span>Épuisé(e)</span>
          <span className="font-medium">{energy}/10</span>
          <span>Plein d'énergie</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default EnergySlider;
