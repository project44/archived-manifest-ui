import type eslint from 'eslint';

const config: eslint.Linter.Config = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'eslint:recommended',
    require.resolve('./presets/typescript.js'),
    require.resolve('./presets/import.js'),
    require.resolve('./presets/react.js'),
    require.resolve('./presets/jest.js'),
    require.resolve('./presets/prettier.js'),
  ],
  rules: {
    // Allow warn and error
    'no-console': ['error', { allow: ['warn', 'error'] }],
  },
};

export default config;
