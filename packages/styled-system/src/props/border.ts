import * as CSS from 'csstype';
import { Config, ResponsiveValue, system, TLengthStyledSystem } from 'styled-system';
import { RequiredTheme, Theme } from '../types';

export interface BorderProps<ThemeType extends Theme = RequiredTheme> {
  border?: ResponsiveValue<CSS.Property.Border<TLengthStyledSystem>, ThemeType>;
  borderWidth?: ResponsiveValue<CSS.Property.BorderWidth<TLengthStyledSystem>, ThemeType>;
  borderStyle?: ResponsiveValue<CSS.Property.BorderStyle, ThemeType>;
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

  borderCollapse?: ResponsiveValue<CSS.Property.BorderCollapse, ThemeType>;
}

const config: Config = {
  border: {
    property: 'border',
    scale: 'borders',
  },
  borderTop: {
    property: 'borderTop',
    scale: 'borders',
  },
  borderRight: {
    property: 'borderRight',
    scale: 'borders',
  },
  borderBottom: {
    property: 'borderBottom',
    scale: 'borders',
  },
  borderLeft: {
    property: 'borderLeft',
    scale: 'borders',
  },
  borderX: {
    properties: ['borderLeft', 'borderRight'],
    scale: 'borders',
  },
  borderY: {
    properties: ['borderTop', 'borderBottom'],
    scale: 'borders',
  },
  borderCollapse: {
    property: 'borderCollapse',
    scale: 'borders',
  },

  // Radii
  borderRadius: {
    property: 'borderRadius',
    scale: 'radii',
  },
  borderTopLeftRadius: {
    property: 'borderTopLeftRadius',
    scale: 'radii',
  },
  borderTopRightRadius: {
    property: 'borderTopRightRadius',
    scale: 'radii',
  },
  borderTopRadius: {
    properties: ['borderTopLeftRadius', 'borderTopRightRadius'],
    scale: 'borders',
  },
  borderBottomLeftRadius: {
    property: 'borderBottomLeftRadius',
    scale: 'radii',
  },
  borderBottomRightRadius: {
    property: 'borderBottomRightRadius',
    scale: 'radii',
  },
  borderBottomRadius: {
    properties: ['borderBottomLeftRadius', 'borderBottomRightRadius'],
    scale: 'borders',
  },
  borderLeftRadius: {
    properties: ['borderBottomLeftRadius', 'borderTopLeftRadius'],
    scale: 'borders',
  },
  borderRightRadius: {
    properties: ['borderBottomRightRadius', 'borderTopRightRadius'],
    scale: 'borders',
  },
  borderInlineEndRadius: {
    properties: ['borderTopRightRadius', 'borderBottomRightRadius'],
    scale: 'radii',
  },
  borderInlineStartRadius: {
    properties: ['borderTopLeftRadius', 'borderBottomLeftRadius'],
    scale: 'radii',
  },

  // Widths
  borderWidth: {
    property: 'borderWidth',
    scale: 'borderWidths',
  },
  borderTopWidth: {
    property: 'borderTopWidth',
    scale: 'borderWidths',
  },
  borderBottomWidth: {
    property: 'borderBottomWidth',
    scale: 'borderWidths',
  },
  borderLeftWidth: {
    property: 'borderLeftWidth',
    scale: 'borderWidths',
  },
  borderRightWidth: {
    property: 'borderRightWidth',
    scale: 'borderWidths',
  },

  // Style
  borderStyle: {
    property: 'borderStyle',
    scale: 'borderStyles',
  },
  borderTopStyle: {
    property: 'borderTopStyle',
    scale: 'borderStyles',
  },
  borderBottomStyle: {
    property: 'borderBottomStyle',
    scale: 'borderStyles',
  },
  borderLeftStyle: {
    property: 'borderLeftStyle',
    scale: 'borderStyles',
  },
  borderRightStyle: {
    property: 'borderRightStyle',
    scale: 'borderStyles',
  },

  // Color
  borderColor: {
    property: 'borderColor',
    scale: 'colors',
  },
  borderTopColor: {
    property: 'borderTopColor',
    scale: 'colors',
  },
  borderBottomColor: {
    property: 'borderBottomColor',
    scale: 'colors',
  },
  borderLeftColor: {
    property: 'borderLeftColor',
    scale: 'colors',
  },
  borderRightColor: {
    property: 'borderRightColor',
    scale: 'colors',
  },
};

config.borderEndRadius = config.borderInlineEndRadius;
config.borderStartRadius = config.borderInlineStartRadius;

export const border = system(config);
