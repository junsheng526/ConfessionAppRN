import { StyleSheet, View } from 'react-native'
import Text from '../../Atoms/Text/Text'

type ContactDetailProps = {
  name: string
  phone: string
}

const ContactDetails = (props: ContactDetailProps) => {
  const { name, phone } = props
  return (
    <View className="m-2">
      <View style={styles.contentContainer}>
        <Text className="text-primary" fontStyle='extra-bold'>
          {name}
        </Text>
        <Text className="text-primary">{phone}</Text>
      </View>
    </View>
  )
}

export default ContactDetails

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.50)',
    borderRadius: 8,
    paddingVertical: 8,
  },
  contentContainer: {
    marginTop: 8,
  },
})
