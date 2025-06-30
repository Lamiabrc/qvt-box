
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Users, 
  Heart, 
  Brain, 
  Star, 
  Calendar, 
  MessageCircle,
  Award,
  CheckCircle,
  Building2,
  TrendingUp,
  Globe,
  Mail,
  Phone,
  User,
  GraduationCap,
  FileText,
  Send,
  ArrowRight,
  Target,
  Handshake
} from "lucide-react";
import FloatingBubbles from "../components/FloatingBubbles";
import { Link } from "react-router-dom";

const DevenirPrestataire = () => {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    specialite: '',
    experience: '',
    certifications: '',
    motivation: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Candidature prestataire:', formData);
    // Ici vous pourrez ajouter la logique d'envoi du formulaire
  };

  const avantages = [
    {
      icon: TrendingUp,
      title: "Développez votre activité",
      description: "Accédez à un réseau national d'entreprises et de familles"
    },
    {
      icon: Heart,
      title: "Impact social positif",
      description: "Contribuez au bien-être mental de milliers de personnes"
    },
    {
      icon: Globe,
      title: "Plateforme digitale innovante",
      description: "Utilisez nos outils IA pour optimiser vos accompagnements"
    },
    {
      icon: Award,
      title: "Formation continue",
      description: "Accès à nos formations et certifications QVT"
    },
    {
      icon: Target,
      title: "Missions qualifiées",
      description: "Clients pré-qualifiés grâce à nos simulateurs"
    },
    {
      icon: Handshake,
      title: "Partenariat gagnant-gagnant",
      description: "Rémunération attractive et évolutive"
    }
  ];

  const profils = [
    "Psychologue du travail",
    "Coach certifié QVT",
    "Thérapeute familiale",
    "Consultant RH",
    "Coach professionnel",
    "Médiateur familial",
    "Sophrologue",
    "Psychothérapeute"
  ];

  const criteres = [
    "Diplôme reconnu dans votre domaine",
    "Expérience minimum 3 ans",
    "Certification professionnelle",
    "Approche bienveillante et éthique",
    "Maîtrise des outils digitaux",
    "Engagement qualité"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 relative overflow-hidden">
      <FloatingBubbles />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-16 relative">
          <div className="absolute inset-0 opacity-10 rounded-3xl overflow-hidden">
            <img 
              src="/lovable-uploads/78366c32-9e56-4378-9668-a89bc6ff3a9d.png" 
              alt="Prestataire QVT" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative z-10 bg-white/80 backdrop-blur-sm rounded-3xl p-8">
            <Badge className="mb-4 bg-teal-100 text-teal-800">Rejoignez notre réseau</Badge>
            <h1 className="text-5xl font-bold text-teal-800 mb-6">
              Devenez Prestataire QVTBox
            </h1>
            <p className="text-xl text-teal-600 mb-8 max-w-4xl mx-auto">
              Rejoignez notre réseau de professionnels certifiés et accompagnez entreprises et familles 
              vers un meilleur bien-être grâce à notre plateforme innovante.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <Card className="text-center">
            <CardContent className="p-6">
              <Users className="w-12 h-12 text-teal-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-teal-700 mb-2">500+</h3>
              <p className="text-gray-600">Entreprises partenaires</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <Heart className="w-12 h-12 text-pink-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-pink-700 mb-2">10,000+</h3>
              <p className="text-gray-600">Familles accompagnées</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <Star className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-yellow-700 mb-2">4.9/5</h3>
              <p className="text-gray-600">Satisfaction clients</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <Building2 className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-blue-700 mb-2">50+</h3>
              <p className="text-gray-600">Prestataires actifs</p>
            </CardContent>
          </Card>
        </div>

        {/* Avantages */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-teal-800 mb-4">
              Pourquoi rejoindre QVTBox ?
            </h2>
            <p className="text-xl text-teal-600">
              Développez votre impact et votre activité avec notre écosystème innovant
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {avantages.map((avantage, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4">
                    <avantage.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg text-teal-800">{avantage.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{avantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Profils recherchés */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="text-2xl text-teal-800 text-center">
              Profils Recherchés
            </CardTitle>
            <CardDescription className="text-center">
              Nous recherchons des professionnels qualifiés dans ces domaines
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {profils.map((profil, index) => (
                <div key={index} className="flex items-center gap-2 p-3 bg-teal-50 rounded-lg">
                  <GraduationCap className="w-5 h-5 text-teal-600" />
                  <span className="text-teal-800 font-medium">{profil}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Critères de sélection */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="text-2xl text-teal-800 text-center">
              Critères de Sélection
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {criteres.map((critere, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{critere}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Formulaire de candidature */}
        <Card className="mb-16 max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl text-teal-800 text-center">
              Postulez maintenant
            </CardTitle>
            <CardDescription className="text-center">
              Remplissez ce formulaire pour rejoindre notre réseau de prestataires
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Prénom *
                  </label>
                  <Input
                    type="text"
                    name="prenom"
                    value={formData.prenom}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nom *
                  </label>
                  <Input
                    type="text"
                    name="nom"
                    value={formData.nom}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email professionnel *
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Téléphone
                  </label>
                  <Input
                    type="tel"
                    name="telephone"
                    value={formData.telephone}
                    onChange={handleInputChange}
                    className="w-full"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Spécialité / Domaine d'expertise *
                </label>
                <Input
                  type="text"
                  name="specialite"
                  value={formData.specialite}
                  onChange={handleInputChange}
                  required
                  placeholder="Ex: Psychologue du travail, Coach QVT..."
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Années d'expérience *
                </label>
                <Input
                  type="text"
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  required
                  placeholder="Ex: 5 ans"
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Certifications et diplômes
                </label>
                <Textarea
                  name="certifications"
                  value={formData.certifications}
                  onChange={handleInputChange}
                  placeholder="Listez vos principales certifications et diplômes..."
                  className="w-full"
                  rows={3}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Motivation pour rejoindre QVTBox *
                </label>
                <Textarea
                  name="motivation"
                  value={formData.motivation}
                  onChange={handleInputChange}
                  required
                  placeholder="Expliquez pourquoi vous souhaitez rejoindre notre réseau..."
                  className="w-full"
                  rows={4}
                />
              </div>

              <div className="text-center">
                <Button type="submit" className="bg-teal-600 hover:bg-teal-700 px-8 py-3">
                  <Send className="w-5 h-5 mr-2" />
                  Envoyer ma candidature
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">
            Prêt à rejoindre l'aventure QVTBox ?
          </h2>
          <p className="text-xl mb-6 max-w-3xl mx-auto opacity-90">
            Ensemble, créons un impact positif sur le bien-être des entreprises et des familles.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-3 text-lg">
              <MessageCircle className="w-5 h-5 mr-2" />
              Discuter avec notre équipe
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Link to="/contact">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-teal-600 px-8 py-3 text-lg">
                Nous contacter
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevenirPrestataire;
