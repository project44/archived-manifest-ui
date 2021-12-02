import React from 'react';
import { Story, StoryContext } from '@storybook/react';

import { ManifestProvider, theme, darkTheme } from '../packages/react/src';

const themes = {
  light: theme,
  dark: darkTheme,
};

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      items: ['light', 'dark'],
    },
  },
};

export const decorators = [
  (StoryFn: Story, context: StoryContext) => {
    const themeName = context.globals.theme;
    const theme = React.useMemo(() => {
      return themes[context.globals.theme];
    }, [themeName]);

    return (
      <ManifestProvider theme={theme}>
        <StoryFn {...context} />
      </ManifestProvider>
    );
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
