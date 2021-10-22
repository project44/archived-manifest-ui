import React from 'react';
import { Story, StoryContext } from '@storybook/react';
import { FaMoon, FaSun } from 'react-icons/fa';

import {
  ManifestProvider,
  extendTheme,
  Flex,
  IconButton,
  useColorMode,
  useColorModeValue,
} from '../packages/react/src';
import { theme } from '../packages/themes/src';

export const globalTypes = {
  direction: {
    name: 'Direction',
    description: 'Direction for layout',
    defaultValue: 'LTR',
    toolbar: {
      icon: 'globe',
      items: ['LTR', 'RTL'],
    },
  },
};

const ColorModeToggleBar = () => {
  const { toggleColorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  const nextMode = useColorModeValue('dark', 'light');

  return (
    <Flex justify="flex-end" mb={4}>
      <IconButton
        size="md"
        fontSize="lg"
        aria-label={`Switch to ${nextMode} mode`}
        variant="ghost"
        color="current"
        marginLeft="2"
        onClick={toggleColorMode}
        icon={<SwitchIcon />}
      />
    </Flex>
  );
};

const withManifest = (StoryFn: Story, context: StoryContext) => {
  const { direction } = context.globals;
  const dir = direction.toLowerCase();

  React.useEffect(() => {
    document.documentElement.dir = dir;
  }, [dir]);

  return (
    <ManifestProvider theme={extendTheme({ direction: dir }, theme)}>
      <div dir={dir} id="story-wrapper" style={{ minHeight: '100vh' }}>
        <ColorModeToggleBar />
        <StoryFn />
      </div>
    </ManifestProvider>
  );
};

export const decorators = [withManifest];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
