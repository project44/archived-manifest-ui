import * as React from 'react';
import { CSSBaseline } from '@manifest-ui/css-baseline';
import { Theme } from '@manifest-ui/styled-system';
import { ThemeProvider } from '@manifest-ui/theme';

export interface ProviderProps {
  /**
   * Content to be wrapped by the provider.
   */
  children: React.ReactNode;
  /**
   * Whether to disable the baseline css.
   *
   * @default false;
   */
  disableCSSBaseline?: boolean;
  /**
   * The application theme.
   */
  theme?: Theme;
}

export function Provider(props: ProviderProps) {
  const { children, disableCSSBaseline = false, theme } = props;

  return (
    <ThemeProvider theme={theme}>
      {!disableCSSBaseline && <CSSBaseline />}
      {children}
    </ThemeProvider>
  );
}
