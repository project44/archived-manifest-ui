import { ChakraProvider } from '@chakra-ui/react';
import { voc } from '@manifest-ui/themes';

export const ManifestProvider = ChakraProvider;
export type { ChakraProviderProps as ThemeProviderProps } from '@chakra-ui/react';

ManifestProvider.defaultProps = {
  theme: voc,
};
