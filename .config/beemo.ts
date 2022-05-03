import { BeemoConfig } from '@beemo/core';

const config: BeemoConfig = {
  module: '@manifest-ui/vessel',
  drivers: ['babel', 'eslint', 'jest', 'prettier', 'typescript'],
  settings: {
    react: true,
  },
};

export default config;
