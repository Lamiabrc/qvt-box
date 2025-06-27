
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface SocialGroup {
  id: string;
  name: string;
  type: 'team' | 'family' | 'friends';
  description?: string;
  created_by: string;
  group_code: string;
  created_at: string;
}

interface GroupMember {
  id: string;
  group_id: string;
  user_id: string;
  role: 'admin' | 'member';
  joined_at: string;
}

export const useSocialGroups = () => {
  const [groups, setGroups] = useState<SocialGroup[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  const fetchGroups = async () => {
    try {
      const { data, error } = await supabase
        .from('social_groups')
        .select(`
          *,
          social_group_members!inner(user_id, role)
        `);
      
      if (error) throw error;
      setGroups(data || []);
    } catch (error) {
      console.error('Error fetching groups:', error);
      toast({
        title: "Erreur",
        description: "Impossible de charger les groupes",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const createGroup = async (name: string, type: 'team' | 'family' | 'friends', description?: string) => {
    try {
      const groupCode = Math.random().toString(36).substring(2, 8).toUpperCase();
      
      const { data: group, error: groupError } = await supabase
        .from('social_groups')
        .insert({
          name,
          type,
          description,
          group_code: groupCode
        })
        .select()
        .single();

      if (groupError) throw groupError;

      // Ajouter le créateur comme admin du groupe
      const { error: memberError } = await supabase
        .from('social_group_members')
        .insert({
          group_id: group.id,
          user_id: (await supabase.auth.getUser()).data.user?.id,
          role: 'admin'
        });

      if (memberError) throw memberError;

      await fetchGroups();
      
      toast({
        title: "Groupe créé",
        description: `Le groupe "${name}" a été créé avec le code: ${groupCode}`
      });

      return group;
    } catch (error) {
      console.error('Error creating group:', error);
      toast({
        title: "Erreur",
        description: "Impossible de créer le groupe",
        variant: "destructive"
      });
    }
  };

  const joinGroup = async (groupCode: string) => {
    try {
      const { data: group, error: groupError } = await supabase
        .from('social_groups')
        .select('*')
        .eq('group_code', groupCode.toUpperCase())
        .single();

      if (groupError) throw groupError;

      const { error: memberError } = await supabase
        .from('social_group_members')
        .insert({
          group_id: group.id,
          user_id: (await supabase.auth.getUser()).data.user?.id,
          role: 'member'
        });

      if (memberError) throw memberError;

      await fetchGroups();
      
      toast({
        title: "Groupe rejoint",
        description: `Vous avez rejoint le groupe "${group.name}"`
      });
    } catch (error) {
      console.error('Error joining group:', error);
      toast({
        title: "Erreur",
        description: "Impossible de rejoindre le groupe. Vérifiez le code.",
        variant: "destructive"
      });
    }
  };

  useEffect(() => {
    fetchGroups();
  }, []);

  return {
    groups,
    loading,
    createGroup,
    joinGroup,
    refreshGroups: fetchGroups
  };
};
