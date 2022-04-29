import * as CSS from 'csstype';
import {
  Config,
  RequiredTheme,
  ResponsiveValue,
  system,
  Theme,
  TLengthStyledSystem,
} from 'styled-system';

export interface BackgroundProps<ThemeType extends Theme = RequiredTheme> {
  background?: ResponsiveValue<CSS.Property.Background<TLengthStyledSystem>, ThemeType>;
  bg?: ResponsiveValue<CSS.Property.Background<TLengthStyledSystem>, ThemeType>;
  backgroundAttachment?: ResponsiveValue<CSS.Property.BackgroundAttachment, ThemeType>;
  bgAttachment?: ResponsiveValue<CSS.Property.BackgroundAttachment, ThemeType>;
  backgroundColor?: ResponsiveValue<CSS.Property.BackgroundColor, ThemeType>;
  bgColor?: ResponsiveValue<CSS.Property.BackgroundColor, ThemeType>;
  backgroundClip?: ResponsiveValue<CSS.Property.BackgroundClip, ThemeType>;
  bgClip?: ResponsiveValue<CSS.Property.BackgroundClip, ThemeType>;
  backgroundImage?: ResponsiveValue<CSS.Property.BackgroundImage, ThemeType>;
  bgImage?: ResponsiveValue<CSS.Property.BackgroundImage, ThemeType>;
  backgroundPosition?: ResponsiveValue<
    CSS.Property.BackgroundPosition<TLengthStyledSystem>,
    ThemeType
  >;
  bgPosition?: ResponsiveValue<CSS.Property.BackgroundPosition<TLengthStyledSystem>, ThemeType>;
  backgroundRepeat?: ResponsiveValue<CSS.Property.BackgroundRepeat, ThemeType>;
  bgRepeat?: ResponsiveValue<CSS.Property.BackgroundRepeat, ThemeType>;
  backgroundSize?: ResponsiveValue<CSS.Property.BackgroundSize | number, ThemeType>;
  bgSize?: ResponsiveValue<CSS.Property.BackgroundSize | number, ThemeType>;
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
  backgroundImage: {
    property: 'backgroundImage',
    scale: 'colors',
  },
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
