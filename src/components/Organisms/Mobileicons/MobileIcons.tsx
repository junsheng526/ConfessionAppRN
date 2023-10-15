import { Dimensions, Image, StyleSheet, View } from 'react-native'
import Text from '../../Atoms/Text/Text'
import {
  ICON_ARROW_BACK,
  ICON_CHECKLIST_GREEN,
  ICON_DOWNLOAD,
  ICON_NOTIFICATION,
  ICON_PHONEBOOK_BLUE,
  ICON_SHARE,
  ICON_STAR_OUTLINE,
  LOGO_DUITNOW,
} from '../../../constants/assets'
import Numbering from '../../Atoms/Icon/Numbering'
import Svg, { G, Path, Rect } from 'react-native-svg'
const MobileIcons = () => {
  // const dataIcons = [{name: LOGO_DUITNOW, name: ICON_SHARE, name: }]
  const { width } = Dimensions.get('screen')
  const spacing = 16

  const dashes = new Array(Math.floor(width / spacing)).fill(null)

  return (
    <View>
      <Text className="text-primary mt-4 mb-5 text-xl" fontStyle='extra-bold'>
        DUITNOW MOBILE ICONS
      </Text>

      <Svg
        width="211"
        height="162"
        viewBox="0 0 211 162"
        fill="none"
        style={styles.contentContainer}
      >
        <View style={styles.contentWrapper}>
          <Image
            style={styles.icon}
            source={ICON_DOWNLOAD}
            resizeMode="cover"
          />
          <Image style={styles.icon} source={ICON_SHARE} resizeMode="cover" />
          <Image
            style={styles.icon}
            source={ICON_ARROW_BACK}
            resizeMode="cover"
          />
          <Image
            style={styles.icon}
            source={ICON_STAR_OUTLINE}
            resizeMode="cover"
          />
          <Numbering>
            <Text className="text-white text-center leading-5" fontStyle='extra-bold'>
              1
            </Text>
          </Numbering>
          <Image style={styles.icon} source={LOGO_DUITNOW} resizeMode="cover" />
          <Image
            style={styles.icon}
            source={ICON_CHECKLIST_GREEN}
            resizeMode="cover"
          />
          <Image
            style={styles.icon}
            source={ICON_PHONEBOOK_BLUE}
            resizeMode="cover"
          />
          <Image
            style={styles.icon}
            source={ICON_NOTIFICATION}
            resizeMode="cover"
          />
        </View>
        <Rect
          x="0.7"
          y="0.5"
          width="210"
          height="161"
          rx="4.5"
          stroke="#9747FF"
          strokeDasharray="10 5"
        />
      </Svg>
    </View>
  )
}
export default MobileIcons

const styles = StyleSheet.create({
  contentContainer: {
    height: 162,
    alignContent: 'center',
  },
  contentWrapper: {
    flexDirection: 'row',
    columnGap: 50,
    rowGap: 28,
    alignContent: 'center',
    justifyContent: 'center',
    width: 211,
    height: '100%',
    flexWrap: 'wrap',
  },
  icon: {
    width: 21,
    height: 21,
  },
})
