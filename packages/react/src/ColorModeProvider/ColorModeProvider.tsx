import React from 'react';
import { theme as defaultTheme, darkTheme } from '../stitches.config';

import { ColorModeContext } from './ColorModeContext';

type ColorMode = string;
type MediaTheme = string;
type ColorModeProviderType = [
  ColorMode,
  () => void,
  React.Dispatch<React.SetStateAction<string>>,
];

type Themes = {
  [k: string]: string;
};

const themes: Themes = {
  light: defaultTheme.className,
  dark: darkTheme.className,
};

const saveColorMode = (newMode: ColorMode) => {
  try {
    if (typeof newMode === 'string')
      window.localStorage.setItem('manifest-ui-color-mode', newMode);
  } catch (e) {
    console.warn(e);
  }
};

const getSavedColorModePreference = (): ColorMode | void => {
  try {
    const savedMode = window.localStorage.getItem('manifest-ui-color-mode');
    if (typeof savedMode === 'string') return savedMode;
  } catch (e) {
    console.warn(e);
  }
};

const getMediaTheme = (): MediaTheme => {
  const mql = matchMedia('(prefers-color-scheme: dark)');
  const hasMediaQueryPreference = typeof mql.matches === 'boolean';
  if (hasMediaQueryPreference) return mql.matches ? 'dark' : 'light';
  return 'light';
};

const useColorMode = (): ColorModeProviderType => {
  const [colorMode, setColorMode] = React.useState('');
  const html = document.documentElement;

  const applyColorMode = (newMode: ColorMode) => {
    html.classList.remove(themes[colorMode]);
    html.classList.add(themes[newMode]);
    setColorMode(newMode);
  };

  const savedColorMode = getSavedColorModePreference() || getMediaTheme();
  html.classList.add(themes[savedColorMode]);

  React.useEffect(() => {
    setColorMode(savedColorMode);
  }, [savedColorMode]);

  window
    .matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', (e) => {
      applyColorMode(e.matches ? 'dark' : 'light');
    });

  window
    .matchMedia('(prefers-color-scheme: light)')
    .addEventListener('change', (e) => {
      applyColorMode(e.matches ? 'light' : 'dark');
    });

  const invertMode = (): void => {
    const newMode = colorMode === 'dark' ? 'light' : 'dark';
    applyColorMode(newMode);
    saveColorMode(newMode);
  };

  return [colorMode, invertMode, setColorMode];
};

type ColorModeProviderProps = {
  children: React.ReactNode;
};

export const ColorModeProvider = ({ children }: ColorModeProviderProps) => {
  const [mode, invertMode, setMode] = useColorMode();

  return (
    <ColorModeContext.Provider value={{ mode, invertMode, setMode }}>
      {children}
    </ColorModeContext.Provider>
  );
};
