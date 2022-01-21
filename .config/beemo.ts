import { BeemoConfig } from '@beemo/core';

const config: BeemoConfig = {
  module: '@manifest-ui/config',
  drivers: [
    'babel',
    'eslint',
    'prettier',
    'typescript'
  ],
};

export default config;