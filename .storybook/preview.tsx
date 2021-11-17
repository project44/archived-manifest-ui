import React from 'react';
import { Story, StoryContext } from '@storybook/react';

import { ManifestProvider, createTheme } from '../packages/react/src';
import * as themes from '../packages/themes/src';

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'current',
    toolbar: {
      icon: 'circlehollow',
      items: ['current', 'legacy', 'dolly'],
    },
  },
};

const getTheme = (themeName) => {
  return createTheme(themes[themeName]);
};

export const decorators = [
  (StoryFn: Story, context: StoryContext) => {
    const themeName = context.globals.theme;
    const theme = React.useMemo(() => {
      return getTheme(context.globals.theme);
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
