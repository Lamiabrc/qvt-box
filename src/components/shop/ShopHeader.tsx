
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Truck, Shield, RefreshCw, ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";

const ShopHeader = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">
          Boutique QVT Box
        </h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-6">
          Découvrez notre collection complète de produits bien-être 100% Made in France
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link to="/concept-qvt">
            <Button className="bg-teal-600 hover:bg-teal-700 px-6 py-3">
              <ArrowRight className="w-4 h-4 mr-2" />
              Découvrir nos solutions
            </Button>
          </Link>
          <Link to="/simulator-home">
            <Button variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-50 px-6 py-3">
              <Play className="w-4 h-4 mr-2" />
              Voir démo
            </Button>
          </Link>
        </div>
      </div>

      {/* Features */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="text-center border-green-200 bg-green-50">
          <CardContent className="p-6">
            <Truck className="w-8 h-8 text-green-600 mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Livraison gratuite</h3>
            <p className="text-sm text-gray-600">À partir de 50€ d'achat</p>
          </CardContent>
        </Card>
        
        <Card className="text-center border-blue-200 bg-blue-50">
          <CardContent className="p-6">
            <Shield className="w-8 h-8 text-blue-600 mx-auto mb-3" />
            <h3 className="font-semibold mb-2">100% Made in France</h3>
            <p className="text-sm text-gray-600">Produits certifiés bien-être</p>
          </CardContent>
        </Card>
        
        <Card className="text-center border-purple-200 bg-purple-50">
          <CardContent className="p-6">
            <RefreshCw className="w-8 h-8 text-purple-600 mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Abonnement flexible</h3>
            <p className="text-sm text-gray-600">Résiliable à tout moment</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ShopHeader;
