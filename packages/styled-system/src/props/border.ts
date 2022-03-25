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
