import { StyleSheet, Switch } from 'react-native'

export interface ToggleProps {
  onValueChange: (val: boolean) => void
  value?: boolean
  disabled?: boolean
  style?: any
}

const Toggle: React.FC<ToggleProps> = (props) => {
  const { disabled, value, style } = props
  return (
    <Switch
      {...props}
      style={[
        style,
        {
          opacity: disabled ? 0.5 : 1,
          transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }],
        },
      ]}
      thumbColor={value ? '#002659' : '#002659'}
      trackColor={{
        false: 'rgba(60, 60, 67, 0.3)',
        true: 'rgba(99, 165, 218, 0.3)',
      }}
    />
  )
}

export default Toggle

export const styles = StyleSheet.create({})
