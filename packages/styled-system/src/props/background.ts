import * as CSS from 'csstype';
import { Configs, Length, ResponsiveValue } from '../types';
import { system } from '../core';

export interface BackgroundProps {
  background?: ResponsiveValue<CSS.Property.Background<Length>>;
  bg?: ResponsiveValue<CSS.Property.Background<Length>>;
  backgroundAttachment?: ResponsiveValue<CSS.Property.BackgroundAttachment>;
  bgAttachment?: ResponsiveValue<CSS.Property.BackgroundAttachment>;
  backgroundColor?: ResponsiveValue<CSS.Property.BackgroundColor>;
  bgColor?: ResponsiveValue<CSS.Property.BackgroundColor>;
  backgroundClip?: ResponsiveValue<CSS.Property.BackgroundClip>;
  bgClip?: ResponsiveValue<CSS.Property.BackgroundClip>;
  backgroundImage?: ResponsiveValue<CSS.Property.BackgroundImage>;
  bgImage?: ResponsiveValue<CSS.Property.BackgroundImage>;
  backgroundPosition?: ResponsiveValue<CSS.Property.BackgroundPosition<Length>>;
  bgPosition?: ResponsiveValue<CSS.Property.BackgroundPosition<Length>>;
  backgroundRepeat?: ResponsiveValue<CSS.Property.BackgroundRepeat>;
  bgRepeat?: ResponsiveValue<CSS.Property.BackgroundRepeat>;
  backgroundSize?: ResponsiveValue<CSS.Property.BackgroundSize | number>;
  bgSize?: ResponsiveValue<CSS.Property.BackgroundSize | number>;
}

const config: Configs = {
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
