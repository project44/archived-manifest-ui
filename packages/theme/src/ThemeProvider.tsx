import * as React from 'react';
import { PartialTheme, Theme } from './types';
import { theme as defaultTheme } from './theme';
import { mergeTheme } from './utils';

export interface ThemeProviderProps {
  children?: React.ReactNode;
  theme?: PartialTheme;
}

export const ThemeContext = React.createContext<Theme>(defaultTheme);

export const useTheme = () => React.useContext(ThemeContext);

export function ThemeProvider(props: ThemeProviderProps) {
  const { children, theme: localTheme } = props;

  const outerTheme = useTheme();

  const theme = React.useMemo(() => {
    return mergeTheme(outerTheme, localTheme);
  }, [localTheme, outerTheme]);

  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
}
