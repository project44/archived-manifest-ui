import * as CSS from 'csstype';
import { Configs, Length, ResponsiveValue } from '../types';
import { system } from '../core';

export interface FlexboxProps {
  alignItems?: ResponsiveValue<CSS.Property.AlignItems>;
  alignContent?: ResponsiveValue<CSS.Property.AlignContent>;
  justifyItems?: ResponsiveValue<CSS.Property.JustifyItems>;
  justifyContent?: ResponsiveValue<CSS.Property.JustifyContent>;
  flexWrap?: ResponsiveValue<CSS.Property.FlexWrap>;
  flexDirection?: ResponsiveValue<CSS.Property.FlexDirection>;
  flexDir?: ResponsiveValue<CSS.Property.FlexDirection>;
  flex?: ResponsiveValue<CSS.Property.Flex<Length>>;
  flexFlow?: ResponsiveValue<CSS.Property.FlexFlow>;
  flexGrow?: ResponsiveValue<CSS.Property.FlexGrow>;
  flexShrink?: ResponsiveValue<CSS.Property.FlexShrink>;
  flexBasis?: ResponsiveValue<CSS.Property.FlexBasis<Length>>;
  justifySelf?: ResponsiveValue<CSS.Property.JustifySelf>;
  alignSelf?: ResponsiveValue<CSS.Property.AlignSelf>;
  order?: ResponsiveValue<CSS.Property.Order>;
  placeItems?: ResponsiveValue<CSS.Property.PlaceItems>;
  placeContent?: ResponsiveValue<CSS.Property.PlaceContent>;
  placeSelf?: ResponsiveValue<CSS.Property.PlaceSelf>;
}

const config: Configs = {
  alignContent: true,
  alignItems: true,
  alignSelf: true,
  flex: true,
  flexBasis: {
    property: 'flexBasis',
    scale: 'sizes',
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

config.flexDir = config.flexDirection;

export const flexbox = system(config);
