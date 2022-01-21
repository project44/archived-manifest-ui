import type eslint from 'eslint';

const config: eslint.Linter.Config = {
  extends: ['plugin:prettier/recommended'],
  plugins: ['prettier'],
};

export default config;
