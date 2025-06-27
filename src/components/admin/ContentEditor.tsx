
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Save, Palette, Type, Refresh } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useEditableContent } from "@/hooks/useEditableContent";

const ContentEditor = () => {
  const { content, theme, loading, updateContent, updateThemeColor, refreshContent, refreshTheme } = useEditableContent();
  const { toast } = useToast();
  const [editingContent, setEditingContent] = useState<string | null>(null);
  const [editingTheme, setEditingTheme] = useState<string | null>(null);

  const handleContentSave = async (page: string, section: string, key: string, value: string) => {
    try {
      await updateContent(page, section, key, value);
      setEditingContent(null);
      toast({
        title: "Contenu sauvegardé",
        description: "Le contenu a été mis à jour avec succès"
      });
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Impossible de sauvegarder le contenu",
        variant: "destructive"
      });
    }
  };

  const handleColorSave = async (colorKey: string, color: string) => {
    try {
      await updateThemeColor(colorKey, color);
      setEditingTheme(null);
      toast({
        title: "Couleur sauvegardée",
        description: "La couleur du thème a été mise à jour"
      });
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Impossible de sauvegarder la couleur",
        variant: "destructive"
      });
    }
  };

  const refreshAll = async () => {
    await Promise.all([refreshContent(), refreshTheme()]);
    toast({
      title: "Données actualisées",
      description: "Le contenu et les thèmes ont été rechargés"
    });
  };

  if (loading) {
    return <div className="p-6">Chargement...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Éditeur de Contenu</h2>
        <Button onClick={refreshAll} variant="outline">
          <Refresh className="w-4 h-4 mr-2" />
          Actualiser
        </Button>
      </div>

      {/* Thème et couleurs */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Palette className="w-5 h-5" />
            Thème et Couleurs
          </CardTitle>
          <CardDescription>
            Personnalisez les couleurs du site
          </CardDescription>
        </CardHeader>
        <CardContent>
          {theme && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {Object.entries(theme.colors || {}).map(([key, color]) => (
                <div key={key} className="space-y-2">
                  <label className="text-sm font-medium capitalize">
                    {key.replace('_', ' ')}
                  </label>
                  <div className="flex gap-2">
                    <div 
                      className="w-12 h-12 rounded border"
                      style={{ backgroundColor: color as string }}
                    />
                    <Input
                      type="color"
                      value={color as string}
                      onChange={(e) => handleColorSave(key, e.target.value)}
                      className="w-20"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Contenu modifiable */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Type className="w-5 h-5" />
            Contenu Modifiable
          </CardTitle>
          <CardDescription>
            Modifiez les textes du site
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {content.map((item) => (
              <div key={item.id} className="border rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <div className="flex gap-2 mb-1">
                      <Badge variant="outline">{item.page_name}</Badge>
                      <Badge variant="secondary">{item.section_name}</Badge>
                      <Badge>{item.content_key}</Badge>
                    </div>
                    {item.description && (
                      <p className="text-sm text-gray-600">{item.description}</p>
                    )}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Contenu:</label>
                  {item.content_type === 'text' ? (
                    <Textarea
                      value={item.content_value?.fr || ''}
                      onChange={(e) => {
                        const newContent = [...content];
                        const index = newContent.findIndex(c => c.id === item.id);
                        if (index !== -1) {
                          newContent[index] = {
                            ...newContent[index],
                            content_value: { fr: e.target.value }
                          };
                        }
                      }}
                      className="min-h-[60px]"
                    />
                  ) : (
                    <Input
                      value={item.content_value?.fr || ''}
                      onChange={(e) => {
                        const newContent = [...content];
                        const index = newContent.findIndex(c => c.id === item.id);
                        if (index !== -1) {
                          newContent[index] = {
                            ...newContent[index],
                            content_value: { fr: e.target.value }
                          };
                        }
                      }}
                    />
                  )}
                  
                  <Button
                    onClick={() => handleContentSave(
                      item.page_name,
                      item.section_name,
                      item.content_key,
                      item.content_value?.fr || ''
                    )}
                    size="sm"
                    className="bg-green-600 hover:bg-green-700"
                  >
                    <Save className="w-4 h-4 mr-2" />
                    Sauvegarder
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContentEditor;
