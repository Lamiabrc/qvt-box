
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Send, Calendar, Heart, Sun } from 'lucide-react';

interface PostCreatorProps {
  groupId: string;
  onPostCreated: () => void;
  onCreatePost: (groupId: string, content: string, postType: 'activity' | 'life_event' | 'mood_weather' | 'general') => Promise<void>;
}

const PostCreator: React.FC<PostCreatorProps> = ({ groupId, onPostCreated, onCreatePost }) => {
  const [content, setContent] = useState('');
  const [postType, setPostType] = useState<'activity' | 'life_event' | 'mood_weather' | 'general'>('general');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!content.trim()) return;

    setLoading(true);
    try {
      await onCreatePost(groupId, content, postType);
      setContent('');
      setPostType('general');
      onPostCreated();
    } catch (error) {
      console.error('Error creating post:', error);
    } finally {
      setLoading(false);
    }
  };

  const getPostTypeIcon = (type: string) => {
    switch (type) {
      case 'activity': return <Calendar className="w-4 h-4" />;
      case 'life_event': return <Heart className="w-4 h-4" />;
      case 'mood_weather': return <Sun className="w-4 h-4" />;
      default: return <Send className="w-4 h-4" />;
    }
  };

  const getPostTypeLabel = (type: string) => {
    switch (type) {
      case 'activity': return 'Activité';
      case 'life_event': return 'Événement de vie';
      case 'mood_weather': return 'Météo de vie';
      default: return 'Général';
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          {getPostTypeIcon(postType)}
          Partager avec le groupe
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Select value={postType} onValueChange={(value: any) => setPostType(value)}>
          <SelectTrigger>
            <SelectValue placeholder="Type de publication" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="general">Général</SelectItem>
            <SelectItem value="activity">Activité / Road trip</SelectItem>
            <SelectItem value="life_event">Événement de vie</SelectItem>
            <SelectItem value="mood_weather">Météo de vie</SelectItem>
          </SelectContent>
        </Select>

        <Textarea
          placeholder={`Que souhaitez-vous partager ? (${getPostTypeLabel(postType)})`}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="min-h-[100px]"
        />

        <Button 
          onClick={handleSubmit} 
          disabled={!content.trim() || loading}
          className="w-full"
        >
          <Send className="w-4 h-4 mr-2" />
          {loading ? 'Publication...' : 'Partager'}
        </Button>
      </CardContent>
    </Card>
  );
};

export default PostCreator;
