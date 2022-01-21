import type eslint from 'eslint';

const config: eslint.Linter.Config = {
  extends: [
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['jsx-a11y', 'react', 'react-hooks'],
  rules: {
    // Allowing spreading of props
    'react/jsx-props-no-spreading': 'off',

    // Using typescript for props
    'react/forbid-prop-types': 'off',
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'react/sort-prop-types': 'off',

    // Require hook dependencies
    'react-hooks/exhaustive-deps': 'error',
    'react-hooks/rules-of-hooks': 'error',
  },
};

export default config;
