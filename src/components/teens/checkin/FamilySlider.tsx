
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Home } from "lucide-react";

interface FamilySliderProps {
  family: number;
  setFamily: (value: number) => void;
}

const FamilySlider = ({ family, setFamily }: FamilySliderProps) => {
  return (
    <Card className="border-indigo-200 bg-gradient-to-r from-indigo-50 to-purple-50">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-indigo-800">
          <Home className="w-6 h-6" />
          Relations familiales
        </CardTitle>
        <CardDescription>Comment ça se passe à la maison ?</CardDescription>
      </CardHeader>
      <CardContent>
        <Slider
          value={[family]}
          onValueChange={(value) => setFamily(value[0])}
          max={10}
          min={1}
          step={1}
          className="w-full"
        />
        <div className="flex justify-between text-sm text-gray-600 mt-2">
          <span>Tendu</span>
          <span className="font-medium">{family}/10</span>
          <span>Harmonieux</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default FamilySlider;
