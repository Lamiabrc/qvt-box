
// Données des produits individuels pour la boutique
export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  subcategory: string;
  description: string;
  image: string;
  tags: string[];
  inStock: boolean;
  madeInFrance: boolean;
}

export const shopProducts: Product[] = [
  // Produits Détente & Relaxation
  {
    id: 'repose-poignet-1',
    name: 'Repose poignet apaisant exclusif QVT Box',
    price: 25,
    category: 'detente',
    subcategory: 'ergonomie',
    description: 'Coussin rempli d\'un mélange naturel relaxant (lin, lavande…), pour soulager la tension pendant la frappe.',
    image: '🛏️',
    tags: ['Made in France', 'Ergonomie', 'Lavande'],
    inStock: true,
    madeInFrance: true
  },
  {
    id: 'coussin-cervical-1',
    name: 'Coussin cervical apaisant',
    price: 35,
    category: 'detente',
    subcategory: 'massage',
    description: 'Pour détendre la nuque en fin de journée, coussin à chauffer ou à refroidir avec recharge.',
    image: '🎋',
    tags: ['Made in France', 'Cervical', 'Chaud/Froid'],
    inStock: true,
    madeInFrance: true
  },
  {
    id: 'recharge-melange-1',
    name: 'Recharge du mélange apaisant',
    price: 15,
    originalPrice: 20,
    category: 'detente',
    subcategory: 'aromatherapie',
    description: 'Recharge mensuelle pour continuer à profiter des bienfaits dans la durée.',
    image: '🌿',
    tags: ['Made in France', 'Recharge', 'Abonnement'],
    inStock: true,
    madeInFrance: true
  },
  {
    id: 'gummies-relaxantes-1',
    name: 'Gummies relaxantes Made in France QVT',
    price: 18,
    category: 'nutrition',
    subcategory: 'complements',
    description: 'À base de plantes, pour une pause douce et naturelle entre deux visioconférences.',
    image: '🍯',
    tags: ['Made in France', 'Plantes', 'Relaxation'],
    inStock: true,
    madeInFrance: true
  },
  {
    id: 'patch-relaxant-1',
    name: 'Patch relaxant au CBD',
    price: 22,
    category: 'sante',
    subcategory: 'cbd',
    description: 'À coller en journée pour soulager les tensions corporelles ou favoriser la sérénité mentale.',
    image: '🩹',
    tags: ['CBD', 'Made in France', 'Anti-stress'],
    inStock: true,
    madeInFrance: true
  },

  // Produits Bureau & Organisation
  {
    id: 'trousse-reunion-1',
    name: 'Trousse "Réunion prête"',
    price: 28,
    category: 'bureau',
    subcategory: 'organisation',
    description: 'Bloc-notes, stylo, surligneur et petit message dans une trousse en tissu réutilisable.',
    image: '📝',
    tags: ['Made in France', 'Organisation', 'Réutilisable'],
    inStock: true,
    madeInFrance: true
  },
  {
    id: 'post-it-elegant-1',
    name: 'Paquet post-it élégant',
    price: 12,
    category: 'bureau',
    subcategory: 'papeterie',
    description: 'Pratique et élégant, fabriqué en France, pour noter ses idées ou ses gratitudes du jour.',
    image: '📄',
    tags: ['Made in France', 'Papeterie', 'Gratitude'],
    inStock: true,
    madeInFrance: true
  },
  {
    id: 'stylo-luxe-1',
    name: 'Stylo de luxe personnalisé',
    price: 45,
    category: 'bureau',
    subcategory: 'ecriture',
    description: 'Stylo de signature en métal avec message gravé "Nouvelle mission – Nouvelle vision".',
    image: '🖊️',
    tags: ['Luxe', 'Personnalisé', 'Métal'],
    inStock: true,
    madeInFrance: true
  },

  // Produits Nutrition & Gourmandise
  {
    id: 'bonbon-haleine-1',
    name: 'Bonbon pour l\'haleine bio',
    price: 8,
    category: 'nutrition',
    subcategory: 'bonbons',
    description: 'Une pause douce, bio et française pour apaiser le corps et l\'esprit.',
    image: '🍬',
    tags: ['Made in France', 'Bio', 'Haleine'],
    inStock: true,
    madeInFrance: true
  },
  {
    id: 'biscuits-artisanaux-1',
    name: 'Biscuits artisanaux healthy',
    price: 14,
    category: 'nutrition',
    subcategory: 'snacks',
    description: 'Biscuit healthy, français et responsable pour remplacer les snacks à 3€.',
    image: '🍪',
    tags: ['Made in France', 'Artisanal', 'Healthy'],
    inStock: true,
    madeInFrance: true
  },
  {
    id: 'fromage-sec-1',
    name: 'Fromage sec artisanal',
    price: 16,
    category: 'nutrition',
    subcategory: 'fromage',
    description: 'Fromage sec de producteur français pour accompagner vos pauses.',
    image: '🧀',
    tags: ['Made in France', 'Artisanal', 'Producteur'],
    inStock: true,
    madeInFrance: true
  },
  {
    id: 'mini-saucisson-1',
    name: 'Mini saucisson de producteur',
    price: 18,
    category: 'nutrition',
    subcategory: 'charcuterie',
    description: 'Terrine ou mini saucisson de producteur français.',
    image: '🥓',
    tags: ['Made in France', 'Producteur', 'Charcuterie'],
    inStock: true,
    madeInFrance: true
  },

  // Produits Bien-être & Aromathérapie
  {
    id: 'infusion-bio-1',
    name: 'Infusion bio bien-être',
    price: 13,
    category: 'boissons',
    subcategory: 'infusions',
    description: 'Pour créer des rituels de pause réconfortants avec verveine, camomille, mélisse.',
    image: '🍵',
    tags: ['Made in France', 'Bio', 'Rituels'],
    inStock: true,
    madeInFrance: true
  },
  {
    id: 'bougie-parfumee-1',
    name: 'Mini bougie parfumée',
    price: 19,
    category: 'aromatherapie',
    subcategory: 'bougies',
    description: 'Création d\'un rituel rassurant pour l\'ambiance de travail.',
    image: '🕯️',
    tags: ['Made in France', 'Aromathérapie', 'Rituel'],
    inStock: true,
    madeInFrance: true
  },
  {
    id: 'roll-on-stress-1',
    name: 'Roll-on huiles essentielles anti-stress',
    price: 16,
    category: 'aromatherapie',
    subcategory: 'huiles',
    description: 'Application discrète au poignet ou tempes pour la sérénité.',
    image: '🧴',
    tags: ['Made in France', 'Huiles essentielles', 'Anti-stress'],
    inStock: true,
    madeInFrance: true
  },
  {
    id: 'boule-anti-stress-1',
    name: 'Boule anti-stress parfumée',
    price: 11,
    category: 'detente',
    subcategory: 'anti-stress',
    description: 'Senteur légère pour créer une ambiance agréable dans son espace de travail.',
    image: '⚪',
    tags: ['Made in France', 'Anti-stress', 'Parfumée'],
    inStock: true,
    madeInFrance: true
  },

  // Produits Santé & TMS
  {
    id: 'creme-massage-1',
    name: 'Crème de massage chauffante',
    price: 24,
    category: 'sante',
    subcategory: 'massage',
    description: 'Formulée pour détendre les muscles sollicités et favoriser la récupération après l\'effort.',
    image: '🧴',
    tags: ['Made in France', 'Massage', 'Chauffante'],
    inStock: true,
    madeInFrance: true
  },
  {
    id: 'poche-gel-1',
    name: 'Poche de gel chaud/froid réutilisable',
    price: 17,
    category: 'sante',
    subcategory: 'therapie',
    description: 'Idéale pour appliquer du chaud ou du froid sur les zones douloureuses.',
    image: '❄️',
    tags: ['Réutilisable', 'Chaud/Froid', 'TMS'],
    inStock: true,
    madeInFrance: true
  },
  {
    id: 'patchs-chauffants-1',
    name: 'Patchs chauffants dos et épaules',
    price: 21,
    category: 'sante',
    subcategory: 'patchs',
    description: 'Offrent un soulagement ciblé des tensions musculaires accumulées.',
    image: '🩹',
    tags: ['Chauffants', 'Dos', 'Épaules'],
    inStock: true,
    madeInFrance: true
  },

  // Produits Nomades
  {
    id: 'lingettes-bio-1',
    name: 'Lingettes rafraîchissantes bio',
    price: 9,
    category: 'hygiene',
    subcategory: 'nettoyage',
    description: 'Pour se sentir propre et frais, même sans point d\'eau disponible.',
    image: '🧽',
    tags: ['Made in France', 'Bio', 'Nomade'],
    inStock: true,
    madeInFrance: true
  },
  {
    id: 'spray-nettoyant-1',
    name: 'Mini spray nettoyant multi-usages',
    price: 12,
    category: 'hygiene',
    subcategory: 'desinfection',
    description: 'Pour désinfecter le volant, les mains ou une surface de pause rapidement.',
    image: '🧴',
    tags: ['Made in France', 'Multi-usages', 'Naturel'],
    inStock: true,
    madeInFrance: true
  },
  {
    id: 'encas-longue-conservation-1',
    name: 'Encas artisanaux longue conservation',
    price: 15,
    category: 'nutrition',
    subcategory: 'barres',
    description: 'Barres énergétiques, fruits secs ou biscuits de producteur pour reprendre des forces.',
    image: '🥜',
    tags: ['Made in France', 'Artisanal', 'Énergétique'],
    inStock: true,
    madeInFrance: true
  }
];

