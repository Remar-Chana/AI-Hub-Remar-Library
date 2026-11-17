import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect } from 'storybook/test'
import { Button } from './button'

const meta = {
  component: Button,
  tags: ['ai-generated'],
  args: { children: 'Continue' },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Outline: Story = {
  args: { variant: 'outline', children: 'Cancel' },
}

export const Destructive: Story = {
  args: { variant: 'destructive', children: 'Delete item' },
}

export const Disabled: Story = {
  args: { children: 'Unavailable', disabled: true },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('button', { name: 'Unavailable' })).toBeDisabled()
  },
}

export const CssCheck: Story = {
  args: { children: 'Styled button' },
  play: async ({ canvas }) => {
    const button = canvas.getByRole('button', { name: 'Styled button' })
    await expect(getComputedStyle(button).borderRadius).toBe('10px')
  },
}
