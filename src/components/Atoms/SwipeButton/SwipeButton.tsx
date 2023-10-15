import { StyleSheet, View, Image } from 'react-native'
import SwipeButton from 'rn-swipe-button'
import { ICON_SWIPE_BUTTON } from '../../../constants/assets'

export interface SwipeButtonProps {}

export const IconComponent = () => {
  return <Image source={ICON_SWIPE_BUTTON} resizeMode="center" />
}

const SwipeBtn: React.FC<SwipeButtonProps> = (props) => {
  return (
    <SwipeButton
      containerStyles={{
        borderRadius: 16,
        paddingLeft: 6,
      }}
      railBackgroundColor="#002659"
      thumbIconComponent={IconComponent}
      thumbIconStyles={{ borderRadius: 16, borderWidth: 0 }}
      thumbIconBackgroundColor="transparent"
      title="Swipe to Transfer"
      titleColor="#FFFFFF"
      titleFontSize={16}
      railFillBackgroundColor="rgba(0, 38, 89, 0.2)"
      railFillBorderColor="rgba(0, 38, 89, 0.2)"
      titleStyles={{ fontFamily: 'Alliance-Bold' }}
    />
  )
}

export default SwipeBtn

export const styles = StyleSheet.create({})
