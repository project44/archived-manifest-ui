import { ColorInput, TinyColor } from '@ctrl/tinycolor';
import get from 'lodash.get';

/**
 * Get the color value from the theme if available, or return the color input.
 */
export const getColor = (color: string, theme?: object) => {
  return get(theme, `colors.${color}`, color) as ColorInput;
};

/**
 * Apply opacity to a color.
 */
export const transparentize = (color: string, opacity: number, theme?: object) => {
  const raw = getColor(color, theme);

  return new TinyColor(raw).setAlpha(opacity).toRgbString();
};
