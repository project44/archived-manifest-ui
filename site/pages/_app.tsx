import React from 'react';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import vocTheme from '@manifest-ui/themes/voc';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={vocTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
export default MyApp;
