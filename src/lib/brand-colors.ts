
// Charte visuelle QVT Box basée sur le logo
export const brandColors = {
  // Couleurs principales du logo
  primary: {
    teal: '#0891b2', // Couleur principale du logo
    'teal-light': '#06b6d4',
    'teal-dark': '#0e7490',
  },
  
  // Couleurs secondaires pour harmonie
  secondary: {
    purple: '#7c3aed',
    'purple-light': '#8b5cf6',
    'purple-dark': '#6d28d9',
  },
  
  // Couleurs d'accent
  accent: {
    orange: '#f97316',
    green: '#10b981',
    blue: '#3b82f6',
  },
  
  // Couleurs neutres harmonisées
  neutral: {
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#64748b',
    600: '#475569',
    700: '#334155',
    800: '#1e293b',
    900: '#0f172a',
  },
  
  // Couleurs spécifiques aux univers
  universe: {
    famille: '#7c3aed', // Purple pour famille
    entreprise: '#0891b2', // Teal pour entreprise
    boutique: '#f97316', // Orange pour boutique
  }
};

// Gradients harmonisés avec le logo
export const brandGradients = {
  primary: 'bg-gradient-to-r from-teal-500 to-cyan-600',
  secondary: 'bg-gradient-to-r from-purple-500 to-indigo-600',
  hero: 'bg-gradient-to-br from-teal-500 via-cyan-500 to-blue-600',
  cards: 'bg-gradient-to-br from-white to-teal-50',
  famille: 'bg-gradient-to-r from-purple-500 to-pink-500',
  entreprise: 'bg-gradient-to-r from-teal-500 to-cyan-500',
};
