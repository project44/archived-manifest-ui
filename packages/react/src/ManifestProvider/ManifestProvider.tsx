import React from 'react';
import { theme as defaultTheme } from '../stitches.config';

import { ColorModeProvider } from '../ColorModeProvider';
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
      <ColorModeProvider>{children}</ColorModeProvider>
    </ManifestThemeContext.Provider>
  );
};
