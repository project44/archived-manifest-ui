import React from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@manifest-ui/react';
import { Global } from '@emotion/react';

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Global
        styles={{
          'html, body': {
            height: '100%',
          },
          '#__next': {
            height: '100%',
          },
        }}
      />
      <Head>
        <title>project 44 | Manifest UI</title>
        <meta
          name="description"
          content="Creating p44 experiences with Manifest UI"
        />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default App;
