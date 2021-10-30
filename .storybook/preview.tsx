import React from 'react';
import { Story } from '@storybook/react';

import { ManifestProvider } from '../packages/react/src';

export const decorators = [
  (StoryFn: Story) => (
    <ManifestProvider>
      <StoryFn />
    </ManifestProvider>
  ),
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
