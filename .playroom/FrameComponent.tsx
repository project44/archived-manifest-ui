import React from 'react';
import { ChakraTheme, ManifestProvider } from '../packages/react/src';

interface Props {
  theme: ChakraTheme;
  children: React.ReactNode;
}

export default ({ theme, children }: Props) => (
  <>
    <ManifestProvider theme={theme}>{children}</ManifestProvider>
  </>
);
