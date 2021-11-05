import React from 'react';

export type ColorModeContextValue = {
  mode: string;
  invertMode: () => void;
  setMode: React.Dispatch<React.SetStateAction<string>>;
} | null;

export const ColorModeContext =
  React.createContext<ColorModeContextValue>(null);

export const useColorMode = () => {
  const context = React.useContext(ColorModeContext);

  if (context === null) {
    throw new Error('No color mode available on context');
  }

  return context;
};
