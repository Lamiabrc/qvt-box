import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
  Handshake,
  Package,
  Leaf,
  MapPin,
  Shield
} from "lucide-react";
import FloatingBubbles from "../components/FloatingBubbles";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const DevenirPrestataire = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const [supplierFormData, setSupplierFormData] = useState({
    entreprise: '',
    contact: '',
    email: '',
    telephone: '',
    produits: '',
    certifications: '',
    origine: '',
    valeurs: '',
    motivation: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSupplierInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setSupplierFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Candidature prestataire:', formData);
      
      toast({
        title: "Candidature envoyée !",
        description: "Votre candidature prestataire a été transmise avec succès. Nous vous recontacterons sous 48h.",
      });
      
      setFormData({
        nom: '',
        prenom: '',
        email: '',
        telephone: '',
        specialite: '',
        experience: '',
        certifications: '',
        motivation: ''
      });
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur s'est produite lors de l'envoi. Veuillez réessayer.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSupplierSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Candidature fournisseur:', supplierFormData);
      
      toast({
        title: "Candidature fournisseur envoyée !",
        description: "Votre candidature fournisseur a été transmise avec succès. Notre équipe vous contactera sous 72h.",
      });
      
      setSupplierFormData({
        entreprise: '',
        contact: '',
        email: '',
        telephone: '',
        produits: '',
        certifications: '',
        origine: '',
        valeurs: '',
        motivation: ''
      });
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur s'est produite lors de l'envoi. Veuillez réessayer.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
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

  const supplierBenefits = [
    {
      icon: Package,
      title: "Distribution nationale",
      description: "Vos produits dans toutes nos QVT Box"
    },
    {
      icon: Leaf,
      title: "Valorisation éthique",
      description: "Mise en avant de vos valeurs françaises et durables"
    },
    {
      icon: TrendingUp,
      title: "Croissance garantie",
      description: "Volumes croissants avec notre expansion"
    },
    {
      icon: Shield,
      title: "Partenariat de confiance",
      description: "Contrats transparents et paiements sécurisés"
    },
    {
      icon: Heart,
      title: "Impact bien-être",
      description: "Contribuez au bien-être de milliers de personnes"
    },
    {
      icon: Award,
      title: "Labellisation QVT",
      description: "Certification de nos standards qualité"
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

  const supplierProfiles = [
    "Producteurs artisanaux français",
    "Marques bien-être éthiques",
    "Créateurs d'objets thérapeutiques",
    "Fabricants de compléments naturels",
    "Artisans du développement personnel",
    "Éditeurs de contenus bien-être",
    "Créateurs d'activités mindfulness",
    "Entreprises locales durables"
  ];

  const criteres = [
    "Diplôme reconnu dans votre domaine",
    "Expérience minimum 3 ans",
    "Certification professionnelle",
    "Approche bienveillante et éthique",
    "Maîtrise des outils digitaux",
    "Engagement qualité"
  ];

  const supplierCriteria = [
    "Origine française certifiée",
    "Démarche éthique et durable",
    "Qualité produit exceptionnelle",
    "Capacité de production stable",
    "Certifications bio/équitable",
    "Valeurs alignées avec le bien-être"
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
              alt="Partenaires QVT" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative z-10 bg-white/80 backdrop-blur-sm rounded-3xl p-8">
            <Badge className="mb-4 bg-teal-100 text-teal-800">Rejoignez notre écosystème</Badge>
            <h1 className="text-5xl font-bold text-teal-800 mb-6">
              Devenez Partenaire QVTBox
            </h1>
            <p className="text-xl text-teal-600 mb-8 max-w-4xl mx-auto">
              Rejoignez notre réseau de professionnels et fournisseurs engagés pour créer 
              un impact positif sur le bien-être des entreprises et des familles.
            </p>
          </div>
        </div>

        {/* Tabs pour Prestataire/Fournisseur */}
        <div className="mb-16">
          <Tabs defaultValue="prestataire" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 bg-white/60 backdrop-blur-sm">
              <TabsTrigger value="prestataire" className="text-lg">
                <Users className="w-5 h-5 mr-2" />
                Devenir Prestataire
              </TabsTrigger>
              <TabsTrigger value="fournisseur" className="text-lg">
                <Package className="w-5 h-5 mr-2" />
                Devenir Fournisseur
              </TabsTrigger>
            </TabsList>

            {/* Onglet Prestataire */}
            <TabsContent value="prestataire" className="space-y-12">
              
              {/* Stats */}
              <div className="grid md:grid-cols-4 gap-6">
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

              {/* Avantages Prestataires */}
              <div>
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-teal-800 mb-4">
                    Pourquoi devenir prestataire QVTBox ?
                  </h2>
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

              {/* Formulaire Prestataire */}
              <Card className="max-w-4xl mx-auto">
                <CardHeader>
                  <CardTitle className="text-2xl text-teal-800 text-center">
                    Candidature Prestataire
                  </CardTitle>
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
                          disabled={isSubmitting}
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
                          disabled={isSubmitting}
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
                          disabled={isSubmitting}
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
                          disabled={isSubmitting}
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
                        disabled={isSubmitting}
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
                        rows={4}
                        disabled={isSubmitting}
                      />
                    </div>

                    <div className="text-center">
                      <Button 
                        type="submit" 
                        className="bg-teal-600 hover:bg-teal-700 px-8 py-3"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                            Envoi en cours...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5 mr-2" />
                            Envoyer ma candidature
                          </>
                        )}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Onglet Fournisseur */}
            <TabsContent value="fournisseur" className="space-y-12">
              {/* Stats Fournisseurs */}
              <div className="grid md:grid-cols-4 gap-6">
                <Card className="text-center">
                  <CardContent className="p-6">
                    <Package className="w-12 h-12 text-green-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-green-700 mb-2">1000+</h3>
                    <p className="text-gray-600">Produits distribués</p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="p-6">
                    <Leaf className="w-12 h-12 text-green-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-green-700 mb-2">100%</h3>
                    <p className="text-gray-600">Produits français</p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="p-6">
                    <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-blue-700 mb-2">30+</h3>
                    <p className="text-gray-600">Fournisseurs partenaires</p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="p-6">
                    <Shield className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-purple-700 mb-2">95%</h3>
                    <p className="text-gray-600">Produits certifiés bio</p>
                  </CardContent>
                </Card>
              </div>

              {/* Avantages Fournisseurs */}
              <div>
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-green-800 mb-4">
                    Pourquoi devenir fournisseur QVTBox ?
                  </h2>
                  <p className="text-xl text-green-600">
                    Distribuez vos produits français éthiques à travers nos Box bien-être
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {supplierBenefits.map((benefit, index) => (
                    <Card key={index} className="hover:shadow-xl transition-shadow">
                      <CardHeader>
                        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4">
                          <benefit.icon className="w-6 h-6 text-white" />
                        </div>
                        <CardTitle className="text-lg text-green-800">{benefit.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600">{benefit.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Profils Fournisseurs recherchés */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-green-800 text-center">
                    Profils Fournisseurs Recherchés
                  </CardTitle>
                  <CardDescription className="text-center">
                    Nous privilégions les producteurs et créateurs français engagés
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {supplierProfiles.map((profil, index) => (
                      <div key={index} className="flex items-center gap-2 p-3 bg-green-50 rounded-lg">
                        <Package className="w-5 h-5 text-green-600" />
                        <span className="text-green-800 font-medium text-sm">{profil}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Critères Fournisseurs */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-green-800 text-center">
                    Nos Critères de Sélection
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    {supplierCriteria.map((critere, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{critere}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Formulaire Fournisseur */}
              <Card className="max-w-4xl mx-auto">
                <CardHeader>
                  <CardTitle className="text-2xl text-green-800 text-center">
                    Candidature Fournisseur
                  </CardTitle>
                  <CardDescription className="text-center">
                    Rejoignez notre sélection de fournisseurs français éthiques
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSupplierSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Nom de l'entreprise *
                        </label>
                        <Input
                          type="text"
                          name="entreprise"
                          value={supplierFormData.entreprise}
                          onChange={handleSupplierInputChange}
                          required
                          disabled={isSubmitting}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Contact principal *
                        </label>
                        <Input
                          type="text"
                          name="contact"
                          value={supplierFormData.contact}
                          onChange={handleSupplierInputChange}
                          required
                          disabled={isSubmitting}
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
                          value={supplierFormData.email}
                          onChange={handleSupplierInputChange}
                          required
                          disabled={isSubmitting}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Téléphone
                        </label>
                        <Input
                          type="tel"
                          name="telephone"
                          value={supplierFormData.telephone}
                          onChange={handleSupplierInputChange}
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Gamme de produits *
                      </label>
                      <Textarea
                        name="produits"
                        value={supplierFormData.produits}
                        onChange={handleSupplierInputChange}
                        required
                        placeholder="Décrivez vos produits et leur lien avec le bien-être..."
                        rows={3}
                        disabled={isSubmitting}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Origine et valeurs *
                      </label>
                      <Textarea
                        name="origine"
                        value={supplierFormData.origine}
                        onChange={handleSupplierInputChange}
                        required
                        placeholder="Origine française, démarche éthique, certifications..."
                        rows={3}
                        disabled={isSubmitting}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Motivation pour rejoindre QVTBox *
                      </label>
                      <Textarea
                        name="motivation"
                        value={supplierFormData.motivation}
                        onChange={handleSupplierInputChange}
                        required
                        placeholder="Pourquoi souhaitez-vous distribuer vos produits via nos Box ?"
                        rows={4}
                        disabled={isSubmitting}
                      />
                    </div>

                    <div className="text-center">
                      <Button 
                        type="submit" 
                        className="bg-green-600 hover:bg-green-700 px-8 py-3"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                            Envoi en cours...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5 mr-2" />
                            Envoyer ma candidature fournisseur
                          </>
                        )}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-teal-600 to-green-600 text-white rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">
            Rejoignez l'Écosystème QVTBox
          </h2>
          <p className="text-xl mb-6 max-w-3xl mx-auto opacity-90">
            Ensemble, créons un impact positif sur le bien-être avec des solutions françaises et éthiques.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-3 text-lg">
                <MessageCircle className="w-5 h-5 mr-2" />
                Discuter avec notre équipe
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/shop">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-teal-600 px-8 py-3 text-lg">
                Découvrir nos Box actuelles
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevenirPrestataire;
