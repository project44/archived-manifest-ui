import React from 'react';
import { Search } from '@manifest-ui/icons';

import { Icon } from '../Icon';
import type { IconProps } from '../Icon';

export const SearchIcon = (props: IconProps) => {
  return <Icon as={Search} {...props} />;
};
