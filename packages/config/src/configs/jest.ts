import { IGNORE_LIST } from '../constants';
import type { JestConfig } from '@beemo/driver-jest';

const { tool } = process.beemo;
const { projects } = tool.config.settings;

const config: JestConfig = {
  collectCoverageFrom: ['**/{src,__tests__}/**/*.{js,jsx,ts,tsx}'],
  coverageDirectory: './coverage',
  coveragePathIgnorePatterns: IGNORE_LIST.map(path => path.replace(/\*+/g, '.*')),
  coverageReporters: ['text-summary', 'html'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  // Jest cannot find a babel.config.js file when it is at the root of the directory.
  // https://github.com/facebook/jest/issues/8006
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { rootMode: 'upward' }],
  },
  testEnvironment: 'jsdom',
  testMatch: ['**/{src,__tests__}/**/*.spec.{js,jsx,ts,tsx}'],
  testRunner: 'jest-circus/runner',
};

if (tool.package.workspaces && projects) {
  config.projects = tool.project
    .getWorkspaceGlobs({ relative: true })
    .map((wsPath: string) => `<rootDir>/${wsPath}`);
}

export default config;
