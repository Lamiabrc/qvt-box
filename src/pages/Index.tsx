
import React from 'react';
import { Link } from 'react-router-dom';
import BrandedPageHeader from '@/components/layout/BrandedPageHeader';
import { BrandedCard, BrandedCardContent, BrandedCardHeader, BrandedCardTitle, BrandedCardDescription } from '@/components/ui/branded-card';
import { BrandedButton } from '@/components/ui/branded-button';
import { Building2, Heart, ShoppingCart, ArrowRight, Users, Brain, Target } from 'lucide-react';

const Index = () => {
  const universes = [
    {
      title: "Univers Entreprise",
      description: "Solutions QVT pour améliorer le bien-être au travail et la performance de vos équipes",
      icon: Building2,
      variant: "entreprise" as const,
      features: ["Dashboard collaborateur", "Espaces d'équipe", "Activités bien-être", "Suivi QVT"],
      link: "/employee-dashboard",
      color: "from-teal-500 to-cyan-500"
    },
    {
      title: "Univers Famille", 
      description: "Accompagnement des familles avec des outils adaptés aux ados et aux parents",
      icon: Heart,
      variant: "famille" as const,
      features: ["QVTeen Box", "Espace ados", "Suivi parental", "Activités famille"],
      link: "/famille",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Boutique QVT",
      description: "Découvrez nos box et accessoires pour matérialiser votre démarche bien-être",
      icon: ShoppingCart,
      variant: "boutique" as const,
      features: ["Box personnalisées", "Objets bien-être", "Cadeaux d'entreprise", "Livraison gratuite"],
      link: "/shop",
      color: "from-orange-500 to-amber-500"
    }
  ];

  const stats = [
    { number: "500+", label: "Entreprises accompagnées", icon: Building2 },
    { number: "50k+", label: "Collaborateurs impactés", icon: Users },
    { number: "85%", label: "Amélioration du bien-être", icon: Heart },
    { number: "92%", label: "Taux de satisfaction", icon: Target }
  ];

  return (
    <div className="min-h-screen">
      <BrandedPageHeader
        title="QVT Box"
        subtitle="Solution phygitale de santé mentale à double impact : entreprise & famille"
      >
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <BrandedButton asChild variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-teal-600">
            <Link to="/concept-qvt">
              Découvrir le concept QVT
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </BrandedButton>
          <BrandedButton asChild variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-teal-600">
            <Link to="/contact">
              Nous contacter
            </Link>
          </BrandedButton>
        </div>
      </BrandedPageHeader>

      {/* Stats Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Univers Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Nos univers de solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez nos trois univers complémentaires pour accompagner le bien-être 
            dans tous les aspects de la vie
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {universes.map((universe, index) => (
            <BrandedCard key={index} variant={universe.variant} className="h-full group">
              <BrandedCardHeader>
                <div className={`w-20 h-20 bg-gradient-to-r ${universe.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <universe.icon className="w-10 h-10 text-white" />
                </div>
                <BrandedCardTitle className="text-2xl font-bold text-gray-900 mb-3">
                  {universe.title}
                </BrandedCardTitle>
                <BrandedCardDescription className="text-gray-600 text-base leading-relaxed">
                  {universe.description}
                </BrandedCardDescription>
              </BrandedCardHeader>
              <BrandedCardContent>
                <ul className="space-y-2 mb-6">
                  {universe.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-current rounded-full mr-3 opacity-60"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <BrandedButton asChild variant={universe.variant} className="w-full">
                  <Link to={universe.link}>
                    Explorer cet univers
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </BrandedButton>
              </BrandedCardContent>
            </BrandedCard>
          ))}
        </div>
      </div>

      {/* Innovation Section */}
      <div className="bg-gradient-to-br from-teal-50 to-cyan-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Innovation phygitale au service du bien-être
            </h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Notre approche unique combine intelligence artificielle, accompagnement humain 
              et objets physiques pour créer une expérience de bien-être complète et durable.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Brain className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Intelligence Artificielle</h3>
                <p className="text-gray-600">Analyse prédictive et recommandations personnalisées pour anticiper les besoins</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-teal-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Accompagnement Humain</h3>
                <p className="text-gray-600">Coaching et suivi personnalisé par nos experts en bien-être et QVT</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <ShoppingCart className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Objets Physiques</h3>
                <p className="text-gray-600">Box et accessoires tangibles pour matérialiser votre démarche bien-être</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Final */}
      <div className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Prêt à transformer votre approche du bien-être ?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Rejoignez les centaines d'entreprises et familles qui font confiance à QVT Box 
            pour leur démarche bien-être.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <BrandedButton asChild variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-teal-600">
              <Link to="/contact">
                Demander une démonstration
              </Link>
            </BrandedButton>
            <BrandedButton asChild variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-teal-600">
              <Link to="/shop">
                Découvrir la boutique
              </Link>
            </BrandedButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
