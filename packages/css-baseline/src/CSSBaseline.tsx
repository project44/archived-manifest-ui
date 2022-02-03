import * as React from 'react';
import { css } from '@manifest-ui/styled-system';
import { Global } from '@emotion/react';

export const CSSBaseline = () => (
  <Global
    styles={theme =>
      css({
        '*, *:before, *:after': {
          boxSizing: 'border-box',
          textRendering: 'geometricPrecision',
          WebkitTapHighlightColor: 'transparent',
        },

        html: {
          fontSize: 'medium',
        },

        body: {
          fontFamily: 'body',
          fontSize: 'medium',
          letterSpacing: 'normal',
          lineHeight: 'large',
          margin: 0,
          minHeight: '100%',
          overflowX: 'hidden',
          padding: 0,
          position: 'relative',
          textRendering: 'optimizeLegibility',
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
        },

        'html, body': {
          backgroundColor: 'background.body',
          color: 'emphasis.primary',
        },

        'strong, b': {
          fontWeight: 'bold',
        },
      })(theme)
    }
  />
);
