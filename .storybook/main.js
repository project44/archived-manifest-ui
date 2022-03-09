const path = require('path');

const toPath = _path => path.join(process.cwd(), _path);

module.exports = {
  addons: [
    {
      name: '@storybook/addon-essentials',
      options: {
        actions: false,
        backgrounds: false,
        measure: false,
        outline: false,
      },
    },
    '@storybook/addon-a11y',
    '@storybook/addon-storysource',
    'storybook-addon-theme-playground',
    './addons/styled/preset',
  ],
  features: {
    postcss: false,
    emotionAlias: false,
  },
  staticDirs: ['public'],
  stories: ['../docs/**/*.stories.mdx', '../packages/**/*.stories.@(mdx|tsx)'],
  typescript: async config => ({
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      compilerOptions: {
        allowSyntheticDefaultImports: false,
      },
      propFilter: prop => {
        if (['theme'].includes(prop.name)) {
          return false;
        }

        return prop.parent
          ? /@manifest-ui/.test(prop.parent.fileName) || !/node_modules/.test(prop.parent.fileName)
          : true;
      },
      shouldExtractLiteralValuesFromEnum: true,
    },
  }),
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
