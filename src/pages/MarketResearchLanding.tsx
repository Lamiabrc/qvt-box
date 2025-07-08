
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { 
  Users, 
  Building2, 
  Heart, 
  BarChart3,
  CheckCircle,
  ArrowRight,
  Star
} from "lucide-react";

const MarketResearchLanding = () => {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [interestLevel, setInterestLevel] = useState([5]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    full_name: '',
    company_name: '',
    company_size: '',
    role: '',
    target_audience: [] as string[],
    current_solutions: '',
    budget_range: '',
    timeline: '',
    specific_needs: '',
    phone: '',
    consent_marketing: false,
    consent_data: false
  });

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleTargetAudienceChange = (audience: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      target_audience: checked 
        ? [...prev.target_audience, audience]
        : prev.target_audience.filter(a => a !== audience)
    }));
  };

  const handleSubmit = async () => {
    if (!formData.email || !formData.consent_data) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir les champs obligatoires et accepter le traitement des données.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const { error } = await supabase
        .from('market_research_submissions')
        .insert({
          ...formData,
          interest_level: interestLevel[0],
          source: 'landing_page'
        });

      if (error) throw error;

      toast({
        title: "Merci !",
        description: "Votre préinscription a été enregistrée avec succès."
      });
      
      setStep(4);
    } catch (error) {
      console.error('Erreur lors de la soumission:', error);
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de l'envoi.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const getInterestLabel = (level: number) => {
    if (level <= 2) return "Peu intéressé";
    if (level <= 4) return "Modérément intéressé";
    if (level <= 6) return "Intéressé";
    if (level <= 8) return "Très intéressé";
    return "Extrêmement intéressé";
  };

  const getInterestColor = (level: number) => {
    if (level <= 2) return "text-red-600";
    if (level <= 4) return "text-orange-600";
    if (level <= 6) return "text-yellow-600";
    if (level <= 8) return "text-blue-600";
    return "text-green-600";
  };

  if (step === 4) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center p-4">
        <Card className="max-w-md w-full text-center">
          <CardContent className="pt-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Merci !</h2>
            <p className="text-gray-600 mb-6">
              Votre préinscription a été enregistrée. Nous vous contacterons bientôt pour vous tenir informé du lancement.
            </p>
            <Button 
              onClick={() => window.location.href = '/'}
              className="w-full"
            >
              Retour à l'accueil
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900 text-center">
            QVT Box - Étude de Marché
          </h1>
          <p className="text-gray-600 text-center mt-2">
            Aidez-nous à créer la solution idéale pour votre bien-être
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-600">Étape {step} sur 3</span>
            <span className="text-sm text-gray-500">{Math.round((step / 3) * 100)}% complété</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(step / 3) * 100}%` }}
            />
          </div>
        </div>

        {/* Step 1: Introduction & Interest Level */}
        {step === 1 && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500" />
                  Découvrez QVT Box
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <Building2 className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <h3 className="font-semibold">Entreprises</h3>
                    <p className="text-sm text-gray-600">Solutions bien-être pour vos équipes</p>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <Users className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <h3 className="font-semibold">Familles</h3>
                    <p className="text-sm text-gray-600">Accompagnement familial personnalisé</p>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <Heart className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                    <h3 className="font-semibold">Adolescents</h3>
                    <p className="text-sm text-gray-600">Support spécialisé pour les jeunes</p>
                  </div>
                </div>

                <div>
                  <Label className="text-base font-medium mb-4 block">
                    À quel point êtes-vous intéressé par ce type de solution ?
                  </Label>
                  <div className="space-y-4">
                    <Slider
                      value={interestLevel}
                      onValueChange={setInterestLevel}
                      max={10}
                      min={1}
                      step={1}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>Pas intéressé</span>
                      <span>Très intéressé</span>
                    </div>
                    <div className="text-center">
                      <Badge className={`${getInterestColor(interestLevel[0])} bg-transparent border-current`}>
                        Niveau {interestLevel[0]}/10 - {getInterestLabel(interestLevel[0])}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-end">
              <Button onClick={() => setStep(2)} className="flex items-center gap-2">
                Continuer <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        )}

        {/* Step 2: Professional Information */}
        {step === 2 && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-blue-600" />
                Parlez-nous de vous
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="full_name">Nom complet *</Label>
                  <Input
                    id="full_name"
                    value={formData.full_name}
                    onChange={(e) => handleInputChange('full_name', e.target.value)}
                    placeholder="Votre nom complet"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="company_name">Nom de l'organisation</Label>
                  <Input
                    id="company_name"
                    value={formData.company_name}
                    onChange={(e) => handleInputChange('company_name', e.target.value)}
                    placeholder="Nom de votre entreprise/organisation"
                  />
                </div>
                <div>
                  <Label htmlFor="role">Votre fonction</Label>
                  <Input
                    id="role"
                    value={formData.role}
                    onChange={(e) => handleInputChange('role', e.target.value)}
                    placeholder="Votre poste/fonction"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="company_size">Taille de l'organisation</Label>
                <Select onValueChange={(value) => handleInputChange('company_size', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionner la taille" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-10">1-10 personnes</SelectItem>
                    <SelectItem value="11-50">11-50 personnes</SelectItem>
                    <SelectItem value="51-200">51-200 personnes</SelectItem>
                    <SelectItem value="201-1000">201-1000 personnes</SelectItem>
                    <SelectItem value="1000+">Plus de 1000 personnes</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="text-base font-medium mb-3 block">
                  Quels publics vous intéressent ? (plusieurs choix possibles)
                </Label>
                <div className="space-y-2">
                  {[
                    { id: 'entreprise', label: 'Solutions entreprise' },
                    { id: 'famille', label: 'Accompagnement familial' },
                    { id: 'ados', label: 'Support pour adolescents' }
                  ].map((audience) => (
                    <div key={audience.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={audience.id}
                        checked={formData.target_audience.includes(audience.id)}
                        onCheckedChange={(checked) => 
                          handleTargetAudienceChange(audience.id, checked as boolean)
                        }
                      />
                      <Label htmlFor={audience.id}>{audience.label}</Label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-between">
                <Button variant="outline" onClick={() => setStep(1)}>
                  Précédent
                </Button>
                <Button onClick={() => setStep(3)} className="flex items-center gap-2">
                  Continuer <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 3: Detailed Information & Consent */}
        {step === 3 && (
          <Card>
            <CardHeader>
              <CardTitle>Dernières informations</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="current_solutions">Solutions actuelles utilisées</Label>
                <Textarea
                  id="current_solutions"
                  value={formData.current_solutions}
                  onChange={(e) => handleInputChange('current_solutions', e.target.value)}
                  placeholder="Décrivez les solutions que vous utilisez actuellement..."
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="budget_range">Budget envisagé</Label>
                  <Select onValueChange={(value) => handleInputChange('budget_range', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionner une fourchette" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="<1000">Moins de 1 000€</SelectItem>
                      <SelectItem value="1000-5000">1 000€ - 5 000€</SelectItem>
                      <SelectItem value="5000-10000">5 000€ - 10 000€</SelectItem>
                      <SelectItem value="10000-25000">10 000€ - 25 000€</SelectItem>
                      <SelectItem value="25000+">Plus de 25 000€</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="timeline">Échéance de mise en place</Label>
                  <Select onValueChange={(value) => handleInputChange('timeline', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionner l'échéance" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="immediate">Immédiatement</SelectItem>
                      <SelectItem value="1-3months">1-3 mois</SelectItem>
                      <SelectItem value="3-6months">3-6 mois</SelectItem>
                      <SelectItem value="6-12months">6-12 mois</SelectItem>
                      <SelectItem value="12months+">Plus de 12 mois</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="specific_needs">Besoins spécifiques</Label>
                <Textarea
                  id="specific_needs"
                  value={formData.specific_needs}
                  onChange={(e) => handleInputChange('specific_needs', e.target.value)}
                  placeholder="Décrivez vos besoins spécifiques..."
                />
              </div>

              <div>
                <Label htmlFor="phone">Téléphone (optionnel)</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  placeholder="Votre numéro de téléphone"
                />
              </div>

              <div className="space-y-3 pt-4 border-t">
                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="consent_data"
                    checked={formData.consent_data}
                    onCheckedChange={(checked) => handleInputChange('consent_data', checked)}
                  />
                  <Label htmlFor="consent_data" className="text-sm leading-5">
                    J'accepte que mes données soient collectées et traitées dans le cadre de cette étude de marché *
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="consent_marketing"
                    checked={formData.consent_marketing}
                    onCheckedChange={(checked) => handleInputChange('consent_marketing', checked)}
                  />
                  <Label htmlFor="consent_marketing" className="text-sm leading-5">
                    J'accepte d'être contacté pour recevoir des informations sur le lancement du produit
                  </Label>
                </div>
              </div>

              <div className="flex justify-between pt-4">
                <Button variant="outline" onClick={() => setStep(2)}>
                  Précédent
                </Button>
                <Button 
                  onClick={handleSubmit} 
                  disabled={isSubmitting || !formData.consent_data}
                  className="flex items-center gap-2"
                >
                  {isSubmitting ? "Envoi..." : "Envoyer ma préinscription"}
                  {!isSubmitting && <CheckCircle className="w-4 h-4" />}
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default MarketResearchLanding;
