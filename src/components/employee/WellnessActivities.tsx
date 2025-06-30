
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Coffee } from "lucide-react";

const WellnessActivities = () => {
  return (
    <Card className="soap-bubble-effect">
      <CardHeader>
        <CardTitle>Activités Bien-être Personnalisées</CardTitle>
        <CardDescription>Basées sur votre profil et vos besoins</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                <Brain className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <h4 className="font-medium">Méditation guidée 10 min</h4>
                <p className="text-sm text-gray-600">Réduction du stress et concentration</p>
              </div>
            </div>
          </div>
          <div className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <Coffee className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h4 className="font-medium">Pause active 5 min</h4>
                <p className="text-sm text-gray-600">Exercices de bureau et étirements</p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default WellnessActivities;
