import * as React from 'react';
import { Dropdown, DropdownItem, DropdownMenu, DropdownProps, DropdownTrigger } from '../src';
import { ExpandMore, Person, Search } from '@manifest-ui/icons';
import { IconButton } from '@manifest-ui/button';
import { Separator } from '@manifest-ui/separator';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
};

export const Default = (args: DropdownProps) => (
  <Dropdown {...args}>
    <DropdownTrigger>
      <IconButton>
        <ExpandMore />
      </IconButton>
    </DropdownTrigger>
    <DropdownMenu>
      <DropdownItem startIcon={<Person />}>Profile</DropdownItem>
      <DropdownItem startIcon={<Search />}>Search</DropdownItem>
      <Separator />
      <DropdownItem>Sign out</DropdownItem>
    </DropdownMenu>
  </Dropdown>
);
Default.args = {};
