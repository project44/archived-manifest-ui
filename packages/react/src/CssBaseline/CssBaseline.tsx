import * as React from 'react';
import { globalCss } from '../styles';

const reset = globalCss({
  '*, *:before, *:after': {
    boxSizing: 'border-box',
    textRendering: 'geometricPrecision',
    WebkitTapHighlightColor: 'transparent',
  },
  a: {
    alignItems: 'center',
    color: '$brandPrimary',
    cursor: 'pointer',
    fontSize: 'inherit',
    fontWeight: '$semibold',
    textDecoration: 'none',
    WebkitBoxAlign: 'center',
    WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    WebkitTouchCallout: 'none',
  },
  'a:hover': {
    textDecoration: 'none',
  },
  b: {
    fontWeight: '$semibold',
  },
  body: {
    fontFamily: '$text',
    fontSize: '$medium',
    lineHeight: '$medium',
    margin: 0,
    minHeight: '100%',
    MozOsxFontSmoothing: 'grayscale',
    overflowX: 'hidden',
    padding: 0,
    position: 'relative',
    textRendering: 'optimizeLegibility',
    WebkitFontSmoothing: 'antialiased',
  },
  'button, input, select,textarea': {
    color: 'inherit',
    fontFamily: 'inherit',
    fontSize: 'inherit',
    lineHeight: 'inherit',
    margin: 0,
  },
  'button:focus, input:focus, select:focus, textarea:focus': {
    outline: 'none',
  },
  h1: {
    fontSize: '$xxl',
    fontWeight: '$bold',
    letterSpacing: '$xs',
    lineHeight: '$xxl',
  },
  'h1, h2, h3, h4, h5, h6': {
    color: 'inherit',
    mb: '$small',
  },
  h2: {
    fontSize: '$xl',
    fontWeight: '$semibold',
    letterSpacing: '$small',
    lineHeight: '$xl',
  },
  h3: {
    fontSize: '$large',
    fontWeight: '$semibold',
    letterSpacing: '$medium',
    lineHeight: '$large',
  },
  h4: {
    fontSize: '$medium',
    fontWeight: '$bold',
    letterSpacing: '$meidum',
    lineHeight: '$medium',
  },
  h5: {
    fontSize: '$medium',
    fontWeight: '$semibold',
    letterSpacing: '$meidum',
    lineHeight: '$medium',
  },
  h6: {
    fontSize: '$small',
    fontWeight: '$semibold',
    letterSpacing: '$meidum',
    lineHeight: '$small',
  },
  hr: {
    borderColor: '$borderPrimary',
  },
  html: {
    fontSize: '$medium',
  },
  'html, body': {
    backgroundColor: '$backgroundPrimary',
    color: '$textPrimary',
  },
  img: {
    maxWidth: '100%',
  },
  li: {
    fontSize: '$medium',
    lineHeight: '$medium',
    marginBottom: '$small',
  },
  ol: {
    listStyleType: 'decimal',
  },
  p: {
    fontSize: '$medium',
    letterSpacing: '$medium',
    lineHeight: '$medium',
    margin: '$small 0',
  },
  span: {
    color: 'inherit',
    fontSize: 'inherit',
    fontWeight: 'inherit',
  },
  'ul, ol': {
    color: '$textPrimary',
    listStyleType: 'none',
    margin: '$small',
    padding: 0,
  },
});

export const CssBaseline = React.memo<React.PropsWithChildren<{}>>(({ children }) => {
  reset();

  return <>{children}</>;
});

CssBaseline.displayName = 'ManifestCssBaseline';
