const BrotliPlugin = require('brotli-webpack-plugin');

const filterProps = ['as', 'css', 'ref'];

module.exports = {
  stories: [
    '../packages/**/*.stories.mdx',
    '../packages/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  typescript: {
    reactDocgenTypescriptOptions: {
      propFilter: (prop) =>
        prop.parent
          ? !/node_modules/.test(prop.parent.fileName)
          : prop.name
          ? !filterProps.includes(prop.name)
          : true,
    },
  },
  webpackFinal: async (config, { configType }) => {
    if (configType === 'PRODUCTION') {
      config.plugins.push(
        new BrotliPlugin({
          asset: '[path].br[query]',
          test: /\.(js|css|html|svg)$/,
          threshold: 10240,
          minRatio: 0.8,
        }),
      );
    }
    return config;
  },
};
