import React from 'react';
import { View } from 'react-native';
import type { Preview } from '@storybook/react';
import { colors, spacing } from '../src/tokens';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: 'page',
      values: [
        { name: 'page', value: colors.surface.page },
        { name: 'ground', value: colors.surface.ground },
        { name: 'card', value: colors.surface.card },
      ],
    },
  },
  decorators: [
    (Story) => (
      <View style={{ flex: 1, backgroundColor: colors.surface.page, padding: spacing.lg }}>
        <Story />
      </View>
    ),
  ],
};

export default preview;
