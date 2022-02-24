import { DocsPage, DocsContainer } from '@storybook/addon-docs';
import { Provider } from '@manifest-ui/provider';
import { Story } from '@storybook/react';
import theme from './theme';

export const decorators = [
  (StoryFn: Story) => (
    <Provider>
      <StoryFn />
    </Provider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on.*' },
  docs: {
    theme,
    container: DocsContainer,
    page: DocsPage,
  },
  options: {
    storySort: {
      method: 'alphabetical',
      order: ['Welcome', 'Components'],
    },
  },
  previewTabs: { 'storybook/docs/panel': { index: -1 } },
  viewMode: 'docs',
};
