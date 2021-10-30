import { createContext, useContext } from 'react';
import { theme } from '../stitches.config';

export const ManifestThemeContext = createContext<typeof theme | null>(null);

export const useManifestTheme = () => {
  const ManifestTheme = useContext(ManifestThemeContext);

  if (ManifestTheme === null) {
    throw new Error('No Manifest theme available on context');
  }

  return ManifestTheme;
};
