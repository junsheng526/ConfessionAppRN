import { Image, StyleSheet, View } from 'react-native'
import Text from '../../Atoms/Text/Text'
import RadialGradient from 'react-native-radial-gradient'
import LinearGradient from 'react-native-linear-gradient'
import Numbering from '../../Atoms/Icon/Numbering'

const TransferStep1 = () => {
  return (
    <View style={styles.container}>
      <RadialGradient
        colors={['rgba(255, 255, 255, 0.40)', 'rgba(255, 255, 255, 0.00)']}
        center={[0, 80]}
        stops={[0, 1.5, 1]}
        radius={550}
      >
        <LinearGradient
          colors={['rgba(74, 134, 255, 0.10)', 'rgba(239, 57, 89, 0.00)']}
          start={{ x: 0.1, y: 0.1 }}
          end={{ x: 0.5, y: 0.5 }}
          style={{ height: '100%' }}
        >
          {/* <LinearGradient
            colors={['rgba(255, 255, 255, 0.00)', 'rgba(0, 38, 89, 0.10)']}
            start={{ x: 0.6, y: 0.6 }}
            end={{ x: 1.0, y: 1.0 }}
            style={{ height: '100%' }}
          > */}
          <View className="m-5 ">
            <View className="flex-row items-center gap-4">
              <View>
                <Numbering>
                  <Text className="text-white text-center leading-5" fontStyle='extra-bold'>
                    1
                  </Text>
                </Numbering>
              </View>
              <Text className="text-primary font-extrabold items-center">
                Step 1
              </Text>
            </View>
          </View>
        </LinearGradient>
        {/* </LinearGradient> */}
      </RadialGradient>
    </View>
  )
}
export default TransferStep1

export const styles = StyleSheet.create({
  container: {
    height: '80%',
    borderRadius: 8,
    margin: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    overflow: 'hidden',
  },
})
