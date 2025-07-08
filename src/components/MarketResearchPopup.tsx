
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { X, Target, Users, Building2, Heart, TrendingUp, CheckCircle, Sparkles } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface MarketResearchPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const MarketResearchPopup = ({ isOpen, onClose }: MarketResearchPopupProps) => {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    full_name: '',
    company_name: '',
    company_size: '',
    role: '',
    phone: '',
    interest_level: 5,
    target_audience: [] as string[],
    current_solutions: '',
    budget_range: '',
    timeline: '',
    specific_needs: '',
    consent_marketing: false,
    consent_data: false,
    source: 'popup_homepage'
  });

  const interestLevelLabels = {
    1: 'Pas du tout intéressé',
    2: 'Peu intéressé',
    3: 'Modérément intéressé',
    4: 'Assez intéressé',
    5: 'Intéressé',
    6: 'Très intéressé',
    7: 'Fortement intéressé',
    8: 'Extrêmement intéressé',
    9: 'Passionné',
    10: 'Prêt à acheter immédiatement'
  };

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleAudienceToggle = (audience: string) => {
    setFormData(prev => ({
      ...prev,
      target_audience: prev.target_audience.includes(audience)
        ? prev.target_audience.filter(a => a !== audience)
        : [...prev.target_audience, audience]
    }));
  };

  const handleSubmit = async () => {
    if (!formData.email || !formData.consent_data) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir votre email et accepter le traitement des données.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const { error } = await supabase
        .from('market_research_submissions')
        .insert([formData]);

      if (error) throw error;

      toast({
        title: "Merci pour votre participation !",
        description: "Vos données ont été enregistrées. Nous vous recontacterons bientôt.",
      });

      onClose();
    } catch (error) {
      console.error('Erreur lors de la soumission:', error);
      toast({
        title: "Erreur",
        description: "Une erreur s'est produite. Veuillez réessayer.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const getInterestColor = (level: number) => {
    if (level <= 3) return 'text-red-600';
    if (level <= 5) return 'text-orange-600';
    if (level <= 7) return 'text-blue-600';
    return 'text-green-600';
  };

  const getInterestBadgeColor = (level: number) => {
    if (level <= 3) return 'bg-red-100 text-red-800';
    if (level <= 5) return 'bg-orange-100 text-orange-800';
    if (level <= 7) return 'bg-blue-100 text-blue-800';
    return 'bg-green-100 text-green-800';
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl">
            <Sparkles className="w-6 h-6 text-teal-600" />
            Étude de Marché - QVT Box
          </DialogTitle>
          <p className="text-gray-600">
            Aidez-nous à mieux comprendre vos besoins en matière de bien-être
          </p>
        </DialogHeader>

        <div className="space-y-6">
          {step === 1 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <Target className="w-5 h-5 text-teal-600" />
                Simulateur d'Intérêt
              </h3>
              
              <div className="space-y-4">
                <div>
                  <Label className="text-base font-medium mb-3 block">
                    À quel point seriez-vous intéressé par une solution de bien-être phygitale ?
                  </Label>
                  <div className="px-4">
                    <Slider
                      value={[formData.interest_level]}
                      onValueChange={(value) => handleInputChange('interest_level', value[0])}
                      max={10}
                      min={1}
                      step={1}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>1</span>
                      <span>5</span>
                      <span>10</span>
                    </div>
                  </div>
                  <div className="mt-3 text-center">
                    <Badge className={getInterestBadgeColor(formData.interest_level)}>
                      {formData.interest_level}/10 - {interestLevelLabels[formData.interest_level as keyof typeof interestLevelLabels]}
                    </Badge>
                  </div>
                </div>

                <div>
                  <Label className="text-base font-medium mb-3 block">
                    Quel(s) public(s) vous intéresse(nt) ?
                  </Label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {[
                      { key: 'entreprise', label: 'Entreprise', icon: Building2, color: 'teal' },
                      { key: 'famille', label: 'Famille', icon: Heart, color: 'purple' },
                      { key: 'ados', label: 'Adolescents', icon: Users, color: 'pink' }
                    ].map(audience => (
                      <div
                        key={audience.key}
                        onClick={() => handleAudienceToggle(audience.key)}
                        className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                          formData.target_audience.includes(audience.key)
                            ? `border-${audience.color}-500 bg-${audience.color}-50`
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="flex flex-col items-center text-center space-y-2">
                          <audience.icon className={`w-8 h-8 ${
                            formData.target_audience.includes(audience.key)
                              ? `text-${audience.color}-600`
                              : 'text-gray-400'
                          }`} />
                          <span className="font-medium">{audience.label}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <Button 
                  onClick={() => setStep(2)}
                  className="bg-teal-600 hover:bg-teal-700"
                >
                  Continuer
                </Button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <Users className="w-5 h-5 text-teal-600" />
                Informations de Contact
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="votre@email.com"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="full_name">Nom complet</Label>
                  <Input
                    id="full_name"
                    value={formData.full_name}
                    onChange={(e) => handleInputChange('full_name', e.target.value)}
                    placeholder="Jean Dupont"
                  />
                </div>
                <div>
                  <Label htmlFor="company_name">Entreprise</Label>
                  <Input
                    id="company_name"
                    value={formData.company_name}
                    onChange={(e) => handleInputChange('company_name', e.target.value)}
                    placeholder="Nom de votre entreprise"
                  />
                </div>
                <div>
                  <Label htmlFor="role">Fonction</Label>
                  <Input
                    id="role"
                    value={formData.role}
                    onChange={(e) => handleInputChange('role', e.target.value)}
                    placeholder="Directeur RH, Manager, etc."
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Téléphone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="01 23 45 67 89"
                  />
                </div>
                <div>
                  <Label htmlFor="company_size">Taille de l'entreprise</Label>
                  <select
                    id="company_size"
                    value={formData.company_size}
                    onChange={(e) => handleInputChange('company_size', e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  >
                    <option value="">Sélectionner</option>
                    <option value="1-10">1-10 employés</option>
                    <option value="11-50">11-50 employés</option>
                    <option value="51-200">51-200 employés</option>
                    <option value="201-1000">201-1000 employés</option>
                    <option value="1000+">Plus de 1000 employés</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-between">
                <Button 
                  variant="outline" 
                  onClick={() => setStep(1)}
                >
                  Retour
                </Button>
                <Button 
                  onClick={() => setStep(3)}
                  className="bg-teal-600 hover:bg-teal-700"
                >
                  Continuer
                </Button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-teal-600" />
                Besoins et Contexte
              </h3>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="current_solutions">Solutions actuelles</Label>
                  <Textarea
                    id="current_solutions"
                    value={formData.current_solutions}
                    onChange={(e) => handleInputChange('current_solutions', e.target.value)}
                    placeholder="Quelles solutions utilisez-vous actuellement pour le bien-être ?"
                    rows={3}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="budget_range">Budget envisagé</Label>
                    <select
                      id="budget_range"
                      value={formData.budget_range}
                      onChange={(e) => handleInputChange('budget_range', e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-md"
                    >
                      <option value="">Sélectionner</option>
                      <option value="< 1000€">Moins de 1 000€</option>
                      <option value="1000-5000€">1 000€ - 5 000€</option>
                      <option value="5000-10000€">5 000€ - 10 000€</option>
                      <option value="10000-50000€">10 000€ - 50 000€</option>
                      <option value="> 50000€">Plus de 50 000€</option>
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="timeline">Échéance souhaitée</Label>
                    <select
                      id="timeline"
                      value={formData.timeline}
                      onChange={(e) => handleInputChange('timeline', e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-md"
                    >
                      <option value="">Sélectionner</option>
                      <option value="Immédiat">Immédiat</option>
                      <option value="1-3 mois">1-3 mois</option>
                      <option value="3-6 mois">3-6 mois</option>
                      <option value="6-12 mois">6-12 mois</option>
                      <option value="> 12 mois">Plus de 12 mois</option>
                    </select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="specific_needs">Besoins spécifiques</Label>
                  <Textarea
                    id="specific_needs"
                    value={formData.specific_needs}
                    onChange={(e) => handleInputChange('specific_needs', e.target.value)}
                    placeholder="Décrivez vos besoins spécifiques ou défis actuels..."
                    rows={3}
                  />
                </div>

                <div className="space-y-3 border-t pt-4">
                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="consent_data"
                      checked={formData.consent_data}
                      onCheckedChange={(checked) => handleInputChange('consent_data', checked)}
                    />
                    <Label htmlFor="consent_data" className="text-sm">
                      J'accepte le traitement de mes données personnelles pour cette étude de marché *
                    </Label>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="consent_marketing"
                      checked={formData.consent_marketing}
                      onCheckedChange={(checked) => handleInputChange('consent_marketing', checked)}
                    />
                    <Label htmlFor="consent_marketing" className="text-sm">
                      J'accepte de recevoir des informations commerciales par email
                    </Label>
                  </div>
                </div>
              </div>

              <div className="flex justify-between">
                <Button 
                  variant="outline" 
                  onClick={() => setStep(2)}
                >
                  Retour
                </Button>
                <Button 
                  onClick={handleSubmit}
                  disabled={isSubmitting || !formData.email || !formData.consent_data}
                  className="bg-teal-600 hover:bg-teal-700"
                >
                  {isSubmitting ? 'Envoi...' : 'Valider ma participation'}
                </Button>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MarketResearchPopup;
