import { useEffect, useState, useSyncExternalStore } from 'react';

import { MotionContext } from '../utils/motion';
const query = '(prefers-reduced-motion: reduce)';
const subscribe = callback => {
  const media = window.matchMedia(query);
  media.addEventListener('change', callback);
  return () => media.removeEventListener('change', callback);
};
const getSnapshot = () => window.matchMedia(query).matches;

export function MotionProvider({ children }) {
  const systemReduced = useSyncExternalStore(subscribe, getSnapshot, () => true);
  const [manualReduced, setManualReduced] = useState(false);
  const reduced = systemReduced || manualReduced;
  useEffect(() => {
    document.documentElement.dataset.motion = reduced ? 'reduce' : 'full';
    return () => { delete document.documentElement.dataset.motion; };
  }, [reduced]);
  return <MotionContext.Provider value={{ reduced, systemReduced, manualReduced, setManualReduced }}>{children}</MotionContext.Provider>;
}

