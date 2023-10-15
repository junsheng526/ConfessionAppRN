import {
  View,
  Image,
  Pressable,
  ImageSourcePropType,
  StyleSheet,
} from 'react-native'
import Text from '../../Atoms/Text/Text'
import Input from '../../Atoms/Input/Input'
import { ICON_SEARCH } from '../../../constants/assets'
import { SetStateAction } from 'react'

type SearchProps = {
  value: string
  setValue: (val: string) => void
  icon?: ImageSourcePropType
  iconRight?: boolean
}

const SearchBar = (props: SearchProps) => {
  const { value, setValue, icon, iconRight } = props
  return (
    <View style={styles.container}>
      <Input
        value={value}
        onChange={setValue}
        iconRight={iconRight}
        style={{ backgroundColor: '#FFFFFF', borderRadius: 8 }}
        placeholder="Search"
      />
      {icon && (
        <Pressable
          style={[
            styles.iconStyle,
            iconRight ? styles.iconRight : styles.iconLeft,
          ]}
        >
          <Image source={icon} resizeMode="contain" style={{ width: 18 }} />
        </Pressable>
      )}
    </View>
  )
}

export default SearchBar

export const styles = StyleSheet.create({
  container: {
    height: 47,
    width: 310,
  },
  iconStyle: {
    position: 'absolute',
    top: 2,
  },
  iconRight: {
    right: 15,
  },
  iconLeft: {
    left: 15,
  },
})
