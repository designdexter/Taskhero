/**
 * TaskHero Design Tokens — Colors
 * Source of truth: Figma file SidePro-1 (5dnR1zYkXoUNxNwJaDsesy)
 * Semantic collection → aliased to Primitives
 *
 * Usage: import { colors } from '@/tokens/colors'
 */

export const colors = {
  surface: {
    page: '#ffffff',
    card: '#ffffff',
    ground: '#f6f8f9',
    subtle: '#f7f7f7',
    disabled: '#e5e9eb',
  },

  text: {
    default: '#1a2024',
    strong: '#000000',
    muted: '#48535b',
    subtle: '#6e7c87',
    placeholder: '#9aa6ac',
    onPrimary: '#ffffff',
    onSuccess: '#ffffff',
    onDanger: '#ffffff',
  },

  primary: {
    default: '#246edc',
    hover: '#0966df',
    subtle: '#dceaff',
    text: '#246edc',
    strong: '#0e73f6',
  },

  border: {
    default: '#dde2e4',
    subtle: '#eef0f2',
    strong: '#e5e9eb',
    primary: '#246edc',
    input: '#b0babf',
  },

  success: {
    default: '#47d16c',
    strong: '#22c348',
    text: '#22c348',
  },

  danger: {
    default: '#f76659',
    strong: '#cc0905',
    text: '#cc0905',
  },

  warning: {
    default: '#e59018',
    subtle: '#ffecd1',
    text: '#835101',
  },

  icon: {
    default: '#5b6871',
    strong: '#3c464e',
    muted: '#b0babf',
    primary: '#246edc',
    onPrimary: '#ffffff',
  },

  kid: {
    cardYellow: '#ffecd1',
    cardGreen: '#e8fcf7',
    cardBlue: '#dceaff',
    cardPink: '#fde5fa',
    cardPeach: '#feecd3',
    cardLavenderPink: '#fde5fa',
    cardLavender: '#d5adf6',
    cardLemon: '#fffdde',
    cardMint: '#adf4f6',
    cardGold: '#f7d5a6',
    cardLemonMid: '#f7ed9d',
    cardMintLight: '#e8fcf7',
    cardLilac: '#e9ceff',
    cardPinkSoft: '#f6bfef',
    cardSky: '#d9e6f6',
    cardSteel: '#b9d0eb',
    cardMintMid: '#b1f2e2',
  },
} as const;

export type Colors = typeof colors;
