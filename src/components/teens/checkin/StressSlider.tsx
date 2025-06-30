
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Brain } from "lucide-react";

interface StressSliderProps {
  stress: number;
  setStress: (value: number) => void;
}

const StressSlider = ({ stress, setStress }: StressSliderProps) => {
  return (
    <Card className="border-purple-200 bg-gradient-to-r from-purple-50 to-violet-50">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-purple-800">
          <Brain className="w-6 h-6" />
          Niveau de stress
        </CardTitle>
        <CardDescription>Te sens-tu stressé(e) ou anxieux(se) ?</CardDescription>
      </CardHeader>
      <CardContent>
        <Slider
          value={[stress]}
          onValueChange={(value) => setStress(value[0])}
          max={10}
          min={1}
          step={1}
          className="w-full"
        />
        <div className="flex justify-between text-sm text-gray-600 mt-2">
          <span>Très stressé(e)</span>
          <span className="font-medium">{stress}/10</span>
          <span>Très détendu(e)</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default StressSlider;
