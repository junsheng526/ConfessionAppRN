import { KeyboardTypeOptions, TextProps, TextStyle } from 'react-native'

export interface IText extends TextProps {
  children?: React.ReactNode
  text?: string | any
  textColor?: string
  bold?: boolean
  color?: string
  fontStyle?: 'bold' | 'medium' | 'extra-bold'
}

export interface InputProps {
  value: string
  onChange: (val: string) => void
  iconRight?: boolean
  style?: TextStyle
  textarea?: boolean
  placeholder?: string
  keyboardType?: KeyboardTypeOptions
  label?: string
}
