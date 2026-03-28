import type { Meta, StoryObj } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { Button } from './Button';

const meta = {
  title: 'Shared/Button',
  component: Button,
  args: {
    onPress: action('onPress'),
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Get Started',
    variant: 'primary',
    size: 'md',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Cancel',
    variant: 'secondary',
    size: 'md',
  },
};

export const Ghost: Story = {
  args: {
    label: 'Learn More',
    variant: 'ghost',
    size: 'md',
  },
};

export const Small: Story = {
  args: {
    label: 'Approve',
    variant: 'primary',
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    label: 'Create Task',
    variant: 'primary',
    size: 'lg',
  },
};

export const Loading: Story = {
  args: {
    label: 'Saving...',
    variant: 'primary',
    loading: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Unavailable',
    variant: 'primary',
    disabled: true,
  },
};
