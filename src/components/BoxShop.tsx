
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
  Briefcase,
  Gamepad2,
  BookOpen,
  Palette
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

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

  const enterpriseBoxes = [
    {
      id: 1,
      name: "Box Burn-out",
      price: "33€/mois",
      description: "Prévention et gestion du stress professionnel",
      icon: Brain,
      gradient: "from-red-500 to-orange-500",
      bgColor: "bg-red-50 border-red-200",
      items: ["Balle anti-stress ergonomique", "Infusion relaxation", "Guide micro-pauses", "Carnet de gratitude"],
      rating: 4.8,
      users: 1247
    },
    {
      id: 2,
      name: "Box Télétravail",
      price: "33€/mois",
      description: "Optimiser le travail à distance",
      icon: Home,
      gradient: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50 border-blue-200",
      items: ["Support ergonomique", "Éclairage d'ambiance", "Snacks healthy", "Planning productivité"],
      rating: 4.6,
      users: 892
    },
    {
      id: 3,
      name: "Box Cohésion Équipe",
      price: "33€/mois",
      description: "Renforcer les liens professionnels",
      icon: Users,
      gradient: "from-green-500 to-teal-500",
      bgColor: "bg-green-50 border-green-200",
      items: ["Jeux team-building", "Défis collaboratifs", "Cartes connexion", "Guide animation"],
      rating: 4.9,
      users: 654
    },
    {
      id: 4,
      name: "Box Pénibilité",
      price: "33€/mois",
      description: "Soulager les métiers exigeants",
      icon: Briefcase,
      gradient: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50 border-purple-200",
      items: ["Accessoires ergonomie", "Crèmes réparatrices", "Exercices étirement", "Nutrition adaptée"],
      rating: 4.7,
      users: 423
    },
    {
      id: 5,
      name: "Box Retraite",
      price: "33€/mois",
      description: "Accompagner la transition professionnelle",
      icon: Coffee,
      gradient: "from-amber-500 to-orange-500",
      bgColor: "bg-amber-50 border-amber-200",
      items: ["Carnet projets", "Activités créatives", "Guide bien-vieillir", "Tisanes bien-être"],
      rating: 4.5,
      users: 234
    },
    {
      id: 6,
      name: "Box Équilibre Vie Privée",
      price: "33€/mois",
      description: "Harmoniser pro et perso",
      icon: Heart,
      gradient: "from-pink-500 to-rose-500",
      bgColor: "bg-pink-50 border-pink-200",
      items: ["Planning famille-travail", "Activités détente", "Conseils organisation", "Moments mindfulness"],
      rating: 4.8,
      users: 1089
    }
  ];

  const familyBoxes = [
    {
      id: 1,
      name: "Teen Box Digital Detox",
      price: "25€/mois",
      description: "Réduire la dépendance numérique",
      icon: Brain,
      gradient: "from-purple-500 to-indigo-500",
      bgColor: "bg-purple-50 border-purple-200",
      items: ["Carnet créatif", "Jeux hors-ligne", "Défis 24h sans écran", "Stickers motivation"],
      rating: 4.7,
      users: 567
    },
    {
      id: 2,
      name: "Family Box Reconnexion",
      price: "25€/mois",
      description: "Renforcer les liens familiaux",
      icon: Heart,
      gradient: "from-pink-500 to-red-500",
      bgColor: "bg-pink-50 border-pink-200",
      items: ["Jeux coopératifs", "Cartes questions famille", "Activités DIY", "Livre gratitude partagé"],
      rating: 4.9,
      users: 743
    },
    {
      id: 3,
      name: "Teen Box Créativité",
      price: "25€/mois",
      description: "Stimuler l'expression artistique",
      icon: Palette,
      gradient: "from-teal-500 to-cyan-500",
      bgColor: "bg-teal-50 border-teal-200",
      items: ["Kit art-thérapie", "Carnet personnel", "Musique inspiration", "Défis créatifs"],
      rating: 4.6,
      users: 398
    },
    {
      id: 4,
      name: "Family Box Dialogue",
      price: "25€/mois",
      description: "Améliorer la communication",
      icon: Users,
      gradient: "from-blue-500 to-purple-500",
      bgColor: "bg-blue-50 border-blue-200",
      items: ["Cartes conversation", "Guide écoute active", "Activités empathie", "Temps parole rituels"],
      rating: 4.8,
      users: 621
    },
    {
      id: 5,
      name: "Teen Box Bien-être",
      price: "25€/mois",
      description: "Gestion des émotions adolescentes",
      icon: BookOpen,
      gradient: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50 border-green-200",
      items: ["Journal émotions", "Techniques relaxation", "Huiles essentielles", "Guide auto-compassion"],
      rating: 4.7,
      users: 445
    },
    {
      id: 6,
      name: "Family Box Gratitude",
      price: "25€/mois",
      description: "Cultiver la reconnaissance",
      icon: Star,
      gradient: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-50 border-yellow-200",
      items: ["Bocal gratitude famille", "Cartes remerciements", "Rituel reconnaissance", "Photos souvenirs"],
      rating: 4.9,
      users: 712
    }
  ];

  const boxes = universe === 'enterprise' ? enterpriseBoxes : familyBoxes;

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
          <Card key={box.id} className={`group hover:shadow-xl transition-all duration-300 ${box.bgColor} hover:scale-105`}>
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between">
                <div className={`w-12 h-12 bg-gradient-to-br ${box.gradient} rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                  <box.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1 text-sm text-amber-600 mb-1">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="font-medium">{box.rating}</span>
                  </div>
                  <p className="text-xs text-gray-600">{box.users} utilisateurs</p>
                </div>
              </div>
              
              <CardTitle className="text-lg text-gray-800">{box.name}</CardTitle>
              <CardDescription className="text-gray-600">{box.description}</CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-4">
              {/* Items Preview */}
              <div className="space-y-2">
                <p className="text-sm font-medium text-gray-700 mb-2">Contenu de la box :</p>
                <div className="space-y-1">
                  {box.items.map((item, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Delivery Info */}
              <div className="flex items-center gap-2 text-sm text-gray-600 bg-white/60 p-2 rounded-lg">
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
                  className={`bg-gradient-to-r ${box.gradient} hover:scale-105 transition-transform text-white px-6`}
                >
                  <Package className="w-4 h-4 mr-2" />
                  Commander
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Additional Products */}
      <Card className="mt-12 border-2 border-dashed border-teal-300 bg-teal-50/50">
        <CardContent className="text-center py-8">
          <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Gamepad2 className="w-8 h-8 text-teal-600" />
          </div>
          <h3 className="text-xl font-bold text-teal-800 mb-2">
            Produits à l'unité disponibles
          </h3>
          <p className="text-teal-600 mb-4 max-w-md mx-auto">
            Découvrez notre sélection d'objets bien-être, vidéos, ateliers et bons cadeaux
          </p>
          <Button variant="outline" className="border-teal-300 text-teal-700 hover:bg-teal-50">
            Explorer la boutique complète
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default BoxShop;
