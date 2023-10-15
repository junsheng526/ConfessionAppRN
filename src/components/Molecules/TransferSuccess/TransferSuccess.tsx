import { Image, ImageBackground, StyleSheet, View } from 'react-native'
import {
  ICON_CHECKLIST_WHITE,
  IMAGE_TRANSFER_SUCCESS_BG,
} from '../../../constants/assets'
import Text from '../../Atoms/Text/Text'

const TransferSuccess = () => {
  return (
    <View>
      <ImageBackground
        style={styles.contentContainer}
        source={IMAGE_TRANSFER_SUCCESS_BG}
        resizeMode="contain"
      >
        <Text className="text-center text-xl text-white" fontStyle='extra-bold'>
          Transfer Successful!
        </Text>
        <Image
          className="w-24 h-24 mt-6"
          source={ICON_CHECKLIST_WHITE}
          resizeMode="contain"
        />
      </ImageBackground>
    </View>
  )
}

export default TransferSuccess

export const styles = StyleSheet.create({
  contentContainer: {
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
