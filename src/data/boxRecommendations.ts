
export interface BoxRecommendation {
  id: string;
  name: string;
  category: 'Parents' | 'Adolescents' | 'Salariés' | 'Équipe' | 'Famille' | 'Événement';
  evaluationScale: string;
  price: string;
  description: string;
  features: string[];
}

export const boxRecommendations: BoxRecommendation[] = [
  // Parents
  {
    id: 'parent-01',
    name: 'Box Reconnexion',
    category: 'Parents',
    evaluationScale: 'Manque de concentration',
    price: '39€/mois',
    description: 'Retrouvez la connexion avec votre adolescent',
    features: ['Activités de reconnexion', 'Guide communication', 'Outils parentalité']
  },
  {
    id: 'parent-02',
    name: 'Box Charge mentale',
    category: 'Parents',
    evaluationScale: 'Manque de motivation',
    price: '42€/mois',
    description: 'Allégez votre charge mentale parentale',
    features: ['Planning organisationnel', 'Techniques délégation', 'Outils anti-stress']
  },
  {
    id: 'parent-03',
    name: 'Box Sommeil réparateur',
    category: 'Parents',
    evaluationScale: 'Stress élevé',
    price: '45€/mois',
    description: 'Retrouvez un sommeil de qualité',
    features: ['Routine sommeil', 'Relaxation guidée', 'Environnement optimal']
  },
  {
    id: 'parent-04',
    name: 'Box Parentalité solo',
    category: 'Parents',
    evaluationScale: 'Charge mentale',
    price: '44€/mois',
    description: 'Soutien spécialisé pour parents solo',
    features: ['Réseau entraide', 'Gestion autonome', 'Support émotionnel']
  },
  {
    id: 'parent-05',
    name: 'Box Parentalité en couple',
    category: 'Parents',
    evaluationScale: 'Fatigue émotionnelle',
    price: '47€/mois',
    description: 'Renforcez votre équipe parentale',
    features: ['Communication couple', 'Cohésion familiale', 'Partage des tâches']
  },
  {
    id: 'parent-06',
    name: 'Box Parent télétravailleur',
    category: 'Parents',
    evaluationScale: 'Fatigue émotionnelle',
    price: '41€/mois',
    description: 'Équilibrez travail et famille à domicile',
    features: ['Organisation télétravail', 'Séparation espaces', 'Routine familiale']
  },
  {
    id: 'parent-07',
    name: 'Box Décompression',
    category: 'Parents',
    evaluationScale: 'Anxiété / inquiétude',
    price: '38€/mois',
    description: 'Moments de détente pour parents',
    features: ['Techniques relaxation', 'Pause personnelle', 'Anti-stress naturel']
  },
  {
    id: 'parent-08',
    name: 'Box Pause sensorielle',
    category: 'Parents',
    evaluationScale: 'Stress élevé',
    price: '43€/mois',
    description: 'Apaisement par les sens',
    features: ['Aromathérapie', 'Textures apaisantes', 'Sons relaxants']
  },
  {
    id: 'parent-09',
    name: 'Box Expression parentale',
    category: 'Parents',
    evaluationScale: 'Stress élevé',
    price: '40€/mois',
    description: 'Exprimez vos émotions parentales',
    features: ['Journal émotionnel', 'Art-thérapie', 'Partage expériences']
  },
  {
    id: 'parent-10',
    name: 'Box Rentrée scolaire sereine',
    category: 'Parents',
    evaluationScale: 'Besoin de reconnexion',
    price: '36€/mois',
    description: 'Préparez une rentrée apaisée',
    features: ['Planning rentrée', 'Gestion stress scolaire', 'Accompagnement changement']
  },

  // Adolescents
  {
    id: 'teen-01',
    name: 'Box Confiance en soi',
    category: 'Adolescents',
    evaluationScale: 'Anxiété / inquiétude',
    price: '29€/mois',
    description: 'Développe ta confiance et ton estime',
    features: ['Exercices confiance', 'Affirmations positives', 'Défis personnels']
  },
  {
    id: 'teen-02',
    name: 'Box Gestion du stress scolaire',
    category: 'Adolescents',
    evaluationScale: 'Besoin de reconnexion',
    price: '32€/mois',
    description: 'Gère ton stress à l\'école',
    features: ['Techniques anti-stress', 'Organisation scolaire', 'Relaxation express']
  },
  {
    id: 'teen-03',
    name: 'Box Concentration & examens',
    category: 'Adolescents',
    evaluationScale: 'Besoin de reconnexion',
    price: '34€/mois',
    description: 'Optimise ta concentration pour réussir',
    features: ['Méthodes concentration', 'Planning révisions', 'Gestion du trac']
  },
  {
    id: 'teen-04',
    name: 'Box Harcèlement scolaire',
    category: 'Adolescents',
    evaluationScale: 'Stress élevé',
    price: '35€/mois',
    description: 'Soutien face au harcèlement',
    features: ['Stratégies défense', 'Renforcement personnel', 'Réseau soutien']
  },
  {
    id: 'teen-05',
    name: 'Box Rythme & sommeil',
    category: 'Adolescents',
    evaluationScale: 'Charge mentale',
    price: '30€/mois',
    description: 'Retrouve un rythme de sommeil sain',
    features: ['Routine sommeil', 'Hygiène du sommeil', 'Relaxation nocturne']
  },
  {
    id: 'teen-06',
    name: 'Box Créativité & émotions',
    category: 'Adolescents',
    evaluationScale: 'Anxiété / inquiétude',
    price: '31€/mois',
    description: 'Exprime tes émotions par la créativité',
    features: ['Art-thérapie', 'Expression créative', 'Gestion émotionnelle']
  },
  {
    id: 'teen-07',
    name: 'Box Sport & équilibre',
    category: 'Adolescents',
    evaluationScale: 'Isolement',
    price: '33€/mois',
    description: 'Trouve ton équilibre par le sport',
    features: ['Activités sportives', 'Bien-être physique', 'Confiance corporelle']
  },
  {
    id: 'teen-08',
    name: 'Box Copains & solitude',
    category: 'Adolescents',
    evaluationScale: 'Manque de motivation',
    price: '28€/mois',
    description: 'Crée et maintiens des amitiés',
    features: ['Compétences sociales', 'Gestion solitude', 'Création liens']
  },
  {
    id: 'teen-09',
    name: 'Box Préparation oraux',
    category: 'Adolescents',
    evaluationScale: 'Tensions relationnelles',
    price: '36€/mois',
    description: 'Réussis tes présentations orales',
    features: ['Techniques présentation', 'Gestion du trac', 'Communication efficace']
  },
  {
    id: 'teen-10',
    name: 'Box Transition collège-lycée',
    category: 'Adolescents',
    evaluationScale: 'Isolement',
    price: '27€/mois',
    description: 'Réussis ta transition scolaire',
    features: ['Adaptation changement', 'Nouvelles relations', 'Organisation lycée']
  }
];

