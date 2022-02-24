import * as React from 'react';
import { defaultTheme } from '@manifest-ui/themes';
import { styled } from '@manifest-ui/styled';

const StyledLink = styled('a')({
  color:  defaultTheme.colors.primary[500],
  fontSize: 'inherit',
  fontWeight: defaultTheme.fontWeights.normal,
  letterSpacing: defaultTheme.letterSpacings.normal,
  textDecoration: 'none',
  transitionDuration: defaultTheme.transitions.duration.base,
  transitionProperty: defaultTheme.transitions.property.colors,

  '&:hover:not(&:focus)': {
    color: defaultTheme.colors.primary[600],
  },
});

const ExternalLink = props => {
  return <StyledLink rel="nofollow,noopener,noreferrer" target="_blank" {...props} />
}

export default ExternalLink;
