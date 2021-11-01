import React from 'react';
import { ChevronDown } from '@manifest-ui/icons';

import { Icon } from '../Icon';
import type { IconProps } from '../Icon';

export const ChevronDownIcon = (props: IconProps) => {
  return <Icon as={ChevronDown} {...props} />;
};
