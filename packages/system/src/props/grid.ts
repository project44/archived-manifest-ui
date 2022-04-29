import * as CSS from 'csstype';
import {
  Config,
  RequiredTheme,
  ResponsiveValue,
  system,
  Theme,
  TLengthStyledSystem,
} from 'styled-system';

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
