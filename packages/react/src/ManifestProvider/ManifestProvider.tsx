import React from 'react';
import { theme as defaultTheme } from '../stitches.config';

import { ManifestThemeContext } from './ManifestThemeContext';

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
