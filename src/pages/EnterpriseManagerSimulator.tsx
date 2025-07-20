import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Target } from 'lucide-react';
import FloatingBubbles from '@/components/FloatingBubbles';

const EnterpriseManagerSimulator = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-qvt-bubble via-qvt-off-white to-qvt-glacier/20 relative overflow-hidden">
      <FloatingBubbles />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <Badge className="mb-4 bg-qvt-turquoise text-white">
              <Target className="w-4 h-4 mr-2" />
              Évaluation Managériale
            </Badge>
            <h1 className="text-4xl font-bold text-qvt-dark mb-4">
              Développez vos compétences de manager
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnterpriseManagerSimulator;