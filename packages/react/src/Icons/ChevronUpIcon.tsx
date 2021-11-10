import React from 'react';
import { ChevronUp } from '@manifest-ui/icons';

import { Icon } from '../Icon';
import type { IconProps } from '../Icon';

export const ChevronUpIcon = (props: IconProps) => {
  return <Icon as={ChevronUp} {...props} />;
};
