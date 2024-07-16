import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import { PopoverAnchor, PopoverPortal } from '@radix-ui/react-popover';
import { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import { modifyVariantsForStory } from '../../utils/modifyVariantsForStory';
import { Box } from '../Box';
import { Button } from '../Button';
import { Container } from '../Container';
import { Flex } from '../Flex';
import { Text } from '../Text';
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverProps,
  PopoverTrigger,
  PopoverVariants,
} from './Popover';

const BasePopover = (props: PopoverProps): JSX.Element => <Popover {...props} />;
const PopoverForStory = modifyVariantsForStory<PopoverVariants, PopoverProps>(BasePopover);

const Component: Meta<typeof PopoverForStory> = {
  title: 'Components/Popover',
  component: PopoverForStory,
};

const Template: StoryFn<typeof PopoverForStory> = (args) => (
  <Container>
    <PopoverForStory {...args}>
      <PopoverTrigger asChild>
        <Button>Open</Button>
      </PopoverTrigger>
      <PopoverPortal>
        <PopoverContent>
          <PopoverClose asChild>
            <Button ghost>Close</Button>
          </PopoverClose>
        </PopoverContent>
      </PopoverPortal>
    </PopoverForStory>
  </Container>
);

export const Basic: StoryFn<typeof PopoverForStory> = Template.bind({});

export const RichContent: StoryFn<typeof PopoverForStory> = (args) => (
  <Container>
    <PopoverForStory {...args}>
      <PopoverTrigger asChild>
        <Button>Open</Button>
      </PopoverTrigger>
      <PopoverPortal>
        <PopoverContent css={{ p: '$3' }}>
          <Text as="p" css={{ mb: '$2', color: 'currentColor' }}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae iure tenetur velit
            animi magni rerum nulla totam reprehenderit, cum fugit omnis optio dicta molestias
            dolore itaque voluptatibus obcaecati eligendi. Architecto.
          </Text>
          <Flex css={{ justifyContent: 'space-between' }}>
            <Button variant="secondary">Learn more</Button>
            <PopoverClose asChild>
              <Button variant="primary">Close</Button>
            </PopoverClose>
          </Flex>
        </PopoverContent>
      </PopoverPortal>
    </PopoverForStory>
  </Container>
);

export const IconTrigger: StoryFn<typeof PopoverForStory> = (args) => (
  <Container>
    <PopoverForStory {...args}>
      <PopoverTrigger asChild>
        <Button size="small">
          <HamburgerMenuIcon />
        </Button>
      </PopoverTrigger>
      <PopoverPortal>
        <PopoverContent arrowCss={{ fill: '$primary' }} css={{ bc: '$primary', p: '$2' }}>
          <Text css={{ c: '$loContrast' }}>Content</Text>
        </PopoverContent>
      </PopoverPortal>
    </PopoverForStory>
  </Container>
);

export const RowAnchor: StoryFn<typeof PopoverForStory> = (args) => (
  <Container>
    <PopoverForStory {...args}>
      <PopoverAnchor asChild>
        <Box css={{ bc: '$01dp', p: '$2', display: 'inline-block', c: '$hiContrast' }}>
          Click on
          <PopoverTrigger asChild>
            <Button size="small" css={{ mx: '$2' }}>
              <HamburgerMenuIcon />
            </Button>
          </PopoverTrigger>
          to open the anchor
        </Box>
      </PopoverAnchor>
      <PopoverPortal>
        <PopoverContent arrowCss={{ fill: '$primary' }} css={{ bc: '$primary', p: '$2' }}>
          <Text css={{ c: '$loContrast' }}>Content</Text>
        </PopoverContent>
      </PopoverPortal>
    </PopoverForStory>
  </Container>
);

export default Component;
