
import React, { useEffect } from 'react';
import { useCapacitor } from '@/hooks/useCapacitor';

interface MobileWrapperProps {
  children: React.ReactNode;
}

const MobileWrapper: React.FC<MobileWrapperProps> = ({ children }) => {
  const { isNative, isIOS, isAndroid } = useCapacitor();

  useEffect(() => {
    // Add mobile-specific classes to body
    if (isNative) {
      document.body.classList.add('mobile-app');

      if (isIOS) {
        document.body.classList.add('ios');
      }

      if (isAndroid) {
        document.body.classList.add('android');
      }
    }

    // Add CSS custom properties for safe areas
    if (isIOS) {
      document.documentElement.style.setProperty(
        '--safe-area-inset-top',
        'env(safe-area-inset-top)'
      );
      document.documentElement.style.setProperty(
        '--safe-area-inset-bottom',
        'env(safe-area-inset-bottom)'
      );
    }

    return () => {
      document.body.classList.remove('mobile-app', 'ios', 'android');
    };
  }, [isNative, isIOS, isAndroid]);

  return <div className={isNative ? 'native-app' : ''}>{children}</div>;
};

export default MobileWrapper;
