import React from 'react';
import { External } from '@manifest-ui/icons';

import { Icon } from '../Icon';
import type { IconProps } from '../Icon';

export const ExternalIcon = (props: IconProps) => {
  return <Icon as={External} {...props} />;
};
