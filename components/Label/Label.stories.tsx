import { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import { VariantProps } from '../../stitches.config';
import ignoreArgType from '../../utils/ignoreArgType';
import { modifyVariantsForStory } from '../../utils/modifyVariantsForStory';
import { Box } from '../Box';
import { Label } from './Label';

type LabelVariants = VariantProps<typeof Label>;
type LabelProps = LabelVariants & NonNullable<unknown>;

const BaseLabel = (props: LabelProps): JSX.Element => <Label {...props} />;
const LabelForStory = modifyVariantsForStory<
  LabelVariants,
  LabelProps & React.LabelHTMLAttributes<any>
>(BaseLabel);

const Component: Meta<typeof LabelForStory> = {
  title: 'Components/Label',
  component: LabelForStory,
};

const Template: StoryFn<typeof LabelForStory> = ({ id, ...args }) => (
  <Box>
    <Label htmlFor={id} css={{ mr: '$2' }} {...args}>
      Email field
    </Label>
    <input id={id} name="email" type="email" />
  </Box>
);

export const Basic: StoryFn<typeof LabelForStory> = Template.bind({});

Basic.args = {
  id: 'basic',
};
ignoreArgType('id', Basic);

export const Capitalized: StoryFn<typeof LabelForStory> = Template.bind({});

Capitalized.args = {
  id: 'capitalize',
};
ignoreArgType('id', Capitalized);

export const CapitalizedWords: StoryFn<typeof LabelForStory> = Template.bind({});

CapitalizedWords.args = {
  id: 'capitalize-words',
  transform: 'capitalizeWords',
};
ignoreArgType('id', CapitalizedWords);

export const Uppercased: StoryFn<typeof LabelForStory> = Template.bind({});
Uppercased.args = {
  id: 'uppercase',
  transform: 'uppercase',
};
ignoreArgType('id', Uppercased);

export const Invalid: StoryFn<typeof LabelForStory> = Template.bind({});
Invalid.args = {
  id: 'invalidvariant',
  variant: 'invalid',
};
ignoreArgType('id', Invalid);

export const Disabled: StoryFn<typeof LabelForStory> = ({ id, ...args }) => (
  <Box>
    <Label htmlFor={id} css={{ mr: '$2' }} variant="subtle" {...args}>
      Email field
    </Label>
    <input id={id} name="email" type="email" disabled />
  </Box>
);
Disabled.args = {
  id: 'subtledisabled',
};
ignoreArgType('id', Disabled);

export const FocusContrast: StoryFn<typeof LabelForStory> = ({ id, ...args }) => {
  const [hasFocus, setHasFocus] = React.useState(false);

  const onFocus = React.useCallback(() => {
    setHasFocus(true);
  }, [setHasFocus]);

  const onBlur = React.useCallback(() => {
    setHasFocus(false);
  }, [setHasFocus]);

  return (
    <Box>
      <Label variant={hasFocus ? 'contrast' : 'default'} htmlFor={id} css={{ mr: '$2' }} {...args}>
        Email field
      </Label>
      <input id={id} name="email" type="email" onFocus={onFocus} onBlur={onBlur} />
    </Box>
  );
};
FocusContrast.args = {
  id: 'focuscontrastvariants',
};
ignoreArgType('id', FocusContrast);

export default Component;
