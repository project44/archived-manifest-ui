import es6Formatter from './formatters/es6';
import mapFlat from './formatters/map-flat';
import StyleDictionary from 'style-dictionary';
import { tokens } from '../src';

StyleDictionary.extend({
  format: {
    'manifest/es6': es6Formatter,
    'manifest/map-flat': mapFlat,
  },
  platforms: {
    ts: {
      transforms: ['attribute/cti', 'name/cti/constant'],
      transformGroup: 'js',
      buildPath: './src/generated/',
      files: [
        {
          format: 'manifest/es6',
          destination: `tokens.ts`,
        },
        {
          format: 'manifest/map-flat',
          destination: `tokenMap.ts`,
        },
      ],
    },
  },
  tokens: tokens as any,
}).buildAllPlatforms();
