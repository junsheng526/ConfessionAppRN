import { Image, ImageSourcePropType, StyleSheet, View } from 'react-native'
import Text from '../../Atoms/Text/Text'

type AccountSelectionProps = {
  icon?: ImageSourcePropType
  title?: string
  subtitle?: string
  amount?: string
}

const AccountSelection = (props: AccountSelectionProps) => {
  const { icon, title, subtitle, amount } = props
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title} fontStyle='extra-bold'>
          {title}
        </Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
      <View style={styles.subcontainer}>
        <Text style={styles.amount} fontStyle='extra-bold'>
          {amount}
        </Text>
        {icon && (
          <Image style={styles.icon} source={icon} resizeMode="contain" />
        )}
      </View>
    </View>
  )
}

export default AccountSelection

export const styles = StyleSheet.create({
  container: {
    // color: '#002659',
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderRadius: 8,
    height: 76,
    width: 310
  },
  title: {
    color: '#002659',
    fontSize: 14,
  },
  subcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  subtitle: {
    color: '#002659',
    fontSize: 12,
    fontWeight: '500',
    marginTop: 5,
  },
  amount: {
    color: '#002659',
    fontSize: 14,
    textAlign: 'right',
  },
  icon: {
    width: 20,
    height: 20,
  },
})
