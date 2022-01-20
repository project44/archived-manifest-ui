module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true,
    },
    project: [
      './tsconfig.eslint.json',
      './packages/*/tsconfig.json',
    ],
    sourceType: 'module',
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:jest/recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint'
  ],
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  plugins: ['@typescript-eslint', 'jsx-a11y', 'react', 'react-hooks', 'simple-import-sort'],
  rules: {
    /**
     * Eslint plugin
     */

    // Allow warn and error
    'no-console': ['error', { allow: ['warn', 'error'] }],

    /** 
     * Import plugin
     */

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

     // Enforce new line after imports.
     'import/newline-after-import': 'error',

     /**
      * Simple-sort plugin
      */

    'simple-import-sort/imports': 'error',

    /**
     * Typescript plugin
     */
    
    // Ban all ts comments except for errors, but require a description
    '@typescript-eslint/ban-ts-comment': [
      'error',
      {
        'ts-expect-error': 'allow-with-description',
        'ts-ignore': true,
        'ts-nocheck': true,
        'ts-check': false,
        minimumDescriptionLength: 5,
      },
    ],

    // Require interfaces over types
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],

    // Just not a fan of these rules :)
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/unbound-method': 'off',

    // Let's use the latest TS features
    '@typescript-eslint/prefer-as-const': 'error',
    '@typescript-eslint/prefer-nullish-coalescing': 'error',
    '@typescript-eslint/prefer-optional-chain': 'error',
    
    /**
     * React plugin
     */

    // Allowing spreading of props
    'react/jsx-props-no-spreading': 'off',

    // Using typescript for props
    'react/forbid-prop-types': 'off',
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'react/sort-prop-types': 'off',

    /**
     * React hooks plugin
     */
    
    // Require hook dependencies
    'react-hooks/exhaustive-deps': 'error',
    'react-hooks/rules-of-hooks': 'error',
  },
  overrides: [
    {
      files: [
        'packages/*/tests/**/*.spec.ts',
        'packages/*/tests/**/*.test.ts',
      ],
      plugins: ['jest'],
      env: {
        'jest/globals': true,
      },
      rules: {
        // TS can be less strict in test files
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/no-unsafe-return': 'off',

        'jest/no-alias-methods': 'error',
        'jest/no-disabled-tests': 'warn',
        'jest/no-done-callback': 'error',
        'jest/no-export': 'error',
        'jest/no-focused-tests': 'error',
        'jest/no-identical-title': 'error',
        'jest/no-if': 'error',
        'jest/no-jasmine-globals': 'error',
        'jest/no-jest-import': 'error',
        'jest/no-standalone-expect': 'error',
        'jest/no-test-prefixes': 'error',
        'jest/no-test-return-statement': 'error',
        'jest/prefer-hooks-on-top': 'error',
        'jest/prefer-spy-on': 'error',
        'jest/prefer-todo': 'error',
        'jest/prefer-to-be': 'warn',
        'jest/prefer-to-contain': 'warn',
        'jest/prefer-to-have-length': 'warn',
        'jest/valid-expect': 'error',
        'jest/valid-title': 'error',
      }
    }
  ]
};
