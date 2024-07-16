import { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import { VariantProps } from '../../stitches.config';
import { modifyVariantsForStory } from '../../utils/modifyVariantsForStory';
import { Radio, RadioGroup, RadioProps, RadioVariants } from './Radio';

const BaseRadio = (props: RadioProps): JSX.Element => <Radio {...props} />;
const RadioForStory = modifyVariantsForStory<RadioVariants, RadioProps>(BaseRadio);

type RadioGroupVariants = VariantProps<typeof RadioGroup>;
type RadioGroupProps = RadioGroupVariants & NonNullable<unknown>;

const BaseRadioGroup = (props: RadioGroupProps): JSX.Element => <RadioGroup {...props} />;
const RadioGroupForStory = modifyVariantsForStory<
  RadioGroupVariants,
  RadioGroupProps & React.InputHTMLAttributes<any>
>(BaseRadioGroup);

const Component: Meta<typeof RadioForStory> = {
  title: 'Components/Radio',
  component: RadioForStory,
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Template: StoryFn<typeof RadioForStory> = ({ value, ...args }) => (
  <RadioGroupForStory defaultValue="1">
    <RadioForStory value="1" css={{ mr: '$5' }} {...args} />
    <RadioForStory value="2" css={{ mr: '$5' }} {...args} />
  </RadioGroupForStory>
);

export const Basic: StoryFn<typeof RadioForStory> = Template.bind({});

Basic.args = {};

export const Size: StoryFn<typeof RadioForStory> = Template.bind({});

Size.args = {
  size: '2',
};

export const Disabled: StoryFn<typeof RadioForStory> = Template.bind({});

Disabled.args = {
  disabled: true,
  size: 2,
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Customize: StoryFn<typeof RadioForStory> = ({ value, ...args }) => (
  <RadioGroup css={{ c: '$hiContrast' }} defaultValue="1">
    <RadioForStory value="1" css={{ mr: '$5' }} {...args} />
    <RadioForStory value="2" css={{ mr: '$5' }} {...args} />
  </RadioGroup>
);

export default Component;
