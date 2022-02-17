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
  viewMode: 'story',
  actions: { argTypesRegex: '^on.*' },
  options: {
    storySort: {
      method: 'alphabetical',
      order: ['Welcome', 'Components'],
    },
  },
};
