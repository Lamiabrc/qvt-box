
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";

interface Activity {
  time: string;
  activity: string;
  completed: boolean;
}

interface TodayActivitiesProps {
  activities: Activity[];
}

const TodayActivities = ({ activities }: TodayActivitiesProps) => {
  return (
    <Card className="soap-bubble-effect">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calendar className="w-5 h-5 text-blue-600" />
          Planning Bien-être du Jour
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {activities.map((activity, idx) => (
            <div key={idx} className="flex items-center justify-between p-3 bg-blue-50 rounded-lg soap-bubble-effect">
              <div>
                <div className="font-medium">{activity.time}</div>
                <div className="text-sm text-gray-600">{activity.activity}</div>
              </div>
              <Badge variant={activity.completed ? "default" : "secondary"} className={activity.completed ? "bg-green-600" : ""}>
                {activity.completed ? "Fait ✓" : "À faire"}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TodayActivities;
