
export const enterpriseManagerQuestions = [
  {
    id: 'team_stress',
    title: 'Stress d\'équipe',
    question: 'Comment évaluez-vous le niveau de stress général dans votre équipe ?',
    options: [
      { value: 1, label: 'Très élevé - Signaux d\'alarme', color: 'bg-red-500' },
      { value: 2, label: 'Élevé - Attention requise', color: 'bg-orange-500' },
      { value: 3, label: 'Modéré - Gérable', color: 'bg-yellow-500' },
      { value: 4, label: 'Faible - Bon niveau', color: 'bg-green-500' }
    ]
  },
  {
    id: 'burnout_signs',
    title: 'Signes de burn-out',
    question: 'À quelle fréquence observez-vous des signes de burn-out ?',
    options: [
      { value: 1, label: 'Très fréquemment', color: 'bg-red-500' },
      { value: 2, label: 'Occasionnellement', color: 'bg-orange-500' },
      { value: 3, label: 'Rarement', color: 'bg-yellow-500' },
      { value: 4, label: 'Jamais', color: 'bg-green-500' }
    ]
  },
  {
    id: 'workload',
    title: 'Charge de travail',
    question: 'Comment jugez-vous la charge de travail actuelle ?',
    options: [
      { value: 1, label: 'Excessive - Intenable', color: 'bg-red-500' },
      { value: 2, label: 'Lourde mais gérable', color: 'bg-orange-500' },
      { value: 3, label: 'Équilibrée', color: 'bg-yellow-500' },
      { value: 4, label: 'Optimale', color: 'bg-green-500' }
    ]
  },
  {
    id: 'communication',
    title: 'Communication',
    question: 'Comment évaluez-vous la communication interne ?',
    options: [
      { value: 1, label: 'Très mauvaise', color: 'bg-red-500' },
      { value: 2, label: 'À améliorer', color: 'bg-orange-500' },
      { value: 3, label: 'Correcte', color: 'bg-yellow-500' },
      { value: 4, label: 'Excellente', color: 'bg-green-500' }
    ]
  },
  {
    id: 'satisfaction',
    title: 'Satisfaction',
    question: 'Quel est le niveau de satisfaction au travail ?',
    options: [
      { value: 1, label: 'Très faible', color: 'bg-red-500' },
      { value: 2, label: 'Faible', color: 'bg-orange-500' },
      { value: 3, label: 'Correcte', color: 'bg-yellow-500' },
      { value: 4, label: 'Élevée', color: 'bg-green-500' }
    ]
  }
];

export const enterpriseEmployeeQuestions = [
  {
    id: 'personal_stress',
    title: 'Stress personnel',
    question: 'Comment évaluez-vous votre niveau de stress au travail ?',
    options: [
      { value: 1, label: 'Très élevé - Je me sens débordé(e)', color: 'bg-red-500' },
      { value: 2, label: 'Élevé - Difficile à gérer', color: 'bg-orange-500' },
      { value: 3, label: 'Modéré - Gérable', color: 'bg-yellow-500' },
      { value: 4, label: 'Faible - Je me sens bien', color: 'bg-green-500' }
    ]
  },
  {
    id: 'work_life_balance',
    title: 'Équilibre vie pro/perso',
    question: 'Comment décririez-vous votre équilibre vie professionnelle/personnelle ?',
    options: [
      { value: 1, label: 'Très déséquilibré', color: 'bg-red-500' },
      { value: 2, label: 'Déséquilibré', color: 'bg-orange-500' },
      { value: 3, label: 'Acceptable', color: 'bg-yellow-500' },
      { value: 4, label: 'Équilibré', color: 'bg-green-500' }
    ]
  },
  {
    id: 'motivation',
    title: 'Motivation',
    question: 'Comment évaluez-vous votre motivation au travail ?',
    options: [
      { value: 1, label: 'Très faible - Je subis', color: 'bg-red-500' },
      { value: 2, label: 'Faible - Peu d\'intérêt', color: 'bg-orange-500' },
      { value: 3, label: 'Moyenne - Ça va', color: 'bg-yellow-500' },
      { value: 4, label: 'Élevée - Je suis engagé(e)', color: 'bg-green-500' }
    ]
  },
  {
    id: 'recognition',
    title: 'Reconnaissance',
    question: 'Vous sentez-vous reconnu(e) pour votre travail ?',
    options: [
      { value: 1, label: 'Pas du tout', color: 'bg-red-500' },
      { value: 2, label: 'Rarement', color: 'bg-orange-500' },
      { value: 3, label: 'Parfois', color: 'bg-yellow-500' },
      { value: 4, label: 'Régulièrement', color: 'bg-green-500' }
    ]
  },
  {
    id: 'team_relations',
    title: 'Relations d\'équipe',
    question: 'Comment sont vos relations avec vos collègues ?',
    options: [
      { value: 1, label: 'Très difficiles', color: 'bg-red-500' },
      { value: 2, label: 'Tendues', color: 'bg-orange-500' },
      { value: 3, label: 'Correctes', color: 'bg-yellow-500' },
      { value: 4, label: 'Excellentes', color: 'bg-green-500' }
    ]
  }
];

