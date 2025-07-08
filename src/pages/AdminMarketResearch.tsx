
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { 
  Users, 
  Building2, 
  BarChart3, 
  Download, 
  Search,
  Filter,
  Calendar,
  Mail,
  Phone,
  Star
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import FloatingBubbles from "../components/FloatingBubbles";

interface MarketResearchSubmission {
  id: string;
  email: string;
  full_name: string;
  company_name: string;
  company_size: string;
  role: string;
  interest_level: number;
  target_audience: string[];
  current_solutions: string;
  budget_range: string;
  timeline: string;
  specific_needs: string;
  phone: string;
  consent_marketing: boolean;
  consent_data: boolean;
  source: string;
  created_at: string;
}

const AdminMarketResearch = () => {
  const { toast } = useToast();
  const [submissions, setSubmissions] = useState<MarketResearchSubmission[]>([]);
  const [filteredSubmissions, setFilteredSubmissions] = useState<MarketResearchSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterBy, setFilterBy] = useState('all');

  useEffect(() => {
    fetchSubmissions();
  }, []);

  useEffect(() => {
    filterSubmissions();
  }, [submissions, searchTerm, filterBy]);

  const fetchSubmissions = async () => {
    try {
      const { data, error } = await supabase
        .from('market_research_submissions')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setSubmissions(data || []);
    } catch (error) {
      console.error('Erreur lors du chargement:', error);
      toast({
        title: "Erreur",
        description: "Impossible de charger les données.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const filterSubmissions = () => {
    let filtered = submissions;

    // Filtre par terme de recherche
    if (searchTerm) {
      filtered = filtered.filter(sub => 
        sub.full_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        sub.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        sub.company_name?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filtre par critère
    if (filterBy !== 'all') {
      switch (filterBy) {
        case 'high_interest':
          filtered = filtered.filter(sub => sub.interest_level >= 8);
          break;
        case 'enterprise':
          filtered = filtered.filter(sub => sub.target_audience?.includes('entreprise'));
          break;
        case 'family':
          filtered = filtered.filter(sub => sub.target_audience?.includes('famille'));
          break;
        case 'teens':
          filtered = filtered.filter(sub => sub.target_audience?.includes('ados'));
          break;
        case 'marketing_consent':
          filtered = filtered.filter(sub => sub.consent_marketing);
          break;
      }
    }

    setFilteredSubmissions(filtered);
  };

  const exportToCsv = () => {
    const headers = [
      'Date', 'Nom', 'Email', 'Téléphone', 'Entreprise', 'Fonction', 'Taille entreprise',
      'Niveau intérêt', 'Public cible', 'Solutions actuelles', 'Budget', 'Échéance',
      'Besoins spécifiques', 'Consent marketing', 'Source'
    ];

    const csvData = filteredSubmissions.map(sub => [
      new Date(sub.created_at).toLocaleDateString('fr-FR'),
      sub.full_name || '',
      sub.email || '',
      sub.phone || '',
      sub.company_name || '',
      sub.role || '',
      sub.company_size || '',
      sub.interest_level || '',
      sub.target_audience?.join(', ') || '',
      sub.current_solutions || '',
      sub.budget_range || '',
      sub.timeline || '',
      sub.specific_needs || '',
      sub.consent_marketing ? 'Oui' : 'Non',
      sub.source || ''
    ]);

    const csvContent = [headers, ...csvData]
      .map(row => row.map(cell => `"${cell}"`).join(','))
      .join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `etude_marche_${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
  };

  const getInterestColor = (level: number) => {
    if (level >= 8) return 'bg-green-100 text-green-800';
    if (level >= 6) return 'bg-blue-100 text-blue-800';
    if (level >= 4) return 'bg-yellow-100 text-yellow-800';
    return 'bg-red-100 text-red-800';
  };

  const stats = {
    total: submissions.length,
    highInterest: submissions.filter(s => s.interest_level >= 8).length,
    marketingConsent: submissions.filter(s => s.consent_marketing).length,
    avgInterest: submissions.length > 0 ? 
      Math.round(submissions.reduce((acc, s) => acc + s.interest_level, 0) / submissions.length * 10) / 10 : 0
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Chargement des données...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 relative overflow-hidden">
      <FloatingBubbles />
      
      <div className="container mx-auto px-4 py-6 relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-800">Étude de Marché</h1>
            <p className="text-slate-600">Analyse des soumissions et préinscriptions</p>
          </div>
          <Button onClick={exportToCsv} className="flex items-center gap-2">
            <Download className="w-4 h-4" />
            Exporter CSV
          </Button>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Soumissions</p>
                  <p className="text-2xl font-bold text-blue-700">{stats.total}</p>
                </div>
                <Users className="w-8 h-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Très Intéressés</p>
                  <p className="text-2xl font-bold text-green-700">{stats.highInterest}</p>
                </div>
                <Star className="w-8 h-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Consent Marketing</p>
                  <p className="text-2xl font-bold text-purple-700">{stats.marketingConsent}</p>
                </div>
                <Mail className="w-8 h-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Intérêt Moyen</p>
                  <p className="text-2xl font-bold text-orange-700">{stats.avgInterest}/10</p>
                </div>
                <BarChart3 className="w-8 h-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card className="mb-6">
          <CardContent className="p-4">
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex-1 min-w-64">
                <div className="relative">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <Input
                    placeholder="Rechercher par nom, email ou entreprise..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <select
                value={filterBy}
                onChange={(e) => setFilterBy(e.target.value)}
                className="px-3 py-2 border rounded-md bg-white"
              >
                <option value="all">Tous</option>
                <option value="high_interest">Très intéressés (8+)</option>
                <option value="enterprise">Public Entreprise</option>
                <option value="family">Public Famille</option>
                <option value="teens">Public Adolescents</option>
                <option value="marketing_consent">Consent Marketing</option>
              </select>
            </div>
          </CardContent>
        </Card>

        {/* Submissions List */}
        <div className="space-y-4">
          {filteredSubmissions.map((submission) => (
            <Card key={submission.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {submission.full_name || 'Nom non fourni'}
                    </h3>
                    <p className="text-gray-600">{submission.email}</p>
                    {submission.company_name && (
                      <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                        <Building2 className="w-3 h-3" />
                        {submission.company_name} - {submission.role}
                      </p>
                    )}
                  </div>
                  <div className="text-right">
                    <Badge className={getInterestColor(submission.interest_level)}>
                      Intérêt: {submission.interest_level}/10
                    </Badge>
                    <p className="text-sm text-gray-500 mt-1 flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(submission.created_at).toLocaleDateString('fr-FR')}
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="font-medium text-gray-700">Taille entreprise:</span>
                    <p className="text-gray-600">{submission.company_size || 'Non spécifié'}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Public cible:</span>
                    <p className="text-gray-600">
                      {submission.target_audience?.join(', ') || 'Non spécifié'}
                    </p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Budget:</span>
                    <p className="text-gray-600">{submission.budget_range || 'Non spécifié'}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Échéance:</span>
                    <p className="text-gray-600">{submission.timeline || 'Non spécifié'}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Téléphone:</span>
                    <p className="text-gray-600">{submission.phone || 'Non fourni'}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Consent marketing:</span>
                    <Badge variant={submission.consent_marketing ? "default" : "secondary"}>
                      {submission.consent_marketing ? 'Oui' : 'Non'}
                    </Badge>
                  </div>
                </div>

                {submission.current_solutions && (
                  <div className="mt-4">
                    <span className="font-medium text-gray-700">Solutions actuelles:</span>
                    <p className="text-gray-600 text-sm mt-1">{submission.current_solutions}</p>
                  </div>
                )}

                {submission.specific_needs && (
                  <div className="mt-4">
                    <span className="font-medium text-gray-700">Besoins spécifiques:</span>
                    <p className="text-gray-600 text-sm mt-1">{submission.specific_needs}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredSubmissions.length === 0 && (
          <Card>
            <CardContent className="p-8 text-center">
              <Users className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">Aucune soumission trouvée</h3>
              <p className="text-gray-600">
                {searchTerm || filterBy !== 'all' 
                  ? "Aucune soumission ne correspond à vos critères de recherche."
                  : "Aucune soumission n'a encore été reçue."}
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default AdminMarketResearch;
