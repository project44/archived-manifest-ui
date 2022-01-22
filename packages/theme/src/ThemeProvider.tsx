import * as React from 'react';
import { ThemeContext as EmotionContext } from '@emotion/react';
import merge from 'lodash.merge';
import { Theme } from './types';

export interface ThemeProviderProps {
  children?: React.ReactNode;
  theme: Partial<Theme>;
}

export const ThemeContext = React.createContext<Theme>({} as Theme);

export const useTheme = () => React.useContext(ThemeContext);

export function ThemeProvider(props: ThemeProviderProps) {
  const { children, theme: localTheme } = props;

  const outerTheme = useTheme();

  const theme = React.useMemo(() => {
    return merge({}, outerTheme, localTheme) as Theme;
  }, [localTheme, outerTheme]);

  return (
    <ThemeContext.Provider value={theme}>
      <EmotionContext.Provider value={theme}>{children}</EmotionContext.Provider>
    </ThemeContext.Provider>
  );
}
