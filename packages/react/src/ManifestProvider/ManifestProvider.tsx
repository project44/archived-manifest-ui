import React from 'react';
import { ManifestThemeContext } from './ManifestThemeContext';
import { theme as defaultTheme } from '../stitches.config';

export interface ManifestProviderProps {
  theme?: typeof defaultTheme;
  children: React.ReactNode;
}

export const ManifestProvider = ({
  theme = defaultTheme,
  children,
}: ManifestProviderProps) => {
  return (
    <ManifestThemeContext.Provider value={theme}>
      <div className={theme}>{children}</div>
    </ManifestThemeContext.Provider>
  );
};
