import React from 'react';
import { InfoOutline } from '@manifest-ui/icons';

import { Icon } from '../Icon';
import type { IconProps } from '../Icon';

export const InfoOutlineIcon = (props: IconProps) => {
  return <Icon as={InfoOutline} {...props} />;
};
