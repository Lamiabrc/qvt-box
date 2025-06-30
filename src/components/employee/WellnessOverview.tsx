
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Activity } from "lucide-react";

interface WellnessStats {
  overall: number;
  stress: number;
  motivation: number;
  workLife: number;
  teamSpirit: number;
}

interface WellnessOverviewProps {
  wellnessStats: WellnessStats;
}

const WellnessOverview = ({ wellnessStats }: WellnessOverviewProps) => {
  return (
    <Card className="soap-bubble-effect">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Activity className="w-5 h-5 text-green-600" />
          Bilan Bien-être Global
        </CardTitle>
        <CardDescription>Votre score bien-être cette semaine</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">{wellnessStats.overall}%</div>
            <Badge className="bg-green-100 text-green-800">Bon niveau</Badge>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-sm text-gray-600">Stress</div>
              <div className="font-semibold">{wellnessStats.stress}%</div>
              <Progress value={wellnessStats.stress} className="h-2 mt-1" />
            </div>
            <div className="text-center">
              <div className="text-sm text-gray-600">Motivation</div>
              <div className="font-semibold">{wellnessStats.motivation}%</div>
              <Progress value={wellnessStats.motivation} className="h-2 mt-1" />
            </div>
            <div className="text-center">
              <div className="text-sm text-gray-600">Équilibre</div>
              <div className="font-semibold">{wellnessStats.workLife}%</div>
              <Progress value={wellnessStats.workLife} className="h-2 mt-1" />
            </div>
            <div className="text-center">
              <div className="text-sm text-gray-600">Équipe</div>
              <div className="font-semibold">{wellnessStats.teamSpirit}%</div>
              <Progress value={wellnessStats.teamSpirit} className="h-2 mt-1" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default WellnessOverview;
