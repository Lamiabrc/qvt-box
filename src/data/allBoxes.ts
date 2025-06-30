
export interface BoxItem {
  id: string;
  name: string;
  category: 'Parents' | 'Adolescents' | 'Salariés' | 'Équipe' | 'Famille' | 'Événement';
  evaluationScale: string;
  price: string;
  description: string;
  features: string[];
  gradient?: string;
  icon?: string;
}

export const allBoxes: BoxItem[] = [
  // Parents (10 box)
  {
    id: 'parent-01',
    name: 'Box Reconnexion',
    category: 'Parents',
    evaluationScale: 'Manque de concentration',
    price: '39€/mois',
    description: 'Retrouvez la connexion avec votre adolescent grâce à des activités ciblées',
    features: ['Activités de reconnexion', 'Guide communication parent-ado', 'Outils de parentalité positive', 'Rituels famille'],
    gradient: 'from-purple-500 to-pink-500',
    icon: '💜'
  },
  {
    id: 'parent-02',
    name: 'Box Charge mentale',
    category: 'Parents',
    evaluationScale: 'Manque de motivation',
    price: '42€/mois',
    description: 'Allégez votre charge mentale parentale et retrouvez de l\'énergie',
    features: ['Planning organisationnel', 'Techniques de délégation', 'Outils anti-stress', 'Guide gestion émotionnelle'],
    gradient: 'from-blue-500 to-cyan-500',
    icon: '🧠'
  },
  {
    id: 'parent-03',
    name: 'Box Sommeil réparateur',
    category: 'Parents',
    evaluationScale: 'Stress élevé',
    price: '45€/mois',
    description: 'Retrouvez un sommeil de qualité malgré les défis parentaux',
    features: ['Routine sommeil personnalisée', 'Relaxation guidée', 'Optimisation environnement', 'Techniques endormissement'],
    gradient: 'from-indigo-500 to-purple-500',
    icon: '😴'
  },
  {
    id: 'parent-04',
    name: 'Box Parentalité solo',
    category: 'Parents',
    evaluationScale: 'Charge mentale',
    price: '44€/mois',
    description: 'Soutien spécialisé pour les parents qui élèvent seuls leurs enfants',
    features: ['Réseau d\'entraide', 'Gestion autonome', 'Support émotionnel', 'Ressources pratiques'],
    gradient: 'from-green-500 to-teal-500',
    icon: '💪'
  },
  {
    id: 'parent-05',
    name: 'Box Parentalité en couple',
    category: 'Parents',
    evaluationScale: 'Fatigue émotionnelle',
    price: '47€/mois',
    description: 'Renforcez votre équipe parentale et votre complicité de couple',
    features: ['Communication couple', 'Cohésion familiale', 'Partage des tâches', 'Temps de qualité'],
    gradient: 'from-pink-500 to-rose-500',
    icon: '💕'
  },
  {
    id: 'parent-06',
    name: 'Box Parent télétravailleur',
    category: 'Parents',
    evaluationScale: 'Fatigue émotionnelle',
    price: '41€/mois',
    description: 'Équilibrez travail et famille depuis votre domicile',
    features: ['Organisation télétravail', 'Séparation des espaces', 'Routine familiale', 'Gestion interruptions'],
    gradient: 'from-orange-500 to-red-500',
    icon: '🏠'
  },
  {
    id: 'parent-07',
    name: 'Box Décompression',
    category: 'Parents',
    evaluationScale: 'Anxiété / inquiétude',
    price: '38€/mois',
    description: 'Moments de détente et de relaxation pour parents épuisés',
    features: ['Techniques de relaxation', 'Pause personnelle quotidienne', 'Anti-stress naturel', 'Méditation guidée'],
    gradient: 'from-emerald-500 to-teal-500',
    icon: '🌿'
  },
  {
    id: 'parent-08',
    name: 'Box Pause sensorielle',
    category: 'Parents',
    evaluationScale: 'Stress élevé',
    price: '43€/mois',
    description: 'Apaisement par les sens pour retrouver votre équilibre',
    features: ['Aromathérapie', 'Textures apaisantes', 'Sons relaxants', 'Couleurs thérapeutiques'],
    gradient: 'from-violet-500 to-purple-500',
    icon: '🌸'
  },
  {
    id: 'parent-09',
    name: 'Box Expression parentale',
    category: 'Parents',
    evaluationScale: 'Stress élevé',
    price: '40€/mois',
    description: 'Exprimez et libérez vos émotions parentales en toute sécurité',
    features: ['Journal émotionnel', 'Art-thérapie', 'Partage d\'expériences', 'Techniques d\'expression'],
    gradient: 'from-yellow-500 to-orange-500',
    icon: '🎨'
  },
  {
    id: 'parent-10',
    name: 'Box Rentrée scolaire sereine',
    category: 'Parents',
    evaluationScale: 'Besoin de reconnexion',
    price: '36€/mois',
    description: 'Préparez une rentrée apaisée pour toute la famille',
    features: ['Planning de rentrée', 'Gestion stress scolaire', 'Accompagnement changement', 'Rituels de transition'],
    gradient: 'from-teal-500 to-cyan-500',
    icon: '🎒'
  },

  // Adolescents (10 box)
  {
    id: 'teen-01',
    name: 'Box Confiance en soi',
    category: 'Adolescents',
    evaluationScale: 'Anxiété / inquiétude',
    price: '29€/mois',
    description: 'Développe ta confiance et renforce ton estime personnelle',
    features: ['Exercices de confiance', 'Affirmations positives', 'Défis personnels', 'Journal de réussites'],
    gradient: 'from-purple-500 to-indigo-500',
    icon: '⭐'
  },
  {
    id: 'teen-02',
    name: 'Box Gestion du stress scolaire',
    category: 'Adolescents',
    evaluationScale: 'Besoin de reconnexion',
    price: '32€/mois',
    description: 'Apprends à gérer ton stress et tes angoisses scolaires',
    features: ['Techniques anti-stress', 'Organisation scolaire', 'Relaxation express', 'Méthodes de concentration'],
    gradient: 'from-blue-500 to-purple-500',
    icon: '📚'
  },
  {
    id: 'teen-03',
    name: 'Box Concentration & examens',
    category: 'Adolescents',
    evaluationScale: 'Besoin de reconnexion',
    price: '34€/mois',
    description: 'Optimise ta concentration pour réussir tes examens',
    features: ['Méthodes de concentration', 'Planning de révisions', 'Gestion du trac', 'Techniques de mémorisation'],
    gradient: 'from-green-500 to-emerald-500',
    icon: '🎯'
  },
  {
    id: 'teen-04',
    name: 'Box Harcèlement scolaire',
    category: 'Adolescents',
    evaluationScale: 'Stress élevé',
    price: '35€/mois',
    description: 'Soutien et stratégies face au harcèlement scolaire',
    features: ['Stratégies de défense', 'Renforcement personnel', 'Réseau de soutien', 'Reconstruction estime de soi'],
    gradient: 'from-red-500 to-pink-500',
    icon: '🛡️'
  },
  {
    id: 'teen-05',
    name: 'Box Rythme & sommeil',
    category: 'Adolescents',
    evaluationScale: 'Charge mentale',
    price: '30€/mois',
    description: 'Retrouve un rythme de sommeil sain et réparateur',
    features: ['Routine de sommeil', 'Hygiène du sommeil', 'Relaxation nocturne', 'Gestion des écrans'],
    gradient: 'from-indigo-500 to-blue-500',
    icon: '🌙'
  },
  {
    id: 'teen-06',
    name: 'Box Créativité & émotions',
    category: 'Adolescents',
    evaluationScale: 'Anxiété / inquiétude',
    price: '31€/mois',
    description: 'Exprime tes émotions à travers l\'art et la créativité',
    features: ['Art-thérapie', 'Expression créative', 'Gestion émotionnelle', 'Projets artistiques'],
    gradient: 'from-pink-500 to-purple-500',
    icon: '🎨'
  },
  {
    id: 'teen-07',
    name: 'Box Sport & équilibre',
    category: 'Adolescents',
    evaluationScale: 'Isolement',
    price: '33€/mois',
    description: 'Trouve ton équilibre physique et mental par le sport',
    features: ['Activités sportives', 'Bien-être physique', 'Confiance corporelle', 'Esprit d\'équipe'],
    gradient: 'from-orange-500 to-red-500',
    icon: '⚽'
  },
  {
    id: 'teen-08',
    name: 'Box Copains & solitude',
    category: 'Adolescents',
    evaluationScale: 'Manque de motivation',
    price: '28€/mois',
    description: 'Apprends à créer et maintenir des amitiés sincères',
    features: ['Compétences sociales', 'Gestion de la solitude', 'Création de liens', 'Communication avec les pairs'],
    gradient: 'from-yellow-500 to-orange-500',
    icon: '👥'
  },
  {
    id: 'teen-09',
    name: 'Box Préparation oraux',
    category: 'Adolescents',
    evaluationScale: 'Tensions relationnelles',
    price: '36€/mois',
    description: 'Réussis tes présentations orales en toute confiance',
    features: ['Techniques de présentation', 'Gestion du trac', 'Communication efficace', 'Prise de parole en public'],
    gradient: 'from-teal-500 to-green-500',
    icon: '🎤'
  },
  {
    id: 'teen-10',
    name: 'Box Transition collège-lycée',
    category: 'Adolescents',
    evaluationScale: 'Isolement',
    price: '27€/mois',
    description: 'Réussis ta transition scolaire en douceur',
    features: ['Adaptation au changement', 'Nouvelles relations', 'Organisation lycée', 'Gestion du stress de transition'],
    gradient: 'from-emerald-500 to-teal-500',
    icon: '🚀'
  },

  // Salariés (10 box)
  {
    id: 'employee-01',
    name: 'Box Télétravail',
    category: 'Salariés',
    evaluationScale: 'Isolement',
    price: '35€/mois',
    description: 'Optimisez votre efficacité et bien-être en télétravail',
    features: ['Aménagement espace de travail', 'Routine productive', 'Pause active', 'Connexion équipe'],
    gradient: 'from-blue-500 to-cyan-500',
    icon: '💻'
  },
  {
    id: 'employee-02',
    name: 'Box Motivation',
    category: 'Salariés',
    evaluationScale: 'Stress élevé',
    price: '33€/mois',
    description: 'Retrouvez votre motivation et votre élan professionnel',
    features: ['Techniques de motivation', 'Objectifs SMART', 'Célébration des réussites', 'Vision positive'],
    gradient: 'from-green-500 to-emerald-500',
    icon: '🚀'
  },
  {
    id: 'employee-03',
    name: 'Box Charge mentale',
    category: 'Salariés',
    evaluationScale: 'Anxiété / inquiétude',
    price: '37€/mois',
    description: 'Allégez votre charge mentale au travail',
    features: ['Priorisation des tâches', 'Gestion du temps', 'Délégation efficace', 'Mental load management'],
    gradient: 'from-purple-500 to-pink-500',
    icon: '🧠'
  },
  {
    id: 'employee-04',
    name: 'Box Fatigue chronique',
    category: 'Salariés',
    evaluationScale: 'Manque de concentration',
    price: '39€/mois',
    description: 'Combattez la fatigue et retrouvez votre énergie',
    features: ['Techniques énergisantes', 'Nutrition au travail', 'Micro-siestes', 'Gestion du rythme'],
    gradient: 'from-orange-500 to-red-500',
    icon: '⚡'
  },
  {
    id: 'employee-05',
    name: 'Box Retour de congé',
    category: 'Salariés',
    evaluationScale: 'Stress élevé',
    price: '31€/mois',
    description: 'Facilitez votre retour au travail après une pause',
    features: ['Réadaptation progressive', 'Gestion du stress de reprise', 'Reconnexion équipe', 'Nouvelles habitudes'],
    gradient: 'from-teal-500 to-cyan-500',
    icon: '🔄'
  },
  {
    id: 'employee-06',
    name: 'Box Détente express',
    category: 'Salariés',
    evaluationScale: 'Manque de motivation',
    price: '29€/mois',
    description: 'Moments de détente rapide pendant votre journée de travail',
    features: ['Relaxation express', 'Exercices de respiration', 'Pause mindfulness', 'Détente musculaire'],
    gradient: 'from-indigo-500 to-purple-500',
    icon: '🧘'
  },
  {
    id: 'employee-07',
    name: 'Box Prévention burn-out',
    category: 'Salariés',
    evaluationScale: 'Anxiété / inquiétude',
    price: '41€/mois',
    description: 'Prévenez l\'épuisement professionnel et protégez votre bien-être',
    features: ['Signaux d\'alarme', 'Techniques préventives', 'Équilibre vie pro/perso', 'Soutien psychologique'],
    gradient: 'from-red-500 to-orange-500',
    icon: '🛡️'
  },
  {
    id: 'employee-08',
    name: 'Box Journée difficile',
    category: 'Salariés',
    evaluationScale: 'Anxiété / inquiétude',
    price: '32€/mois',
    description: 'Outils pour surmonter les journées difficiles au travail',
    features: ['Gestion des émotions', 'Techniques d\'apaisement', 'Perspective positive', 'Support émotionnel'],
    gradient: 'from-pink-500 to-rose-500',
    icon: '🌈'
  },
  {
    id: 'employee-09',
    name: 'Box Micro-sieste & respiration',
    category: 'Salariés',
    evaluationScale: 'Charge mentale',
    price: '28€/mois',
    description: 'Récupérez rapidement avec des techniques de micro-repos',
    features: ['Techniques de micro-sieste', 'Exercices respiratoires', 'Relaxation flash', 'Récupération express'],
    gradient: 'from-emerald-500 to-teal-500',
    icon: '💤'
  },
  {
    id: 'employee-10',
    name: 'Box Objectifs & performance',
    category: 'Salariés',
    evaluationScale: 'Isolement',
    price: '36€/mois',
    description: 'Atteignez vos objectifs professionnels sereinement',
    features: ['Définition d\'objectifs', 'Mesure des progrès', 'Motivation constante', 'Célébration des succès'],
    gradient: 'from-yellow-500 to-orange-500',
    icon: '🎯'
  }
];

export const getBoxesByCategory = (category: string): BoxItem[] => {
  return allBoxes.filter(box => box.category === category);
};

export const getBoxByEvaluationScale = (scale: string): BoxItem[] => {
  return allBoxes.filter(box => box.evaluationScale === scale);
};
