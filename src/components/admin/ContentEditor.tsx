
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Edit, Save, Plus, Palette, Type, Image } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useEditableContent } from '@/hooks/useEditableContent';

const ContentEditor = () => {
  const { content, theme, updateContent, updateTheme, loading } = useEditableContent();
  const [editingItem, setEditingItem] = useState<string | null>(null);
  const [editValue, setEditValue] = useState('');
  const [colorEdit, setColorEdit] = useState<any>({});
  const { toast } = useToast();

  const groupedContent = content.reduce((acc, item) => {
    const key = `${item.page_name}_${item.section_name}`;
    if (!acc[key]) {
      acc[key] = {
        page: item.page_name,
        section: item.section_name,
        items: []
      };
    }
    acc[key].items.push(item);
    return acc;
  }, {} as any);

  const handleEditContent = (item: any) => {
    setEditingItem(item.id);
    if (item.content_type === 'text' && typeof item.content_value === 'object') {
      setEditValue(item.content_value.fr || '');
    } else {
      setEditValue(item.content_value || '');
    }
  };

  const handleSaveContent = async (item: any) => {
    let newValue;
    if (item.content_type === 'text') {
      newValue = { fr: editValue };
    } else if (item.content_type === 'color') {
      newValue = editValue;
    } else {
      newValue = editValue;
    }

    const success = await updateContent(item.id, newValue);
    if (success) {
      toast({
        title: "Contenu mis à jour",
        description: "Les modifications ont été sauvegardées avec succès"
      });
      setEditingItem(null);
    } else {
      toast({
        title: "Erreur",
        description: "Impossible de sauvegarder les modifications",
        variant: "destructive"
      });
    }
  };

  const handleColorChange = (colorKey: string, newColor: string) => {
    setColorEdit(prev => ({
      ...prev,
      [colorKey]: newColor
    }));
  };

  const handleSaveTheme = async () => {
    if (!theme) return;

    const newColors = { ...theme.colors, ...colorEdit };
    const success = await updateTheme(theme.id, { colors: newColors });
    
    if (success) {
      toast({
        title: "Thème mis à jour",
        description: "Les couleurs ont été sauvegardées avec succès"
      });
      setColorEdit({});
    } else {
      toast({
        title: "Erreur",
        description: "Impossible de sauvegarder le thème",
        variant: "destructive"
      });
    }
  };

  if (loading) {
    return <div className="flex justify-center p-8">Chargement du contenu...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-gray-800">Éditeur de Contenu</h2>
      </div>

      <Tabs defaultValue="content">
        <TabsList className="grid w-full grid-cols-2 max-w-md">
          <TabsTrigger value="content">
            <Type className="w-4 h-4 mr-2" />
            Contenus
          </TabsTrigger>
          <TabsTrigger value="theme">
            <Palette className="w-4 h-4 mr-2" />
            Thème
          </TabsTrigger>
        </TabsList>

        <TabsContent value="content" className="space-y-6">
          {Object.values(groupedContent).map((group: any) => (
            <Card key={`${group.page}_${group.section}`}>
              <CardHeader>
                <CardTitle className="capitalize">
                  {group.page} - {group.section}
                </CardTitle>
                <CardDescription>
                  Section {group.section} de la page {group.page}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {group.items.map((item: any) => (
                  <div key={item.id} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">{item.content_key}</Badge>
                        <Badge variant="secondary">{item.content_type}</Badge>
                      </div>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleEditContent(item)}
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                    </div>
                    
                    {item.description && (
                      <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                    )}

                    {editingItem === item.id ? (
                      <div className="space-y-2">
                        {item.content_type === 'text' ? (
                          <Textarea
                            value={editValue}
                            onChange={(e) => setEditValue(e.target.value)}
                            rows={3}
                          />
                        ) : (
                          <Input
                            type={item.content_type === 'color' ? 'color' : 'text'}
                            value={editValue}
                            onChange={(e) => setEditValue(e.target.value)}
                          />
                        )}
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            onClick={() => handleSaveContent(item)}
                          >
                            <Save className="w-4 h-4 mr-1" />
                            Sauvegarder
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => setEditingItem(null)}
                          >
                            Annuler
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <div className="p-3 bg-gray-50 rounded">
                        {item.content_type === 'text' && typeof item.content_value === 'object' 
                          ? item.content_value.fr 
                          : String(item.content_value)
                        }
                      </div>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="theme" className="space-y-6">
          {theme && (
            <Card>
              <CardHeader>
                <CardTitle>Gestion des Couleurs</CardTitle>
                <CardDescription>
                  Personnalisez les couleurs de votre site
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {Object.entries(theme.colors).map(([key, value]) => (
                    <div key={key} className="space-y-2">
                      <label className="block text-sm font-medium capitalize">
                        {key.replace('_', ' ')}
                      </label>
                      <div className="flex items-center gap-2">
                        <input
                          type="color"
                          value={colorEdit[key] || value as string}
                          onChange={(e) => handleColorChange(key, e.target.value)}
                          className="w-10 h-10 rounded border"
                        />
                        <Input
                          value={colorEdit[key] || value as string}
                          onChange={(e) => handleColorChange(key, e.target.value)}
                          className="flex-1"
                        />
                      </div>
                    </div>
                  ))}
                </div>
                
                {Object.keys(colorEdit).length > 0 && (
                  <div className="flex justify-end pt-4">
                    <Button onClick={handleSaveTheme}>
                      <Save className="w-4 h-4 mr-2" />
                      Sauvegarder le Thème
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ContentEditor;
