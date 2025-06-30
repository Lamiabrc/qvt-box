
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

export interface EmployeeEvent {
  id: string;
  user_id: string;
  event_type: string;
  event_date: string;
  description?: string;
  impact_level: number;
  support_needed: boolean;
  confidential: boolean;
  created_at: string;
  updated_at: string;
}

export interface EventQuestionnaire {
  id: string;
  event_id: string;
  user_id: string;
  questionnaire_type: string;
  responses: Record<string, any>;
  wellbeing_score?: number;
  support_needs: Record<string, any>;
  follow_up_required: boolean;
  created_at: string;
}

export const useEmployeeEvents = () => {
  const [events, setEvents] = useState<EmployeeEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  const fetchEvents = async () => {
    try {
      const { data, error } = await supabase
        .from('employee_events')
        .select('*')
        .order('event_date', { ascending: false });

      if (error) throw error;
      setEvents(data || []);
    } catch (error) {
      console.error('Error fetching events:', error);
      toast({
        title: "Erreur",
        description: "Impossible de charger les événements",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const addEvent = async (event: Omit<EmployeeEvent, 'id' | 'user_id' | 'created_at' | 'updated_at'>) => {
    try {
      const { data: userData } = await supabase.auth.getUser();
      if (!userData.user) throw new Error('User not authenticated');

      const { data, error } = await supabase
        .from('employee_events')
        .insert({
          ...event,
          user_id: userData.user.id
        })
        .select()
        .single();

      if (error) throw error;
      
      toast({
        title: "Succès",
        description: "Événement ajouté avec succès"
      });
      
      fetchEvents();
      return data;
    } catch (error) {
      console.error('Error adding event:', error);
      toast({
        title: "Erreur",
        description: "Impossible d'ajouter l'événement",
        variant: "destructive"
      });
    }
  };

  const addEventQuestionnaire = async (questionnaire: Omit<EventQuestionnaire, 'id' | 'user_id' | 'created_at'>) => {
    try {
      const { data: userData } = await supabase.auth.getUser();
      if (!userData.user) throw new Error('User not authenticated');

      const { error } = await supabase
        .from('event_questionnaires')
        .insert({
          ...questionnaire,
          user_id: userData.user.id
        });

      if (error) throw error;
      
      toast({
        title: "Succès",
        description: "Questionnaire enregistré avec succès"
      });
    } catch (error) {
      console.error('Error adding questionnaire:', error);
      toast({
        title: "Erreur",
        description: "Impossible d'enregistrer le questionnaire",
        variant: "destructive"
      });
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return {
    events,
    loading,
    addEvent,
    addEventQuestionnaire,
    refetch: fetchEvents
  };
};
