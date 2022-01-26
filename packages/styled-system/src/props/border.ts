import * as CSS from 'csstype';
import { Configs, Length, ResponsiveValue } from '../types';
import { system } from '../core';

export interface BorderProps {
  border?: ResponsiveValue<CSS.Property.Border<Length>>;
  borderWidth?: ResponsiveValue<CSS.Property.BorderWidth<Length>>;
  borderStyle?: ResponsiveValue<CSS.Property.BorderStyle>;
  borderCollapse?: ResponsiveValue<CSS.Property.BorderCollapse>;
  borderColor?: ResponsiveValue<CSS.Property.BorderTopColor>;
  borderRadius?: ResponsiveValue<CSS.Property.BorderRadius<Length>>;
  borderBottomRadius?: ResponsiveValue<CSS.Property.BorderRadius>;
  borderEndRadius?: ResponsiveValue<CSS.Property.BorderRadius>;
  borderTopRadius?: ResponsiveValue<CSS.Property.BorderRadius>;
  borderRightRadius?: ResponsiveValue<CSS.Property.BorderRadius>;
  borderLeftRadius?: ResponsiveValue<CSS.Property.BorderRadius>;
  borderStartRadius?: ResponsiveValue<CSS.Property.BorderRadius<Length>>;
  borderTopLeftRadius?: ResponsiveValue<CSS.Property.BorderRadius<Length>>;
  borderTopRightRadius?: ResponsiveValue<CSS.Property.BorderRadius<Length>>;
  borderBottomLeftRadius?: ResponsiveValue<CSS.Property.BorderRadius<Length>>;
  borderBottomRightRadius?: ResponsiveValue<CSS.Property.BorderRadius<Length>>;
  borderTop?: ResponsiveValue<CSS.Property.BorderTop<Length>>;
  borderTopWidth?: ResponsiveValue<CSS.Property.BorderWidth<Length>>;
  borderTopStyle?: ResponsiveValue<CSS.Property.BorderTopStyle>;
  borderTopColor?: ResponsiveValue<CSS.Property.BorderTopColor>;
  borderRight?: ResponsiveValue<CSS.Property.BorderRight<Length>>;
  borderRightWidth?: ResponsiveValue<CSS.Property.BorderWidth<Length>>;
  borderRightStyle?: ResponsiveValue<CSS.Property.BorderRightStyle>;
  borderRightColor?: ResponsiveValue<CSS.Property.BorderRightColor>;
  borderBottom?: ResponsiveValue<CSS.Property.BorderBottom<Length>>;
  borderBottomWidth?: ResponsiveValue<CSS.Property.BorderWidth<Length>>;
  borderBottomStyle?: ResponsiveValue<CSS.Property.BorderBottomStyle>;
  borderBottomColor?: ResponsiveValue<CSS.Property.BorderBottomColor>;
  borderLeft?: ResponsiveValue<CSS.Property.BorderLeft<Length>>;
  borderLeftWidth?: ResponsiveValue<CSS.Property.BorderWidth<Length>>;
  borderLeftStyle?: ResponsiveValue<CSS.Property.BorderLeftStyle>;
  borderLeftColor?: ResponsiveValue<CSS.Property.BorderLeftColor>;
  borderX?: ResponsiveValue<CSS.Property.Border<Length>>;
  borderY?: ResponsiveValue<CSS.Property.Border<Length>>;
}

const config: Configs = {
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
