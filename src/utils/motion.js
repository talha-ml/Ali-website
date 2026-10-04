import { createContext, useContext } from 'react';

export const MotionContext = createContext(null);
export function useMotionPreference() { return useContext(MotionContext); }
