import { useState, useEffect } from 'react';
import type { View } from '../types';

const hashToView: Record<string, View> = {
  '#zodiac-page': 'zodiac',
  '#story-page': 'story',
  '#moon-phase': 'moon-phase',
  '#protection-amulets': 'protection',
  '#shop-page': 'shop',
  '#shipping': 'shipping',
};

export function useHashRouter(): View {
  const [currentView, setCurrentView] = useState<View>(() => {
    return hashToView[window.location.hash] ?? 'home';
  });

  useEffect(() => {
    const resolve = () => {
      const view = hashToView[window.location.hash] ?? 'home';
      setCurrentView(view);
      if (view !== 'home') window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', resolve);
    return () => window.removeEventListener('hashchange', resolve);
  }, []);

  return currentView;
}