export const getRecommendedBoxes = (category: string, riskLevel: string, score: number): BoxRecommendation[] => {
  // Mapping des niveaux de risque vers les échelles d'évaluation
  const riskToEvaluationMap: { [key: string]: string[] } = {
    'Excellent': ['Besoin de reconnexion'],
    'Bon': ['Manque de motivation', 'Besoin de reconnexion'],
    'À améliorer': ['Anxiété / inquiétude', 'Stress élevé', 'Charge mentale'],
    'Priorité': ['Stress élevé', 'Fatigue émotionnelle', 'Isolement'],
    'Situation critique': ['Stress élevé', 'Fatigue émotionnelle', 'Tensions relationnelles'],
    'Élevé': ['Stress élevé', 'Fatigue émotionnelle', 'Tensions relationnelles'],
    'Modéré': ['Anxiété / inquiétude', 'Charge mentale'],
    'Faible': ['Besoin de reconnexion', 'Manque de motivation']
  };

  // Obtenir les échelles d'évaluation recommandées pour ce niveau de risque
  const recommendedScales = riskToEvaluationMap[riskLevel] || ['Stress élevé'];

  // Filtrer les box selon la catégorie et les échelles recommandées avec plus de spécificité
  let categoryFilter = '';
  let specificRecommendations: BoxRecommendation[] = [];

  if (category.includes('parent') || category.includes('famille')) {
    categoryFilter = 'Parents';
    
    // Recommandations spécifiques selon le score pour les parents
    if (score < 40) {
      specificRecommendations = boxRecommendations.filter(box => 
        box.category === 'Parents' && 
        (box.evaluationScale === 'Stress élevé' || box.evaluationScale === 'Fatigue émotionnelle')
      );
    } else if (score < 70) {
      specificRecommendations = boxRecommendations.filter(box => 
        box.category === 'Parents' && 
        (box.evaluationScale === 'Charge mentale' || box.evaluationScale === 'Anxiété / inquiétude')
      );
    } else {
      specificRecommendations = boxRecommendations.filter(box => 
        box.category === 'Parents' && 
        box.evaluationScale === 'Besoin de reconnexion'
      );
    }
  } else if (category.includes('teen') || category.includes('adolescent')) {
    categoryFilter = 'Adolescents';
    
    // Recommandations spécifiques selon le score pour les ados
    if (score < 40) {
      specificRecommendations = boxRecommendations.filter(box => 
        box.category === 'Adolescents' && 
        (box.evaluationScale === 'Stress élevé' || box.evaluationScale === 'Isolement')
      );
    } else if (score < 70) {
      specificRecommendations = boxRecommendations.filter(box => 
        box.category === 'Adolescents' && 
        (box.evaluationScale === 'Anxiété / inquiétude' || box.evaluationScale === 'Manque de motivation')
      );
    } else {
      specificRecommendations = boxRecommendations.filter(box => 
        box.category === 'Adolescents' && 
        box.evaluationScale === 'Besoin de reconnexion'
      );
    }
  } else if (category.includes('enterprise') || category.includes('employee') || category.includes('manager')) {
    categoryFilter = 'Salariés';
    
    // Pour l'instant, utiliser le système existant pour les salariés
    // (on peut étendre plus tard avec des box spécifiques entreprise)
    specificRecommendations = boxRecommendations.filter(box => 
      box.category === 'Parents' && // Utiliser temporairement les box parents
      recommendedScales.includes(box.evaluationScale)
    );
  }

  // Si pas de correspondance spécifique, utiliser le système général
  if (specificRecommendations.length === 0) {
    const recommendedBoxes = boxRecommendations.filter(box => 
      box.category === categoryFilter && 
      recommendedScales.includes(box.evaluationScale)
    );
    
    if (recommendedBoxes.length === 0) {
      return boxRecommendations.filter(box => box.category === categoryFilter).slice(0, 2);
    }
    
    return recommendedBoxes.slice(0, 2);
  }

  // Retourner jusqu'à 2 box recommandées spécifiques
  return specificRecommendations.slice(0, 2);
};
