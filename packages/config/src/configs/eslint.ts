import { IGNORE_LIST, ROOT, TSCONFIG_JSON_PATH } from '../constants';
import type { ESLintConfig } from '@beemo/driver-eslint';
import fs from 'fs';
import { getRootProjectReferences } from '../helpers/getRootProjectReferences';
import path from 'path';

let project: string[] | string = '';

const tsConfigEslintPath = path.join(ROOT, 'tsconfig.eslint.json');

if (fs.existsSync(tsConfigEslintPath)) {
  project = tsConfigEslintPath;
}

if (!project) {
  project =
    getRootProjectReferences()?.map(ref => path.join(ROOT, ref.path, 'tsconfig.json')) ??
    TSCONFIG_JSON_PATH;
}

const config: ESLintConfig = {
  root: true,
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:jest/recommended',
    'plugin:prettier/recommended',
  ],
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  ignore: [...IGNORE_LIST, '*.min.js', '*.map', '*.snap'],
  plugins: ['@typescript-eslint', 'jsx-a11y', 'react', 'react-hooks'],
  rules: {
    // Allow warn and error
    'no-console': ['error', { allow: ['warn', 'error'] }],

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

    // No lines between import statements
    'import/order': ['error', { groups: [], 'newlines-between': 'never' }],

    // Sort imports
    'sort-imports': [
      'error',
      {
        ignoreCase: true,
        ignoreDeclarationSort: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
      },
    ],

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
  overrides: [
    {
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:import/typescript',
      ],
      files: ['*.{ts,tsx}'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project,
      },
      plugins: ['@typescript-eslint'],
      rules: {
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
      },
    },
    {
      files: ['packages/*/tests/**/*.spec.ts', 'packages/*/tests/**/*.test.ts'],
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
      },
    },
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
};

export default config;
