import React from 'react';
import { Check } from '@manifest-ui/icons';

import { Icon } from '../Icon';
import type { IconProps } from '../Icon';

export const CheckIcon = (props: IconProps) => {
  return <Icon as={Check} {...props} />;
};
