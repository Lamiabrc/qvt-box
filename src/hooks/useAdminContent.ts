
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';

export interface ContentItem {
  id: string;
  page: string;
  section: string;
  content_key: string;
  content_value: any;
  content_type: 'text' | 'image' | 'html' | 'json';
  is_published: boolean;
  created_at: string;
  updated_at: string;
}

export const useAdminContent = () => {
  const [content, setContent] = useState<ContentItem[]>([]);
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const { toast } = useToast();

  const loadContent = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('site_content')
        .select('*')
        .order('page', { ascending: true })
        .order('section', { ascending: true });

      if (error) throw error;
      setContent(data || []);
    } catch (error) {
      console.error('Error loading content:', error);
      toast({
        title: "Erreur",
        description: "Impossible de charger le contenu",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const updateContent = async (id: string, updates: Partial<ContentItem>) => {
    try {
      const { error } = await supabase
        .from('site_content')
        .update(updates)
        .eq('id', id);

      if (error) throw error;
      
      await loadContent();
      toast({
        title: "Contenu mis à jour",
        description: "Les modifications ont été sauvegardées"
      });
    } catch (error) {
      console.error('Error updating content:', error);
      toast({
        title: "Erreur",
        description: "Impossible de mettre à jour le contenu",
        variant: "destructive"
      });
    }
  };

  const createContent = async (contentData: Omit<ContentItem, 'id' | 'created_at' | 'updated_at'>) => {
    try {
      const { error } = await supabase
        .from('site_content')
        .insert(contentData);

      if (error) throw error;
      
      await loadContent();
      toast({
        title: "Contenu créé",
        description: "Le nouveau contenu a été ajouté"
      });
    } catch (error) {
      console.error('Error creating content:', error);
      toast({
        title: "Erreur",
        description: "Impossible de créer le contenu",
        variant: "destructive"
      });
    }
  };

  const deleteContent = async (id: string) => {
    try {
      const { error } = await supabase
        .from('site_content')
        .delete()
        .eq('id', id);

      if (error) throw error;
      
      await loadContent();
      toast({
        title: "Contenu supprimé",
        description: "Le contenu a été supprimé avec succès"
      });
    } catch (error) {
      console.error('Error deleting content:', error);
      toast({
        title: "Erreur",
        description: "Impossible de supprimer le contenu",
        variant: "destructive"
      });
    }
  };

  useEffect(() => {
    loadContent();
  }, []);

  return {
    content,
    loading,
    loadContent,
    updateContent,
    createContent,
    deleteContent
  };
};
