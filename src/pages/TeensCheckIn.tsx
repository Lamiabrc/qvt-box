
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
import FloatingBubbles from "../components/FloatingBubbles";
import { useToast } from "@/hooks/use-toast";
import MoodSlider from "../components/teens/checkin/MoodSlider";
import EnergySlider from "../components/teens/checkin/EnergySlider";
import StressSlider from "../components/teens/checkin/StressSlider";
import SleepSlider from "../components/teens/checkin/SleepSlider";
import SocialSlider from "../components/teens/checkin/SocialSlider";
import AcademicSlider from "../components/teens/checkin/AcademicSlider";
import FamilySlider from "../components/teens/checkin/FamilySlider";
import NotesSection from "../components/teens/checkin/NotesSection";

const TeensCheckIn = () => {
  const { toast } = useToast();
  const [mood, setMood] = useState<number>(5);
  const [energy, setEnergy] = useState<number>(5);
  const [stress, setStress] = useState<number>(5);
  const [sleep, setSleep] = useState<number>(5);
  const [social, setSocial] = useState<number>(5);
  const [academic, setAcademic] = useState<number>(5);
  const [family, setFamily] = useState<number>(5);
  const [notes, setNotes] = useState<string>('');

  const handleSubmit = () => {
    // Ici on sauvegarderait les données
    toast({
      title: "Check-in enregistré !",
      description: "Merci de partager comment tu te sens aujourd'hui."
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 relative overflow-hidden">
      <FloatingBubbles />
      
      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="text-center mb-8">
          <Badge className="mb-4 bg-pink-100 text-pink-800">Check-in Quotidien</Badge>
          <h1 className="text-4xl font-bold text-pink-800 mb-4">
            <Heart className="w-12 h-12 inline-block mr-4" />
            Comment tu te sens aujourd'hui ?
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Prends un moment pour faire le point sur ton bien-être
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          <MoodSlider mood={mood} setMood={setMood} />
          <EnergySlider energy={energy} setEnergy={setEnergy} />
          <StressSlider stress={stress} setStress={setStress} />
          <SleepSlider sleep={sleep} setSleep={setSleep} />
          <SocialSlider social={social} setSocial={setSocial} />
          <AcademicSlider academic={academic} setAcademic={setAcademic} />
          <FamilySlider family={family} setFamily={setFamily} />
          <NotesSection notes={notes} setNotes={setNotes} />

          <div className="flex gap-4 justify-center">
            <Button 
              onClick={handleSubmit}
              className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-8 py-3 text-lg"
            >
              Enregistrer mon check-in
            </Button>
            <Link to="/teens-home">
              <Button variant="outline" className="border-pink-300 text-pink-700 hover:bg-pink-50 px-8 py-3 text-lg">
                Retour à l'accueil
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeensCheckIn;
