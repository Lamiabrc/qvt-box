
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import GroupSelector from './GroupSelector';
import PostCreator from './PostCreator';
import PostFeed from './PostFeed';
import { useSharedPosts } from '@/hooks/useSharedPosts';
import { supabase } from '@/integrations/supabase/client';

interface SocialHubProps {
  groupType: 'team' | 'family' | 'friends';
  title: string;
  description: string;
}

const SocialHub: React.FC<SocialHubProps> = ({ groupType, title, description }) => {
  const [selectedGroupId, setSelectedGroupId] = useState<string>('');
  const [currentUserId, setCurrentUserId] = useState<string>('');
  const { posts, loading, createPost, giveBubble, refreshPosts } = useSharedPosts(selectedGroupId);

  useEffect(() => {
    const getCurrentUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        setCurrentUserId(user.id);
      }
    };
    getCurrentUser();
  }, []);

  const getShareButtonText = () => {
    switch (groupType) {
      case 'team': return 'Partager avec mes collègues';
      case 'family': return 'Partager avec mon équipe famille';
      case 'friends': return 'Partager avec mes potes';
      default: return 'Partager';
    }
  };

  return (
    <div className="container mx-auto p-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <p className="text-gray-600">{description}</p>
        </CardHeader>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <GroupSelector
            selectedGroupId={selectedGroupId}
            onGroupSelect={setSelectedGroupId}
            groupType={groupType}
          />
        </div>

        <div className="lg:col-span-2 space-y-6">
          {selectedGroupId && (
            <>
              <PostCreator
                groupId={selectedGroupId}
                onPostCreated={refreshPosts}
                onCreatePost={createPost}
              />
              
              <Card>
                <CardHeader>
                  <CardTitle>Publications du groupe</CardTitle>
                </CardHeader>
                <CardContent>
                  <PostFeed
                    posts={posts}
                    loading={loading}
                    onGiveBubble={giveBubble}
                    currentUserId={currentUserId}
                  />
                </CardContent>
              </Card>
            </>
          )}

          {!selectedGroupId && (
            <Card>
              <CardContent className="text-center p-8">
                <p className="text-gray-500">
                  Sélectionnez ou créez un groupe pour commencer à partager
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default SocialHub;
