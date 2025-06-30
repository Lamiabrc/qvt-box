
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

export interface EmployeeSpecificity {
  id: string;
  user_id: string;
  specificity_type: string;
  severity_level: number;
  description?: string;
  start_date?: string;
  end_date?: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export const useEmployeeSpecificities = () => {
  const [specificities, setSpecificities] = useState<EmployeeSpecificity[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  const fetchSpecificities = async () => {
    try {
      const { data, error } = await supabase
        .from('employee_specificities')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setSpecificities(data || []);
    } catch (error) {
      console.error('Error fetching specificities:', error);
      toast({
        title: "Erreur",
        description: "Impossible de charger les spécificités",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const addSpecificity = async (specificity: Omit<EmployeeSpecificity, 'id' | 'user_id' | 'created_at' | 'updated_at'>) => {
    try {
      const { data: userData } = await supabase.auth.getUser();
      if (!userData.user) throw new Error('User not authenticated');

      const { error } = await supabase
        .from('employee_specificities')
        .insert({
          ...specificity,
          user_id: userData.user.id
        });

      if (error) throw error;
      
      toast({
        title: "Succès",
        description: "Spécificité ajoutée avec succès"
      });
      
      fetchSpecificities();
    } catch (error) {
      console.error('Error adding specificity:', error);
      toast({
        title: "Erreur",
        description: "Impossible d'ajouter la spécificité",
        variant: "destructive"
      });
    }
  };

  const updateSpecificity = async (id: string, updates: Partial<EmployeeSpecificity>) => {
    try {
      const { error } = await supabase
        .from('employee_specificities')
        .update(updates)
        .eq('id', id);

      if (error) throw error;
      
      toast({
        title: "Succès",
        description: "Spécificité mise à jour"
      });
      
      fetchSpecificities();
    } catch (error) {
      console.error('Error updating specificity:', error);
      toast({
        title: "Erreur",
        description: "Impossible de mettre à jour la spécificité",
        variant: "destructive"
      });
    }
  };

  useEffect(() => {
    fetchSpecificities();
  }, []);

  return {
    specificities,
    loading,
    addSpecificity,
    updateSpecificity,
    refetch: fetchSpecificities
  };
};
