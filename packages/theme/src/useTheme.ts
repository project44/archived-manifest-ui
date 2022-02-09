import * as React from 'react';
import { ThemeContext } from './context';

export const useTheme = () => React.useContext(ThemeContext);
