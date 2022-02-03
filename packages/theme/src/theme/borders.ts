import * as CSS from 'csstype';
import { Length } from '@manifest-ui/styled-system';

export type BorderWidth = 'x-small' | 'small' | 'medium' | 'large' | 'x-large';

export type Radii = 'none' | 'small' | 'medium' | 'large' | 'full';

export const borderWidths: Record<BorderWidth, CSS.Property.BorderWidth<Length>> = {
  'x-small': 0,
  small: 1,
  medium: 2,
  large: 3,
  'x-large': 4,
};

export const radii: Record<Radii, CSS.Property.BorderRadius<Length>> = {
  none: 0,
  small: 1,
  medium: 2,
  large: 4,
  full: 9999,
};
