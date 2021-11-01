import { Snippets } from 'playroom';
import dedent from 'dedent';

export const snippets: Snippets = [
  {
    group: 'Icon',
    name: 'Default',
    code: dedent(`
    <Icon>
      <path 
        fill="currentColor"
        d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
      />
    </Icon>
    `),
  },
];
