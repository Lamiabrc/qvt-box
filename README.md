
# 🌟 QVT Box - Écosystème Phygital de Bien-être Mental

> **Plateforme française de santé mentale, bien-être émotionnel et qualité de vie**  
> *Pour entreprises, familles et adolescents*

[![Made in France](https://img.shields.io/badge/Made%20in-France%20🇫🇷-blue)](https://github.com)
[![React](https://img.shields.io/badge/React-18+-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5+-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3+-blue)](https://tailwindcss.com/)
[![Supabase](https://img.shields.io/badge/Supabase-green)](https://supabase.com/)

## 📖 À propos

QVT Box est une application phygitale révolutionnaire qui combine intelligence artificielle, évaluation émotionnelle et produits bien-être Made in France pour transformer l'approche de la santé mentale au quotidien.

### 🎯 Notre mission
Rendre le bien-être émotionnel accessible, mesurable et actionnable pour :
- **👨‍👩‍👧‍👦 Les familles** : Renforcer les liens et prévenir les crises
- **🏢 Les entreprises** : Optimiser la QVT et prévenir les risques psychosociaux  
- **🌟 Les adolescents** : Accompagner cette période clé avec des outils adaptés

## ✨ Fonctionnalités Principales

### 🧠 Ma Bulle Attentionnée - Simulateur IA
- **Score QVT de 1 à 15** (burnout → passion)
- **Évaluation émotionnelle** basée sur l'IA
- **Recommandations personnalisées** en temps réel
- **Déclenchement automatique** d'envoi de box bien-être

### 📦 Catalogue 50 Box Bien-être Made in France
- **10 box standard** pour tous publics
- **10 box adolescents** avec style Rubik's cube/BD
- **10 box parents** pour accompagner la parentalité
- **10 box famille** pour événements spéciaux
- **10 box entreprise** pour événements RH

### 👥 Interface RH Avancée
- **Heatmap émotionnelle** temps réel des équipes
- **Alertes automatiques** de risque de burnout
- **Analytics prédictifs** basés sur l'IA
- **Dashboard QVT** avec KPIs et tendances
- **Recommandations d'actions** préventives

### 🎮 Univers Adolescents
- **Interface colorée** style Rubik's cube et BD
- **Système de gamification** avec points et achievements
- **Activités personnalisées** selon l'humeur
- **Communication famille** intégrée

### 🛍️ Boutique Intégrée
- **Filtrage avancé** par type, niveau bien-être, événement
- **Paiement sécurisé** intégré
- **Fiches produits** avec usage émotionnel
- **Panier intelligent** avec recommandations

### 👤 Expérience Personnalisée
- **Avatars customisables** avec bulles émotionnelles
- **Tableaux de bord** personnalisés par rôle
- **Historique des progrès** et évolution QVT
- **Partage famille/équipe** sécurisé

## 🎨 Design System

### Charte Graphique
- **Vert canard** (#005B5F) - Couleur principale
- **Blanc cassé** (#F2F7F6) - Arrière-plans
- **Noir doux** (#212121) - Textes
- **Vert eau** et **bleu clair** - Accents
- **Formes arrondies** inspirées des bulles
- **Typographie Montserrat** - Moderne et accessible

### Univers Spécialisés
- **👨‍👩‍👧‍👦 Famille** : Chaleureux, rassurant, minimaliste
- **🏢 Entreprise** : Professionnel, analytique, sobre
- **🌟 Ados** : Coloré, dynamique, style BD/Rubik's cube

## 🛠️ Stack Technique

### Frontend
- **React 18+** avec TypeScript
- **Tailwind CSS** + Design System personnalisé
- **Vite** pour le build ultra-rapide
- **React Router** pour la navigation
- **TanStack Query** pour la gestion d'état

### UI/UX
- **Radix UI** + **shadcn/ui** pour l'accessibilité
- **Lucide React** pour les icônes
- **Framer Motion** pour les animations
- **Responsive Design** mobile-first

### Backend & Données
- **Supabase** pour base de données et auth
- **FastAPI** (prévu) pour l'IA et analytics
- **Capacitor** pour les apps mobiles natives
- **PostgreSQL** via Supabase

### Déploiement
- **Vercel** pour le frontend
- **Supabase Edge Functions** pour le serverless
- Compatible **France, Belgique, Suisse**

## 🚀 Installation et Développement

### Prérequis
```bash
Node.js 18+
npm ou yarn
```

### Installation
```bash
# Cloner le projet
git clone https://github.com/votre-username/qvt-box.git
cd qvt-box

# Installer les dépendances
npm install

# Configurer les variables d'environnement
cp .env.example .env
# Renseigner vos clés Supabase
```

### Variables d'environnement
```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Commandes de développement
```bash
# Développement local
npm run dev

# Build de production
npm run build

# Prévisualisation du build
npm run preview

# Linting
npm run lint

# Build pour mobile
npm run build:dev
```

## 📱 Applications Mobiles

### Configuration Capacitor
```bash
# iOS
npm run ios

# Android  
npm run android

# Synchronisation
npm run sync
```

## 🏗️ Architecture

```
src/
├── components/           # Composants réutilisables
│   ├── ui/              # Design system de base
│   ├── UserAvatar.tsx   # Avatar avec bulle émotionnelle
│   ├── HREmotionalHeatmap.tsx  # Interface RH avancée
│   └── TeensInterface.tsx      # Interface ados
├── pages/               # Pages de l'application
├── contexts/            # Contextes React (Auth, etc.)
├── hooks/               # Hooks personnalisés
├── services/            # Services API
├── types/               # Types TypeScript
├── data/                # Données statiques
│   ├── allBoxes.ts      # Catalogue des 50 box
│   ├── simulatorQuestions.ts  # Questions du simulateur
│   └── boxRecommendations.ts  # Logique de recommandation
└── styles/              # Styles globaux
```

## 🎯 Roadmap

### ✅ Phase 1 - Base (Actuelle)
- [x] Architecture React/TypeScript/Tailwind
- [x] Charte graphique QVT Box
- [x] Simulateur "Ma Bulle Attentionnée"
- [x] Catalogue 50 box bien-être
- [x] Interfaces spécialisées par univers
- [x] Avatars et bulles émotionnelles
- [x] Interface RH avec heatmap

### 🔄 Phase 2 - IA et Analytics (En cours)
- [ ] Backend FastAPI avec endpoints IA
- [ ] Prédictions de burnout avancées
- [ ] Recommandations dynamiques
- [ ] Analytics temps réel

### 🚀 Phase 3 - Expansion
- [ ] Intégration e-commerce complète
- [ ] App mobile native
- [ ] Notifications push intelligentes
- [ ] Partenariats marques françaises

## 👥 Contribution

Les contributions sont les bienvenues ! Consultez notre [guide de contribution](CONTRIBUTING.md).

### Code Style
- Utiliser **TypeScript** strict
- Suivre les conventions **Prettier** et **ESLint**
- Commenter le code complexe
- Tester les nouvelles fonctionnalités

## 📄 Licence

MIT License - voir [LICENSE.md](LICENSE.md)

## 📞 Contact

- **Site web** : [qvtbox.fr](https://qvtbox.fr)
- **Email** : contact@qvtbox.fr
- **LinkedIn** : [QVT Box](https://linkedin.com/company/qvtbox)

---

<div align="center">

**🇫🇷 Conçu et développé en France avec ❤️**

*Pour un monde où le bien-être mental est accessible à tous*

</div>
