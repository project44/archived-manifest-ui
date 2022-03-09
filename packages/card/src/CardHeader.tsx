import * as React from 'react';
import { ComponentProps } from '@manifest-ui/styled';
import { StyledCardHeader } from './Card.styles';

export type CardHeaderProps = ComponentProps<typeof StyledCardHeader>;

export const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  (props: CardHeaderProps, ref) => (
    <StyledCardHeader className="manifestui-card-header" ref={ref} {...props} />
  ),
);

CardHeader.displayName = 'CardHeader';
