import React from 'react';
import type { Story } from '@storybook/react';

import { globalCss } from '../packages/react/src';

const globalStyles = globalCss({
  '@import':
    "url('https://fonts.googleapis.com/css2?family=Inter:wght@500;600;700&display=swap')",
  'html, body': {
    fontFamily: '$body',
    margin: 0,
  },
});

export const decorators = [
  (StoryFn: Story) => {
    globalStyles();

    return <StoryFn />;
  },
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
