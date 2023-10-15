import ButtonComponent from './Button'

export default {
  title: 'Atoms/Button',
  component: ButtonComponent,
  argTypes: {
    onPress: { action: 'pressed the button' },
    width: 250,
    height: 50,
    disabled: false,
  },
}

export const Default = {
  args: {
    label: 'Button Primary',
    type: 'primary',
    disabled: false,
    icon: '',
    iconRight: false,
    width: 250,
    height: 50,
  },
}

export const Secondary = {
  args: {
    label: 'Button Secondary',
    type: 'secondary',
    disabled: false,
  },
}

export const Disabled = {
  args: {
    label: 'Button Primary disabled',
    type: 'primary',
    disabled: true,
  },
}
