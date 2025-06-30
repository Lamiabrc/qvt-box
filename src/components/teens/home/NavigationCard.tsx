
import React from 'react';
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface NavigationCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  link: string;
  gradient: string;
  iconColor: string;
  textColor: string;
  rotation?: string;
}

const NavigationCard = ({ 
  title, 
  description, 
  icon: Icon, 
  link, 
  gradient, 
  iconColor, 
  textColor, 
  rotation = "hover:scale-105" 
}: NavigationCardProps) => {
  return (
    <Link to={link}>
      <Card className={`group hover:shadow-2xl transition-all duration-300 border-0 ${gradient} transform ${rotation}`}>
        <CardHeader className="text-center">
          <div className={`w-16 h-16 bg-gradient-to-br ${iconColor} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
            <Icon className="w-8 h-8 text-white animate-pulse" />
          </div>
          <CardTitle className={`text-xl ${textColor} font-bold`}>{title}</CardTitle>
          <CardDescription className={textColor.replace('800', '700')}>{description}</CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
};

export default NavigationCard;
