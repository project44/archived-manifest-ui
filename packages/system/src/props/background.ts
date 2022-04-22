import * as CSS from 'csstype';
import { Config, Length, Token } from '../types';
import { system } from '@styled-system/core';

export interface BackgroundProps {
  background?: Token<CSS.Property.Background<Length>>;
  bg?: Token<CSS.Property.Background<Length>>;
  backgroundAttachment?: Token<CSS.Property.BackgroundAttachment>;
  bgAttachment?: Token<CSS.Property.BackgroundAttachment>;
  backgroundColor?: Token<CSS.Property.BackgroundColor>;
  bgColor?: Token<CSS.Property.BackgroundColor>;
  backgroundClip?: Token<CSS.Property.BackgroundClip>;
  bgClip?: Token<CSS.Property.BackgroundClip>;
  backgroundImage?: Token<CSS.Property.BackgroundImage>;
  bgImage?: Token<CSS.Property.BackgroundImage>;
  backgroundPosition?: Token<CSS.Property.BackgroundPosition<Length>>;
  bgPosition?: Token<CSS.Property.BackgroundPosition<Length>>;
  backgroundRepeat?: Token<CSS.Property.BackgroundRepeat>;
  bgRepeat?: Token<CSS.Property.BackgroundRepeat>;
  backgroundSize?: Token<CSS.Property.BackgroundSize | number>;
  bgSize?: Token<CSS.Property.BackgroundSize | number>;
}

const config: Config<BackgroundProps> = {
  background: true,
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
  bg: {
    property: 'background',
  },
  bgAttachment: {
    property: 'backgroundAttachment',
  },
  bgClip: {
    property: 'backgroundClip',
  },
  bgColor: {
    property: 'backgroundColor',
    scale: 'colors',
  },
  bgImage: {
    property: 'backgroundColor',
    scale: 'colors',
  },
  bgPosition: {
    property: 'backgroundPosition',
  },
  bgRepeat: {
    property: 'backgroundRepeat',
  },
  bgSize: {
    property: 'backgroundSize',
  },
};

export const background = system(config);
