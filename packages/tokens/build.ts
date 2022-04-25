import StyleDictionary, { Config, formatHelpers } from 'style-dictionary';
import JsonToTS from 'json-to-ts';

const config: Config = {
  source: ['tokens/**/*.json'],
  platforms: {
    js: {
      transformGroup: 'js',
      files: [
        {
          format: 'javascript/module',
          destination: 'lib/index.js',
        },
      ],
    },
    ts: {
      transformGroup: 'js',
      files: [
        {
          format: 'typescript/module',
          destination: 'dts/index.d.ts',
        },
      ],
    },
  },
};

const fileHeader = (): string =>
  `/**\n * Do not edit directly\n * Generated on ${new Date().toUTCString()}\n */\n`;

StyleDictionary.registerFormat({
  name: 'javascript/module',
  formatter: ({ dictionary }) => {
    // @ts-expect-error: this is incorrectly typed in styled-dictionary
    const tokens = JSON.stringify(formatHelpers.minifyDictionary(dictionary.tokens), null, 2);

    return [fileHeader(), `module.exports = ${tokens};`].join('\n');
  },
});

StyleDictionary.registerFormat({
  name: 'typescript/module',
  formatter: ({ dictionary }) => {
    // @ts-expect-error: this is incorrectly typed in styled-dictionary
    const minified: Record<string, any> = formatHelpers.minifyDictionary(dictionary.tokens);

    // json-to-ts is smart and will create reusable types, however it will assign a name to the type based
    // on the first usage of that type. In this case `Blue` was being used to represet a color scale.
    // Renaming `Blue` to something that makes more sense.
    const typeDeclarations = JsonToTS(minified).map(type => {
      let newType = type;

      if (newType.includes('Blue')) {
        newType = newType.replace(/Blue/g, 'ColorScale');
      }

      return newType;
    });

    return [
      fileHeader(),
      'declare const root: RootObject\n',
      'export default root\n',
      typeDeclarations.join('\n\n'),
    ].join('\n');
  },
});

const dictionary = StyleDictionary.extend(config);

dictionary.buildAllPlatforms();
