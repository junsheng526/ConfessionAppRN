import { View } from 'react-native'
import {
  ICON_CARD,
  ICON_SCAN,
  ICON_TAP_PAY_WHITE,
  LOGO_DUITNOW,
} from '../constants/assets'
import WidgetItem, { WidgetItemProps } from './WidgetItem'

type WidgetsProps = WidgetItemProps[]

type Props = {}

const Widgets = (props: Props) => {
  const items: WidgetsProps[] = [
    [
      {
        icon: ICON_CARD,
        name: 'Click to Pay',
        backgroundColor: '#003E8F',
        iconBackgroundColor: '#FFFFFF4D',
        textColor: '#fff',
      },

      {
        icon: ICON_TAP_PAY_WHITE,
        name: 'Tap to Pay',
        backgroundColor: '#46A1BE',
        iconBackgroundColor: '#FFFFFF4D',
        textColor: '#fff',
      },
    ],
    [
      {
        icon: LOGO_DUITNOW,
        name: 'DuitNow Transfer',
        backgroundColor: '#46A1BE',
        iconBackgroundColor: '#FFFFFF4D',
        textColor: '#fff',
      },
      {
        icon: ICON_SCAN,
        name: 'Scan to Pay',
        backgroundColor: '#0061E0',
        iconBackgroundColor: '#FFFFFF4D',
        textColor: '#fff',
      },
    ],
  ]

  const renderItems = () =>
    items.map((row, rowIndex) => (
      <View key={rowIndex} className="flex-row">
        {row.map((col, colIndex) => (
          <WidgetItem
            key={colIndex}
            icon={col.icon}
            name={col.name}
            isExpanded={
              (rowIndex + 1) % 2 == 1
                ? (colIndex + 1) % 2 == 1
                  ? true
                  : false
                : (colIndex + 1) % 2 == 1
                ? false
                : true
            }
            backgroundColor={col.backgroundColor}
            iconBackgroundColor={col.iconBackgroundColor}
            textColor={col.textColor}
          />
        ))}
      </View>
    ))

  return <View className="m-1">{renderItems()}</View>
}

export default Widgets
