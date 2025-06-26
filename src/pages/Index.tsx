
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Users, Building2, Heart, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import FloatingBubbles from "../components/FloatingBubbles";
import EditableText from "../components/EditableText";
import { useEditableContent } from "@/hooks/useEditableContent";

const Index = () => {
  const { getColor } = useEditableContent();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
      <FloatingBubbles />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <EditableText
            pageName="home"
            sectionName="hero"
            contentKey="title"
            defaultValue="QVT Box - Votre bien-être, notre priorité"
            as="h1"
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          />
          
          <EditableText
            pageName="home"
            sectionName="hero"
            contentKey="subtitle"
            defaultValue="Découvrez nos solutions personnalisées pour améliorer votre qualité de vie au travail et en famille"
            as="p"
            className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
          />

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/simulator-home">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg">
                Évaluer mon bien-être
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/shop">
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg border-2 border-blue-600 text-blue-600 hover:bg-blue-50">
                Découvrir nos Box
              </Button>
            </Link>
          </div>
        </div>

        {/* Universe Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Famille Universe */}
          <Card 
            className="relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            style={{ 
              background: `linear-gradient(135deg, ${getColor('family_primary', '#EC4899')} 0%, ${getColor('family_secondary', '#8B5CF6')} 100%)` 
            }}
          >
            <CardHeader className="text-white relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="w-8 h-8" />
                <EditableText
                  pageName="home"
                  sectionName="universe"
                  contentKey="family_title"
                  defaultValue="Univers Famille"
                  as="h2"
                  className="text-2xl font-bold text-white"
                />
              </div>
              <EditableText
                pageName="home"
                sectionName="universe"
                contentKey="family_description"
                defaultValue="Des solutions fun et colorées pour renforcer les liens familiaux et accompagner les adolescents"
                as="p"
                className="text-white/90 text-lg leading-relaxed"
              />
            </CardHeader>
            <CardContent className="text-white relative z-10">
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Communication</span>
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Bien-être ados</span>
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Liens familiaux</span>
              </div>
              <Link to="/famille">
                <Button className="bg-white text-purple-600 hover:bg-white/90 w-full font-semibold">
                  Découvrir l'univers famille
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </CardContent>
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
          </Card>

          {/* Enterprise Universe */}
          <Card 
            className="relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            style={{ 
              background: `linear-gradient(135deg, ${getColor('enterprise_primary', '#3B82F6')} 0%, ${getColor('enterprise_secondary', '#1E40AF')} 100%)` 
            }}
          >
            <CardHeader className="text-white relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <Building2 className="w-8 h-8" />
                <EditableText
                  pageName="home"
                  sectionName="universe"
                  contentKey="enterprise_title"
                  defaultValue="Univers Entreprise"
                  as="h2"
                  className="text-2xl font-bold text-white"
                />
              </div>
              <EditableText
                pageName="home"
                sectionName="universe"
                contentKey="enterprise_description"
                defaultValue="Des outils professionnels pour améliorer la qualité de vie au travail et prévenir le burn-out"
                as="p"
                className="text-white/90 text-lg leading-relaxed"
              />
            </CardHeader>
            <CardContent className="text-white relative z-10">
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Prévention burn-out</span>
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Management</span>
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">QVT</span>
              </div>
              <Link to="/concept-qvt">
                <Button className="bg-white text-blue-600 hover:bg-white/90 w-full font-semibold">
                  Découvrir l'univers entreprise
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </CardContent>
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
          </Card>
        </div>

        {/* Features Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Pourquoi choisir QVT Box ?</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Des solutions innovantes et personnalisées pour votre bien-être
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <Users className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <CardTitle>Approche Personnalisée</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Chaque solution est adaptée à vos besoins spécifiques grâce à notre système d'évaluation intelligent.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <Sparkles className="w-12 h-12 mx-auto mb-4 text-purple-600" />
              <CardTitle>Innovation Continue</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Nos méthodes évoluent constamment pour intégrer les dernières recherches en bien-être.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <Heart className="w-12 h-12 mx-auto mb-4 text-pink-600" />
              <CardTitle>Impact Mesurable</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Suivez vos progrès et mesurez l'amélioration de votre qualité de vie au quotidien.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
