
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, UserPlus, Mail, CheckCircle, XCircle, Heart, Briefcase, Home } from 'lucide-react';
import { useUserConnections } from '@/hooks/useUserConnections';

interface ConnectionsManagerProps {
  connectionType: 'colleague' | 'friend' | 'family';
  title: string;
  description: string;
}

const ConnectionsManager: React.FC<ConnectionsManagerProps> = ({
  connectionType,
  title,
  description
}) => {
  const { connections, pendingRequests, sendConnectionRequest, respondToRequest, loading } = useUserConnections(connectionType);
  const [newConnectionEmail, setNewConnectionEmail] = useState('');
  const [sending, setSending] = useState(false);

  const handleSendRequest = async () => {
    if (!newConnectionEmail.trim()) return;
    
    setSending(true);
    await sendConnectionRequest(newConnectionEmail.trim(), connectionType);
    setNewConnectionEmail('');
    setSending(false);
  };

  const getConnectionIcon = (type: string) => {
    switch (type) {
      case 'colleague': return <Briefcase className="w-4 h-4" />;
      case 'friend': return <Heart className="w-4 h-4" />;
      case 'family': return <Home className="w-4 h-4" />;
      default: return <Users className="w-4 h-4" />;
    }
  };

  const getMoodColor = (mood?: string) => {
    switch (mood) {
      case 'excellent': return 'bg-green-100 text-green-800';
      case 'good': return 'bg-blue-100 text-blue-800';
      case 'neutral': return 'bg-yellow-100 text-yellow-800';
      case 'bad': return 'bg-orange-100 text-orange-800';
      case 'terrible': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getMoodLabel = (mood?: string) => {
    switch (mood) {
      case 'excellent': return '😊 Excellent';
      case 'good': return '🙂 Bien';
      case 'neutral': return '😐 Neutre';
      case 'bad': return '😔 Difficile';
      case 'terrible': return '😰 Très difficile';
      default: return '❓ Non renseigné';
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-teal-600" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            {getConnectionIcon(connectionType)}
            {title}
          </CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
      </Card>

      <Tabs defaultValue="connections" className="space-y-4">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="connections" className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            Mes connexions ({connections.length})
          </TabsTrigger>
          <TabsTrigger value="requests" className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            Demandes ({pendingRequests.length})
          </TabsTrigger>
          <TabsTrigger value="add" className="flex items-center gap-2">
            <UserPlus className="w-4 h-4" />
            Ajouter
          </TabsTrigger>
        </TabsList>

        <TabsContent value="connections" className="space-y-4">
          {connections.length === 0 ? (
            <Card>
              <CardContent className="text-center p-8">
                <Users className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                <p className="text-gray-500">Aucune connexion pour le moment</p>
                <p className="text-sm text-gray-400 mt-2">
                  Commencez par ajouter des personnes dans l'onglet "Ajouter"
                </p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-4">
              {connections.map((connection) => (
                <Card key={connection.connection_id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-semibold">
                          {connection.connected_user_name.charAt(0).toUpperCase()}
                        </div>
                        <div>
                          <h3 className="font-semibold">{connection.connected_user_name}</h3>
                          <p className="text-sm text-gray-500">{connection.connected_user_email}</p>
                        </div>
                      </div>
                      
                      <div className="text-right space-y-2">
                        <Badge className={getMoodColor(connection.emotional_state.mood)}>
                          {getMoodLabel(connection.emotional_state.mood)}
                        </Badge>
                        
                        {connection.emotional_state.stress_level && (
                          <div className="flex items-center gap-2 text-sm">
                            <span>Stress:</span>
                            <div className="flex gap-1">
                              {[...Array(10)].map((_, i) => (
                                <div
                                  key={i}
                                  className={`w-2 h-2 rounded-full ${
                                    i < (connection.emotional_state.stress_level || 0)
                                      ? 'bg-red-400'
                                      : 'bg-gray-200'
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                        )}
                        
                        {connection.emotional_state.energy_level && (
                          <div className="flex items-center gap-2 text-sm">
                            <span>Énergie:</span>
                            <div className="flex gap-1">
                              {[...Array(10)].map((_, i) => (
                                <div
                                  key={i}
                                  className={`w-2 h-2 rounded-full ${
                                    i < (connection.emotional_state.energy_level || 0)
                                      ? 'bg-green-400'
                                      : 'bg-gray-200'
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>

        <TabsContent value="requests" className="space-y-4">
          {pendingRequests.length === 0 ? (
            <Card>
              <CardContent className="text-center p-8">
                <Mail className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                <p className="text-gray-500">Aucune demande en attente</p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-4">
              {pendingRequests.map((request) => (
                <Card key={request.connection_id}>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-semibold">
                          {request.connected_user_name.charAt(0).toUpperCase()}
                        </div>
                        <div>
                          <h3 className="font-semibold">{request.connected_user_name}</h3>
                          <p className="text-sm text-gray-500">{request.connected_user_email}</p>
                          <p className="text-xs text-gray-400">Souhaite se connecter avec vous</p>
                        </div>
                      </div>
                      
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          onClick={() => respondToRequest(request.connection_id, true)}
                          className="bg-green-600 hover:bg-green-700"
                        >
                          <CheckCircle className="w-4 h-4 mr-1" />
                          Accepter
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => respondToRequest(request.connection_id, false)}
                        >
                          <XCircle className="w-4 h-4 mr-1" />
                          Refuser
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>

        <TabsContent value="add">
          <Card>
            <CardHeader>
              <CardTitle>Ajouter une nouvelle connexion</CardTitle>
              <CardDescription>
                Envoyez une demande de connexion par email
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4">
                <Input
                  type="email"
                  placeholder="Adresse email de la personne"
                  value={newConnectionEmail}
                  onChange={(e) => setNewConnectionEmail(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendRequest()}
                />
                <Button
                  onClick={handleSendRequest}
                  disabled={!newConnectionEmail.trim() || sending}
                >
                  {sending ? (
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <UserPlus className="w-4 h-4" />
                  )}
                  {sending ? 'Envoi...' : 'Envoyer'}
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ConnectionsManager;
