import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface UserConnection {
  connection_id: string;
  connected_user_id: string;
  connected_user_name: string;
  connected_user_email: string;
  connection_status: string;
  emotional_state: {
    mood?: string;
    stress_level?: number;
    energy_level?: number;
    updated_at?: string;
  };
}

export const useUserConnections = (connectionType?: 'colleague' | 'friend' | 'family') => {
  const [connections, setConnections] = useState<UserConnection[]>([]);
  const [pendingRequests, setPendingRequests] = useState<UserConnection[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  const fetchConnections = async () => {
    try {
      const { data, error } = await supabase
        .rpc('get_user_connections', { connection_type: connectionType });
      
      if (error) throw error;
      setConnections(data || []);
    } catch (error) {
      console.error('Error fetching connections:', error);
      toast({
        title: "Erreur",
        description: "Impossible de charger les connexions",
        variant: "destructive"
      });
    }
  };

  const fetchPendingRequests = async () => {
    try {
      const { data, error } = await supabase
        .from('user_connections')
        .select(`
          id,
          requester_id,
          connection_type,
          status,
          profiles!user_connections_requester_id_fkey(full_name, email)
        `)
        .eq('addressee_id', (await supabase.auth.getUser()).data.user?.id)
        .eq('status', 'pending');
      
      if (error) throw error;
      
      const formatted = data?.map(req => ({
        connection_id: req.id,
        connected_user_id: req.requester_id,
        connected_user_name: (req.profiles as any)?.full_name || '',
        connected_user_email: (req.profiles as any)?.email || '',
        connection_status: req.status,
        emotional_state: {}
      })) || [];
      
      setPendingRequests(formatted);
    } catch (error) {
      console.error('Error fetching pending requests:', error);
    }
  };

  const sendConnectionRequest = async (userEmail: string, type: 'colleague' | 'friend' | 'family') => {
    try {
      // Trouver l'ID de l'utilisateur par email
      const { data: userData, error: userError } = await supabase
        .from('profiles')
        .select('id')
        .eq('email', userEmail)
        .single();
      
      if (userError) throw new Error('Utilisateur non trouvé');

      const { error } = await supabase
        .from('user_connections')
        .insert([{
          addressee_id: userData.id,
          connection_type: type,
          status: 'pending'
        }]);
      
      if (error) throw error;
      
      toast({
        title: "Demande envoyée",
        description: `Demande de connexion envoyée à ${userEmail}`
      });
      
      await fetchConnections();
    } catch (error: any) {
      toast({
        title: "Erreur",
        description: error.message || "Impossible d'envoyer la demande",
        variant: "destructive"
      });
    }
  };

  const respondToRequest = async (connectionId: string, accept: boolean) => {
    try {
      const { error } = await supabase
        .from('user_connections')
        .update({ status: accept ? 'accepted' : 'blocked' })
        .eq('id', connectionId);
      
      if (error) throw error;
      
      toast({
        title: accept ? "Demande acceptée" : "Demande refusée",
        description: accept ? "Nouvelle connexion établie" : "Demande de connexion refusée"
      });
      
      await Promise.all([fetchConnections(), fetchPendingRequests()]);
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Impossible de traiter la demande",
        variant: "destructive"
      });
    }
  };

  const updateEmotionalState = async (mood: string, stressLevel: number, energyLevel: number, notes?: string) => {
    try {
      const { error } = await supabase
        .from('user_emotional_states')
        .upsert([{
          mood,
          stress_level: stressLevel,
          energy_level: energyLevel,
          notes,
          updated_at: new Date().toISOString()
        }]);
      
      if (error) throw error;
      
      toast({
        title: "État mis à jour",
        description: "Votre état émotionnel a été partagé"
      });
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Impossible de mettre à jour l'état",
        variant: "destructive"
      });
    }
  };

  useEffect(() => {
    fetchConnections();
    fetchPendingRequests();
    setLoading(false);
  }, [connectionType]);

  return {
    connections,
    pendingRequests,
    loading,
    sendConnectionRequest,
    respondToRequest,
    updateEmotionalState,
    refreshConnections: fetchConnections
  };
};
