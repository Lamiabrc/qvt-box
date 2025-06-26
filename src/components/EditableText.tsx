
import React, { useState } from 'react';
import { useEditableContent } from '@/hooks/useEditableContent';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Edit, Save, X } from 'lucide-react';

interface EditableTextProps {
  pageName: string;
  sectionName: string;
  contentKey: string;
  defaultValue?: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  multiline?: boolean;
  isAdmin?: boolean;
}

const EditableText: React.FC<EditableTextProps> = ({
  pageName,
  sectionName,
  contentKey,
  defaultValue = '',
  className = '',
  as: Component = 'p',
  multiline = false,
  isAdmin = false
}) => {
  const { content, getContent, updateContent } = useEditableContent();
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState('');

  const contentItem = content.find(
    c => c.page_name === pageName && 
         c.section_name === sectionName && 
         c.content_key === contentKey
  );

  const displayValue = getContent(pageName, sectionName, contentKey, defaultValue);

  const handleEdit = () => {
    setEditValue(displayValue);
    setIsEditing(true);
  };

  const handleSave = async () => {
    if (contentItem) {
      const newValue = contentItem.content_type === 'text' 
        ? { fr: editValue }
        : editValue;
      
      const success = await updateContent(contentItem.id, newValue);
      if (success) {
        setIsEditing(false);
      }
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditValue('');
  };

  if (isEditing && isAdmin) {
    return (
      <div className="relative group">
        {multiline ? (
          <Textarea
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            className={className}
            rows={3}
          />
        ) : (
          <Input
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            className={className}
          />
        )}
        <div className="flex gap-2 mt-2">
          <Button size="sm" onClick={handleSave}>
            <Save className="w-4 h-4 mr-1" />
            Sauvegarder
          </Button>
          <Button size="sm" variant="outline" onClick={handleCancel}>
            <X className="w-4 h-4 mr-1" />
            Annuler
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative group">
      <Component className={className}>
        {displayValue}
      </Component>
      {isAdmin && (
        <Button
          size="sm"
          variant="ghost"
          className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={handleEdit}
        >
          <Edit className="w-4 h-4" />
        </Button>
      )}
    </div>
  );
};

export default EditableText;
