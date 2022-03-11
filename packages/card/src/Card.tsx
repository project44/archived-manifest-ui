import * as React from 'react';
import { ComponentProps } from '@manifest-ui/styled';
import { StyledCard } from './Card.styles';

export type CardProps = ComponentProps<typeof StyledCard>;

export const Card = React.forwardRef<HTMLDivElement, CardProps>((props: CardProps, ref) => (
  <StyledCard className="manifestui-card" ref={ref} {...props} />
));

Card.displayName = 'Card';
