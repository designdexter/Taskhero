import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator, StyleSheet, ViewStyle } from 'react-native';
import { colors, typography, spacing, radius, shadows } from '@/tokens';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  label: string;
  onPress: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
}

export function Button({
  label,
  onPress,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
}: ButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      style={[styles.base, styles[variant], styles[size], disabled && styles.disabled]}
      activeOpacity={0.75}
    >
      {loading ? (
        <ActivityIndicator
          color={variant === 'primary' ? colors.text.onPrimary : colors.primary.default}
          size="small"
        />
      ) : (
        <Text style={[styles.label, styles[`label_${variant}`], styles[`label_${size}`]]}>
          {label}
        </Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  base: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: radius.lg,
    minHeight: 48,
  },
  // Variants
  primary: {
    backgroundColor: colors.primary.default,
    ...shadows.button,
  },
  secondary: {
    backgroundColor: colors.surface.card,
    borderWidth: 1,
    borderColor: colors.border.default,
  },
  ghost: {
    backgroundColor: 'transparent',
  },
  disabled: {
    opacity: 0.48,
  },
  // Sizes
  sm: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    minHeight: 36,
    borderRadius: radius.md,
  },
  md: {
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.sm,
  },
  lg: {
    paddingHorizontal: spacing['2xl'],
    paddingVertical: spacing.md,
  },
  // Labels
  label: {
    ...typography.bodySemibold,
  },
  label_primary: {
    color: colors.text.onPrimary,
  },
  label_secondary: {
    color: colors.text.default,
  },
  label_ghost: {
    color: colors.primary.default,
  },
  label_sm: {
    ...typography.descriptionSemibold,
  },
  label_md: {
    ...typography.bodySemibold,
  },
  label_lg: {
    ...typography.bodySemibold,
  },
} as const);
