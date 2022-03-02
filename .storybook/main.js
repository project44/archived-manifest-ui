const path = require('path');

const toPath = _path => path.join(process.cwd(), _path);
const styledProps = new Set(['as', 'sx']);

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
      shouldExtractLiteralValuesFromEnum: true,
      shouldRemoveUndefinedFromOptional: true,
      propFilter: prop => {
        // Remove styled props that do not have a description.
        if (!styledProps.has(prop.name) && !prop.description) return;

        if (config.reactDocgenTypescriptOptions.propFilter) {
          return config.reactDocgenTypescriptOptions.propFilter(prop);
        }

        return true;
      },
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
