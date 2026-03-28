/**
 * TaskHero Design Tokens — Shadows
 * Source of truth: Figma effect styles
 *
 * React Native uses shadowOffset, shadowRadius, shadowColor, shadowOpacity
 * These map directly to the Figma DROP_SHADOW values
 *
 * Usage: import { shadows } from '@/tokens/shadows'
 */

import { ViewStyle } from 'react-native';

export const shadows = {
  button: {
    shadowColor: 'rgb(48, 131, 189)',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.32,
    shadowRadius: 3,
    elevation: 2,
  } satisfies ViewStyle,

  card: {
    shadowColor: 'rgb(48, 131, 189)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.24,
    shadowRadius: 8,
    elevation: 4,
  } satisfies ViewStyle,

  tabBar: {
    shadowColor: 'rgb(0, 0, 0)',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.08,
    shadowRadius: 24,
    elevation: 8,
  } satisfies ViewStyle,

  subtle: {
    shadowColor: 'rgb(0, 0, 0)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 1,
  } satisfies ViewStyle,

  focusRing: {
    shadowColor: 'rgb(36, 110, 220)',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.35,
    shadowRadius: 0,
    elevation: 0,
  } satisfies ViewStyle,
} as const;

export type Shadows = typeof shadows;
