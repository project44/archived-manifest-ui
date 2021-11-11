import React from 'react';
import { theme } from '../stitches.config';

export const ThemeContext = React.createContext<typeof theme | null>(null);

export const useTheme = () => {
  const Theme = React.useContext(ThemeContext);

  if (Theme === null) {
    throw new Error('No Manifest theme available on context');
  }

  return Theme;
};
