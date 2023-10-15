import { Image, StyleSheet, View } from 'react-native'
import Text from '../../Atoms/Text/Text'
import { LOGO_DUITNOW } from '../../../constants/assets'

const PayTo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.detailContainer}>
        <Image style={styles.image} source={LOGO_DUITNOW} />
        <View>
          <Text  style={styles.name} fontStyle='extra-bold'>
            Justin Julius
          </Text>
          <Text style={styles.phone}>+6011 23243164</Text>
        </View>
      </View>
      <View>
        <Text style={styles.amount} fontStyle='extra-bold'>
          RM 16.90
        </Text>
      </View>
    </View>
  )
}

export default PayTo

export const styles = StyleSheet.create({
  title: {
    color: '#333',
    fontSize: 20,
    fontWeight: '800',
  },
  image: {
    width: 25,
    height: 25,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    margin: 10,
    padding: 16,
    borderRadius: 8,
    height: 76,
    width: 310,
  },
  name: {
    color: '#002659',
    fontSize: 14,
  },
  detailContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 18,
  },
  phone: {
    color: '#002659',
    fontWeight: '500',
    fontSize: 14,
  },
  amount: {
    color: '#002659',
    fontSize: 14,
  },
})
