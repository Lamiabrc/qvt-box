
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { useEmployeeSpecificities } from '@/hooks/useEmployeeSpecificities';
import { Badge } from '@/components/ui/badge';
import { Calendar, AlertTriangle, Shield } from 'lucide-react';

const SPECIFICITY_TYPES = [
  { value: 'itinerant', label: 'Travail itinérant' },
  { value: 'penibilite', label: 'Pénibilité' },
  { value: 'port_charges', label: 'Port de charges lourdes' },
  { value: 'travail_nuit', label: 'Travail de nuit' },
  { value: 'horaires_decales', label: 'Horaires décalés' },
  { value: 'exposition_chimique', label: 'Exposition chimique' },
  { value: 'bruit', label: 'Exposition au bruit' },
  { value: 'vibrations', label: 'Exposition aux vibrations' },
  { value: 'postures_difficiles', label: 'Postures difficiles' },
  { value: 'temperatures_extremes', label: 'Températures extrêmes' },
  { value: 'conduite', label: 'Conduite prolongée' },
  { value: 'travail_isole', label: 'Travail isolé' },
  { value: 'stress_intense', label: 'Stress professionnel intense' },
  { value: 'contact_public', label: 'Contact public difficile' },
  { value: 'responsabilites_lourdes', label: 'Responsabilités lourdes' }
];

const EmployeeSpecificitiesForm = () => {
  const { specificities, loading, addSpecificity, updateSpecificity } = useEmployeeSpecificities();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    specificity_type: '',
    severity_level: 1,
    description: '',
    start_date: '',
    end_date: '',
    is_active: true
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.specificity_type) return;

    await addSpecificity(formData);
    setFormData({
      specificity_type: '',
      severity_level: 1,
      description: '',
      start_date: '',
      end_date: '',
      is_active: true
    });
    setIsFormOpen(false);
  };

  const getSeverityColor = (level: number) => {
    switch (level) {
      case 1: return 'bg-green-100 text-green-800';
      case 2: return 'bg-yellow-100 text-yellow-800';
      case 3: return 'bg-orange-100 text-orange-800';
      case 4: return 'bg-red-100 text-red-800';
      case 5: return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getSeverityLabel = (level: number) => {
    const labels = ['', 'Faible', 'Modéré', 'Important', 'Élevé', 'Critique'];
    return labels[level] || 'Non défini';
  };

  if (loading) {
    return <div className="text-center py-4">Chargement...</div>;
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-blue-600" />
            Mes Spécificités Professionnelles
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center mb-4">
            <p className="text-sm text-gray-600">
              Signalez vos spécificités professionnelles pour un accompagnement adapté
            </p>
            <Button onClick={() => setIsFormOpen(!isFormOpen)}>
              {isFormOpen ? 'Annuler' : 'Ajouter une spécificité'}
            </Button>
          </div>

          {isFormOpen && (
            <form onSubmit={handleSubmit} className="space-y-4 mb-6 p-4 border rounded-lg bg-gray-50">
              <div>
                <Label htmlFor="specificity_type">Type de spécificité</Label>
                <Select value={formData.specificity_type} onValueChange={(value) => setFormData({...formData, specificity_type: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionnez une spécificité" />
                  </SelectTrigger>
                  <SelectContent>
                    {SPECIFICITY_TYPES.map((type) => (
                      <SelectItem key={type.value} value={type.value}>
                        {type.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="severity_level">Niveau d'impact (1-5)</Label>
                <Select value={formData.severity_level.toString()} onValueChange={(value) => setFormData({...formData, severity_level: parseInt(value)})}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {[1, 2, 3, 4, 5].map((level) => (
                      <SelectItem key={level} value={level.toString()}>
                        {level} - {getSeverityLabel(level)}
                      </SelectItem>
                    ))}
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

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="start_date">Date de début</Label>
                  <Input
                    type="date"
                    value={formData.start_date}
                    onChange={(e) => setFormData({...formData, start_date: e.target.value})}
                  />
                </div>
                <div>
                  <Label htmlFor="end_date">Date de fin (si applicable)</Label>
                  <Input
                    type="date"
                    value={formData.end_date}
                    onChange={(e) => setFormData({...formData, end_date: e.target.value})}
                  />
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="is_active"
                  checked={formData.is_active}
                  onCheckedChange={(checked) => setFormData({...formData, is_active: !!checked})}
                />
                <Label htmlFor="is_active">Spécificité actuellement active</Label>
              </div>

              <Button type="submit" className="w-full">
                Enregistrer la spécificité
              </Button>
            </form>
          )}

          <div className="space-y-3">
            {specificities.length === 0 ? (
              <p className="text-center text-gray-500 py-8">
                Aucune spécificité enregistrée
              </p>
            ) : (
              specificities.map((specificity) => (
                <div key={specificity.id} className="border rounded-lg p-4 bg-white">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium">
                      {SPECIFICITY_TYPES.find(t => t.value === specificity.specificity_type)?.label || specificity.specificity_type}
                    </h4>
                    <div className="flex gap-2">
                      <Badge className={getSeverityColor(specificity.severity_level)}>
                        Niveau {specificity.severity_level}
                      </Badge>
                      {specificity.is_active ? (
                        <Badge className="bg-green-100 text-green-800">Actif</Badge>
                      ) : (
                        <Badge variant="secondary">Inactif</Badge>
                      )}
                    </div>
                  </div>
                  
                  {specificity.description && (
                    <p className="text-sm text-gray-600 mb-2">{specificity.description}</p>
                  )}
                  
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    {specificity.start_date && (
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        Depuis le {new Date(specificity.start_date).toLocaleDateString('fr-FR')}
                      </span>
                    )}
                    {specificity.end_date && (
                      <span>
                        Jusqu'au {new Date(specificity.end_date).toLocaleDateString('fr-FR')}
                      </span>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EmployeeSpecificitiesForm;
