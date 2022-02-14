import * as React from 'react';
import { Provider } from '@manifest-ui/provider';
import { Story } from '@storybook/react';

export const decorators = [
  (StoryFn: Story) => (
    <Provider>
      <StoryFn />
    </Provider>
  ),
];


export const parameters = {
  viewMode: 'docs',
  previewTabs: { 'storybook/docs/panel': { index: -1 } },
  actions: { argTypesRegex: '^on.*' },
  options: {
    storySort: {
      order: ['Welcome', 'Components'],
    },
  },
};
