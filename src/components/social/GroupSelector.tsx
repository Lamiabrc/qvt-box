
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Users, Plus, LogIn } from 'lucide-react';
import { useSocialGroups } from '@/hooks/useSocialGroups';
import { useState } from 'react';

interface GroupSelectorProps {
  selectedGroupId?: string;
  onGroupSelect: (groupId: string) => void;
  groupType?: 'team' | 'family' | 'friends';
}

const GroupSelector: React.FC<GroupSelectorProps> = ({ 
  selectedGroupId, 
  onGroupSelect, 
  groupType 
}) => {
  const { groups, loading, createGroup, joinGroup } = useSocialGroups();
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [showJoinForm, setShowJoinForm] = useState(false);
  const [newGroupName, setNewGroupName] = useState('');
  const [joinCode, setJoinCode] = useState('');

  const filteredGroups = groupType 
    ? groups.filter(group => group.type === groupType)
    : groups;

  const handleCreateGroup = async () => {
    if (newGroupName.trim() && groupType) {
      await createGroup(newGroupName, groupType);
      setNewGroupName('');
      setShowCreateForm(false);
    }
  };

  const handleJoinGroup = async () => {
    if (joinCode.trim()) {
      await joinGroup(joinCode);
      setJoinCode('');
      setShowJoinForm(false);
    }
  };

  const getGroupTypeLabel = (type: string) => {
    switch (type) {
      case 'team': return 'Équipe';
      case 'family': return 'Famille';
      case 'friends': return 'Amis';
      default: return type;
    }
  };

  if (loading) {
    return <div className="p-4">Chargement des groupes...</div>;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Users className="w-5 h-5" />
          Mes Groupes
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {filteredGroups.map((group) => (
          <div
            key={group.id}
            className={`p-3 border rounded-lg cursor-pointer transition-colors ${
              selectedGroupId === group.id 
                ? 'bg-blue-50 border-blue-300' 
                : 'hover:bg-gray-50'
            }`}
            onClick={() => onGroupSelect(group.id)}
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium">{group.name}</h3>
                {group.description && (
                  <p className="text-sm text-gray-600 mt-1">{group.description}</p>
                )}
              </div>
              <Badge variant="secondary">
                {getGroupTypeLabel(group.type)}
              </Badge>
            </div>
            <p className="text-xs text-gray-500 mt-2">Code: {group.group_code}</p>
          </div>
        ))}

        {!showCreateForm && !showJoinForm && (
          <div className="flex gap-2">
            <Button
              onClick={() => setShowCreateForm(true)}
              variant="outline"
              size="sm"
              className="flex-1"
            >
              <Plus className="w-4 h-4 mr-2" />
              Créer
            </Button>
            <Button
              onClick={() => setShowJoinForm(true)}
              variant="outline"
              size="sm"
              className="flex-1"
            >
              <LogIn className="w-4 h-4 mr-2" />
              Rejoindre
            </Button>
          </div>
        )}

        {showCreateForm && (
          <div className="space-y-2">
            <Input
              placeholder="Nom du groupe"
              value={newGroupName}
              onChange={(e) => setNewGroupName(e.target.value)}
            />
            <div className="flex gap-2">
              <Button onClick={handleCreateGroup} size="sm">
                Créer
              </Button>
              <Button
                onClick={() => setShowCreateForm(false)}
                variant="outline"
                size="sm"
              >
                Annuler
              </Button>
            </div>
          </div>
        )}

        {showJoinForm && (
          <div className="space-y-2">
            <Input
              placeholder="Code du groupe"
              value={joinCode}
              onChange={(e) => setJoinCode(e.target.value)}
            />
            <div className="flex gap-2">
              <Button onClick={handleJoinGroup} size="sm">
                Rejoindre
              </Button>
              <Button
                onClick={() => setShowJoinForm(false)}
                variant="outline"
                size="sm"
              >
                Annuler
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default GroupSelector;
