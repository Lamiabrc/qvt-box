
import { useState, useEffect } from 'react';
import { supabase } from "@/integrations/supabase/client";

interface EditableContentItem {
  id: string;
  page_name: string;
  section_name: string;
  content_key: string;
  content_type: string;
  content_value: any;
  default_value: any;
  description?: string;
}

interface SiteTheme {
  id: string;
  name: string;
  description?: string;
  colors: any;
  fonts: any;
  is_active: boolean;
}

export const useEditableContent = () => {
  const [content, setContent] = useState<EditableContentItem[]>([]);
  const [theme, setTheme] = useState<SiteTheme | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchContent = async () => {
    try {
      const { data, error } = await supabase
        .from('editable_content')
        .select('*')
        .order('page_name, section_name, content_key');

      if (error) throw error;
      setContent(data || []);
    } catch (error) {
      console.error('Erreur lors du chargement du contenu:', error);
    }
  };

  const fetchActiveTheme = async () => {
    try {
      const { data, error } = await supabase
        .from('site_themes')
        .select('*')
        .eq('is_active', true)
        .single();

      if (error && error.code !== 'PGRST116') throw error;
      setTheme(data);
    } catch (error) {
      console.error('Erreur lors du chargement du thème:', error);
    }
  };

  const getContent = (pageName: string, sectionName: string, contentKey: string, defaultValue: any = '') => {
    const item = content.find(
      c => c.page_name === pageName && 
           c.section_name === sectionName && 
           c.content_key === contentKey
    );
    
    if (!item) return defaultValue;
    
    if (item.content_type === 'text' && typeof item.content_value === 'object') {
      return item.content_value.fr || defaultValue;
    }
    
    return item.content_value || defaultValue;
  };

  const getColor = (colorKey: string, defaultColor: string = '#3B82F6') => {
    if (!theme?.colors) return defaultColor;
    return theme.colors[colorKey] || defaultColor;
  };

  const updateContent = async (id: string, newValue: any) => {
    try {
      const { error } = await supabase
        .from('editable_content')
        .update({ 
          content_value: newValue,
          updated_at: new Date().toISOString()
        })
        .eq('id', id);

      if (error) throw error;
      await fetchContent();
      return true;
    } catch (error) {
      console.error('Erreur lors de la mise à jour:', error);
      return false;
    }
  };

  const updateTheme = async (themeId: string, updates: Partial<SiteTheme>) => {
    try {
      const { error } = await supabase
        .from('site_themes')
        .update({ 
          ...updates,
          updated_at: new Date().toISOString()
        })
        .eq('id', themeId);

      if (error) throw error;
      await fetchActiveTheme();
      return true;
    } catch (error) {
      console.error('Erreur lors de la mise à jour du thème:', error);
      return false;
    }
  };

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      await Promise.all([fetchContent(), fetchActiveTheme()]);
      setLoading(false);
    };

    loadData();
  }, []);

  return {
    content,
    theme,
    loading,
    getContent,
    getColor,
    updateContent,
    updateTheme,
    fetchContent,
    fetchActiveTheme
  };
};
