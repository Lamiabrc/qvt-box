
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { useEmployeeEvents } from '@/hooks/useEmployeeEvents';
import { Badge } from '@/components/ui/badge';
import { Calendar, Heart, Baby, GraduationCap, Home } from 'lucide-react';

const EVENT_TYPES = [
  { value: 'naissance', label: 'Naissance', icon: Baby, category: 'family' },
  { value: 'mariage', label: 'Mariage', icon: Heart, category: 'family' },
  { value: 'deces', label: 'Décès', icon: Heart, category: 'family' },
  { value: 'divorce', label: 'Divorce/Séparation', icon: Heart, category: 'family' },
  { value: 'demenagement', label: 'Déménagement', icon: Home, category: 'personal' },
  { value: 'maladie_grave', label: 'Maladie grave', icon: Heart, category: 'health' },
  { value: 'accident', label: 'Accident', icon: Heart, category: 'health' },
  { value: 'retraite', label: 'Départ à la retraite', icon: GraduationCap, category: 'work' },
  { value: 'demission', label: 'Démission', icon: GraduationCap, category: 'work' },
  { value: 'licenciement', label: 'Licenciement', icon: GraduationCap, category: 'work' },
  { value: 'promotion', label: 'Promotion', icon: GraduationCap, category: 'work' },
  { value: 'mutation', label: 'Mutation', icon: GraduationCap, category: 'work' },
  { value: 'formation', label: 'Formation importante', icon: GraduationCap, category: 'work' },
  { value: 'conge_parental', label: 'Congé parental', icon: Baby, category: 'family' },
  { value: 'arret_maladie', label: 'Arrêt maladie long', icon: Heart, category: 'health' }
];

