
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Edit2, Check, X } from 'lucide-react';

interface EditableTextProps {
  value: string;
  onSave: (value: string) => Promise<void>;
  className?: string;
  isAdmin?: boolean;
}

const EditableText: React.FC<EditableTextProps> = ({ 
  value, 
  onSave, 
  className = '', 
  isAdmin = false 
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(value);
  const [saving, setSaving] = useState(false);

  const handleSave = async () => {
    setSaving(true);
    try {
      await onSave(editValue);
      setIsEditing(false);
    } catch (error) {
      console.error('Error saving:', error);
    } finally {
      setSaving(false);
    }
  };

  const handleCancel = () => {
    setEditValue(value);
    setIsEditing(false);
  };

  if (!isAdmin) {
    return <span className={className}>{value}</span>;
  }

  if (isEditing) {
    return (
      <div className="flex items-center gap-2">
        <Input
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
          className="flex-1"
          disabled={saving}
        />
        <Button
          size="sm"
          onClick={handleSave}
          disabled={saving}
          className="bg-green-600 hover:bg-green-700"
        >
          <Check className="w-4 h-4" />
        </Button>
        <Button
          size="sm"
          variant="outline"
          onClick={handleCancel}
          disabled={saving}
        >
          <X className="w-4 h-4" />
        </Button>
      </div>
    );
  }

  return (
    <div className="group relative inline-block">
      <span className={className}>{value}</span>
      <Button
        size="sm"
        variant="ghost"
        onClick={() => setIsEditing(true)}
        className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <Edit2 className="w-3 h-3" />
      </Button>
    </div>
  );
};

export default EditableText;
