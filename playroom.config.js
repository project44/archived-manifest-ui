/* eslint-disable @typescript-eslint/no-var-requires */

const BrotliPlugin = require('brotli-webpack-plugin');

module.exports = {
  components: './.playroom/components.ts',
  outputPath: './dist/playroom',
  title: 'Manifest UI',
  baseUrl: '/manifest-ui/playroom/',
  snippets: './.playroom/snippets.ts',
  themes: './.playroom/themes.ts',
  frameComponent: './.playroom/FrameComponent.tsx',
  widths: [320, 768, 1024, 1400, 'calc(100vw - 120px)'],
  webpackConfig: () => ({
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-typescript',
                '@babel/preset-react',
              ],
            },
          },
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.ts', '.tsx'],
    },
    plugins:
      process.env.NODE_ENV === 'production'
        ? [
            new BrotliPlugin({
              asset: '[path].br[query]',
              test: /\.(js|css|html|svg)$/,
              threshold: 10240,
              minRatio: 0.8,
            }),
          ]
        : [],
  }),
};
