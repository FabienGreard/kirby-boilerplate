/* eslint-disable no-console */
import { useEffect } from 'react';
import { IS_RUNNING_DEV } from 'utils/constant';

export interface Props {
  isForce?: boolean;
  isDisable?: boolean;
}

export default function useServiceWorker({ isForce, isDisable }: Props = { isForce: false, isDisable: false }) {
  useEffect(() => {
    if (isDisable || (!isForce && IS_RUNNING_DEV) || !('serviceWorker' in window.navigator)) return () => true;

    const registerServiceWorker = () =>
      window.navigator.serviceWorker.register('/sw.js').then(
        registration => console.log('Service Worker registration successful with scope: ', registration.scope),
        err => console.log('Service Worker registration failed: ', err),
      );

    window.addEventListener('load', registerServiceWorker);

    return () => window.removeEventListener('load', registerServiceWorker);
  }, [isForce, isDisable]);
}
