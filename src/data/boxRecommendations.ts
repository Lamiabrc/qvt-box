export interface Box {
  id: string;
  name: string;
  description: string;
  price: string;
  targetUsers: string[];
  minScore: number;
  maxScore: number;
  features: string[];
}

export const allBoxes: Box[] = [
  {
    id: 'box-ado-1',
    name: 'QVTeen Box Ado Essentielle',
    description: 'Les outils de base pour le bien-être de votre ado',
    price: '29€/mois',
    targetUsers: ['teen', 'all'],
    minScore: 1,
    maxScore: 7,
    features: ['Journal de bord', 'Exercices de relaxation', 'Conseils personnalisés']
  },
  {
    id: 'box-ado-2',
    name: 'QVTeen Box Ado Premium',
    description: 'Un accompagnement complet pour l\'épanouissement de votre ado',
    price: '49€/mois',
    targetUsers: ['teen', 'all'],
    minScore: 8,
    maxScore: 15,
    features: ['Box Essentielle', 'Séances de coaching en ligne', 'Accès à des ateliers thématiques']
  },
  {
    id: 'box-famille-1',
    name: 'QVTeen Box Famille Découverte',
    description: 'Améliorez la communication et la complicité en famille',
    price: '39€/mois',
    targetUsers: ['parent', 'all'],
    minScore: 1,
    maxScore: 7,
    features: ['Jeux de société', 'Défis à relever en famille', 'Guides de conversation']
  },
  {
    id: 'box-famille-2',
    name: 'QVTeen Box Famille Épanouie',
    description: 'Transformez votre foyer en un cocon de bonheur et d\'harmonie',
    price: '59€/mois',
    targetUsers: ['parent', 'all'],
    minScore: 8,
    maxScore: 15,
    features: ['Box Découverte', 'Ateliers de parentalité positive', 'Accompagnement personnalisé']
  },
  {
    id: 'box-entreprise-1',
    name: 'QVTeen Box Entreprise Starter',
    description: 'Offrez à vos employés les clés d\'un équilibre vie pro/perso réussi',
    price: '99€/mois',
    targetUsers: ['famille-entreprise', 'all'],
    minScore: 1,
    maxScore: 7,
    features: ['Accès à une plateforme de ressources', 'Webinaires thématiques', 'Bilans individuels']
  },
  {
    id: 'box-entreprise-2',
    name: 'QVTeen Box Entreprise Premium',
    description: 'Développez une culture d\'entreprise axée sur le bien-être de vos équipes',
    price: '199€/mois',
    targetUsers: ['famille-entreprise', 'all'],
    minScore: 8,
    maxScore: 15,
    features: ['Box Starter', 'Séances de coaching en équipe', 'Événements de team building']
  },
  {
    id: 'box-perso-1',
    name: 'QVTeen Box Perso Essentielle',
    description: 'Prenez soin de vous et cultivez votre bien-être au quotidien',
    price: '29€/mois',
    targetUsers: ['personal', 'all'],
    minScore: 1,
    maxScore: 7,
    features: ['Sélection de produits bien-être', 'Challenges personnalisés', 'Suivi de vos progrès']
  },
  {
    id: 'box-perso-2',
    name: 'QVTeen Box Perso Épanouissement',
    description: 'Atteignez votre plein potentiel et rayonnez de bonheur',
    price: '49€/mois',
    targetUsers: ['personal', 'all'],
    minScore: 8,
    maxScore: 15,
    features: ['Box Essentielle', 'Consultations avec des experts', 'Programmes de développement personnel']
  },
  {
    id: 'box-ado-garcon',
    name: 'QVTeen Box Ado Garçon',
    description: 'Conçue spécialement pour les jeunes hommes',
    price: '35€/mois',
    targetUsers: ['teen-boy'],
    minScore: 5,
    maxScore: 12,
    features: ['Produits de soins', 'Accessoires de sport', 'Livres inspirants']
  },
  {
    id: 'box-ado-fille',
    name: 'QVTeen Box Ado Fille',
    description: 'Pensée pour répondre aux besoins des jeunes femmes',
    price: '35€/mois',
    targetUsers: ['teen-girl'],
    minScore: 5,
    maxScore: 12,
    features: ['Cosmétiques naturels', 'Bijoux tendance', 'Magazines féminins']
  }
];

export const getRecommendedBoxes = (userType: string, riskLevel: string) => {
  // Mapping des niveaux de risque vers les scores pour la compatibilité
  const riskToScoreMap: { [key: string]: number } = {
    'Excellent': 13,
    'Bon': 10,
    'Bon équilibre': 10,
    'À améliorer': 7,
    'Déséquilibre': 7,
    'Priorité': 4,
    'Situation critique': 2
  };

  const score = riskToScoreMap[riskLevel] || 7; // Score par défaut si non trouvé
  
  // Filtrer les box selon le type d'utilisateur et le score
  const filteredBoxes = allBoxes.filter(box => {
    const isForUserType = box.targetUsers.includes(userType) || box.targetUsers.includes('all');
    const isInScoreRange = score >= box.minScore && score <= box.maxScore;
    return isForUserType && isInScoreRange;
  });

  // Si aucune box trouvée, retourner les box par défaut
  if (filteredBoxes.length === 0) {
    return allBoxes.filter(box => box.targetUsers.includes('all')).slice(0, 2);
  }

  // Trier par priorité (score le plus proche) et retourner les 2 premières
  return filteredBoxes
    .sort((a, b) => {
      const aDiff = Math.abs(((a.minScore + a.maxScore) / 2) - score);
      const bDiff = Math.abs(((b.minScore + b.maxScore) / 2) - score);
      return aDiff - bDiff;
    })
    .slice(0, 2);
};
