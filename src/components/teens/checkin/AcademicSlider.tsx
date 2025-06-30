
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { BookOpen } from "lucide-react";

interface AcademicSliderProps {
  academic: number;
  setAcademic: (value: number) => void;
}

const AcademicSlider = ({ academic, setAcademic }: AcademicSliderProps) => {
  return (
    <Card className="border-teal-200 bg-gradient-to-r from-teal-50 to-cyan-50">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-teal-800">
          <BookOpen className="w-6 h-6" />
          Pression scolaire
        </CardTitle>
        <CardDescription>Comment tu vis l'école en ce moment ?</CardDescription>
      </CardHeader>
      <CardContent>
        <Slider
          value={[academic]}
          onValueChange={(value) => setAcademic(value[0])}
          max={10}
          min={1}
          step={1}
          className="w-full"
        />
        <div className="flex justify-between text-sm text-gray-600 mt-2">
          <span>Très stressant</span>
          <span className="font-medium">{academic}/10</span>
          <span>Facile</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default AcademicSlider;
