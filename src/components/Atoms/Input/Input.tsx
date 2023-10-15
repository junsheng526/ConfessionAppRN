import {
  KeyboardTypeOptions,
  StyleSheet,
  TextInput,
  TextStyle,
} from 'react-native'
import { InputProps } from '..'

const Input = (props: InputProps) => {
  const {
    value,
    onChange,
    iconRight,
    style,
    textarea,
    placeholder = 'Enter Text',
    keyboardType,
  } = props

  return (
    <TextInput
      style={[
        styles.inputStyle,
        style,
        {
          paddingLeft: !iconRight ? 40 : 10,
        },
      ]}
      keyboardType={keyboardType}
      multiline={textarea}
      placeholder={placeholder}
      value={value}
      onChangeText={(text) => onChange(text)}
    />
  )
}

export default Input

export const styles = StyleSheet.create({
  inputStyle: {
    fontSize: 14,
    fontFamily: 'Alliance-Medium',
  },
})
