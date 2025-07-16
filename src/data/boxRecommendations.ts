
export interface BoxRecommendation {
  id: string;
  name: string;
  category: 'Parents' | 'Adolescents' | 'Salariés' | 'Équipe' | 'Famille' | 'Événement';
  evaluationScale: string;
  price: string;
  description: string;
  features: string[];
  scoreRange: {
    min: number;
    max: number;
  };
  emotionalState: 'burnout' | 'stress' | 'tension' | 'neutral' | 'content' | 'fulfilled' | 'passionate';
  gradient: string;
}

export const boxRecommendations: BoxRecommendation[] = [
  // Score 1-3: Burn-out - Intervention urgente
  {
    id: 'urgence-01',
    name: 'Box SOS Burn-out',
    category: 'Salariés',
    evaluationScale: 'Burn-out critique',
    price: '59€/mois',
    description: 'Intervention d\'urgence pour sortir du burn-out',
    features: ['Consultation psychologue', 'Kit de survie émotionnelle', 'Plan d\'action immédiat', 'Suivi hebdomadaire'],
    scoreRange: { min: 1, max: 3 },
    emotionalState: 'burnout',
    gradient: 'gradient-passion'
  },
  {
    id: 'urgence-02',
    name: 'Box Répit Parents',
    category: 'Parents',
    evaluationScale: 'Épuisement parental',
    price: '52€/mois',
    description: 'Pause d\'urgence pour parents épuisés',
    features: ['Respiration guidée', 'Baby-sitting de secours', 'Kit auto-soin', 'Réseau d\'entraide'],
    scoreRange: { min: 1, max: 3 },
    emotionalState: 'burnout',
    gradient: 'gradient-compassion'
  },

  // Score 4-6: Stress élevé - Action préventive
  {
    id: 'prevention-01',
    name: 'Box Anti-Stress',
    category: 'Salariés',
    evaluationScale: 'Stress élevé',
    price: '45€/mois',
    description: 'Outils pour gérer le stress quotidien',
    features: ['Techniques de relaxation', 'Plantes déstressantes', 'Huiles essentielles', 'Exercices de cohérence cardiaque'],
    scoreRange: { min: 4, max: 6 },
    emotionalState: 'stress',
    gradient: 'gradient-trust'
  },
  {
    id: 'prevention-02',
    name: 'Box Zen Ado',
    category: 'Adolescents',
    evaluationScale: 'Anxiété scolaire',
    price: '38€/mois',
    description: 'Retrouve ton calme face au stress',
    features: ['Fidget toys', 'Journal émotionnel', 'Playlist relaxante', 'Techniques anti-stress'],
    scoreRange: { min: 4, max: 6 },
    emotionalState: 'stress',
    gradient: 'gradient-serenity'
  },

  // Score 7-9: Équilibre fragile - Vigilance
  {
    id: 'equilibre-01',
    name: 'Box Équilibre Pro',
    category: 'Salariés',
    evaluationScale: 'Équilibre fragile',
    price: '42€/mois',
    description: 'Maintiens ton équilibre vie pro/perso',
    features: ['Planning bien-être', 'Pauses énergisantes', 'Snacks sains', 'Conseils organisation'],
    scoreRange: { min: 7, max: 9 },
    emotionalState: 'neutral',
    gradient: 'gradient-serenity'
  },
  {
    id: 'equilibre-02',
    name: 'Box Harmonie Famille',
    category: 'Famille',
    evaluationScale: 'Tensions familiales',
    price: '48€/mois',
    description: 'Renforcez vos liens familiaux',
    features: ['Activités famille', 'Jeux coopératifs', 'Moments partage', 'Communication bienveillante'],
    scoreRange: { min: 7, max: 9 },
    emotionalState: 'neutral',
    gradient: 'gradient-compassion'
  },

  // Score 10-12: Bon niveau - Maintenir
  {
    id: 'maintien-01',
    name: 'Box Vitalité',
    category: 'Salariés',
    evaluationScale: 'Bien-être satisfaisant',
    price: '39€/mois',
    description: 'Garde ton niveau de bien-être optimal',
    features: ['Compléments naturels', 'Sport doux', 'Méditation', 'Développement personnel'],
    scoreRange: { min: 10, max: 12 },
    emotionalState: 'content',
    gradient: 'gradient-serenity'
  },
  {
    id: 'maintien-02',
    name: 'Box Épanouissement Teen',
    category: 'Adolescents',
    evaluationScale: 'Développement personnel',
    price: '35€/mois',
    description: 'Continue à grandir et t\'épanouir',
    features: ['Livres inspirants', 'Activités créatives', 'Défis personnels', 'Réseau positif'],
    scoreRange: { min: 10, max: 12 },
    emotionalState: 'content',
    gradient: 'gradient-wisdom'
  },

  // Score 13-15: Excellence - Passion
  {
    id: 'excellence-01',
    name: 'Box Leadership',
    category: 'Salariés',
    evaluationScale: 'État optimal',
    price: '55€/mois',
    description: 'Développe ton potentiel de leader',
    features: ['Coaching leadership', 'Outils management', 'Vision stratégique', 'Influence positive'],
    scoreRange: { min: 13, max: 15 },
    emotionalState: 'passionate',
    gradient: 'gradient-passion'
  },
  {
    id: 'excellence-02',
    name: 'Box Passion Créative',
    category: 'Adolescents',
    evaluationScale: 'Épanouissement total',
    price: '45€/mois',
    description: 'Exprime pleinement ta créativité',
    features: ['Matériel artistique', 'Masterclass créatives', 'Projets inspirants', 'Communauté créative'],
    scoreRange: { min: 13, max: 15 },
    emotionalState: 'passionate',
    gradient: 'gradient-passion'
  }
];

export const getRecommendedBoxes = (score: number, userType: string): BoxRecommendation[] => {
  // Filtrer par score d'abord
  const scoreBasedBoxes = boxRecommendations.filter(box => 
    score >= box.scoreRange.min && score <= box.scoreRange.max
  );

  // Adapter selon le type d'utilisateur
  let filteredBoxes = scoreBasedBoxes;
  
  if (userType.includes('teen') || userType.includes('adolescent')) {
    filteredBoxes = scoreBasedBoxes.filter(box => 
      box.category === 'Adolescents' || box.category === 'Famille'
    );
  } else if (userType.includes('parent') || userType.includes('famille')) {
    filteredBoxes = scoreBasedBoxes.filter(box => 
      box.category === 'Parents' || box.category === 'Famille'
    );
  } else if (userType.includes('enterprise') || userType.includes('salarié')) {
    filteredBoxes = scoreBasedBoxes.filter(box => 
      box.category === 'Salariés' || box.category === 'Équipe'
    );
  }

  // Si pas de correspondance spécifique, utiliser les box générales
  if (filteredBoxes.length === 0) {
    filteredBoxes = scoreBasedBoxes.slice(0, 2);
  }

  return filteredBoxes.slice(0, 2);
};
