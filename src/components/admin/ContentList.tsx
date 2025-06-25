
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Edit, Trash2, Eye, FileText } from "lucide-react";
import { ContentItem } from "@/hooks/useAdminContent";

interface ContentListProps {
  content: ContentItem[];
  onEdit: (item: ContentItem) => void;
  onDelete: (id: string) => void;
}

export const ContentList: React.FC<ContentListProps> = ({
  content,
  onEdit,
  onDelete
}) => {
  const getContentPreview = (item: ContentItem) => {
    if (typeof item.content_value === 'string') {
      return item.content_value.length > 100 
        ? item.content_value.substring(0, 100) + '...'
        : item.content_value;
    }
    return JSON.stringify(item.content_value).substring(0, 100) + '...';
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'html': return '🌐';
      case 'json': return '📊';
      case 'image': return '🖼️';
      default: return '📝';
    }
  };

  return (
    <div className="grid gap-4">
      {content.map((item) => (
        <Card key={item.id} className="hover:shadow-md transition-shadow">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 flex-1">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-2xl">
                  {getTypeIcon(item.content_type)}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold">{item.page}/{item.section}</h3>
                    <Badge variant="outline" className="text-xs">
                      {item.content_key}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">
                    {getContentPreview(item)}
                  </p>
                  <div className="flex gap-2 mt-2">
                    <Badge variant="secondary" className="text-xs">
                      {item.content_type}
                    </Badge>
                    <Badge 
                      variant={item.is_published ? 'default' : 'secondary'}
                      className={item.is_published ? 'bg-green-600' : ''}
                    >
                      {item.is_published ? 'Publié' : 'Brouillon'}
                    </Badge>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="text-right text-xs text-gray-500">
                  <p>Modifié le</p>
                  <p>{new Date(item.updated_at).toLocaleDateString('fr-FR')}</p>
                </div>
                
                <div className="flex gap-1">
                  <Button size="sm" variant="outline">
                    <Eye className="w-4 h-4" />
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    onClick={() => onEdit(item)}
                  >
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline"
                    onClick={() => onDelete(item.id)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
