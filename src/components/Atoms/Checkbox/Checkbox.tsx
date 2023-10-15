import { StyleSheet } from 'react-native'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import { Path, Svg } from 'react-native-svg'

export interface CheckboxProps {
  onValueChange: (val: boolean) => void
  value: boolean
  disabled?: boolean
}

const ChecklistIcon = () => {
  return (
    <Svg width="16" height="12" viewBox="0 0 16 12" fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M14.5293 0.845921C14.3379 0.662302 14.031 0.662302 13.8406 0.846892L5.57476 8.80466C5.38533 8.98634 5.07554 8.98731 4.88512 8.80369L2.11668 6.14171C1.9233 5.95712 1.61646 5.95809 1.42506 6.14462L0.936685 6.62067C0.842957 6.712 0.790666 6.83732 0.791653 6.96654C0.791653 7.09769 0.84493 7.22205 0.939645 7.3124L4.88512 11.1111C4.98082 11.2043 5.10612 11.25 5.23044 11.25C5.35475 11.25 5.47906 11.2043 5.57476 11.1111L15.0177 2.00787C15.1134 1.91654 15.1666 1.79122 15.1666 1.66006C15.1657 1.5289 15.1124 1.40358 15.0167 1.31225L14.5293 0.845921Z"
        fill="white"
      />
    </Svg>
  )
}

const Checkbox: React.FC<CheckboxProps> = (props) => {
  const { disabled, value, onValueChange } = props
  return (
    <BouncyCheckbox
      fillColor="#002659"
      unfillColor="#FFFFFF"
      innerIconStyle={{ borderWidth: 2, borderRadius: 6 }}
      iconStyle={{ borderColor: '#002659', borderRadius: 6 }}
      size={25}
      {...props}
      style={{ opacity: disabled ? 0.5 : 1, width: 25 }}
      iconComponent={<ChecklistIcon />}
      isChecked={value}
      onPress={(e) => onValueChange(e)}
    />
  )
}

export default Checkbox

export const styles = StyleSheet.create({})
