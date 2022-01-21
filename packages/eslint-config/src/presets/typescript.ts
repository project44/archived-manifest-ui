import type eslint from 'eslint';
import fs from 'fs';
import path from 'path';

import { ROOT, TSCONFIG_JSON_PATH } from '../constants';
import { getRootProjectReferences } from '../helpers/getRootProjectReferences';

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

const config: eslint.Linter.Config = {
  overrides: [
    {
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
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
  ],
};

export default config;
