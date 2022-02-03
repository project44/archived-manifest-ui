import * as CSS from 'csstype';

export type Size =
  | 'xxx-small'
  | 'xx-small'
  | 'x-small'
  | 'small'
  | 'medium'
  | 'large'
  | 'x-large'
  | 'xx-large'
  | 'xxx-large';

export const sizes: Record<Size, CSS.Property.Height<{}> | CSS.Property.Width<{}>> = {
  'xxx-large': '',
  'xx-large': '',
  'x-large': '',
  large: '',
  medium: '',
  small: '',
  'x-small': '',
  'xx-small': '',
  'xxx-small': '',
};

export const space: Array<CSS.Property.Margin<number | string>> = [
  '0',
  '0.25rem',
  '0.5rem',
  '0.75rem',
  '1rem',
  '1.25rem',
  '2.5rem',
];