// Données des box d'abonnement
export interface SubscriptionBox {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  features: string[];
  image: string;
  gradient: string;
  duration: string;
  targetAudience: string;
}

export const subscriptionBoxes: SubscriptionBox[] = [
  {
    id: 'box-teletravail-1',
    name: 'QVT Box Télétravail Confort',
    price: 33,
    category: 'entreprise',
    description: 'Une box simple et douce pour prendre soin de soi au bureau. Des essentiels Made in France pour respirer, se recentrer, et s\'accorder une vraie pause.',
    features: [
      'Repose poignet apaisant exclusif QVT Box',
      'Coussin cervical apaisant avec recharge',
      'Trousse "Réunion prête" complète',
      'Gummies relaxantes Made in France',
      'Patch relaxant au CBD',
      'Infusion bio bien-être',
      'Mini-guide "Mon équilibre en télétravail"',
      'Objet surprise bien-être',
      'Accès à l\'appli QVT Box'
    ],
    image: '🏠',
    gradient: 'from-teal-500 to-cyan-500',
    duration: 'mensuel',
    targetAudience: 'télétravailleur'
  },
  {
    id: 'box-bureau-detente-1',
    name: 'QVT Box Bureau Détente',
    price: 25,
    category: 'entreprise',
    description: 'Des essentiels Made in France pour respirer, se recentrer au bureau.',
    features: [
      'Bonbon pour l\'haleine bio français',
      'Boule anti-stress parfumée',
      'Paquet biscuit healthy français',
      'Paquet post-it élégant',
      'Petit cadeau surprise artisanal',
      'Petit parfum d\'ambiance',
      'Accès appli QVT Box'
    ],
    image: '🏢',
    gradient: 'from-blue-500 to-indigo-500',
    duration: 'mensuel',
    targetAudience: 'salarié'
  },
  {
    id: 'box-retraite-1',
    name: 'Kit Retraite "Souvenirs de carrière"',
    price: 89,
    category: 'entreprise',
    description: 'Un coffret exceptionnel pour célébrer une carrière et marquer cette transition importante.',
    features: [
      'Kit autobiographique "Souvenirs de carrière"',
      'Soin naturel (savon ou baume)',
      'Fromage sec artisanal',
      'Terrine ou mini saucisson de producteur',
      'Mini bouteille de vin ou jus de raisin bio',
      'Carte de remerciement personnalisée',
      'Souvenir symbolique (galet, magnet, badge)',
      'Guide de voyage spécial Retraite'
    ],
    image: '🎓',
    gradient: 'from-amber-500 to-orange-500',
    duration: 'unique',
    targetAudience: 'retraité'
  },
  {
    id: 'box-tms-prevention-1',
    name: 'QVT Box Prévention TMS',
    price: 35,
    category: 'sante',
    description: 'Solutions ciblées pour prévenir et soulager les troubles musculo-squelettiques.',
    features: [
      'Crème de massage chauffante aux huiles essentielles',
      'Poche de gel chaud/froid réutilisable',
      'Patchs chauffants pour le dos et les épaules',
      'Gummies relaxantes aux extraits de plantes',
      'Guide pratique "Prévenir les TMS au quotidien"',
      'Exercices d\'étirement intégrés',
      'Conseils posture'
    ],
    image: '💪',
    gradient: 'from-red-500 to-pink-500',
    duration: 'mensuel',
    targetAudience: 'travailleur physique'
  },
  {
    id: 'box-nomade-1',
    name: 'QVT Box Nomade & Mobilité',
    price: 28,
    category: 'mobilite',
    description: 'Pour les professionnels en déplacement qui veulent maintenir leur bien-être.',
    features: [
      'Lingettes rafraîchissantes bio & nettoyantes',
      'Mini sacs poubelle roulés',
      'Mini spray nettoyant multi-usages naturel',
      'Encas artisanaux longue conservation',
      'Mini infusions froides/chaudes à emporter',
      'Carte à message "Courage, tu gères !"',
      'Mini-guide bien-être nomade',
      'Accès app QVT Box avec rappels'
    ],
    image: '🚗',
    gradient: 'from-green-500 to-emerald-500',
    duration: 'mensuel',
    targetAudience: 'nomade'
  },
  {
    id: 'box-equipe-1',
    name: 'QVT Box Cohésion Équipe',
    price: 45,
    category: 'equipe',
    description: 'Pour renforcer les liens et créer une ambiance positive en équipe.',
    features: [
      'Assortiments de biscuits artisanaux + café/infusion bio',
      'Jetons "Défi collectif du mois"',
      'Carnet Frustration anonyme',
      'Objet symbolique à garder ensemble',
      'Défis d\'équipe mensuels',
      'Versions imprimables d\'animation',
      'Version distancielle disponible'
    ],
    image: '👥',
    gradient: 'from-purple-500 to-violet-500',
    duration: 'mensuel',
    targetAudience: 'équipe'
  },
  {
    id: 'box-equilibre-familial-1',
    name: 'QVT Box Équilibre Familial',
    price: 38,
    category: 'famille',
    description: 'Contenu virtuel et physique pour l\'équilibre vie pro/vie perso.',
    features: [
      'Balance à visualiser (première box)',
      'Jetons équilibre pour la balance',
      'Jeu ou coloriage pour enfant',
      'Carte Droit à la déconnexion avec activité',
      'Carnet de bord du bien-être',
      'Guide pratique relaxation',
      'Tableurs routine charge mentale',
      'Menu semaine et planificateur'
    ],
    image: '⚖️',
    gradient: 'from-pink-500 to-rose-500',
    duration: 'mensuel',
    targetAudience: 'parent'
  },
  {
    id: 'box-soutien-moral-1',
    name: 'QVT Box Soutien Moral',
    price: 32,
    category: 'soutien',
    description: 'Soutien moral discret pour les moments difficiles.',
    features: [
      'Lettre "Tu n\'es pas seul" (message inclusif)',
      'Infusion apaisante ou élixir à base de plantes',
      'Mini bougie parfumée ou galet d\'aromathérapie',
      'Carnet "Pose tes pensées ici"',
      'Roll-on huiles essentielles anti-stress',
      'Accès appli QVT Box avec capsules audio',
      'Outil "Ancrage Express"',
      'Carte à message "Un jour à la fois"'
    ],
    image: '💝',
    gradient: 'from-blue-400 to-cyan-400',
    duration: 'mensuel',
    targetAudience: 'personne en difficulté'
  },
  {
    id: 'box-dirigeant-1',
    name: 'QVT Box Prestige Dirigeant',
    price: 125,
    category: 'prestige',
    description: 'Un geste raffiné pour les cadres et dirigeants qui méritent une attention particulière.',
    features: [
      'Stylo de luxe personnalisé',
      'Montre ou bijou de créateur',
      'Coffret de maroquinerie fine',
      'Sélection de vins ou champagnes d\'exception',
      'Coffret de mets fins',
      'Accessoires de dégustation',
      'Produits bien-être et cosmétique haut de gamme'
    ],
    image: '👔',
    gradient: 'from-yellow-500 to-amber-500',
    duration: 'trimestriel',
    targetAudience: 'dirigeant'
  },
  {
    id: 'box-promotion-1',
    name: 'QVT Box Promotion "Nouvel Élan"',
    price: 55,
    category: 'celebration',
    description: 'Box spéciale pour célébrer une promotion pendant 3 à 6 mois.',
    features: [
      'Carte "Bravo pour cette étape !"',
      'Mini trophée ou badge magnétique "Nouvel élan"',
      'Crème ou baume stimulant aux huiles essentielles',
      'Chocolat de félicitations artisanal',
      'Mini livret "Réussir ses 100 premiers jours"',
      'Stylo de signature gravé',
      'Business card inspirante',
      'Capsule audio "Se projeter avec confiance"'
    ],
    image: '🏆',
    gradient: 'from-emerald-500 to-teal-500',
    duration: '3-6 mois',
    targetAudience: 'promu'
  }
];