export const familyParentQuestions = [
  {
    id: 'parental_stress',
    title: 'Stress parental',
    question: 'Comment évaluez-vous votre niveau de stress en tant que parent ?',
    options: [
      { value: 1, label: 'Très élevé - Je suis épuisé(e)', color: 'bg-red-500' },
      { value: 2, label: 'Élevé - C\'est difficile', color: 'bg-orange-500' },
      { value: 3, label: 'Modéré - Gérable', color: 'bg-yellow-500' },
      { value: 4, label: 'Faible - Je gère bien', color: 'bg-green-500' }
    ]
  },
  {
    id: 'teen_communication',
    title: 'Communication ado',
    question: 'À quelle fréquence avez-vous des conversations profondes avec votre adolescent ?',
    options: [
      { value: 4, label: 'Quotidiennement', color: 'bg-green-500' },
      { value: 3, label: 'Plusieurs fois par semaine', color: 'bg-yellow-500' },
      { value: 2, label: 'Hebdomadairement', color: 'bg-orange-500' },
      { value: 1, label: 'Rarement ou jamais', color: 'bg-red-500' }
    ]
  },
  {
    id: 'screen_time_management',
    title: 'Gestion écrans',
    question: 'Comment gérez-vous le temps d\'écran de votre adolescent ?',
    options: [
      { value: 4, label: 'Règles claires et respectées', color: 'bg-green-500' },
      { value: 3, label: 'Règles établies, parfois négociées', color: 'bg-yellow-500' },
      { value: 2, label: 'Difficultés à faire respecter', color: 'bg-orange-500' },
      { value: 1, label: 'Aucun contrôle', color: 'bg-red-500' }
    ]
  },
  {
    id: 'family_climate',
    title: 'Climat familial',
    question: 'Comment décririez-vous l\'ambiance générale à la maison ?',
    options: [
      { value: 4, label: 'Harmonieuse et apaisée', color: 'bg-green-500' },
      { value: 3, label: 'Généralement calme', color: 'bg-yellow-500' },
      { value: 2, label: 'Souvent tendue', color: 'bg-orange-500' },
      { value: 1, label: 'Conflictuelle', color: 'bg-red-500' }
    ]
  },
  {
    id: 'support_network',
    title: 'Réseau de soutien',
    question: 'Avez-vous un réseau de soutien pour vous aider dans votre rôle parental ?',
    options: [
      { value: 4, label: 'Oui, très solide', color: 'bg-green-500' },
      { value: 3, label: 'Oui, satisfaisant', color: 'bg-yellow-500' },
      { value: 2, label: 'Limité', color: 'bg-orange-500' },
      { value: 1, label: 'Non, je me sens isolé(e)', color: 'bg-red-500' }
    ]
  }
];

export const familyTeenQuestions = [
  {
    id: 'teen_mood',
    title: 'Humeur générale',
    question: 'Comment te sens-tu généralement ces derniers temps ?',
    options: [
      { value: 4, label: 'Très bien - Positif(ve)', color: 'bg-green-500' },
      { value: 3, label: 'Plutôt bien', color: 'bg-yellow-500' },
      { value: 2, label: 'Mitigé - Des hauts et des bas', color: 'bg-orange-500' },
      { value: 1, label: 'Pas terrible - Souvent triste', color: 'bg-red-500' }
    ]
  },
  {
    id: 'family_relations',
    title: 'Relations familiales',
    question: 'Comment sont tes relations avec tes parents ?',
    options: [
      { value: 4, label: 'Très bonnes - On se comprend', color: 'bg-green-500' },
      { value: 3, label: 'Bonnes dans l\'ensemble', color: 'bg-yellow-500' },
      { value: 2, label: 'Compliquées - Conflits fréquents', color: 'bg-orange-500' },
      { value: 1, label: 'Très difficiles', color: 'bg-red-500' }
    ]
  },
  {
    id: 'school_pressure',
    title: 'Pression scolaire',
    question: 'Comment vis-tu la pression scolaire ?',
    options: [
      { value: 4, label: 'Bien - Je gère', color: 'bg-green-500' },
      { value: 3, label: 'Ça va - Parfois stressant', color: 'bg-yellow-500' },
      { value: 2, label: 'Difficile - Souvent stressé(e)', color: 'bg-orange-500' },
      { value: 1, label: 'Très difficile - Overwhelmed', color: 'bg-red-500' }
    ]
  },
  {
    id: 'social_life',
    title: 'Vie sociale',
    question: 'Comment ça se passe avec tes amis ?',
    options: [
      { value: 4, label: 'Super - J\'ai de vrais amis', color: 'bg-green-500' },
      { value: 3, label: 'Bien - Quelques bons amis', color: 'bg-yellow-500' },
      { value: 2, label: 'Compliqué - Peu d\'amis proches', color: 'bg-orange-500' },
      { value: 1, label: 'Difficile - Je me sens seul(e)', color: 'bg-red-500' }
    ]
  },
  {
    id: 'future_anxiety',
    title: 'Anxiété du futur',
    question: 'Es-tu stressé(e) par rapport à ton avenir ?',
    options: [
      { value: 4, label: 'Non - Je suis confiant(e)', color: 'bg-green-500' },
      { value: 3, label: 'Un peu - Ça va', color: 'bg-yellow-500' },
      { value: 2, label: 'Oui - Assez inquiet(ète)', color: 'bg-orange-500' },
      { value: 1, label: 'Très stressé(e) - Angoissé(e)', color: 'bg-red-500' }
    ]
  }
];
