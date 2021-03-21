/* eslint-disable no-console */
import { useEffect } from 'react';
import { IS_RUNNING_DEV } from 'utils/constant';

export default function useServiceWorker(isForce = false) {
  useEffect(() => {
    if (!isForce && IS_RUNNING_DEV) return;

    if ('serviceWorker' in window.navigator) {
      window.addEventListener('load', () => {
        window.navigator.serviceWorker.register('/sw.js').then(
          registration => console.log('Service Worker registration successful with scope: ', registration.scope),
          err => console.log('Service Worker registration failed: ', err),
        );
      });
    }
  }, [isForce]);
}
