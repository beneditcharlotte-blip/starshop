export type ElementType = 'Fire' | 'Earth' | 'Air' | 'Water';
export type MoonPhaseType = 'New Moon' | 'Waxing' | 'Full Moon' | 'Waning';
export type AmuletPurposeType = 'Protection' | 'Love' | 'Wealth' | 'Intuition';

export interface Product {
  id: string;
  name: string;
  price: number;
  compareAtPrice?: number;
  image: string;
  category: string;
  signs: string[];
  collection?: 'zodiac' | 'moon-phase' | 'amulet';
  element?: ElementType;
  moonPhase?: MoonPhaseType;
  amuletPurpose?: AmuletPurposeType;
}
