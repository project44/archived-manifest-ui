import * as CSS from 'csstype';
import { Length } from '@manifest-ui/styled-system';

export type Font = 'body' | 'heading' | 'mono';

export type FontSize =
  | 'xx-small'
  | 'x-small'
  | 'small'
  | 'medium'
  | 'large'
  | 'x-large'
  | 'xx-large'
  | 'xxx-large'
  | 'xxxx-large';

export type FontWeight =
  | 'extrathin'
  | 'thin'
  | 'light'
  | 'normal'
  | 'medium'
  | 'semibold'
  | 'bold'
  | 'extrabold'
  | 'black';

export type LetterSpacing = 'normal' | 'tight' | 'tighter' | 'wide' | 'wider';

export type LineHeight = 'x-small' | 'small' | 'medium' | 'large' | 'x-large' | 'xx-large';

export const fonts: Record<Font, CSS.Property.FontFamily> = {
  body: `"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
  heading: '',
  mono: `SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
};

export const fontSizes: Record<FontSize, CSS.Property.FontSize<string | number>> = {
  'xxxx-large': '2rem',
  'xxx-large': '1.75rem',
  'xx-large': '1.5rem',
  'x-large': '1.25rem',
  large: '1.125rem',
  medium: '1rem',
  small: '0.875rem',
  'x-small': '0.75rem',
  'xx-small': '0.625',
};

export const fontWeights: Record<FontWeight, CSS.Property.FontWeight> = {
  extrathin: 100,
  thin: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900,
};

export const letterSpacings: Record<LetterSpacing, CSS.Property.LineHeight<Length>> = {
  tighter: '',
  tight: '-0.02em',
  normal: '-0.01em',
  wide: '0.02em',
  wider: '0.04em',
};

export const lineHeights: Record<LineHeight, CSS.Property.LineHeight<Length>> = {
  'xx-large': '2.5rem',
  'x-large': '2rem',
  large: '1.5rem',
  medium: '1rem',
  small: '0.875rem',
  'x-small': '0.75rem',
};
