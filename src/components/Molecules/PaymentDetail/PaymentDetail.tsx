import { Image, ImageSourcePropType, View } from 'react-native'
import Text from '../../Atoms/Text/Text'
import { ICON_CHECKLIST_GREEN } from '../../../constants/assets'
import Checkbox from '../../Atoms/Checkbox/Checkbox'
import { useState } from 'react'

type PaymentDetailProps = {
  label: string
  value: string
  veriv?: boolean
lastIndex?:boolean
}

const PaymentDetail = (props: PaymentDetailProps) => {
  const { label, value, veriv, lastIndex } = props
  const [check, setCheck] = useState(true)

  return (
    <View className={`flex-row justify-between pb-2 ${!lastIndex && 'border-b border-[#F4F4F4]'}`}>
      <Text className="text-primary" fontStyle='bold'>{label}</Text>
      <View className="flex flex-row items-center">
        <Text
          className="text-primary"
          fontStyle='extra-bold'
        >
          {value}
        </Text>
        {veriv && <View className='ml-1.5'><Checkbox value={check} onValueChange={setCheck} /></View>}
      </View>
    </View>
  )
}

export default PaymentDetail
