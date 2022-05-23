import { createStitches } from '@stitches/react';
import stitchesConfig from './config';

export type Theme = typeof theme;

export const { styled, globalCss, getCssText, theme, css } = createStitches(stitchesConfig);
