const { getDefaultConfig } = require('expo/metro-config');
const withStorybook = require('@storybook/react-native/metro/withStorybook');

const config = getDefaultConfig(__dirname);

const storybookEnabled = process.env.EXPO_PUBLIC_STORYBOOK === 'true';

module.exports = storybookEnabled
  ? withStorybook(config, {
      enabled: true,
      configPath: './.storybook',
    })
  : config;
