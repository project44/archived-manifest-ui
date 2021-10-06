import React from 'react';
import { ChakraProvider, ChakraProviderProps } from '@chakra-ui/react';
import { __DEV__ } from '@chakra-ui/utils';
import { vocTheme } from '@manifest-ui/themes';

export interface ManifestProviderProps extends ChakraProviderProps {}

export const ManifestProvider = (props: ManifestProviderProps) => {
  return <ChakraProvider theme={vocTheme} {...props} />;
};

if (__DEV__) {
  ManifestProvider.displayName = 'ManifestProvider';
}
