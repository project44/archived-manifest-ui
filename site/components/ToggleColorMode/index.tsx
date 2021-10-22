import React from 'react';
import {
  IconButton,
  useColorMode,
  useColorModeValue,
  useTheme,
} from '@manifest-ui/react';
import { transparentize } from '@chakra-ui/theme-tools';

import { FaMoon, FaSun } from 'react-icons/fa';

const ToggleColorMode = () => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  const theme = useTheme();

  const darkHoverBg = transparentize('gray.200', 0.12)(theme);
  const darkActiveBg = transparentize('gray.200', 0.24)(theme);

  return (
    <IconButton
      aria-label={`Switch to ${text} mode`}
      icon={<SwitchIcon />}
      onClick={toggleColorMode}
      variant="ghost"
      _light={{
        _hover: {
          bg: darkHoverBg,
        },
        _active: {
          bg: darkActiveBg,
        },
      }}
    />
  );
};

export default ToggleColorMode;
