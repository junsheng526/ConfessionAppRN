import { useArgs } from '@storybook/client-api'
import React from 'react'
import NumericPad from './NumericPad'

const Template = (args: any) => {
  return <NumericPad {...args} />
}

export const Primary = Template.bind({})

export default {
  title: 'Atoms/NumericPad',
  component: NumericPad,
  argTypes: {
    onChange: {
      action: 'changed',
      onEmit: (e: any) => ({ value: e.target.value }),
    },
  },
}
