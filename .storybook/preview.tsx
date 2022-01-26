import * as React from 'react';
import { defaultTheme, ThemeProvider } from '@manifest-ui/theme';
import { Story } from '@storybook/react';

export const decorators = [
  (StoryFn: Story) => (
    <ThemeProvider theme={defaultTheme}>
      <StoryFn />
    </ThemeProvider>
  ),
];


export const parameters = {
  viewMode: 'docs',
  previewTabs: { 'storybook/docs/panel': { index: -1 } },
  actions: { argTypesRegex: '^on.*' },
};