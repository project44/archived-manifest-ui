import React from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { ChakraTheme, extendTheme, ManifestProvider } from '@manifest-ui/react';
import baseTheme from '@manifest-ui/themes';
import { Global } from '@emotion/react';

type ThemeFn = {
  colorMode: 'light' | 'dark';
  theme: ChakraTheme;
};

const theme = extendTheme(
  {
    styles: {
      global: ({ colorMode }: ThemeFn) => ({
        h1: {
          mt: '8',
          mb: '1',
          fontSize: '3xl',
          fontWeight: 'bold',
          lineHeight: '1.2',
          letterSpacing: 'tight',
        },
        h2: {
          mt: '24',
          mb: '2',
          fontSize: '2xl',
          fontWeight: 'semibold',
          lineHeight: '1.3',
          letterSpacing: 'tight',
        },
        h3: {
          mt: '12',
          mb: '2',
          fontSize: 'xl',
          fontWeight: 'semibold',
          lineHeight: 'shorter',
          letterSpacing: 'tight',
        },
        p: {
          mt: '5',
          lineHeight: '1.7',
        },
        code: {
          borderRadius: 'sm',
          paddingInlineStart: '1',
          paddingInlineEnd: '1',
          fontSize: 'sm',
          paddingTop: '2px',
          paddingBottom: '2px',
          whiteSpace: 'nowrap',
          lineHeight: 'normal',
          color: colorMode === 'dark' ? 'purple.200' : 'purple.500',
        },
      }),
    },
  },
  baseTheme,
);

function App({ Component, pageProps }: AppProps) {
  return (
    <ManifestProvider theme={theme}>
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
    </ManifestProvider>
  );
}
export default App;
