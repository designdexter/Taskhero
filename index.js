const storybookEnabled = process.env.EXPO_PUBLIC_STORYBOOK === 'true';

if (storybookEnabled) {
  require('./.storybook');
} else {
  require('expo-router/entry');
}
