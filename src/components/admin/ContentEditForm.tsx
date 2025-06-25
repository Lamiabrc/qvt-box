
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Save, X } from "lucide-react";
import { ContentItem } from "@/hooks/useAdminContent";

interface ContentEditFormProps {
  content?: ContentItem;
  onSave: (data: any) => void;
  onCancel: () => void;
}

export const ContentEditForm: React.FC<ContentEditFormProps> = ({
  content,
  onSave,
  onCancel
}) => {
  const [formData, setFormData] = useState({
    page: '',
    section: '',
    content_key: '',
    content_value: '',
    content_type: 'text' as const,
    is_published: true
  });

  useEffect(() => {
    if (content) {
      setFormData({
        page: content.page,
        section: content.section,
        content_key: content.content_key,
        content_value: typeof content.content_value === 'string' 
          ? content.content_value 
          : JSON.stringify(content.content_value, null, 2),
        content_type: content.content_type,
        is_published: content.is_published
      });
    }
  }, [content]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    let parsedValue = formData.content_value;
    if (formData.content_type === 'json') {
      try {
        parsedValue = JSON.parse(formData.content_value);
      } catch (error) {
        alert('JSON invalide. Veuillez vérifier la syntaxe.');
        return;
      }
    }

    onSave({
      ...formData,
      content_value: parsedValue
    });
  };

  return (
    <Card className="border-blue-200 bg-blue-50">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>
            {content ? 'Modifier le contenu' : 'Nouveau contenu'}
          </CardTitle>
          <Button variant="ghost" size="sm" onClick={onCancel}>
            <X className="w-4 h-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="page">Page</Label>
              <Input
                id="page"
                value={formData.page}
                onChange={(e) => setFormData({...formData, page: e.target.value})}
                placeholder="ex: home, shop, contact"
                required
              />
            </div>
            <div>
              <Label htmlFor="section">Section</Label>
              <Input
                id="section"
                value={formData.section}
                onChange={(e) => setFormData({...formData, section: e.target.value})}
                placeholder="ex: hero, about, features"
                required
              />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="content_key">Clé du contenu</Label>
              <Input
                id="content_key"
                value={formData.content_key}
                onChange={(e) => setFormData({...formData, content_key: e.target.value})}
                placeholder="ex: title, description, button_text"
                required
              />
            </div>
            <div>
              <Label htmlFor="content_type">Type de contenu</Label>
              <Select value={formData.content_type} onValueChange={(value: any) => setFormData({...formData, content_type: value})}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="text">Texte</SelectItem>
                  <SelectItem value="html">HTML</SelectItem>
                  <SelectItem value="json">JSON</SelectItem>
                  <SelectItem value="image">Image URL</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <Label htmlFor="content_value">Contenu</Label>
            <Textarea
              id="content_value"
              value={formData.content_value}
              onChange={(e) => setFormData({...formData, content_value: e.target.value})}
              placeholder={
                formData.content_type === 'json' 
                  ? '{"title": "Mon titre", "description": "Ma description"}'
                  : 'Entrez votre contenu ici...'
              }
              rows={formData.content_type === 'json' ? 8 : 4}
              required
            />
          </div>

          <div className="flex items-center space-x-2">
            <Switch
              id="is_published"
              checked={formData.is_published}
              onCheckedChange={(checked) => setFormData({...formData, is_published: checked})}
            />
            <Label htmlFor="is_published">Publié</Label>
          </div>

          <div className="flex gap-2">
            <Button type="submit" className="bg-green-600 hover:bg-green-700">
              <Save className="w-4 h-4 mr-2" />
              Sauvegarder
            </Button>
            <Button type="button" variant="outline" onClick={onCancel}>
              Annuler
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};
