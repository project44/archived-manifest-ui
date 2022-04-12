import { Format } from 'style-dictionary';
import prettier from 'prettier';

const formatter: Format['formatter'] = ({ dictionary }) => {
  const tokens: Record<string, string> = {};

  dictionary.allTokens.forEach(token => {
    tokens[token.path.join('-')] = token.name;
  });

  const tokenValues = Object.keys(tokens)
    .map(name => `  '${name}': TOKENS.${tokens[name]},`)
    .join('\n');

  return prettier.format(
    `
      /**
       * THIS FILE IS AUTO-GENERATED DO NOT MODIFY
       *
       * To re-generate run \`yarn build:tokens\`
       */
      import * as TOKENS from './tokens';\n
      const TOKEN_MAP = { ${tokenValues} } as const;\n
      export default TOKEN_MAP;\n
    `,
    { parser: 'typescript', singleQuote: true },
  );
};

export default formatter;
