
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Package, 
  Star, 
  Users, 
  Clock, 
  Heart, 
  Brain, 
  Coffee,
  Home,
  Briefcase
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { getBoxesByCategory } from "../data/allBoxes";

interface BoxShopProps {
  universe: 'enterprise' | 'family';
}

const BoxShop = ({ universe }: BoxShopProps) => {
  const { toast } = useToast();

  const handleAddToCart = (boxName: string) => {
    toast({
      title: "Ajouté au panier !",
      description: `${boxName} sera livré le mois prochain`
    });
  };

  // Récupérer les box selon l'univers
  const getBoxesForUniverse = () => {
    if (universe === 'enterprise') {
      return [
        ...getBoxesByCategory('Salariés'),
        ...getBoxesByCategory('Équipe')
      ];
    } else {
      return [
        ...getBoxesByCategory('Parents'),
        ...getBoxesByCategory('Famille'),
        ...getBoxesByCategory('Événement')
      ];
    }
  };

  const getBoxImage = (boxName: string, universe: string) => {
    const enterpriseImages = {
      'default': 'https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      'stress': 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      'team': 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      'burnout': 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      'remote': 'https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    };

    const familyImages = {
      'default': 'https://images.unsplash.com/photo-1475503572774-15a45e5d60b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      'teen': 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      'parent': 'https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      'family': 'https://images.unsplash.com/photo-1609220136736-443140cffec6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    };

    if (universe === 'enterprise') {
      if (boxName.toLowerCase().includes('stress')) return enterpriseImages.stress;
      if (boxName.toLowerCase().includes('équipe') || boxName.toLowerCase().includes('cohésion')) return enterpriseImages.team;
      if (boxName.toLowerCase().includes('burn-out') || boxName.toLowerCase().includes('burnout')) return enterpriseImages.burnout;
      if (boxName.toLowerCase().includes('télétravail') || boxName.toLowerCase().includes('remote')) return enterpriseImages.remote;
      return enterpriseImages.default;
    } else {
      if (boxName.toLowerCase().includes('teen') || boxName.toLowerCase().includes('ado')) return familyImages.teen;
      if (boxName.toLowerCase().includes('parent')) return familyImages.parent;
      if (boxName.toLowerCase().includes('famille')) return familyImages.family;
      return familyImages.default;
    }
  };

  const boxes = getBoxesForUniverse().map((box, index) => ({
    id: index + 1,
    name: box.name,
    price: box.price,
    description: box.description,
    icon: getIconForBox(box.name),
    gradient: box.gradient || "from-teal-500 to-cyan-500",
    bgColor: getBgColorForScale(box.evaluationScale),
    items: box.features,
    image: getBoxImage(box.name, universe),
    rating: 4.5 + Math.random() * 0.4, // Random rating between 4.5-4.9
    users: Math.floor(200 + Math.random() * 800) // Random users between 200-1000
  }));

  function getIconForBox(name: string) {
    if (name.includes('Télétravail') || name.includes('télétravailleur')) return Home;
    if (name.includes('Équipe') || name.includes('cohésion')) return Users;
    if (name.includes('Stress') || name.includes('burn-out')) return Brain;
    if (name.includes('Détente') || name.includes('Pause')) return Coffee;
    if (name.includes('Charge mentale') || name.includes('mental')) return Brain;
    return Briefcase;
  }

  function getBgColorForScale(scale: string) {
    switch (scale) {
      case 'Stress élevé': return "bg-red-50 border-red-200";
      case 'Anxiété / inquiétude': return "bg-orange-50 border-orange-200";
      case 'Fatigue émotionnelle': return "bg-purple-50 border-purple-200";
      case 'Charge mentale': return "bg-blue-50 border-blue-200";
      case 'Isolement': return "bg-gray-50 border-gray-200";
      case 'Manque de motivation': return "bg-yellow-50 border-yellow-200";
      case 'Manque de concentration': return "bg-green-50 border-green-200";
      case 'Besoin de reconnexion': return "bg-pink-50 border-pink-200";
      case 'Tensions relationnelles': return "bg-indigo-50 border-indigo-200";
      default: return "bg-teal-50 border-teal-200";
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-teal-800 mb-4">
          {universe === 'enterprise' ? 'Boutique QVT Box Entreprise' : 'Boutique QVTeen Box Famille'}
        </h2>
        <p className="text-teal-600 max-w-2xl mx-auto">
          {universe === 'enterprise' 
            ? 'Des box mensuelles personnalisées pour le bien-être de vos équipes'
            : 'Des box mensuelles conçues pour renforcer les liens familiaux'}
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-6">
        <Badge variant="default" className="bg-teal-600">Toutes les Box</Badge>
        <Badge variant="outline">Les plus populaires</Badge>
        <Badge variant="outline">Nouveautés</Badge>
        <Badge variant="outline">Recommandées pour vous</Badge>
      </div>

      {/* Box Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {boxes.map((box) => (
          <Card key={box.id} className={`group hover:shadow-xl transition-all duration-300 ${box.bgColor} hover:scale-105 relative overflow-hidden`}>
            {/* Box Image Background */}
            <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
              <img 
                src={box.image}
                alt={box.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            <CardHeader className="pb-4 relative z-10">
              <div className="flex items-start justify-between">
                <div className={`w-12 h-12 bg-gradient-to-br ${box.gradient} rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-lg`}>
                  <box.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1 text-sm text-amber-600 mb-1">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="font-medium">{box.rating.toFixed(1)}</span>
                  </div>
                  <p className="text-xs text-gray-600">{box.users} utilisateurs</p>
                </div>
              </div>
              
              <CardTitle className="text-lg text-gray-800">{box.name}</CardTitle>
              <CardDescription className="text-gray-600">{box.description}</CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-4 relative z-10">
              {/* Items Preview */}
              <div className="space-y-2">
                <p className="text-sm font-medium text-gray-700 mb-2">Contenu de la box :</p>
                <div className="space-y-1">
                  {box.items.slice(0, 4).map((item, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Delivery Info */}
              <div className="flex items-center gap-2 text-sm text-gray-600 bg-white/60 p-2 rounded-lg backdrop-blur-sm">
                <Clock className="w-4 h-4 text-teal-600" />
                <span>Livraison mensuelle incluse</span>
              </div>

              {/* Price and Action */}
              <div className="flex items-center justify-between pt-2 border-t border-gray-200">
                <div>
                  <p className="text-2xl font-bold text-teal-700">{box.price}</p>
                  <p className="text-xs text-gray-600">par {universe === 'enterprise' ? 'salarié' : 'famille'}</p>
                </div>
                <Button 
                  onClick={() => handleAddToCart(box.name)}
                  className={`bg-gradient-to-r ${box.gradient} hover:scale-105 transition-transform text-white px-6 shadow-lg hover:shadow-xl`}
                >
                  <Package className="w-4 h-4 mr-2" />
                  Commander
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BoxShop;
