
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Heart, 
  Brain, 
  Star, 
  Calendar, 
  MessageCircle,
  Award,
  Clock,
  Video,
  Phone
} from "lucide-react";
import FloatingBubbles from "../components/FloatingBubbles";

const CoachQVT = () => {
  const coaches = [
    {
      id: 1,
      name: "Dr. Sarah Martinez",
      speciality: "Psychologue du travail",
      experience: "8 ans",
      rating: 4.9,
      reviews: 147,
      languages: ["Français", "Anglais"],
      availability: "Disponible",
      image: "/api/placeholder/150/150",
      expertise: ["Burn-out", "Stress professionnel", "Cohésion équipe"],
      description: "Spécialisée dans la prévention des RPS et l'accompagnement des équipes en difficulté."
    },
    {
      id: 2,
      name: "Marc Dubois",
      speciality: "Coach certifié QVT",
      experience: "6 ans",
      rating: 4.8,
      reviews: 93,
      languages: ["Français"],
      availability: "Occupé",
      image: "/api/placeholder/150/150",
      expertise: ["Télétravail", "Management", "Transition professionnelle"],
      description: "Expert en transformation des environnements de travail et accompagnement managérial."
    },
    {
      id: 3,
      name: "Emma Laurent",
      speciality: "Thérapeute familiale",
      experience: "10 ans",
      rating: 4.9,
      reviews: 201,
      languages: ["Français", "Italien"],
      availability: "Disponible",
      image: "/api/placeholder/150/150",
      expertise: ["Relations ados-parents", "Communication familiale", "Gestion émotions"],
      description: "Accompagne les familles dans l'amélioration de leur communication et bien-être."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 relative overflow-hidden">
      <FloatingBubbles />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-teal-800 mb-4">
            Nos Coachs QVT Certifiés
          </h1>
          <p className="text-xl text-teal-600 max-w-3xl mx-auto">
            Un accompagnement humain personnalisé par des professionnels experts en bien-être au travail et en famille
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-4 mb-12">
          <Card>
            <CardContent className="p-4 text-center">
              <Users className="w-8 h-8 text-teal-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-teal-700">25+</p>
              <p className="text-sm text-gray-600">Coachs certifiés</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <Heart className="w-8 h-8 text-pink-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-pink-700">1,500+</p>
              <p className="text-sm text-gray-600">Accompagnements réalisés</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <Star className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-yellow-700">4.8/5</p>
              <p className="text-sm text-gray-600">Satisfaction moyenne</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <Clock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-blue-700">24h</p>
              <p className="text-sm text-gray-600">Délai de réponse</p>
            </CardContent>
          </Card>
        </div>

        {/* Coaches Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {coaches.map((coach) => (
            <Card key={coach.id} className="hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <CardTitle className="text-lg">{coach.name}</CardTitle>
                <CardDescription>{coach.speciality}</CardDescription>
                <div className="flex items-center justify-center gap-2 mt-2">
                  <Star className="w-4 h-4 fill-current text-yellow-500" />
                  <span className="font-medium">{coach.rating}</span>
                  <span className="text-sm text-gray-600">({coach.reviews} avis)</span>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Expérience:</span>
                  <Badge variant="secondary">{coach.experience}</Badge>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Disponibilité:</span>
                  <Badge 
                    variant={coach.availability === 'Disponible' ? 'default' : 'secondary'}
                    className={coach.availability === 'Disponible' ? 'bg-green-600' : ''}
                  >
                    {coach.availability}
                  </Badge>
                </div>
                
                <div>
                  <p className="text-sm text-gray-600 mb-2">Expertises:</p>
                  <div className="flex flex-wrap gap-1">
                    {coach.expertise.map((skill, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <p className="text-sm text-gray-700">{coach.description}</p>
                
                <div className="flex gap-2 pt-2">
                  <Button className="flex-1 bg-teal-600 hover:bg-teal-700">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Contacter
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Calendar className="w-4 h-4 mr-2" />
                    RDV
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Services */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl text-teal-800 text-center">
              Types d'Accompagnement Proposés
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <Video className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Visioconférence</h3>
                <p className="text-sm text-gray-600">Sessions individuelles ou en groupe via vidéo</p>
              </div>
              <div className="text-center">
                <Phone className="w-12 h-12 text-green-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Appel téléphonique</h3>
                <p className="text-sm text-gray-600">Écoute et conseils par téléphone</p>
              </div>
              <div className="text-center">
                <MessageCircle className="w-12 h-12 text-purple-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Chat sécurisé</h3>
                <p className="text-sm text-gray-600">Échanges écrits confidentiels</p>
              </div>
              <div className="text-center">
                <Award className="w-12 h-12 text-orange-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Ateliers collectifs</h3>
                <p className="text-sm text-gray-600">Sessions de groupe thématiques</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center">
          <Card className="border-2 border-dashed border-teal-300 bg-teal-50/50">
            <CardContent className="py-8">
              <Brain className="w-16 h-16 text-teal-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-teal-800 mb-2">
                Besoin d'un accompagnement personnalisé ?
              </h3>
              <p className="text-teal-600 mb-4 max-w-md mx-auto">
                Nos coachs sont là pour vous accompagner dans votre parcours bien-être
              </p>
              <Button className="bg-teal-600 hover:bg-teal-700">
                Prendre rendez-vous maintenant
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CoachQVT;
