import { ChakraProvider } from '@chakra-ui/react';
import { voc } from '@manifest-ui/themes';

export const ThemeProvider = ChakraProvider;
export type { ChakraProviderProps as ThemeProviderProps } from '@chakra-ui/react';

ThemeProvider.defaultProps = {
  theme: voc,
};
