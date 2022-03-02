import { Provider } from '@manifest-ui/provider';
import { ThemeProvider } from '@manifest-ui/theme';
import { defaultTheme, legacyTheme } from '@manifest-ui/themes';
import { Story } from '@storybook/react';

export const decorators = [
  (StoryFn: Story) => (
    <Provider>
      <StoryFn />
    </Provider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on.*' },
  controls: { expanded: true },
  options: {
    storySort: {
      method: 'alphabetical',
      order: ['Welcome', 'Components'],
    },
  },
  themePlayground: {
    theme: [
      { name: 'Default', theme: defaultTheme },
      { name: 'Legacy', theme: legacyTheme }
    ],
    provider: ThemeProvider
  }
};
