import type eslint from 'eslint';

const config: eslint.Linter.Config = {
  extends: ['plugin:import/recommended'],
  plugins: ['simple-import-sort'],
  rules: {
    // Import statements should be first
    'import/first': 'error',

    // Eslint handling of named imports is inconsistent, turning off.
    'import/named': 'off',

    // Require a newline after the imports
    'import/newline-after-import': 'error',

    // Do not use AMD imports
    'import/no-amd': 'error',

    // Acts wonky with workspaces, disabling.
    'import/no-extraneous-dependencies': 'off',

    // Simple sort imports
    'simple-import-sort/imports': 'error',
  },
};

export default config;
