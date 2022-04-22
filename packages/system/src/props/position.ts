import * as CSS from 'csstype';
import { Config, Length, Token } from '../types';
import { positiveOrNegative } from '../transforms';
import { system } from '@styled-system/core';

export interface PositionProps {
  position?: Token<CSS.Property.Position>;
  pos?: Token<CSS.Property.Position>;
  zIndex?: Token<CSS.Property.ZIndex>;
  top?: Token<CSS.Property.Top<Length>>;
  right?: Token<CSS.Property.Right<Length>>;
  bottom?: Token<CSS.Property.Bottom<Length>>;
  left?: Token<CSS.Property.Left<Length>>;
}

const config: Config<PositionProps> = {
  bottom: {
    property: 'bottom',
    scale: 'space',
    transform: positiveOrNegative,
  },
  left: {
    property: 'left',
    scale: 'space',
    transform: positiveOrNegative,
  },
  pos: {
    property: 'position',
  },
  position: true,
  right: {
    property: 'right',
    scale: 'space',
    transform: positiveOrNegative,
  },
  top: {
    property: 'top',
    scale: 'space',
    transform: positiveOrNegative,
  },
  zIndex: {
    property: 'zIndex',
    scale: 'zIndices',
  },
};

export const position = system(config);
