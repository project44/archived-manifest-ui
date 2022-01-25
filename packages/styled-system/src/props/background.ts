import * as CSS from 'csstype';
import { Config, ResponsiveValue, system, TLengthStyledSystem } from 'styled-system';
import { RequiredTheme, Theme } from '../types';

export interface BackgroundProps<ThemeType extends Theme = RequiredTheme> {
  background?: ResponsiveValue<CSS.Property.Background<TLengthStyledSystem>, ThemeType>;
  bg?: ResponsiveValue<CSS.Property.Background<TLengthStyledSystem>, ThemeType>;

  backgroundAttachment?: ResponsiveValue<CSS.Property.BackgroundAttachment, ThemeType>;
  bgAttachment?: ResponsiveValue<CSS.Property.BackgroundAttachment, ThemeType>;

  backgroundClip?: ResponsiveValue<CSS.Property.BackgroundClip, ThemeType>;
  bgClip?: ResponsiveValue<CSS.Property.BackgroundClip, ThemeType>;

  backgroundColor?: ResponsiveValue<CSS.Property.BackgroundColor, ThemeType>;
  bgColor?: ResponsiveValue<CSS.Property.BackgroundColor, ThemeType>;

  backgroundImage?: ResponsiveValue<CSS.Property.BackgroundImage, ThemeType>;
  bgImage?: ResponsiveValue<CSS.Property.BackgroundImage, ThemeType>;

  backgroundPosition?: ResponsiveValue<
    CSS.Property.BackgroundPosition<TLengthStyledSystem>,
    ThemeType
  >;
  bgPosition?: ResponsiveValue<CSS.Property.BackgroundPosition<TLengthStyledSystem>, ThemeType>;

  backgroundRepeat?: ResponsiveValue<CSS.Property.BackgroundRepeat, ThemeType>;
  bgRepeat?: ResponsiveValue<CSS.Property.BackgroundRepeat, ThemeType>;

  backgroundSize?: ResponsiveValue<CSS.Property.BackgroundSize<TLengthStyledSystem>, ThemeType>;
  bgSize?: ResponsiveValue<CSS.Property.BackgroundSize<TLengthStyledSystem>, ThemeType>;
}

const config: Config = {
  background: {
    property: 'background',
    scale: 'colors',
  },
  backgroundAttachment: true,
  backgroundClip: true,
  backgroundColor: {
    property: 'backgroundColor',
    scale: 'colors',
  },
  backgroundImage: true,
  backgroundPosition: true,
  backgroundRepeat: true,
  backgroundSize: true,
};

config.bg = config.background;
config.bgColor = config.backgroundColor;
config.bgImage = config.backgroundImage;
config.bgClip = config.backgroundClip;
config.bgSize = config.backgroundSize;
config.bgPosition = config.backgroundPosition;
config.bgRepeat = config.backgroundRepeat;
config.bgAttachment = config.backgroundAttachment;

export const background = system(config);
