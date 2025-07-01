
# QVT Box Mobile Configuration

Cette application est maintenant configurée pour être déployée en tant qu'application mobile native avec Capacitor.

## Prérequis

- Node.js 16+
- iOS: Xcode 12+ et iOS 13+
- Android: Android Studio et Android SDK 21+

## Installation

1. Installer les dépendances Capacitor (déjà fait)
2. Construire l'application web :
```bash
npm run build
```

3. Synchroniser avec Capacitor :
```bash
npx cap sync
```

## Développement iOS

1. Ajouter la plateforme iOS :
```bash
npx cap add ios
```

2. Ouvrir dans Xcode :
```bash
npx cap open ios
```

3. Configurer dans Xcode :
   - Bundle Identifier: `app.lovable.d0b4b43aed3f4246807fbc69144dca57`
   - Team: Votre équipe de développement Apple
   - Signing: Configuration automatique recommandée

## Développement Android

1. Ajouter la plateforme Android :
```bash
npx cap add android
```

2. Ouvrir dans Android Studio :
```bash
npx cap open android
```

3. Configurer dans Android Studio :
   - Package name: `app.lovable.d0b4b43aed3f4246807fbc69144dca57`
   - Signing key pour la production

## Build et Publication

### iOS (App Store)
1. Dans Xcode : Product → Archive
2. Suivre le processus de soumission à l'App Store Connect

### Android (Google Play)
1. Dans Android Studio : Build → Generate Signed Bundle/APK
2. Uploader sur Google Play Console

## Fonctionnalités Mobile

- ✅ Navigation native
- ✅ Safe area handling (iOS)
- ✅ Splash screen
- ✅ Status bar configuration
- ✅ Keyboard management
- ✅ Back button Android
- ✅ Chat bot optimisé mobile
- ✅ Touch targets optimisés
- ✅ PWA ready

## Mise à jour de l'app

Après chaque modification :
```bash
npm run build
npx cap sync
```

Puis rebuild dans Xcode/Android Studio.
