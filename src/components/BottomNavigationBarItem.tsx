import { View, Image, TouchableOpacity } from 'react-native'
import {
  ICON_GIFT,
  ICON_GIFT_ACTIVE,
  ICON_QUICK_ACCESS,
  ICON_QUICK_ACCESS_ACTIVE,
  ICON_SEARCH,
  ICON_SEARCH_ACTIVE,
  IMAGE_AVATAR,
} from '../constants/assets'
import Text from './Atoms/Text/Text'

type Props = {
  routeName: string
  selectedTab: string
  navigate: (selectedTab: string) => void
}

const BottomNavigationBarItem = ({
  routeName,
  selectedTab,
  navigate,
}: Props) => {
  const _renderItem = () => {
    let icon

    switch (routeName) {
      case 'Avatar':
        icon = IMAGE_AVATAR
        break
      case 'Menu':
        icon = selectedTab === routeName ? ICON_SEARCH_ACTIVE : ICON_SEARCH
        break
      case 'Rewards':
        icon = selectedTab === routeName ? ICON_GIFT_ACTIVE : ICON_GIFT
        break
      case 'Quick Access':
        icon =
          selectedTab === routeName
            ? ICON_QUICK_ACCESS_ACTIVE
            : ICON_QUICK_ACCESS
        break
    }

    return (
      <View className="items-center gap-2">
        <Image className="w-[25px] h-[25px]" source={icon} />
        <Text
          className={`text-[11px] text-center ${
            selectedTab === routeName ? 'text-primary' : 'text-info'
          }`}
          fontStyle={selectedTab === routeName ? 'extra-bold' : 'bold'}
        >
          {routeName}
        </Text>
      </View>
    )
  }
  return (
    <TouchableOpacity onPress={() => navigate(routeName)}>
      {_renderItem()}
    </TouchableOpacity>
  )
}

export default BottomNavigationBarItem
