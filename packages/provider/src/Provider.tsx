import * as React from 'react';
import { ThemeInput, ThemeProvider } from '@manifest-ui/theme';
import { CSSBaseline } from '@manifest-ui/css-baseline';

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
  theme?: ThemeInput;
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
