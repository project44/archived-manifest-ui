import * as CSS from 'csstype';
import { Config, Length, Token } from '../types';
import { system } from '@styled-system/core';

export interface BorderProps {
  border?: Token<CSS.Property.Border<Length>>;
  borderWidth?: Token<CSS.Property.BorderWidth<Length>>;
  borderStyle?: Token<CSS.Property.BorderStyle>;
  borderCollapse?: Token<CSS.Property.BorderCollapse>;
  borderColor?: Token<CSS.Property.BorderTopColor>;
  borderRadius?: Token<CSS.Property.BorderRadius<Length>>;
  borderBottomRadius?: Token<CSS.Property.BorderRadius>;
  borderTopRadius?: Token<CSS.Property.BorderRadius>;
  borderRightRadius?: Token<CSS.Property.BorderRadius>;
  borderLeftRadius?: Token<CSS.Property.BorderRadius>;
  borderTopLeftRadius?: Token<CSS.Property.BorderRadius<Length>>;
  borderTopRightRadius?: Token<CSS.Property.BorderRadius<Length>>;
  borderBottomLeftRadius?: Token<CSS.Property.BorderRadius<Length>>;
  borderBottomRightRadius?: Token<CSS.Property.BorderRadius<Length>>;
  borderTop?: Token<CSS.Property.BorderTop<Length>>;
  borderTopWidth?: Token<CSS.Property.BorderWidth<Length>>;
  borderTopStyle?: Token<CSS.Property.BorderTopStyle>;
  borderTopColor?: Token<CSS.Property.BorderTopColor>;
  borderRight?: Token<CSS.Property.BorderRight<Length>>;
  borderRightWidth?: Token<CSS.Property.BorderWidth<Length>>;
  borderRightStyle?: Token<CSS.Property.BorderRightStyle>;
  borderRightColor?: Token<CSS.Property.BorderRightColor>;
  borderBottom?: Token<CSS.Property.BorderBottom<Length>>;
  borderBottomWidth?: Token<CSS.Property.BorderWidth<Length>>;
  borderBottomStyle?: Token<CSS.Property.BorderBottomStyle>;
  borderBottomColor?: Token<CSS.Property.BorderBottomColor>;
  borderLeft?: Token<CSS.Property.BorderLeft<Length>>;
  borderLeftWidth?: Token<CSS.Property.BorderWidth<Length>>;
  borderLeftStyle?: Token<CSS.Property.BorderLeftStyle>;
  borderLeftColor?: Token<CSS.Property.BorderLeftColor>;
  borderX?: Token<CSS.Property.Border<Length>>;
  borderY?: Token<CSS.Property.Border<Length>>;
}

const config: Config<BorderProps> = {
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

export const border = system(config);
