import { Format } from 'style-dictionary';
import prettier from 'prettier';

const formatter: Format['formatter'] = ({ dictionary }) => {
  const singleTokens = dictionary.allProperties
    .map(({ name, value }) => `export const ${name} = ${JSON.stringify(value)};`)
    .join('\n');

  return prettier.format(
    `
      /**
       * THIS FILE IS AUTO-GENERATED DO NOT MODIFY
       *
       * To re-generate run \`yarn build:tokens\`
       */
      ${singleTokens}\n
    `,
    { parser: 'typescript', singleQuote: true },
  );
};

export default formatter;
