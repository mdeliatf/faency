import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import { Ul, Li, ListProps } from './List';
import { Avatar } from '../Avatar';
import { Flex } from '../Flex';
import { Text } from '../Text';
import { Checkbox } from '../Checkbox';
import { Button } from '../Button';

import { InfoCircledIcon } from '@radix-ui/react-icons';

const Component: Meta<typeof Ul> = {
  title: 'Components/List',
  component: Ul,
};

const Template: StoryFn<typeof Ul> = (args) => (
  <Ul {...args}>
    <Li>Dashboard</Li>
    <Li>Profile</Li>
    <Li>Settings</Li>
    <Li>Help</Li>
  </Ul>
);

const Customize: StoryFn<typeof Ul> = (args) => (
  <Ul css={{ mt: '$1' }} {...args}>
    <Li css={{ color: '$hiContrast' }}>Dashboard</Li>
    <Li>Profile</Li>
    <Li>Settings</Li>
    <Li>Help</Li>
  </Ul>
);

export const Basic: StoryFn<typeof Ul> = Template.bind({});

export const Interactive: StoryFn<typeof Ul> = Template.bind({});
Interactive.args = {
  interactive: true,
};

export const Users: StoryFn<typeof Ul> = (args) => (
  <Ul {...args}>
    <Li gap="3">
      <Avatar id="100" src="https://picsum.photos/100" />
      <Flex align="start" direction="column">
        <Text size="3">John Doe</Text>
        <Text size="1">john.doe@john.doe</Text>
      </Flex>
    </Li>
    <Li gap="3">
      <Avatar id="42" src="https://picsum.photos/42" />
      <Flex align="start" direction="column">
        <Text size="3">Jane Doe</Text>
        <Text size="1">jane.doe@jane.doe</Text>
      </Flex>
    </Li>
    <Li gap="3">
      <Avatar id="67" src="https://picsum.photos/67" />
      <Flex align="start" direction="column">
        <Text size="3">Doe Jane</Text>
        <Text size="1">doe.jane@doe.jane</Text>
      </Flex>
    </Li>
  </Ul>
);
Users.args = {
  interactive: true,
};

export const Controls: StoryFn<typeof Ul> = (args) => (
  <Ul {...args}>
    <Li gap="3" controls={<Checkbox />}>
      <Avatar id="100" src="https://picsum.photos/100" />
      <Flex align="start" direction="column">
        <Text size="3">John Doe</Text>
        <Text size="1">john.doe@john.doe</Text>
      </Flex>
    </Li>
    <Li gap="3" controls={<Button variant="red">Delete</Button>}>
      <Avatar id="42" src="https://picsum.photos/42" />
      <Flex align="start" direction="column">
        <Text size="3">Jane Doe</Text>
        <Text size="1">jane.doe@jane.doe</Text>
      </Flex>
    </Li>
    <Li gap="3" controls={<InfoCircledIcon />}>
      <Avatar id="67" src="https://picsum.photos/67" />
      <Flex align="start" direction="column">
        <Text size="3">Doe Jane</Text>
        <Text size="1">doe.jane@doe.jane</Text>
      </Flex>
    </Li>
  </Ul>
);
Controls.args = {
  interactive: true,
};

export default Component;
