import * as CSS from 'csstype';
import { Config, Length, Token } from '../types';
import { system } from '@styled-system/core';

export interface GridProps {
  gridGap?: Token<CSS.Property.GridGap<Length>>;
  gap?: Token<CSS.Property.Gap<Length>>;
  gridRowGap?: Token<CSS.Property.GridRowGap<Length>>;
  gridColumnGap?: Token<CSS.Property.GridColumnGap<Length>>;
  gridRow?: Token<CSS.Property.GridRow>;
  gridColumn?: Token<CSS.Property.GridColumn>;
  gridAutoFlow?: Token<CSS.Property.GridAutoFlow>;
  gridAutoRows?: Token<CSS.Property.GridAutoRows<Length>>;
  gridAutoColumns?: Token<CSS.Property.GridAutoColumns<Length>>;
  gridTemplateRows?: Token<CSS.Property.GridTemplateRows<Length>>;
  gridTemplateColumns?: Token<CSS.Property.GridTemplateColumns<Length>>;
  gridTemplateAreas?: Token<CSS.Property.GridTemplateAreas>;
  gridArea?: Token<CSS.Property.GridArea>;
  placeItems?: Token<CSS.Property.PlaceItems>;
}

const config: Config<GridProps> = {
  gap: {
    property: 'gridGap',
    scale: 'space',
  },
  gridArea: true,
  gridAutoColumns: true,
  gridAutoFlow: true,
  gridAutoRows: true,
  gridColumn: true,
  gridColumnGap: {
    property: 'gridColumnGap',
    scale: 'space',
  },
  gridGap: {
    property: 'gridGap',
    scale: 'space',
  },
  gridRow: true,
  gridRowGap: {
    property: 'gridRowGap',
    scale: 'space',
  },
  gridTemplateAreas: true,
  gridTemplateColumns: true,
  gridTemplateRows: true,
  placeItems: true,
};

export const grid = system(config);
