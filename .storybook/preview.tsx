import React from 'react';
import { View } from 'react-native';
import type { Preview } from '@storybook/react-native';
import { colors, spacing } from '../src/tokens';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
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
