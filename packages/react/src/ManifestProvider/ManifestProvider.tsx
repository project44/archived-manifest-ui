import React from 'react';
import { theme as defaultTheme } from '../stitches.config';

import { ThemeContext } from './ThemeContext';

export interface ManifestProviderProps {
  theme?: typeof defaultTheme;
  children: React.ReactNode;
}

export const ManifestProvider = ({
  theme = defaultTheme,
  children,
}: ManifestProviderProps) => {
  return (
    <ThemeContext.Provider value={theme}>
      <div className={theme}>{children}</div>
    </ThemeContext.Provider>
  );
};
