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
      '@babel/preset-env',
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
    ['@babel/preset-typescript', { allowDeclareFields: true }],
    [
      '@babel/preset-react',
      {
        development: process.env.NODE_ENV === 'development',
        runtime: 'automatic',
      },
    ],
  ],
  plugins: [
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    ['@babel/plugin-proposal-private-methods', { loose: true }],
    ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
  ],
};

export default config;
