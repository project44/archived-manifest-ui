import { BeemoConfig } from '@beemo/core';

const config: BeemoConfig = {
  module: '@manifest-ui/config',
  drivers: [
    'babel',
    'eslint',
    'jest',
    'prettier',
    'typescript'
  ],
};

export default config;