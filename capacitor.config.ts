
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.d0b4b43aed3f4246807fbc69144dca57',
  appName: 'qvt-box',
  webDir: 'dist',
  server: {
    url: "https://d0b4b43a-ed3f-4246-807f-bc69144dca57.lovableproject.com?forceHideBadge=true",
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      launchAutoHide: true,
      backgroundColor: "#0f766e",
      androidSplashResourceName: "splash",
      androidScaleType: "CENTER_CROP",
      showSpinner: false,
      androidSpinnerStyle: "large",
      iosSpinnerStyle: "small",
      spinnerColor: "#ffffff",
      splashFullScreen: true,
      splashImmersive: true,
      layoutName: "launch_screen",
      useDialog: true,
    },
    StatusBar: {
      style: 'dark',
      backgroundColor: '#0f766e'
    },
    Keyboard: {
      resize: 'body',
      style: 'dark',
      resizeOnFullScreen: true,
    },
    App: {
      launchUrl: '',
    }
  },
  ios: {
    contentInset: 'automatic',
    backgroundColor: '#0f766e'
  },
  android: {
    backgroundColor: '#0f766e',
    allowMixedContent: true,
    captureInput: true
  }
};

export default config;
