import React from 'react';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import momentumTheme from '@manifest-ui/themes/momentum';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={momentumTheme}>
      <Component {...pageProps} />;
    </ChakraProvider>
  );
}
export default MyApp;
