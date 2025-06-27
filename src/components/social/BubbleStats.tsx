
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { supabase } from '@/integrations/supabase/client';

interface BubbleStats {
  soin_points: number;
  inspiration_points: number;
  transformation_points: number;
  connexion_points: number;
  total_points: number;
}

const BubbleStats = () => {
  const [stats, setStats] = useState<BubbleStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) return;

        const { data, error } = await supabase
          .from('user_bubble_points')
          .select('*')
          .eq('user_id', user.id)
          .single();

        if (error && error.code !== 'PGRST116') {
          throw error;
        }

        setStats(data || {
          soin_points: 0,
          inspiration_points: 0,
          transformation_points: 0,
          connexion_points: 0,
          total_points: 0
        });
      } catch (error) {
        console.error('Error fetching bubble stats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) {
    return <div className="p-4">Chargement des statistiques...</div>;
  }

  const bubbleTypes = [
    { type: 'soin', emoji: '🫧', label: 'Soin', points: stats?.soin_points || 0 },
    { type: 'inspiration', emoji: '🌟', label: 'Inspiration', points: stats?.inspiration_points || 0 },
    { type: 'transformation', emoji: '🌀', label: 'Transformation', points: stats?.transformation_points || 0 },
    { type: 'connexion', emoji: '💞', label: 'Connexion', points: stats?.connexion_points || 0 }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Mes Bulles de Récompense</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4 mb-4">
          {bubbleTypes.map(({ type, emoji, label, points }) => (
            <div key={type} className="text-center p-3 border rounded-lg">
              <div className="text-2xl mb-1">{emoji}</div>
              <div className="text-sm font-medium">{label}</div>
              <Badge variant="secondary" className="mt-1">
                {points}
              </Badge>
            </div>
          ))}
        </div>
        
        <div className="text-center p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
          <div className="text-lg font-semibold text-gray-700">Total</div>
          <div className="text-3xl font-bold text-blue-600">
            {stats?.total_points || 0}
          </div>
          <div className="text-sm text-gray-600">bulles reçues</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BubbleStats;
