import * as CSS from 'csstype';

export type Palette =
  | 'blue'
  | 'brown'
  | 'cerulean'
  | 'cyan'
  | 'green'
  | 'grey'
  | 'indigo'
  | 'mint'
  | 'orange'
  | 'pink'
  | 'purple'
  | 'red'
  | 'yellow';
export type ColorScale = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
export type OrdinalScale = 'primary' | 'secondary' | 'tertiary';

export type ColorToken = Token<CSS.Property.Color>;

export type PaletteColors = {
  [key in Palette]: ColorPalette;
} & {
  black: ColorToken;
  white: ColorToken;
};

export type BackgroundColors = {
  [key in OrdinalScale]: ColorToken;
} & {
  danger: ColorToken;
  sideNav: ColorToken;
  success: ColorToken;
  surface: ColorToken;
  topNav: ColorToken;
  warning: ColorToken;
};

export interface BorderColors {
  primary: ColorToken;
  disabled: ColorToken;
}

export interface BrandColors {
  primary: ColorToken;
  gradient: ColorToken;
}

export type ColorPalette = {
  [key in ColorScale]: ColorToken;
};

export interface Colors {
  background: BackgroundColors;
  border: BorderColors;
  brand: BrandColors;
  contrast: ContrastColors;
  palette: PaletteColors;
  text: TextColors;
}

export interface ContrastColors {
  brand: ColorToken;
  danger: ColorToken;
  success: ColorToken;
  warning: ColorToken;
}

export type TextColors = {
  [key in OrdinalScale]: ColorToken;
} & {
  disabled: ColorToken;
};

export interface Token<TValue> {
  value: TValue;
  attributes?: {
    description?: string;
  };
}

export interface Tokens {
  color: Colors;
}
