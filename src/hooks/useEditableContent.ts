
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface EditableContent {
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
  const [content, setContent] = useState<EditableContent[]>([]);
  const [theme, setTheme] = useState<SiteTheme | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchContent = async () => {
    try {
      const { data, error } = await supabase
        .from('editable_content')
        .select('*');
      
      if (error) throw error;
      setContent(data || []);
    } catch (error) {
      console.error('Error fetching content:', error);
    }
  };

  const fetchActiveTheme = async () => {
    try {
      const { data, error } = await supabase
        .from('site_themes')
        .select('*')
        .eq('is_active', true)
        .single();
      
      if (error) throw error;
      setTheme(data);
    } catch (error) {
      console.error('Error fetching theme:', error);
    }
  };

  const getContent = (page: string, section: string, key: string, defaultValue = '') => {
    const item = content.find(
      c => c.page_name === page && c.section_name === section && c.content_key === key
    );
    return item?.content_value?.fr || defaultValue;
  };

  const getColor = (colorKey: string, defaultColor = '#000000') => {
    return theme?.colors?.[colorKey] || defaultColor;
  };

  const updateContent = async (page: string, section: string, key: string, value: any) => {
    try {
      const { error } = await supabase
        .from('editable_content')
        .upsert({
          page_name: page,
          section_name: section,
          content_key: key,
          content_value: { fr: value },
          content_type: 'text'
        });
      
      if (error) throw error;
      await fetchContent();
    } catch (error) {
      console.error('Error updating content:', error);
    }
  };

  const updateThemeColor = async (colorKey: string, color: string) => {
    if (!theme) return;
    
    try {
      const updatedColors = { ...theme.colors, [colorKey]: color };
      const { error } = await supabase
        .from('site_themes')
        .update({ colors: updatedColors })
        .eq('id', theme.id);
      
      if (error) throw error;
      await fetchActiveTheme();
    } catch (error) {
      console.error('Error updating theme:', error);
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
    updateThemeColor,
    refreshContent: fetchContent,
    refreshTheme: fetchActiveTheme
  };
};
