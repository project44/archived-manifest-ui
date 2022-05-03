import * as CSS from 'csstype';
import {
  RequiredTheme,
  ResponsiveValue,
  SystemConfigs,
  Theme,
  TLengthStyledSystem,
} from '../types';
import { system } from '../core';

export interface BorderProps<ThemeType extends Theme = RequiredTheme> {
  border?: ResponsiveValue<CSS.Property.Border<TLengthStyledSystem>, ThemeType>;
  borderWidth?: ResponsiveValue<CSS.Property.BorderWidth<TLengthStyledSystem>, ThemeType>;
  borderStyle?: ResponsiveValue<CSS.Property.BorderStyle, ThemeType>;
  borderCollapse?: ResponsiveValue<CSS.Property.BorderCollapse, ThemeType>;
  borderColor?: ResponsiveValue<CSS.Property.BorderTopColor, ThemeType>;
  borderRadius?: ResponsiveValue<CSS.Property.BorderRadius<TLengthStyledSystem>, ThemeType>;
  borderBottomRadius?: ResponsiveValue<CSS.Property.BorderRadius, ThemeType>;
  borderEndRadius?: ResponsiveValue<CSS.Property.BorderRadius, ThemeType>;
  borderTopRadius?: ResponsiveValue<CSS.Property.BorderRadius, ThemeType>;
  borderRightRadius?: ResponsiveValue<CSS.Property.BorderRadius, ThemeType>;
  borderLeftRadius?: ResponsiveValue<CSS.Property.BorderRadius, ThemeType>;
  borderStartRadius?: ResponsiveValue<CSS.Property.BorderRadius<TLengthStyledSystem>, ThemeType>;
  borderTopLeftRadius?: ResponsiveValue<CSS.Property.BorderRadius<TLengthStyledSystem>, ThemeType>;
  borderTopRightRadius?: ResponsiveValue<CSS.Property.BorderRadius<TLengthStyledSystem>, ThemeType>;
  borderBottomLeftRadius?: ResponsiveValue<
    CSS.Property.BorderRadius<TLengthStyledSystem>,
    ThemeType
  >;
  borderBottomRightRadius?: ResponsiveValue<
    CSS.Property.BorderRadius<TLengthStyledSystem>,
    ThemeType
  >;
  borderTop?: ResponsiveValue<CSS.Property.BorderTop<TLengthStyledSystem>, ThemeType>;
  borderTopWidth?: ResponsiveValue<CSS.Property.BorderWidth<TLengthStyledSystem>, ThemeType>;
  borderTopStyle?: ResponsiveValue<CSS.Property.BorderTopStyle, ThemeType>;
  borderTopColor?: ResponsiveValue<CSS.Property.BorderTopColor, ThemeType>;
  borderRight?: ResponsiveValue<CSS.Property.BorderRight<TLengthStyledSystem>, ThemeType>;
  borderRightWidth?: ResponsiveValue<CSS.Property.BorderWidth<TLengthStyledSystem>, ThemeType>;
  borderRightStyle?: ResponsiveValue<CSS.Property.BorderRightStyle, ThemeType>;
  borderRightColor?: ResponsiveValue<CSS.Property.BorderRightColor, ThemeType>;
  borderBottom?: ResponsiveValue<CSS.Property.BorderBottom<TLengthStyledSystem>, ThemeType>;
  borderBottomWidth?: ResponsiveValue<CSS.Property.BorderWidth<TLengthStyledSystem>, ThemeType>;
  borderBottomStyle?: ResponsiveValue<CSS.Property.BorderBottomStyle, ThemeType>;
  borderBottomColor?: ResponsiveValue<CSS.Property.BorderBottomColor, ThemeType>;
  borderLeft?: ResponsiveValue<CSS.Property.BorderLeft<TLengthStyledSystem>, ThemeType>;
  borderLeftWidth?: ResponsiveValue<CSS.Property.BorderWidth<TLengthStyledSystem>, ThemeType>;
  borderLeftStyle?: ResponsiveValue<CSS.Property.BorderLeftStyle, ThemeType>;
  borderLeftColor?: ResponsiveValue<CSS.Property.BorderLeftColor, ThemeType>;
  borderX?: ResponsiveValue<CSS.Property.Border<TLengthStyledSystem>, ThemeType>;
  borderY?: ResponsiveValue<CSS.Property.Border<TLengthStyledSystem>, ThemeType>;
}

