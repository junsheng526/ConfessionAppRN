import {
  View,
  ImageSourcePropType,
  Image,
  TouchableOpacity,
} from 'react-native'
import Text from './Atoms/Text/Text'

type Props = {
  icon: ImageSourcePropType
  name: string
  textColor?: string
  backgroundColor?: string
  iconBackgroundColor?: string
  isExpanded?: boolean
  onClick?: () => void
}

const WidgetItem = ({
  icon,
  name,
  isExpanded,
  textColor = '#FFF',
  backgroundColor = '#002659',
  iconBackgroundColor = '#FFFFFF4D',
  onClick,
}: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.75}
      onPress={onClick}
      style={{ flex: isExpanded ? 3 : 2, backgroundColor: backgroundColor }}
      className="p-4 m-1 rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl justify-between h-[120px] border border-[#F4F4F433]"
    >
      <View
        style={{ backgroundColor: iconBackgroundColor }}
        className="items-center justify-center w-10 h-10 rounded-full"
      >
        <Image source={icon} resizeMode="contain" className="w-6" />
      </View>
      <Text style={{ color: textColor }} fontStyle='bold'>
        {name}
      </Text>
    </TouchableOpacity>
  )
}

export default WidgetItem

export type { Props as WidgetItemProps }
