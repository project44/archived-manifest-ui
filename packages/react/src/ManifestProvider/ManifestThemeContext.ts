import React from 'react';
import { theme } from '../stitches.config';

export const ManifestThemeContext = React.createContext<typeof theme | null>(
  null,
);

export const useManifestTheme = () => {
  const ManifestTheme = React.useContext(ManifestThemeContext);

  if (ManifestTheme === null) {
    throw new Error('No Manifest theme available on context');
  }

  return ManifestTheme;
};
