import ToggleComponent from './Toggle'

export default {
  title: 'Atoms/Toggle',
  component: ToggleComponent,
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
