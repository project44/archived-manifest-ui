import React from 'react';
import { Story } from '@storybook/react';

import { Button, ManifestProvider, useColorMode } from '../packages/react/src';

export const ColorModeToggleButton = () => {
  const { mode, invertMode } = useColorMode();
  return <Button onClick={invertMode}>Mode: {mode}</Button>;
};

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
