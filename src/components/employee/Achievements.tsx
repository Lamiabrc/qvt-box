
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Award, LucideIcon } from "lucide-react";

interface Achievement {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  bgColor: string;
  progress: number;
}

interface AchievementsProps {
  achievements: Achievement[];
}

const Achievements = ({ achievements }: AchievementsProps) => {
  return (
    <Card className="soap-bubble-effect">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Award className="w-5 h-5 text-yellow-600" />
          Mes Réussites
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {achievements.map((achievement) => (
            <div key={achievement.id} className={`p-4 rounded-lg ${achievement.bgColor}`}>
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-10 h-10 ${achievement.bgColor} rounded-full flex items-center justify-center border-2 border-white`}>
                  <achievement.icon className={`w-5 h-5 ${achievement.color}`} />
                </div>
                <div>
                  <h4 className="font-medium">{achievement.title}</h4>
                  <p className="text-sm text-gray-600">{achievement.description}</p>
                </div>
              </div>
              <Progress value={achievement.progress} className="h-2" />
              <p className="text-xs text-gray-500 mt-1">{achievement.progress}% complété</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Achievements;
