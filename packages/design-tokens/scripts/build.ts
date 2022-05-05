import StyleDictionary from 'style-dictionary';

const dictionary = StyleDictionary.extend({
  platforms: {
    js: {
      files: [
        {
          destination: `lib/index.js`,
          format: 'javascript/module-flat',
        },
        {
          destination: `esm/index.js`,
          format: 'javascript/es6',
        },
        {
          destination: `dts/index.dt.ts`,
          format: 'typescript/es6-declarations',
        },
      ],
      transforms: ['attribute/cti', 'name/cti/camel'],
    },
  },
  source: ['src/tokens/index.ts'],
});

dictionary.buildAllPlatforms();
