import React from 'react';

import {
  Avatar,
  Button,
  chakra,
  DarkMode,
  Flex,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
  Tooltip,
  VisuallyHidden,
} from '@manifest-ui/react';
import type { IconButtonProps } from '@manifest-ui/react';

import {
  AiOutlineLineChart,
  AiOutlineFlag,
  AiOutlineSearch,
} from 'react-icons/ai';
import { FiRss } from 'react-icons/fi';
import { CgMenuMotion } from 'react-icons/cg';
import { BsToggles } from 'react-icons/bs';

import Logo from '../Logo';
import ToggleColorMode from '../ToggleColorMode';

const Navbar = () => {
  return (
    <chakra.nav w="full" px={{ base: 2, sm: 4 }} py={2} shadow="md">
      <Flex alignItems="center" justifyContent="space-between" mx="auto">
        <HStack display="flex" spacing={3} alignItems="center">
          <chakra.a
            href="/"
            title="Choc Home Page"
            display="flex"
            alignItems="center"
          >
            <Logo mr={2} />
            <VisuallyHidden>Choc</VisuallyHidden>
          </chakra.a>

          <HStack spacing={3} display={{ base: 'none', md: 'inline-flex' }}>
            <DarkIconButton
              aria-label="Home"
              variant="solid"
              icon={<CgMenuMotion />}
            />
            <DarkIconButton
              aria-label="Reports"
              variant="ghost"
              icon={<AiOutlineLineChart />}
            />
            <DarkIconButton
              aria-label="Network"
              variant="ghost"
              icon={<FiRss />}
            />
            <DarkIconButton
              aria-label="Tracking"
              variant="ghost"
              icon={<AiOutlineFlag />}
            />
            <DarkIconButton
              aria-label="Settings"
              variant="ghost"
              icon={<BsToggles />}
            />
          </HStack>
        </HStack>

        <HStack spacing={3} alignItems="center">
          <DarkMode>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <AiOutlineSearch />
              </InputLeftElement>
              <Input type="text" variant="filled" placeholder="Search" py={2} />
              <InputRightElement pointerEvents="none">
                <Flex as="kbd" color="gray.400" fontSize="sm" pr="2">
                  ⌘ K
                </Flex>
              </InputRightElement>
            </InputGroup>
          </DarkMode>

          <DarkMode>
            <Button variant="ghost">
              <Avatar
                mx="3"
                size="xs"
                name="Dan Abrahmov"
                src="https://bit.ly/dan-abramov"
              />
              <Text as="span" mr="2">
                Logistics
              </Text>
            </Button>
          </DarkMode>

          <ToggleColorMode />
        </HStack>
      </Flex>
    </chakra.nav>
  );
};

const DarkIconButton = (props: IconButtonProps) => (
  <Tooltip hasArrow label={props['aria-label']} placement="bottom">
    <div>
      <DarkMode>
        <IconButton {...props} />
      </DarkMode>
    </div>
  </Tooltip>
);

export default Navbar;
