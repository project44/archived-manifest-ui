const path = require('path');

const toPath = _path => path.join(process.cwd(), _path);

module.exports = {
  stories: ['../packages/Welcome.stories.tsx', '../packages/**/*.stories.@(js|ts|tsx)'],
  addons: [
    '@storybook/addon-storysource',
    '@storybook/addon-controls',
    '@storybook/addon-actions',
    '@storybook/addon-a11y',
    '@storybook/addon-viewport'
  ],
  features: {
    postcss: false,
    emotionAlias: false,
  },
  staticDirs: ['public'],
  webpackFinal: async config => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          '@emotion/core': toPath('node_modules/@emotion/react'),
          '@emotion/styled': toPath('node_modules/@emotion/styled'),
          'emotion-theming': toPath('node_modules/@emotion/react'),
          '@manifest-ui': toPath('node_modules/@manifest-ui'),
        },
      },
    };
  },
};