import * as CSS from 'csstype';
import { Configs, Length, ResponsiveValue } from '../types';
import { system } from '../core';

export interface GridProps {
  gridGap?: ResponsiveValue<CSS.Property.GridGap<Length>>;
  gap?: ResponsiveValue<CSS.Property.Gap<Length>>;
  gridRowGap?: ResponsiveValue<CSS.Property.GridRowGap<Length>>;
  gridColumnGap?: ResponsiveValue<CSS.Property.GridColumnGap<Length>>;
  gridRow?: ResponsiveValue<CSS.Property.GridRow>;
  gridColumn?: ResponsiveValue<CSS.Property.GridColumn>;
  gridAutoFlow?: ResponsiveValue<CSS.Property.GridAutoFlow>;
  gridAutoRows?: ResponsiveValue<CSS.Property.GridAutoRows<Length>>;
  gridAutoColumns?: ResponsiveValue<CSS.Property.GridAutoColumns<Length>>;
  gridTemplateRows?: ResponsiveValue<CSS.Property.GridTemplateRows<Length>>;
  gridTemplateColumns?: ResponsiveValue<CSS.Property.GridTemplateColumns<Length>>;
  gridTemplateAreas?: ResponsiveValue<CSS.Property.GridTemplateAreas>;
  gridArea?: ResponsiveValue<CSS.Property.GridArea>;
}

const config: Configs = {
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

config.gap = config.gridGap;

export const grid = system(config);
