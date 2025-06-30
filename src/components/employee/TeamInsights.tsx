
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users } from "lucide-react";

interface TeamInsight {
  type: string;
  title: string;
  message: string;
  time: string;
  priority: 'high' | 'normal' | 'low';
}

interface TeamInsightsProps {
  insights: TeamInsight[];
}

const TeamInsights = ({ insights }: TeamInsightsProps) => {
  return (
    <Card className="soap-bubble-effect">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Users className="w-5 h-5 text-blue-600" />
          Actualités Équipe
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {insights.map((insight, idx) => (
            <div key={idx} className="flex items-start gap-3 p-3 border rounded-lg">
              <div className={`w-2 h-2 rounded-full mt-2 ${
                insight.priority === 'high' ? 'bg-red-500' :
                insight.priority === 'normal' ? 'bg-yellow-500' : 'bg-green-500'
              }`}></div>
              <div className="flex-1">
                <h4 className="font-medium">{insight.title}</h4>
                <p className="text-sm text-gray-600">{insight.message}</p>
                <p className="text-xs text-gray-400 mt-1">Il y a {insight.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TeamInsights;
