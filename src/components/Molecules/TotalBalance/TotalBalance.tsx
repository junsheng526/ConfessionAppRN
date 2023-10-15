import { View } from 'react-native'
import Text from '../../Atoms/Text/Text'

const TotalBalance = () => {
  return (
    <View className="gap-5 m-1">
      <Text className="text-sm text-primary" fontStyle='bold'>Your New Balance</Text>
      <Text className="text-primary text-[20px]" fontStyle='extra-bold'>
        RM 14,708.10
      </Text>
    </View>
  )
}

export default TotalBalance
