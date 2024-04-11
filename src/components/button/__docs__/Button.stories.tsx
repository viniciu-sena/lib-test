import type { Meta, StoryObj } from '@storybook/react';
import Example from './Example';

const meta: Meta<typeof Example> = {
  title: 'Button',
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Primary: Story = {
  args: {
    text: 'Button',
    buttonType: 'primary',
    size: 'small',
    onClick: () => console.log('Button'),
  },
};
export const Secondary: Story = {
  args: {
    text: 'Button',
    buttonType: 'secondary',
    size: 'small',
    onClick: () => console.log('Button'),
  },
};
