import React from 'react';
import type { AppProps } from 'next/app';
import { ManifestProvider } from '@manifest-ui/react';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ManifestProvider>
      <Component {...pageProps} />
    </ManifestProvider>
  );
}
export default MyApp;
