import * as CSS from 'csstype';

export type Shadows = 'small' | 'medium' | 'large' | 'x-large';

export type ZIndices =
  | 'docked'
  | 'dropdown'
  | 'modal'
  | 'overlay'
  | 'popover'
  | 'sticky'
  | 'toast'
  | 'tooltip';

export const shadows: Record<Shadows, CSS.Property.BoxShadow> = {
  small: '',
  medium: '',
  large: '',
  'x-large':
    '0px 16px 24px 2px rgba(0, 0, 0, 0.05), 0px 6px 30px 5px rgba(0, 0, 0, 0.04), 0px 8px 10px -5px rgba(0, 0, 0, 0.06)',
};

export const zIndices: Record<ZIndices, CSS.Property.ZIndex> = {
  docked: 10,
  dropdown: 1000,
  modal: 1400,
  overlay: 1300,
  popover: 1500,
  sticky: 1100,
  toast: 1700,
  tooltip: 1800,
};
