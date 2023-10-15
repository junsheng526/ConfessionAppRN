import { useArgs } from '@storybook/client-api'
import React from 'react'
import Input from './Input'

const Template = (args: any) => {
  return <Input {...args} />
}

export const Primary = Template.bind({})

export default {
  title: 'Atoms/Input',
  component: Input,
  argTypes: {
    onChange: {
      action: 'changed',
      onEmit: (e: any) => ({ value: e.target.value }),
    },
    value: {
      type: 'string',
    },
  },
}
