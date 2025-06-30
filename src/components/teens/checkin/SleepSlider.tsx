
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Bed } from "lucide-react";

interface SleepSliderProps {
  sleep: number;
  setSleep: (value: number) => void;
}

const SleepSlider = ({ sleep, setSleep }: SleepSliderProps) => {
  return (
    <Card className="border-blue-200 bg-gradient-to-r from-blue-50 to-cyan-50">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-blue-800">
          <Bed className="w-6 h-6" />
          Qualité du sommeil
        </CardTitle>
        <CardDescription>Comment as-tu dormi la nuit dernière ?</CardDescription>
      </CardHeader>
      <CardContent>
        <Slider
          value={[sleep]}
          onValueChange={(value) => setSleep(value[0])}
          max={10}
          min={1}
          step={1}
          className="w-full"
        />
        <div className="flex justify-between text-sm text-gray-600 mt-2">
          <span>Très mal</span>
          <span className="font-medium">{sleep}/10</span>
          <span>Excellent</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default SleepSlider;
