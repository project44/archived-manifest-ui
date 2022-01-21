import type { BabelConfig } from '@beemo/driver-babel';

interface BabelOptions {
  esm?: boolean;
}

const { tool } = process.beemo;
const { esm } = tool.config.settings as BabelOptions;

const config: BabelConfig = {
  babelrc: true,
  babelrcRoots: tool.project.getWorkspaceGlobs({ relative: true }),
  comments: false,
  presets: [
    [
      require('@babel/preset-env'),
      {
        bugfixes: true,
        exclude: [
          '@babel/plugin-transform-regenerator',
          '@babel/plugin-transform-async-to-generator',
        ],
        loose: true,
        modules: esm ? false : 'auto',
        shippedProposals: true,
        useBuiltIns: false,
      },
    ],
    [require('@babel/preset-typescript'), { allowDeclareFields: true }],
    [
      '@babel/preset-react',
      {
        development: process.env.NODE_ENV === 'development',
        runtime: 'automatic',
      },
    ],
  ],
  plugins: [
    [require('@babel/plugin-proposal-decorators'), { legacy: true }],
    [require('@babel/plugin-proposal-class-properties'), { loose: true }],
    [require('@babel/plugin-proposal-private-methods'), { loose: true }],
  ],
};

export default config;
