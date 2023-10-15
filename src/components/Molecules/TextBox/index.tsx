import {
  Image,
  ImageSourcePropType,
  KeyboardTypeOptions,
  StyleSheet,
  View,
} from 'react-native'
import Input from '../../Atoms/Input/Input'
import { ICON_PHONEBOOK_BLUE } from '../../../constants/assets'
import { useState } from 'react'
import Text from '../../Atoms/Text/Text'

type TextBoxProps = {
  inputText: string
  setInputText: (val: string) => void
  icon?: ImageSourcePropType
  keyboardType?: KeyboardTypeOptions
  children?: React.ReactNode
  placeholder?: string
}

const TextBox = (props: TextBoxProps) => {
  const { inputText, setInputText, icon, keyboardType, children, placeholder } =
    props
  return (
    <View style={styles.container}>
      <Input
        textarea
        value={inputText}
        onChange={setInputText}
        keyboardType={keyboardType}
        placeholder={placeholder}
        style={{
          backgroundColor: '#FFFFFF',
          margin: 5,
          height: 60,
          paddingLeft: 20,
          width: '70%',
        }}
        iconRight
      />
      {children}
      {icon && (
        <Image
          source={ICON_PHONEBOOK_BLUE}
          style={{ width: 25, height: 28, marginRight: 16 }}
        />
      )}
    </View>
  )
}

export default TextBox

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 60,
    borderRadius: 8,
    width: 310,
  },
})
