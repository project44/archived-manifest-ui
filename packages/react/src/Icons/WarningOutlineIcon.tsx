import React from 'react';
import { WarningOutline } from '@manifest-ui/icons';

import { Icon } from '../Icon';
import type { IconProps } from '../Icon';

export const WarningOutlineIcon = (props: IconProps) => {
  return <Icon as={WarningOutline} {...props} />;
};
