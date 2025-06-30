
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Users } from "lucide-react";

interface SocialSliderProps {
  social: number;
  setSocial: (value: number) => void;
}

const SocialSlider = ({ social, setSocial }: SocialSliderProps) => {
  return (
    <Card className="border-green-200 bg-gradient-to-r from-green-50 to-emerald-50">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-green-800">
          <Users className="w-6 h-6" />
          Relations sociales
        </CardTitle>
        <CardDescription>Comment ça se passe avec tes ami(e)s ?</CardDescription>
      </CardHeader>
      <CardContent>
        <Slider
          value={[social]}
          onValueChange={(value) => setSocial(value[0])}
          max={10}
          min={1}
          step={1}
          className="w-full"
        />
        <div className="flex justify-between text-sm text-gray-600 mt-2">
          <span>Difficile</span>
          <span className="font-medium">{social}/10</span>
          <span>Génial</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default SocialSlider;
