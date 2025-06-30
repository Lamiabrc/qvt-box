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
  isVirtual?: boolean;
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
  },

  // Bijoux bien-être
  {
    id: 'bracelet-chakra-1',
    name: 'Bracelet 7 Chakras en pierres naturelles',
    price: 35,
    category: 'bijoux',
    subcategory: 'bracelets',
    description: 'Bracelet en pierres naturelles pour harmoniser vos énergies et réduire le stress.',
    image: '📿',
    tags: ['Lithothérapie', 'Chakras', 'Naturel'],
    inStock: true,
    madeInFrance: true
  },
  {
    id: 'collier-amethyste-1',
    name: 'Collier Améthyste anti-stress',
    price: 45,
    category: 'bijoux',
    subcategory: 'colliers',
    description: 'Collier en améthyste naturelle, pierre de sérénité et d\'apaisement mental.',
    image: '💜',
    tags: ['Améthyste', 'Anti-stress', 'Made in France'],
    inStock: true,
    madeInFrance: true
  },
  {
    id: 'boucles-quartz-1',
    name: 'Boucles d\'oreilles Quartz rose',
    price: 28,
    category: 'bijoux',
    subcategory: 'boucles',
    description: 'Boucles d\'oreilles en quartz rose, pierre de l\'amour de soi et de la confiance.',
    image: '💗',
    tags: ['Quartz rose', 'Confiance', 'Élégant'],
    inStock: true,
    madeInFrance: true
  },
  {
    id: 'bague-protection-1',
    name: 'Bague Œil de Tigre protection',
    price: 32,
    category: 'bijoux',
    subcategory: 'bagues',
    description: 'Bague en œil de tigre pour protection énergétique et confiance en soi.',
    image: '🐅',
    tags: ['Œil de Tigre', 'Protection', 'Force'],
    inStock: true,
    madeInFrance: true
  },
  {
    id: 'pendentif-serenite-1',
    name: 'Pendentif Lapis-lazuli sérénité',
    price: 38,
    category: 'bijoux',
    subcategory: 'pendentifs',
    description: 'Pendentif en lapis-lazuli pour favoriser la communication et la sérénité intérieure.',
    image: '💙',
    tags: ['Lapis-lazuli', 'Communication', 'Sérénité'],
    inStock: true,
    madeInFrance: true
  },

  // Galets avec messages d'encouragement
  {
    id: 'galet-courage-1',
    name: 'Galet gravé "Tu es plus fort que tu le penses"',
    price: 15,
    category: 'galets',
    subcategory: 'encouragement',
    description: 'Galet en pierre naturelle gravé avec un message d\'encouragement personnalisé.',
    image: '🪨',
    tags: ['Made in France', 'Encouragement', 'Gravure'],
    inStock: true,
    madeInFrance: true
  },
  {
    id: 'galet-confiance-1',
    name: 'Galet "Crois en tes rêves"',
    price: 15,
    category: 'galets',
    subcategory: 'motivation',
    description: 'Pierre polie avec message motivant, parfaite pour garder près de soi.',
    image: '✨',
    tags: ['Motivation', 'Rêves', 'Made in France'],
    inStock: true,
    madeInFrance: true
  },
  {
    id: 'galet-serenite-1',
    name: 'Galet "Respire et lâche prise"',
    price: 15,
    category: 'galets',
    subcategory: 'relaxation',
    description: 'Galet apaisant avec message de lâcher-prise pour moments de stress.',
    image: '🌊',
    tags: ['Relaxation', 'Lâcher-prise', 'Naturel'],
    inStock: true,
    madeInFrance: true
  },
  {
    id: 'galet-gratitude-1',
    name: 'Galet "Merci pour cette journée"',
    price: 15,
    category: 'galets',
    subcategory: 'gratitude',
    description: 'Pierre de gratitude pour cultiver la reconnaissance au quotidien.',
    image: '🙏',
    tags: ['Gratitude', 'Reconnaissance', 'Quotidien'],
    inStock: true,
    madeInFrance: true
  },
  {
    id: 'set-galets-1',
    name: 'Set 5 galets messages positifs',
    price: 65,
    originalPrice: 75,
    category: 'galets',
    subcategory: 'collections',
    description: 'Collection de 5 galets avec différents messages d\'encouragement.',
    image: '🌟',
    tags: ['Collection', 'Messages positifs', 'Économie'],
    inStock: true,
    madeInFrance: true
  },

  // Gris-gris et porte-bonheurs
  {
    id: 'grigri-protection-1',
    name: 'Gris-gris protection travail',
    price: 22,
    category: 'grigri',
    subcategory: 'protection',
    description: 'Petit gris-gris artisanal pour protection et réussite professionnelle.',
    image: '🧿',
    tags: ['Protection', 'Travail', 'Artisanal'],
    inStock: true,
    madeInFrance: true
  },
  {
    id: 'porte-bonheur-elephant-1',
    name: 'Éléphant porte-bonheur mini',
    price: 18,
    category: 'porte-bonheur',
    subcategory: 'figurines',
    description: 'Petit éléphant en résine, symbole de sagesse et de chance.',
    image: '🐘',
    tags: ['Chance', 'Sagesse', 'Résine'],
    inStock: true,
    madeInFrance: true
  },
  {
    id: 'trefle-chance-1',
    name: 'Trèfle à 4 feuilles sous résine',
    price: 25,
    category: 'porte-bonheur',
    subcategory: 'nature',
    description: 'Véritable trèfle à 4 feuilles préservé sous résine transparente.',
    image: '🍀',
    tags: ['Chance', 'Nature', 'Authentique'],
    inStock: true,
    madeInFrance: true
  },
  {
    id: 'main-fatma-1',
    name: 'Main de Fatma protection',
    price: 20,
    category: 'grigri',
    subcategory: 'symboles',
    description: 'Symbole de protection traditionnel en métal argenté.',
    image: '🪬',
    tags: ['Protection', 'Tradition', 'Symbole'],
    inStock: true,
    madeInFrance: true
  },
  {
    id: 'fer-cheval-1',
    name: 'Fer à cheval miniature chance',
    price: 16,
    category: 'porte-bonheur',
    subcategory: 'tradition',
    description: 'Petit fer à cheval traditionnel en métal pour attirer la chance.',
    image: '🍀',
    tags: ['Tradition', 'Chance', 'Métal'],
    inStock: true,
    madeInFrance: true
  },

  // Attrape-rêves
  {
    id: 'attrape-reve-1',
    name: 'Attrape-rêves traditionnel 15cm',
    price: 35,
    category: 'attrape-reves',
    subcategory: 'traditionnel',
    description: 'Attrape-rêves artisanal avec plumes naturelles pour un sommeil paisible.',
    image: '🕸️',
    tags: ['Sommeil', 'Artisanal', 'Tradition'],
    inStock: true,
    madeInFrance: true
  },
  {
    id: 'attrape-reve-mini-1',
    name: 'Mini attrape-rêves bureau',
    price: 18,
    category: 'attrape-reves',
    subcategory: 'bureau',
    description: 'Petit attrape-rêves pour décorer votre espace de travail et éloigner les mauvaises ondes.',
    image: '✨',
    tags: ['Bureau', 'Décoration', 'Protection'],
    inStock: true,
    madeInFrance: true
  },
  {
    id: 'attrape-reve-violet-1',
    name: 'Attrape-rêves violet anti-stress',
    price: 28,
    category: 'attrape-reves',
    subcategory: 'couleur',
    description: 'Attrape-rêves aux tons violets avec pierres d\'améthyste pour la sérénité.',
    image: '💜',
    tags: ['Violet', 'Améthyste', 'Sérénité'],
    inStock: true,
    madeInFrance: true
  },

  // Chocolats déstressants
  {
    id: 'chocolat-cbd-1',
    name: 'Chocolat noir au CBD 70%',
    price: 28,
    category: 'chocolat',
    subcategory: 'cbd',
    description: 'Chocolat noir artisanal infusé au CBD pour relaxation et plaisir.',
    image: '🍫',
    tags: ['CBD', 'Relaxation', 'Artisanal'],
    inStock: true,
    madeInFrance: true
  },
  {
    id: 'chocolat-lavande-1',
    name: 'Chocolat blanc lavande apaisante',
    price: 22,
    category: 'chocolat',
    subcategory: 'plantes',
    description: 'Chocolat blanc aux fleurs de lavande de Provence pour un moment zen.',
    image: '🟡',
    tags: ['Lavande', 'Provence', 'Apaisant'],
    inStock: true,
    madeInFrance: true
  },
  {
    id: 'chocolat-camomille-1',
    name: 'Pralines camomille détente',
    price: 24,
    category: 'chocolat',
    subcategory: 'infusions',
    description: 'Pralines au chocolat infusées à la camomille pour favoriser la détente.',
    image: '🌼',
    tags: ['Camomille', 'Détente', 'Pralines'],
    inStock: true,
    madeInFrance: true
  },
  {
    id: 'chocolat-ashwagandha-1',
    name: 'Chocolat adaptogène Ashwagandha',
    price: 32,
    category: 'chocolat',
    subcategory: 'adaptogenes',
    description: 'Chocolat noir enrichi en ashwagandha pour gérer le stress naturellement.',
    image: '🟫',
    tags: ['Ashwagandha', 'Adaptogène', 'Stress'],
    inStock: true,
    madeInFrance: true
  },

  // Produits CBD
  {
    id: 'huile-cbd-1',
    name: 'Huile CBD 10% détente',
    price: 45,
    category: 'cbd',
    subcategory: 'huiles',
    description: 'Huile de CBD premium 10% pour relaxation et gestion du stress.',
    image: '💧',
    tags: ['CBD', 'Huile', '10%'],
    inStock: true,
    madeInFrance: true
  },
  {
    id: 'tisane-cbd-1',
    name: 'Tisane chanvre CBD relaxante',
    price: 18,
    category: 'cbd',
    subcategory: 'tisanes',
    description: 'Mélange de chanvre CBD et plantes relaxantes pour infusion apaisante.',
    image: '🍵',
    tags: ['Tisane', 'Chanvre', 'Relaxant'],
    inStock: true,
    madeInFrance: true
  },
  {
    id: 'baume-cbd-1',
    name: 'Baume CBD muscles et articulations',
    price: 35,
    category: 'cbd',
    subcategory: 'baumes',
    description: 'Baume au CBD pour soulager tensions musculaires et articulaires.',
    image: '🧴',
    tags: ['Baume', 'Muscles', 'Articulations'],
    inStock: true,
    madeInFrance: true
  },

  // Plantes
  {
    id: 'plante-lavande-1',
    name: 'Plant de lavande en pot',
    price: 15,
    category: 'plantes',
    subcategory: 'aromatiques',
    description: 'Plant de lavande naturel en pot pour parfumer et apaiser votre espace.',
    image: '🪴',
    tags: ['Lavande', 'Naturel', 'Parfum'],
    inStock: true,
    madeInFrance: true
  },
  {
    id: 'plante-menthe-1',
    name: 'Menthe fraîche énergisante',
    price: 12,
    category: 'plantes',
    subcategory: 'aromatiques',
    description: 'Plant de menthe fraîche pour tisanes énergisantes et rafraîchissantes.',
    image: '🌿',
    tags: ['Menthe', 'Énergisant', 'Tisane'],
    inStock: true,
    madeInFrance: true
  },
  {
    id: 'plante-basilic-1',
    name: 'Basilic sacré anti-stress',
    price: 18,
    category: 'plantes',
    subcategory: 'adaptogenes',
    description: 'Plant de basilic sacré, plante adaptogène pour réduire le stress.',
    image: '🌱',
    tags: ['Basilic sacré', 'Adaptogène', 'Anti-stress'],
    inStock: true,
    madeInFrance: true
  },
  {
    id: 'terrarium-1',
    name: 'Mini terrarium zen',
    price: 42,
    category: 'plantes',
    subcategory: 'decoration',
    description: 'Petit écosystème fermé avec plantes grasses pour décoration apaisante.',
    image: '🫙',
    tags: ['Terrarium', 'Zen', 'Écosystème'],
    inStock: true,
    madeInFrance: true
  },

  // Contenu virtuel
  {
    id: 'meditation-app-1',
    name: 'Accès méditation guidée 6 mois',
    price: 29,
    category: 'virtuel',
    subcategory: 'meditation',
    description: 'Abonnement 6 mois à l\'application de méditations guidées personnalisées.',
    image: '🧘',
    tags: ['Méditation', 'Application', 'Guidée'],
    inStock: true,
    madeInFrance: true,
    isVirtual: true
  },
  {
    id: 'coach-virtuel-1',
    name: 'Coach bien-être virtuel 1 mois',
    price: 49,
    category: 'virtuel',
    subcategory: 'coaching',
    description: 'Accompagnement personnalisé par coach bien-être via application dédiée.',
    image: '👨‍💼',
    tags: ['Coaching', 'Personnalisé', 'Bien-être'],
    inStock: true,
    madeInFrance: true,
    isVirtual: true
  },
  {
    id: 'playlist-relaxation-1',
    name: 'Playlist relaxation premium',
    price: 15,
    category: 'virtuel',
    subcategory: 'musique',
    description: 'Collection exclusive de musiques de relaxation et sons de la nature.',
    image: '🎵',
    tags: ['Musique', 'Relaxation', 'Premium'],
    inStock: true,
    madeInFrance: true,
    isVirtual: true
  },
  {
    id: 'ebook-stress-1',
    name: 'E-book "Gérer son stress au travail"',
    price: 19,
    category: 'virtuel',
    subcategory: 'formation',
    description: 'Guide numérique complet avec exercices pratiques pour gérer le stress professionnel.',
    image: '📖',
    tags: ['E-book', 'Stress', 'Formation'],
    inStock: true,
    madeInFrance: true,
    isVirtual: true
  },
  {
    id: 'seance-yoga-1',
    name: 'Séances yoga en ligne - Pack 10',
    price: 39,
    category: 'virtuel',
    subcategory: 'sport',
    description: 'Pack de 10 séances de yoga en ligne adaptées aux débutants et confirmés.',
    image: '🧘‍♀️',
    tags: ['Yoga', 'En ligne', 'Pack'],
    inStock: true,
    madeInFrance: true,
    isVirtual: true
  },

  // Produits supplémentaires variés
  {
    id: 'pierre-lune-1',
    name: 'Pierre de lune intuition',
    price: 22,
    category: 'bijoux',
    subcategory: 'pierres',
    description: 'Pierre de lune naturelle pour développer l\'intuition et l\'équilibre émotionnel.',
    image: '🌙',
    tags: ['Pierre de lune', 'Intuition', 'Émotions'],
    inStock: true,
    madeInFrance: true
  },
  {
    id: 'encens-palo-santo-1',
    name: 'Bâtons Palo Santo purification',
    price: 16,
    category: 'aromatherapie',
    subcategory: 'encens',
    description: 'Bois sacré Palo Santo pour purifier l\'espace et favoriser la méditation.',
    image: '🕯️',
    tags: ['Palo Santo', 'Purification', 'Méditation'],
    inStock: true,
    madeInFrance: false
  },
  {
    id: 'coussin-meditation-1',
    name: 'Coussin méditation zafu',
    price: 45,
    category: 'meditation',
    subcategory: 'accessoires',
    description: 'Coussin traditionnel zafu en coton bio pour une pratique confortable.',
    image: '🪑',
    tags: ['Zafu', 'Méditation', 'Coton bio'],
    inStock: true,
    madeInFrance: true
  },
  {
    id: 'bol-tibetain-1',
    name: 'Bol tibétain thérapie sonore',
    price: 55,
    category: 'meditation',
    subcategory: 'sonore',
    description: 'Bol chantant tibétain artisanal pour relaxation et thérapie par le son.',
    image: '🥣',
    tags: ['Bol tibétain', 'Thérapie sonore', 'Artisanal'],
    inStock: true,
    madeInFrance: false
  },
  {
    id: 'huile-essentielle-mix-1',
    name: 'Coffret 6 huiles essentielles zen',
    price: 48,
    category: 'aromatherapie',
    subcategory: 'coffrets',
    description: 'Sélection de 6 huiles essentielles apaisantes : lavande, camomille, ylang-ylang...',
    image: '🧴',
    tags: ['Huiles essentielles', 'Coffret', 'Zen'],
    inStock: true,
    madeInFrance: true
  },
  {
    id: 'carnet-gratitude-1',
    name: 'Carnet gratitude 100 jours',
    price: 24,
    category: 'papeterie',
    subcategory: 'journaling',
    description: 'Carnet structuré pour pratiquer la gratitude quotidienne pendant 100 jours.',
    image: '📔',
    tags: ['Gratitude', 'Journaling', '100 jours'],
    inStock: true,
    madeInFrance: true
  },
  {
    id: 'the-detox-1',
    name: 'Thé détox 21 jours',
    price: 32,
    category: 'boissons',
    subcategory: 'detox',
    description: 'Programme thé détox 21 jours avec mélange de plantes purifiantes.',
    image: '🍃',
    tags: ['Détox', '21 jours', 'Plantes'],
    inStock: true,
    madeInFrance: true
  },
  {
    id: 'cristal-fluorite-1',
    name: 'Fluorite violette concentration',
    price: 19,
    category: 'bijoux',
    subcategory: 'cristaux',
    description: 'Cristal de fluorite violette pour améliorer concentration et clarté mentale.',
    image: '💎',
    tags: ['Fluorite', 'Concentration', 'Clarté'],
    inStock: true,
    madeInFrance: true
  },
  {
    id: 'savon-lavande-1',
    name: 'Savon artisanal lavande miel',
    price: 12,
    category: 'hygiene',
    subcategory: 'savons',
    description: 'Savon saponifié à froid, lavande et miel de Provence, apaisant.',
    image: '🧼',
    tags: ['Artisanal', 'Lavande', 'Miel'],
    inStock: true,
    madeInFrance: true
  },
  {
    id: 'bandeau-yoga-1',
    name: 'Bandeau yoga méditation',
    price: 26,
    category: 'meditation',
    subcategory: 'textiles',
    description: 'Bandeau en coton bio pour maintenir la concentration durant la méditation.',
    image: '👤',
    tags: ['Yoga', 'Méditation', 'Coton bio'],
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
