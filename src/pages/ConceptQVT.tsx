
import React from 'react';
import BrandedPageHeader from '@/components/layout/BrandedPageHeader';
import { BrandedCard, BrandedCardContent, BrandedCardHeader, BrandedCardTitle, BrandedCardDescription } from '@/components/ui/branded-card';
import { BrandedButton } from '@/components/ui/branded-button';
import { Building2, Users, Heart, Brain, Target, Award, ArrowRight } from 'lucide-react';

const ConceptQVT = () => {
  const pillars = [
    {
      icon: Heart,
      title: "Bien-être au travail",
      description: "Favoriser l'épanouissement personnel et professionnel de chaque collaborateur",
      color: "text-red-500"
    },
    {
      icon: Users,
      title: "Cohésion d'équipe", 
      description: "Renforcer les liens sociaux et la collaboration entre les équipes",
      color: "text-blue-500"
    },
    {
      icon: Brain,
      title: "Santé mentale",
      description: "Accompagner la prévention et la gestion du stress et des RPS",
      color: "text-purple-500"
    },
    {
      icon: Target,
      title: "Performance durable",
      description: "Concilier efficacité organisationnelle et qualité de vie",
      color: "text-green-500"
    }
  ];

  const benefits = [
    {
      title: "Pour l'entreprise",
      items: [
        "Réduction de l'absentéisme",
        "Amélioration de la productivité", 
        "Attraction et rétention des talents",
        "Renforcement de la marque employeur"
      ]
    },
    {
      title: "Pour les collaborateurs",
      items: [
        "Amélioration du bien-être",
        "Meilleur équilibre vie pro/perso",
        "Développement des compétences",
        "Reconnaissance et valorisation"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <BrandedPageHeader
        variant="entreprise"
        title="Concept QVT"
        subtitle="La Qualité de Vie au Travail au cœur de votre stratégie d'entreprise"
      >
        <BrandedButton variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-teal-600">
          Découvrir nos solutions
          <ArrowRight className="ml-2 w-5 h-5" />
        </BrandedButton>
      </BrandedPageHeader>

      <div className="container mx-auto px-4 py-16">
        {/* Introduction */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Qu'est-ce que la QVT ?
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            La Qualité de Vie au Travail (QVT) désigne les conditions dans lesquelles les salariés 
            exercent leur travail et leur capacité à s'exprimer et à agir sur le contenu de celui-ci. 
            Elle vise à concilier amélioration des conditions de travail et performance de l'entreprise.
          </p>
        </div>

        {/* Les 4 Piliers */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Les 4 piliers de notre approche QVT
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((pillar, index) => (
              <BrandedCard key={index} variant="gradient" className="text-center h-full">
                <BrandedCardHeader>
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-white shadow-lg flex items-center justify-center`}>
                    <pillar.icon className={`w-8 h-8 ${pillar.color}`} />
                  </div>
                  <BrandedCardTitle className="text-xl font-bold text-gray-900">
                    {pillar.title}
                  </BrandedCardTitle>
                </BrandedCardHeader>
                <BrandedCardContent>
                  <BrandedCardDescription className="text-gray-600">
                    {pillar.description}
                  </BrandedCardDescription>
                </BrandedCardContent>
              </BrandedCard>
            ))}
          </div>
        </div>

        {/* Bénéfices */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Les bénéfices de la QVT
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <BrandedCard key={index} variant="entreprise" className="h-full">
                <BrandedCardHeader>
                  <BrandedCardTitle className="text-2xl font-bold text-teal-700 flex items-center">
                    <Building2 className="w-6 h-6 mr-3" />
                    {benefit.title}
                  </BrandedCardTitle>
                </BrandedCardHeader>
                <BrandedCardContent>
                  <ul className="space-y-3">
                    {benefit.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </BrandedCardContent>
              </BrandedCard>
            ))}
          </div>
        </div>

        {/* Notre approche */}
        <BrandedCard variant="gradient" className="mb-20">
          <BrandedCardHeader className="text-center">
            <BrandedCardTitle className="text-3xl font-bold text-gray-900 mb-4">
              Notre approche phygitale unique
            </BrandedCardTitle>
            <BrandedCardDescription className="text-lg text-gray-600 max-w-3xl mx-auto">
              QVT Box propose une solution innovante combinant intelligence artificielle, 
              accompagnement humain et objets physiques pour créer un écosystème complet 
              de bien-être au travail.
            </BrandedCardDescription>
          </BrandedCardHeader>
          <BrandedCardContent className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">IA & Digital</h3>
              <p className="text-gray-600">Analyse prédictive et recommandations personnalisées</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Accompagnement</h3>
              <p className="text-gray-600">Coaching et suivi par des experts QVT</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Objets Physiques</h3>
              <p className="text-gray-600">Box et accessoires pour matérialiser le bien-être</p>
            </div>
          </BrandedCardContent>
        </BrandedCard>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Prêt à transformer votre QVT ?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Découvrez comment QVT Box peut accompagner votre entreprise vers une démarche 
            QVT durable et impactante.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <BrandedButton variant="entreprise" size="lg">
              Demander une démonstration
            </BrandedButton>
            <BrandedButton variant="outline" size="lg">
              Télécharger notre brochure
            </BrandedButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConceptQVT;