const config: SystemConfigs = {
  border: {
    property: 'border',
    scale: 'borders',
  },
  borderBottom: {
    property: 'borderBottom',
    scale: 'borders',
  },
  borderBottomColor: {
    property: 'borderBottomColor',
    scale: 'colors',
  },
  borderBottomLeftRadius: {
    property: 'borderBottomLeftRadius',
    scale: 'radii',
  },
  borderBottomRadius: {
    properties: ['borderBottomLeftRadius', 'borderBottomRightRadius'],
    scale: 'radii',
  },
  borderBottomRightRadius: {
    property: 'borderBottomRightRadius',
    scale: 'radii',
  },
  borderBottomStyle: {
    property: 'borderBottomStyle',
    scale: 'borderStyles',
  },
  borderBottomWidth: {
    property: 'borderBottomWidth',
    scale: 'borderWidths',
  },
  borderCollapse: {
    property: 'borderCollapse',
    scale: 'borders',
  },
  borderColor: {
    property: 'borderColor',
    scale: 'colors',
  },
  borderInlineEndRadius: {
    properties: ['borderTopRightRadius', 'borderBottomRightRadius'],
    scale: 'radii',
  },
  borderInlineStartRadius: {
    properties: ['borderTopLeftRadius', 'borderBottomLeftRadius'],
    scale: 'radii',
  },
  borderLeft: {
    property: 'borderLeft',
    scale: 'borders',
  },
  borderLeftColor: {
    property: 'borderLeftColor',
    scale: 'colors',
  },
  borderLeftRadius: {
    properties: ['borderBottomLeftRadius', 'borderTopLeftRadius'],
    scale: 'radii',
  },
  borderLeftStyle: {
    property: 'borderLeftStyle',
    scale: 'borderStyles',
  },
  borderLeftWidth: {
    property: 'borderLeftWidth',
    scale: 'borderWidths',
  },
  borderRadius: {
    property: 'borderRadius',
    scale: 'radii',
  },
  borderRight: {
    property: 'borderRight',
    scale: 'borders',
  },
  borderRightColor: {
    property: 'borderRightColor',
    scale: 'colors',
  },
  borderRightRadius: {
    properties: ['borderBottomRightRadius', 'borderTopRightRadius'],
    scale: 'radii',
  },
  borderRightStyle: {
    property: 'borderRightStyle',
    scale: 'borderStyles',
  },
  borderRightWidth: {
    property: 'borderRightWidth',
    scale: 'borderWidths',
  },
  borderStyle: {
    property: 'borderStyle',
    scale: 'borderStyles',
  },
  borderTop: {
    property: 'borderTop',
    scale: 'borders',
  },
  borderTopColor: {
    property: 'borderTopColor',
    scale: 'colors',
  },
  borderTopLeftRadius: {
    property: 'borderTopLeftRadius',
    scale: 'radii',
  },
  borderTopRadius: {
    properties: ['borderTopLeftRadius', 'borderTopRightRadius'],
    scale: 'radii',
  },
  borderTopRightRadius: {
    property: 'borderTopRightRadius',
    scale: 'radii',
  },
  borderTopStyle: {
    property: 'borderTopStyle',
    scale: 'borderStyles',
  },
  borderTopWidth: {
    property: 'borderTopWidth',
    scale: 'borderWidths',
  },
  // Widths
  borderWidth: {
    property: 'borderWidth',
    scale: 'borderWidths',
  },
  borderX: {
    properties: ['borderLeft', 'borderRight'],
    scale: 'borders',
  },
  borderY: {
    properties: ['borderTop', 'borderBottom'],
    scale: 'borders',
  },
};

config.borderEndRadius = config.borderInlineEndRadius;
config.borderStartRadius = config.borderInlineStartRadius;

export const border = system(config);
