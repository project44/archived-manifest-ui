import * as CSS from 'csstype';
import { Theme as SystemTheme } from '@manifest-ui/styled-system';

export type Color = Partial<Record<ColorScale, string>>;

export interface Colors {
  background?: CSS.Property.Color;
  black?: CSS.Property.Color;
  brand?: Color;
  error?: Color;
  neutral?: Color;
  success?: Color;
  text?: CSS.Property.Color;
  warning?: Color;
  white?: CSS.Property.Color;
}

export type ColorScale = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

export type Direction = 'ltr' | 'rtl';
export type Mode = 'dark' | 'light';

export interface Theme extends SystemTheme {
  direction?: Direction;
  mode?: Mode;
}
