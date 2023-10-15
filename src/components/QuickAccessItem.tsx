import {
  TouchableOpacity,
  Image,
  ImageSourcePropType,
  StyleSheet,
} from 'react-native'
import { Shadow } from 'react-native-shadow-2'
import Text from './Atoms/Text/Text'

type Props = {
  icon: ImageSourcePropType
  name: string
  onClick?: () => void
}

const QuickAccessItem = ({ icon, name, onClick }: Props) => {
  return (
    <Shadow
      distance={2}
      containerStyle={styles.container}
      style={styles.content}
      startColor="#2F80ED33"
    >
      <TouchableOpacity
        activeOpacity={0.75}
        onPress={onClick}
        className="py-2 px-1.5 items-center justify-centerw-20"
      >
        <Image source={icon} resizeMode="contain" className="h-[25px]" />
        <Text className="text-primary text-sm leading-4 text-center mt-2.5 w-20" fontStyle='bold'>
          {name}
        </Text>
      </TouchableOpacity>
    </Shadow>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    marginHorizontal: 4,
    marginVertical: 8,
    borderRadius: 8,
  },
  content: {
    borderRadius: 8,
    width: 80,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default QuickAccessItem
