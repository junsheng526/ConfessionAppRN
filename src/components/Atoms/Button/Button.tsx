import {
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
  Image,
  ViewStyle,
} from 'react-native'

import { View } from 'react-native'
import Text from '../Text/Text'

export interface ButtonProps {
  type?: 'primary' | 'secondary' | 'transparent'
  label: string
  onPress?: () => void
  disabled?: boolean
  icon?: ImageSourcePropType
  iconRight?: boolean
  children?: React.ReactNode
  width?: any
  height?: number
  outlined?: boolean
  backgroundColor?: string
  justify?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | undefined
  bgColor?: string
  textColor?: string
  borderColor?: string
}

const Button: React.FC<ButtonProps> = ({
  type,
  label,
  disabled,
  icon,
  onPress,
  iconRight,
  children,
  width,
  height = 50,
  outlined,
  backgroundColor,
  justify = 'center',
  bgColor,
  textColor = '#002659',
  borderColor,
  ...props
}) => (
  <View
    style={[
      styles.container,
      {
        height,
        width,
      },
    ]}
  >
    <TouchableOpacity
      style={[
        styles.button,
        iconRight ? styles.iconRight : styles.iconLeft,
        {
          opacity: disabled ? 0.5 : 1,
          justifyContent: justify,
          backgroundColor:
            type === 'primary'
              ? '#002659'
              : type === 'secondary'
              ? '#FFFFFF'
              : type === 'transparent'
              ? 'transparent'
              : bgColor,
          borderColor: '#FFFFFF',
          borderWidth: outlined ? 1 : 0,
        },
      ]}
      {...props}
      onPress={onPress}
    >
      {icon && (
        <View>
          <Image
            source={icon}
            resizeMode="contain"
            style={{ width: 15, marginRight: 10 }}
          />
        </View>
      )}
      <View>
        <Text style={{ color: textColor }} fontStyle="extra-bold">
          {label}
        </Text>
      </View>
      <View>{children}</View>
    </TouchableOpacity>
  </View>
)

export default Button
// (alias) type FlexAlignType = "flex-start" | "flex-end" | "center" | "stretch" | "baseline"

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  iconRight: {
    flexDirection: 'row-reverse',
  },
  iconLeft: {
    flexDirection: 'row',
  },
  button: {
    alignItems: 'center',
    flex: 1,
    borderRadius: 8,
    gap: 4,
    padding: 16,
  },
})
