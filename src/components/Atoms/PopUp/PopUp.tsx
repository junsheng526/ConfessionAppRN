import { Image, ImageSourcePropType, StyleSheet, View, ViewStyle } from 'react-native'
import Text from '../Text/Text'

type PopUpProps = {
  title: string
  message: string
  icon?: ImageSourcePropType
  iconWidth?: number
  iconHeight?: number
iconStyle?: ViewStyle
}

const PopUp = (props: PopUpProps) => {
  const { title, message, icon, iconHeight = 70, iconWidth = 70, iconStyle } = props

  return (
    <View style={styles.container}>
      {icon && (
        <View
          style={[
            iconStyle,
            styles.containerIcon,
          ]}
        >
          <Image
            source={icon}
            style={{ height: '100%', width: '100%' }}
            resizeMode="cover"
          />
        </View>
      )}
      <Text fontStyle="extra-bold" className="text-primary text-xl">
        {title}
      </Text>
      <Text fontStyle="bold" className="text-[#666666] mt-4">
        {message}
      </Text>
    </View>
  )
}

export default PopUp

export const styles = StyleSheet.create({
  container: {
    position: 'relative',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    paddingTop: 64,
    paddingHorizontal: 24,
    paddingBottom: 32,
    alignItems: 'center',
    width: 341,
    height: 196,
  },
  containerIcon: {
    position: 'absolute',
  },
})
