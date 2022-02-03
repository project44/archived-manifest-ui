import * as React from 'react';
import { theme as defaultTheme, Theme } from './theme';
import { mergeTheme, ThemeInput } from './utils';
import { ThemeContext as EmotionContext } from '@emotion/react';

export interface ThemeProviderProps {
  children?: React.ReactNode;
  theme?: ThemeInput;
}

export const ThemeContext = React.createContext<Theme>(defaultTheme);

export const useTheme = () => React.useContext(ThemeContext);

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
