import React from 'react';
import { ChakraProvider, ChakraProviderProps } from '@chakra-ui/react';
import { __DEV__ } from '@chakra-ui/utils';
import defaultTheme from '@manifest-ui/themes/voc';

export interface ManifestProviderProps extends ChakraProviderProps {}

export const ManifestProvider = (props: ManifestProviderProps) => {
  return <ChakraProvider theme={defaultTheme} {...props} />;
};

if (__DEV__) {
  ManifestProvider.displayName = 'ManifestProvider';
}
