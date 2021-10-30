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
  }),
};
