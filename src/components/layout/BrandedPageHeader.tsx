
import React from 'react';
import { cn } from "@/lib/utils";

interface BrandedPageHeaderProps {
  title: string;
  subtitle?: string;
  variant?: 'default' | 'famille' | 'entreprise' | 'boutique';
  className?: string;
  children?: React.ReactNode;
}

const BrandedPageHeader = ({ 
  title, 
  subtitle, 
  variant = 'default', 
  className,
  children 
}: BrandedPageHeaderProps) => {
  const variantClasses = {
    default: "bg-gradient-to-br from-teal-500 via-cyan-500 to-blue-600",
    famille: "bg-gradient-to-br from-purple-500 via-pink-500 to-indigo-600", 
    entreprise: "bg-gradient-to-br from-teal-500 via-cyan-500 to-blue-600",
    boutique: "bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-500"
  };

  return (
    <div className={cn(
      "relative overflow-hidden text-white",
      variantClasses[variant],
      className
    )}>
      {/* Motif de fond inspiré du logo */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-black/10"></div>
        <div className="absolute top-4 right-4 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-4 left-4 w-24 h-24 bg-white/5 rounded-full blur-2xl"></div>
      </div>
      
      <div className="relative container mx-auto px-4 py-16">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              {subtitle}
            </p>
          )}
          {children}
        </div>
      </div>
    </div>
  );
};

export default BrandedPageHeader;
