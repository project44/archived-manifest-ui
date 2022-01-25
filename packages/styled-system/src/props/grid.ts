import * as CSS from 'csstype';
import { Config, ResponsiveValue, system, TLengthStyledSystem } from 'styled-system';
import { RequiredTheme, Theme } from '../types';

export interface GridProps<ThemeType extends Theme = RequiredTheme> {
  gridGap?: ResponsiveValue<CSS.Property.GridGap<TLengthStyledSystem>, ThemeType>;
  gap?: ResponsiveValue<CSS.Property.Gap<TLengthStyledSystem>, ThemeType>;
  gridRowGap?: ResponsiveValue<CSS.Property.GridRowGap<TLengthStyledSystem>, ThemeType>;
  gridColumnGap?: ResponsiveValue<CSS.Property.GridColumnGap<TLengthStyledSystem>, ThemeType>;
  gridRow?: ResponsiveValue<CSS.Property.GridRow, ThemeType>;
  gridColumn?: ResponsiveValue<CSS.Property.GridColumn, ThemeType>;
  gridAutoFlow?: ResponsiveValue<CSS.Property.GridAutoFlow, ThemeType>;
  gridAutoRows?: ResponsiveValue<CSS.Property.GridAutoRows<TLengthStyledSystem>, ThemeType>;
  gridAutoColumns?: ResponsiveValue<CSS.Property.GridAutoColumns<TLengthStyledSystem>, ThemeType>;
  gridTemplateRows?: ResponsiveValue<CSS.Property.GridTemplateRows<TLengthStyledSystem>, ThemeType>;
  gridTemplateColumns?: ResponsiveValue<
    CSS.Property.GridTemplateColumns<TLengthStyledSystem>,
    ThemeType
  >;
  gridTemplateAreas?: ResponsiveValue<CSS.Property.GridTemplateAreas, ThemeType>;
  gridArea?: ResponsiveValue<CSS.Property.GridArea, ThemeType>;
}

const config: Config = {
  gridColumnGap: {
    property: 'gridColumnGap',
    scale: 'space',
  },
  gridGap: {
    property: 'gridGap',
    scale: 'space',
  },
  gridRowGap: {
    property: 'gridRowGap',
    scale: 'space',
  },
  gridRow: true,
  gridColumn: true,
  gridAutoFlow: true,
  gridAutoRows: true,
  gridAutoColumns: true,
  gridTemplateRows: true,
  gridTemplateColumns: true,
  gridTemplateAreas: true,
  gridArea: true,
  placeItems: true,
};

config.gap = config.gridGap;

export const grid = system(config);
