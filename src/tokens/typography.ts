/**
 * TaskHero Design Tokens — Typography
 * Source of truth: Figma file SidePro-1
 * Font family: Work Sans (all weights)
 *
 * Usage: import { typography } from '@/tokens/typography'
 */

import { TextStyle } from 'react-native';

export const fontFamily = {
  regular: 'WorkSans-Regular',
  medium: 'WorkSans-Medium',
  semiBold: 'WorkSans-SemiBold',
  bold: 'WorkSans-Bold',
} as const;

export const typography = {
  display: {
    fontFamily: fontFamily.bold,
    fontSize: 32,
    lineHeight: 40,
    fontWeight: '700',
  } satisfies TextStyle,

  h1: {
    fontFamily: fontFamily.bold,
    fontSize: 24,
    lineHeight: 32,
    fontWeight: '700',
  } satisfies TextStyle,

  h2: {
    fontFamily: fontFamily.bold,
    fontSize: 18,
    lineHeight: 24,
    fontWeight: '700',
  } satisfies TextStyle,

  h3: {
    fontFamily: fontFamily.bold,
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '700',
  } satisfies TextStyle,

  bodySemibold: {
    fontFamily: fontFamily.semiBold,
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '600',
  } satisfies TextStyle,

  bodyMedium: {
    fontFamily: fontFamily.medium,
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '500',
  } satisfies TextStyle,

  bodyRegular: {
    fontFamily: fontFamily.regular,
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '400',
  } satisfies TextStyle,

  descriptionSemibold: {
    fontFamily: fontFamily.semiBold,
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '600',
  } satisfies TextStyle,

  descriptionMedium: {
    fontFamily: fontFamily.medium,
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '500',
  } satisfies TextStyle,

  descriptionRegular: {
    fontFamily: fontFamily.regular,
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '400',
  } satisfies TextStyle,

  captionMedium: {
    fontFamily: fontFamily.medium,
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '500',
  } satisfies TextStyle,

  captionRegular: {
    fontFamily: fontFamily.regular,
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '400',
  } satisfies TextStyle,
} as const;

export type Typography = typeof typography;
export type TypographyKey = keyof typeof typography;
