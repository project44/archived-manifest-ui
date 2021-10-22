import React from 'react';

import { chakra, Button, Flex, Icon, Stack } from '@manifest-ui/react';

import { GrStatusPlaceholderSmall } from 'react-icons/gr';

const activeRoute = 'Transportation/Shipments';

const Sidebar = () => {
  return (
    <chakra.nav aria-label="Tools Navigation" py="12" px="4">
      <Stack as="ul" spacing="7">
        {menuItems.map(([category, subitems]) => {
          const isActive = activeRoute.includes(category);
          return (
            <Flex as="ul" direction="column" key={category}>
              <Flex align="center" mb="3">
                <Icon
                  aria-hidden
                  as={GrStatusPlaceholderSmall}
                  color={isActive ? 'purple.600' : 'gray.400'}
                />
                <chakra.span
                  color={isActive ? 'inherit' : 'gray.400'}
                  fontWeight="medium"
                  ml="3"
                >
                  {category}
                </chakra.span>
              </Flex>
              {subitems && (
                <Stack
                  as="ul"
                  borderLeft="1px solid"
                  borderLeftColor={isActive ? 'purple.400' : 'gray.400'}
                  marginInlineStart="2"
                  paddingInlineStart="3"
                >
                  {(subitems as string[]).map((item) => {
                    const isActive = activeRoute.includes(item);
                    return (
                      <Flex as="li" key={item}>
                        <Button
                          variant="ghost"
                          color={isActive ? undefined : 'gray.400'}
                          isActive={isActive}
                          w="full"
                          justifyContent="flex-start"
                        >
                          {item}
                        </Button>
                      </Flex>
                    );
                  })}
                </Stack>
              )}
            </Flex>
          );
        })}
      </Stack>
    </chakra.nav>
  );
};

const menuItems: [string, string[]][] = [
  ['Transportation', ['Shipments', 'Bill of Lading', 'Bookings']],
  ['Orders', ['Purchase Orders', 'Sales Orders', 'Stock Transfers']],
  ['Inventory', ['Line Items']],
];

export default Sidebar;
