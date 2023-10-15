import CheckboxComponent from './Checkbox'

export default {
  title: 'Atoms/Checkbox',
  component: CheckboxComponent,
  argTypes: {
    onValueChange: {
      action: 'changed',
      //   onEmit: (e) => ({ value: !e.target.value }),
    },
  },
}

export const Default = {
  args: {
    value: true,
    disabled: false,
  },
}
