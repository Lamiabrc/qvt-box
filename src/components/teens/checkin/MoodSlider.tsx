
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Heart } from "lucide-react";

interface MoodSliderProps {
  mood: number;
  setMood: (value: number) => void;
}

const MoodSlider = ({ mood, setMood }: MoodSliderProps) => {
  const getMoodEmoji = (value: number) => {
    if (value <= 2) return "😢";
    if (value <= 4) return "😐";
    if (value <= 6) return "🙂";
    if (value <= 8) return "😊";
    return "😄";
  };

  return (
    <Card className="border-pink-200 bg-gradient-to-r from-pink-50 to-rose-50">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-pink-800">
          <Heart className="w-6 h-6" />
          Humeur générale {getMoodEmoji(mood)}
        </CardTitle>
        <CardDescription>Comment te sens-tu globalement aujourd'hui ?</CardDescription>
      </CardHeader>
      <CardContent>
        <Slider
          value={[mood]}
          onValueChange={(value) => setMood(value[0])}
          max={10}
          min={1}
          step={1}
          className="w-full"
        />
        <div className="flex justify-between text-sm text-gray-600 mt-2">
          <span>Très mal</span>
          <span className="font-medium">{mood}/10</span>
          <span>Excellent</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default MoodSlider;
