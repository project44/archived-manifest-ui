import React from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { ManifestProvider } from '@manifest-ui/react';

import theme from '../theme';

function App({ Component, pageProps }: AppProps) {
  return (
    <ManifestProvider theme={theme}>
      <Head>
        <title>project 44</title>
        <meta
          name="description"
          content="Creating p44 experiences with Manifest UI"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </ManifestProvider>
  );
}
export default App;
