import * as React from 'react';
import { defaultTheme } from '@manifest-ui/themes';
import ExternalLink from './ExternalLink';
import { styled } from '@manifest-ui/styled';

const StyledList = styled('p')({
  color: defaultTheme.colors.emphasis.secondary,
  fontSize: defaultTheme.fontSizes.small,
  lineHeight: defaultTheme.fontSizes.medium,
  m: 0,
  py: defaultTheme.space[4],
});

const Sources = props => {
  const { github, npm } = props;

  return (
    <StyledList>
      <ExternalLink
        href={`https://www.github.com/project44/manifest-ui/tree/main/packages/${github}`}
        target="_blank"
      >
        View Source
      </ExternalLink>
      {' '}
      {'|'}
      {' '}
      <ExternalLink
        href={`https://www.npmjs.com/package/${npm}`}
        target="_blank"
      >
        View on NPM
      </ExternalLink>
    </StyledList>
  )
}

export default Sources;
