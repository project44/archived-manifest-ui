import * as CSS from 'csstype';
import { Config, Length, Token } from '../types';
import { system } from '@styled-system/core';

export interface FlexboxProps {
  alignItems?: Token<CSS.Property.AlignItems>;
  alignContent?: Token<CSS.Property.AlignContent>;
  justifyItems?: Token<CSS.Property.JustifyItems>;
  justifyContent?: Token<CSS.Property.JustifyContent>;
  flexWrap?: Token<CSS.Property.FlexWrap>;
  flexDirection?: Token<CSS.Property.FlexDirection>;
  flexDir?: Token<CSS.Property.FlexDirection>;
  flex?: Token<CSS.Property.Flex<Length>>;
  flexFlow?: Token<CSS.Property.FlexFlow>;
  flexGrow?: Token<CSS.Property.FlexGrow>;
  flexShrink?: Token<CSS.Property.FlexShrink>;
  flexBasis?: Token<CSS.Property.FlexBasis<Length>>;
  justifySelf?: Token<CSS.Property.JustifySelf>;
  alignSelf?: Token<CSS.Property.AlignSelf>;
  order?: Token<CSS.Property.Order>;
  placeItems?: Token<CSS.Property.PlaceItems>;
  placeContent?: Token<CSS.Property.PlaceContent>;
  placeSelf?: Token<CSS.Property.PlaceSelf>;
}

const config: Config<FlexboxProps> = {
  alignContent: true,
  alignItems: true,
  alignSelf: true,
  flex: true,
  flexBasis: {
    property: 'flexBasis',
    scale: 'sizes',
  },
  flexDir: {
    property: 'flexDirection',
  },
  flexDirection: true,
  flexFlow: true,
  flexGrow: true,
  flexShrink: true,
  flexWrap: true,
  justifyContent: true,
  justifyItems: true,
  justifySelf: true,
  order: true,
  placeContent: true,
  placeItems: true,
  placeSelf: true,
};

export const flexbox = system(config);
