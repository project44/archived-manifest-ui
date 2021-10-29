import React from 'react';
import type { Story } from '@storybook/react';

import { globalCss } from '@manifest-ui/stitches';

const globalStyles = globalCss({
  'html, body': {
    fontFamily: '$body',
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
