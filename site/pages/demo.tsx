import React from 'react';
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  Grid,
  Heading,
  HStack,
  Icon,
  Select,
  Tag,
  Text,
  VStack,
  useColorModeValue,
} from '@manifest-ui/react';

import type {
  ChakraProps,
  FlexProps,
  GridProps,
  TextProps,
} from '@manifest-ui/react';

import { AiOutlinePlusCircle, AiOutlineDownload } from 'react-icons/ai';
import { MdArrowDropDown, MdGroup, MdOutlineHelpOutline } from 'react-icons/md';

import Layout from '../components/Layout';
import Card from '../components/Card';
import Strong from '../components/Strong';

const Demo = () => {
  return (
    <Layout>
      <Box bg={useColorModeValue('white', 'gray.900')} mb="8" py="8">
        <Container paddingInline="2rem" maxW="container.xl">
          <HStack justify="space-between">
            <div>
              <Heading as="h1" mb="4">
                All Modes
              </Heading>
              <HStack>
                <Text>
                  Showing <Strong>634,392</Strong> results
                </Text>
                <Icon color="gray.600" icon={<MdOutlineHelpOutline />} />
              </HStack>
            </div>
            <VStack align="end">
              <ButtonGroup isAttached mb="4" variant="outline" size="sm">
                <Button leftIcon={<AiOutlinePlusCircle />}>Add Shipment</Button>
                <Button leftIcon={<AiOutlineDownload />}>Download</Button>
              </ButtonGroup>
              <Text as="div" fontSize="xs" mr="-2">
                <span>Sorted by </span>
                <Select
                  display="inline-block"
                  fontWeight="bold"
                  icon={<MdArrowDropDown />}
                  size="xs"
                  variant="unstyled"
                  width="auto"
                  _focus={{ shadow: 'outline' }}
                >
                  <option value="last-updated-ascending">
                    Last Updated Date (Least Recent)
                  </option>
                  <option value="last-updated-descending">
                    Last Updated Date (Most Recent)
                  </option>
                </Select>
              </Text>
            </VStack>
          </HStack>
        </Container>
      </Box>
      <Container paddingInline="2rem" maxW="container.xl">
        <VStack>
          <Card>
            <ShipmentInfo
              p="8"
              borderBottomWidth="thin"
              borderColor={useColorModeValue('gray.300', 'whiteAlpha.200')}
              data={{
                container: 'CONT102938',
                carrier: 'Hapag',
                status: 'In Transit',
                delivery: '00 Jun 2021 20:00',
                updated: '57 MIN ago',
              }}
            />
            <ShipmentStatusStepper
              px="8"
              pt="6"
              pb="4"
              partner="Barnes Wholesale Service"
              data={[
                {
                  label: 'Origin',
                  value: 'Montgomery, Alabama',
                  isComplete: true,
                  type: 'otr',
                },
                { isComplete: true, type: 'otr' },
                { isComplete: false, type: 'ocean' },
                { isComplete: false, type: 'otr' },
                {
                  label: 'Destination',
                  value: 'Moscow, Russia',
                  isComplete: false,
                  type: 'otr',
                },
              ]}
            />
          </Card>
        </VStack>
      </Container>
    </Layout>
  );
};

const Label = (props: TextProps) => (
  <Text
    color={useColorModeValue('blackAlpha.500', 'whiteAlpha.500')}
    fontWeight="normal"
    fontSize="xs"
    mb="2"
    {...props}
  />
);

type ShipmentData = {
  container: string;
  carrier: string;
  status: string;
  delivery: string;
  updated: string;
};

interface ShipmentInfoProps extends GridProps {
  data: ShipmentData;
}

const ShipmentInfo = ({ data, ...props }: ShipmentInfoProps) => (
  <Grid
    templateColumns="repeat(5, 1fr)"
    fontSize="sm"
    fontWeight="semibold"
    {...props}
  >
    <Box>
      <Label>Container</Label>
      <Text color="blue.600">{data.container}</Text>
    </Box>
    <Box>
      <Label>Carrier</Label>
      <Text>{data.carrier}</Text>
    </Box>
    <Box>
      <Label>Status</Label>
      <Tag borderRadius="full" colorScheme="blue" variant="solid">
        {data.status}
      </Tag>
    </Box>
    <Box>
      <Label>Delivery</Label>
      <Text>{data.delivery}</Text>
    </Box>
    <Box>
      <Label>Last updated {data.updated}</Label>
    </Box>
  </Grid>
);

const boxStyles: { [key: string]: ChakraProps } = {
  complete: {
    borderTopStyle: 'solid',
    borderColor: 'purple.400',
  },
  incomplete: {
    borderTopStyle: 'dashed',
    borderColor: 'gray.400',
  },
};

type ProgressStep = {
  label?: string;
  value?: string;
  isComplete: boolean;
  type: 'otr' | 'rail' | 'air' | 'ocean';
};

interface ShipmentStatusProps extends FlexProps {
  data: ProgressStep[];
  partner?: string;
}

const ShipmentStatusStepper = ({
  data,
  partner,
  ...props
}: ShipmentStatusProps) => {
  return (
    <>
      <Flex justify="space-between" {...props}>
        {data.map((step: ProgressStep, index: number) => {
          const isLast = index === data.length - 1;
          const status: keyof typeof boxStyles = step.isComplete
            ? 'complete'
            : 'incomplete';

          return (
            <Box
              key={index}
              flex="1 1 auto"
              position="relative"
              mt="4"
              pt="4"
              borderTopWidth={isLast ? '0' : 'thin'}
              {...boxStyles[status]}
            >
              <Box
                bg="purple.600"
                borderRadius="full"
                h="3"
                position="absolute"
                top="0"
                transform="translateY(-55%)"
                w="3"
              />
              {step.label && (
                <Label fontWeight="semibold" textTransform="uppercase">
                  {step.label}
                </Label>
              )}
              {step.value && <Strong fontSize="sm">{step.value}</Strong>}
            </Box>
          );
        })}
      </Flex>
      <Box p="8" pb="6" pt="0">
        {partner && (
          <Tag colorScheme="green" fontWeight="bold">
            <Icon mr="2" as={MdGroup} /> Made visible by {partner}
          </Tag>
        )}
      </Box>
    </>
  );
};

export default Demo;
