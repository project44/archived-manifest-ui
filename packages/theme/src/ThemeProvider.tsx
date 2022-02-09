import * as React from 'react';
import { ThemeContext as EmotionContext } from '@emotion/react';
import { mergeTheme } from './mergeTheme';
import { ThemeContext } from './context';
import { ThemeInput } from './types';
import { useTheme } from './useTheme';

export interface ThemeProviderProps {
  children?: React.ReactNode;
  theme?: ThemeInput;
}

export function ThemeProvider(props: ThemeProviderProps) {
  const { children, theme: localTheme } = props;

  const outerTheme = useTheme();

  const theme = React.useMemo(() => {
    return mergeTheme(outerTheme, localTheme);
  }, [localTheme, outerTheme]);

  return (
    <ThemeContext.Provider value={theme}>
      <EmotionContext.Provider value={theme}>{children}</EmotionContext.Provider>
    </ThemeContext.Provider>
  );
}
