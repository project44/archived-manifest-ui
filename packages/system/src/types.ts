import { ResponsiveValue } from '@styled-system/core';
import { SystemProps } from './props';

export type As = React.ElementType<any>;

export type CSSWithMultiValues = {
  [K in keyof SystemCSSProperties]?: K extends keyof SystemProps
    ? SystemProps[K] | PropertyValue<K>
    : PropertyValue<K>;
};

type PropertyValue<K extends keyof SystemCSSProperties> = ThemeThunk<
  ResponsiveValue<boolean | number | string | SystemCSSProperties[K]>
>;
