import * as React from 'react';
import { defaultTheme } from '@manifest-ui/themes';
import { Theme } from '@manifest-ui/styled-system';

export const ThemeContext = React.createContext<Theme>(defaultTheme);
