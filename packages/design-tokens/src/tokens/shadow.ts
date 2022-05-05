import { Shadow } from '../types';

export const shadow: Shadow = {
  large: { value: '0px 1px 3px rgba(0, 0, 0, 0.16)' },
  medium: {
    value:
      '0px 9px 12px 1px rgba(0, 0, 0, 0.05), 0px 3px 16px 2px rgba(0, 0, 0, 0.04), 0px 5px 6px -3px rgba(0, 0, 0, 0.06)',
  },
  none: { value: 'none' },
  small: {
    value:
      '0px 16px 24px 2px rgba(0, 0, 0, 0.05), 0px 6px 30px 5px rgba(0, 0, 0, 0.04), 0px 8px 10px -5px rgba(0, 0, 0, 0.06)',
  },
};
