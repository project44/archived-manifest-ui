import React from 'react';
import { ChakraTheme, ThemeProvider } from '../packages/react/src';

interface Props {
  theme: ChakraTheme;
  children: React.ReactNode;
}

export default ({ theme, children }: Props) => (
  <>
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </>
);
