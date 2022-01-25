import * as CSS from 'csstype';
import { Config, ResponsiveValue, system, TLengthStyledSystem } from 'styled-system';
import { RequiredTheme, Theme } from '../types';

export interface FlexboxProps<ThemeType extends Theme = RequiredTheme> {
  alignItems?: ResponsiveValue<CSS.Property.AlignItems, ThemeType>;
  alignContent?: ResponsiveValue<CSS.Property.AlignContent, ThemeType>;
  justifyItems?: ResponsiveValue<CSS.Property.JustifyItems, ThemeType>;
  justifyContent?: ResponsiveValue<CSS.Property.JustifyContent, ThemeType>;
  flexWrap?: ResponsiveValue<CSS.Property.FlexWrap, ThemeType>;
  flexDirection?: ResponsiveValue<CSS.Property.FlexDirection, ThemeType>;
  flexDir?: ResponsiveValue<CSS.Property.FlexDirection, ThemeType>;
  flex?: ResponsiveValue<CSS.Property.Flex<TLengthStyledSystem>, ThemeType>;
  flexFlow?: ResponsiveValue<CSS.Property.FlexFlow, ThemeType>;
  flexGrow?: ResponsiveValue<CSS.Property.FlexGrow, ThemeType>;
  flexShrink?: ResponsiveValue<CSS.Property.FlexShrink, ThemeType>;
  flexBasis?: ResponsiveValue<CSS.Property.FlexBasis<TLengthStyledSystem>, ThemeType>;
  justifySelf?: ResponsiveValue<CSS.Property.JustifySelf, ThemeType>;
  alignSelf?: ResponsiveValue<CSS.Property.AlignSelf, ThemeType>;
  order?: ResponsiveValue<CSS.Property.Order, ThemeType>;
  placeItems?: ResponsiveValue<CSS.Property.PlaceItems, ThemeType>;
  placeContent?: ResponsiveValue<CSS.Property.PlaceContent, ThemeType>;
  placeSelf?: ResponsiveValue<CSS.Property.PlaceSelf, ThemeType>;
}

const config: Config = {
  alignItems: true,
  alignContent: true,
  justifyItems: true,
  justifyContent: true,
  flexWrap: true,
  flexDirection: true,
  flex: true,
  flexFlow: true,
  flexGrow: true,
  flexShrink: true,
  flexBasis: {
    property: 'flexBasis',
    scale: 'sizes',
  },
  justifySelf: true,
  alignSelf: true,
  order: true,
  placeItems: true,
  placeContent: true,
  placeSelf: true,
};

config.flexDir = config.flexDirection;

export const flexbox = system(config);