const EmployeeEventsForm = () => {
  const { events, loading, addEvent, addEventQuestionnaire } = useEmployeeEvents();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [showQuestionnaire, setShowQuestionnaire] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    event_type: '',
    event_date: '',
    description: '',
    impact_level: 1,
    support_needed: false,
    confidential: false
  });

  const [questionnaireData, setQuestionnaireData] = useState({
    emotional_impact: '',
    work_impact: '',
    support_type: '',
    adaptation_needed: '',
    time_off_needed: '',
    communication_preferences: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.event_type || !formData.event_date) return;

    const newEvent = await addEvent(formData);
    if (newEvent) {
      setShowQuestionnaire(newEvent.id);
    }
    
    setFormData({
      event_type: '',
      event_date: '',
      description: '',
      impact_level: 1,
      support_needed: false,
      confidential: false
    });
    setIsFormOpen(false);
  };

  const handleQuestionnaireSubmit = async (eventId: string) => {
    const eventType = events.find(e => e.id === eventId)?.event_type;
    
    await addEventQuestionnaire({
      event_id: eventId,
      questionnaire_type: eventType || 'general',
      responses: questionnaireData,
      support_needs: {
        emotional: questionnaireData.emotional_impact,
        practical: questionnaireData.support_type,
        professional: questionnaireData.work_impact
      },
      follow_up_required: formData.support_needed
    });

    setShowQuestionnaire(null);
    setQuestionnaireData({
      emotional_impact: '',
      work_impact: '',
      support_type: '',
      adaptation_needed: '',
      time_off_needed: '',
      communication_preferences: ''
    });
  };

  const getEventIcon = (eventType: string) => {
    const eventConfig = EVENT_TYPES.find(t => t.value === eventType);
    const IconComponent = eventConfig?.icon || Calendar;
    return <IconComponent className="w-4 h-4" />;
  };

  const getImpactColor = (level: number) => {
    switch (level) {
      case 1: return 'bg-green-100 text-green-800';
      case 2: return 'bg-yellow-100 text-yellow-800';
      case 3: return 'bg-orange-100 text-orange-800';
      case 4: return 'bg-red-100 text-red-800';
      case 5: return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (loading) {
    return <div className="text-center py-4">Chargement...</div>;
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-blue-600" />
            Événements à Signaler
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center mb-4">
            <p className="text-sm text-gray-600">
              Signalez les événements importants de votre vie pour un accompagnement personnalisé
            </p>
            <Button onClick={() => setIsFormOpen(!isFormOpen)}>
              {isFormOpen ? 'Annuler' : 'Signaler un événement'}
            </Button>
          </div>

          {isFormOpen && (
            <form onSubmit={handleSubmit} className="space-y-4 mb-6 p-4 border rounded-lg bg-gray-50">
              <div>
                <Label htmlFor="event_type">Type d'événement</Label>
                <Select value={formData.event_type} onValueChange={(value) => setFormData({...formData, event_type: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionnez un événement" />
                  </SelectTrigger>
                  <SelectContent>
                    {EVENT_TYPES.map((type) => (
                      <SelectItem key={type.value} value={type.value}>
                        <div className="flex items-center gap-2">
                          <type.icon className="w-4 h-4" />
                          {type.label}
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="event_date">Date de l'événement</Label>
                <Input
                  type="date"
                  value={formData.event_date}
                  onChange={(e) => setFormData({...formData, event_date: e.target.value})}
                  required
                />
              </div>

              <div>
                <Label htmlFor="impact_level">Niveau d'impact sur votre travail (1-5)</Label>
                <Select value={formData.impact_level.toString()} onValueChange={(value) => setFormData({...formData, impact_level: parseInt(value)})}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 - Impact minimal</SelectItem>
                    <SelectItem value="2">2 - Impact faible</SelectItem>
                    <SelectItem value="3">3 - Impact modéré</SelectItem>
                    <SelectItem value="4">4 - Impact important</SelectItem>
                    <SelectItem value="5">5 - Impact très important</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="description">Description (optionnel)</Label>
                <Textarea
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  placeholder="Détails supplémentaires..."
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="support_needed"
                    checked={formData.support_needed}
                    onCheckedChange={(checked) => setFormData({...formData, support_needed: !!checked})}
                  />
                  <Label htmlFor="support_needed">J'aimerais bénéficier d'un accompagnement</Label>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="confidential"
                    checked={formData.confidential}
                    onCheckedChange={(checked) => setFormData({...formData, confidential: !!checked})}
                  />
                  <Label htmlFor="confidential">Garder cet événement confidentiel</Label>
                </div>
              </div>

              <Button type="submit" className="w-full">
                Signaler l'événement
              </Button>
            </form>
          )}

          {showQuestionnaire && (
            <Card className="mb-6 border-blue-200">
              <CardHeader>
                <CardTitle className="text-lg">Questionnaire de suivi</CardTitle>
                <p className="text-sm text-gray-600">
                  Pour mieux vous accompagner, merci de répondre à quelques questions
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label>Impact émotionnel</Label>
                  <Select value={questionnaireData.emotional_impact} onValueChange={(value) => setQuestionnaireData({...questionnaireData, emotional_impact: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Comment vous sentez-vous ?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tres_positif">Très positif</SelectItem>
                      <SelectItem value="positif">Positif</SelectItem>
                      <SelectItem value="neutre">Neutre</SelectItem>
                      <SelectItem value="difficile">Difficile</SelectItem>
                      <SelectItem value="tres_difficile">Très difficile</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Impact sur le travail</Label>
                  <Select value={questionnaireData.work_impact} onValueChange={(value) => setQuestionnaireData({...questionnaireData, work_impact: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Quel impact sur votre travail ?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="aucun">Aucun impact</SelectItem>
                      <SelectItem value="concentration">Difficultés de concentration</SelectItem>
                      <SelectItem value="motivation">Baisse de motivation</SelectItem>
                      <SelectItem value="organisation">Besoin de réorganisation</SelectItem>
                      <SelectItem value="temps_partiel">Besoin de temps partiel</SelectItem>
                      <SelectItem value="conge">Besoin de congés</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Type d'accompagnement souhaité</Label>
                  <Select value={questionnaireData.support_type} onValueChange={(value) => setQuestionnaireData({...questionnaireData, support_type: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Quel type d'aide ?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ecoute">Écoute et soutien</SelectItem>
                      <SelectItem value="pratique">Aide pratique</SelectItem>
                      <SelectItem value="financiere">Information sur les aides</SelectItem>
                      <SelectItem value="juridique">Conseil juridique</SelectItem>
                      <SelectItem value="psychologique">Soutien psychologique</SelectItem>
                      <SelectItem value="medical">Orientation médicale</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex gap-2">
                  <Button onClick={() => handleQuestionnaireSubmit(showQuestionnaire)} className="flex-1">
                    Enregistrer le questionnaire
                  </Button>
                  <Button variant="outline" onClick={() => setShowQuestionnaire(null)}>
                    Plus tard
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          <div className="space-y-3">
            {events.length === 0 ? (
              <p className="text-center text-gray-500 py-8">
                Aucun événement signalé
              </p>
            ) : (
              events.map((event) => (
                <div key={event.id} className="border rounded-lg p-4 bg-white">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-2">
                      {getEventIcon(event.event_type)}
                      <h4 className="font-medium">
                        {EVENT_TYPES.find(t => t.value === event.event_type)?.label || event.event_type}
                      </h4>
                    </div>
                    <div className="flex gap-2">
                      <Badge className={getImpactColor(event.impact_level)}>
                        Impact niveau {event.impact_level}
                      </Badge>
                      {event.confidential && (
                        <Badge variant="secondary">Confidentiel</Badge>
                      )}
                      {event.support_needed && (
                        <Badge className="bg-blue-100 text-blue-800">Support demandé</Badge>
                      )}
                    </div>
                  </div>
                  
                  <div className="text-sm text-gray-600 mb-2">
                    Date : {new Date(event.event_date).toLocaleDateString('fr-FR')}
                  </div>
                  
                  {event.description && (
                    <p className="text-sm text-gray-600">{event.description}</p>
                  )}
                </div>
              ))
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EmployeeEventsForm;
