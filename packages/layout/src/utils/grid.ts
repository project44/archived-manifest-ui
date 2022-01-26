import { ResponsiveValue, StyleProps } from '@manifest-ui/styled-system';

/**
 * Convert a string or number to a px value
 */
const px = (n: string | number): string => (typeof n === 'number' ? `${n}px` : n);

// Need to return falsy to ensure styled-system doesn't attach css for null or empty values
export const widthToColumns = (width: StyleProps['minWidth']): string => {
  if (Array.isArray(width)) {
    return width.map(item => widthToColumns(item)) as StyleProps['gridTemplateColumns'] as string;
  }

  return (!!width && `repeat(auto-fit, minmax(${px(width as string | number)}, 1fr))`) as string;
};

export const countToColumns = (count?: ResponsiveValue<number | string>): string => {
  if (Array.isArray(count)) {
    return count.map(item => countToColumns(item)) as StyleProps['gridTemplateColumns'] as string;
  }

  return !!count && typeof count === 'number' ? `repeat(${String(count)}, 1fr)` : String(count);
};
