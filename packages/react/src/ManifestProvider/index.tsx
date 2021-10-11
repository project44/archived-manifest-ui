import { ChakraProvider } from '@chakra-ui/react';
import { __DEV__ } from '@chakra-ui/utils';
import { vocTheme } from '@manifest-ui/themes';

export const ManifestProvider = ChakraProvider;
export type { ChakraProviderProps as ManifestProviderProps } from '@chakra-ui/react';

ManifestProvider.defaultProps = {
  theme: vocTheme,
};

if (__DEV__) {
  ManifestProvider.displayName = 'ManifestProvider';
}
