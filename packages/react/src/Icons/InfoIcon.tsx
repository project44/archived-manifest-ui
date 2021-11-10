import React from 'react';
import { Info } from '@manifest-ui/icons';

import { Icon } from '../Icon';
import type { IconProps } from '../Icon';

export const InfoIcon = (props: IconProps) => {
  return <Icon as={Info} {...props} />;
};
