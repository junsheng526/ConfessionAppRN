import { ScrollView, View } from 'react-native'
import QuickAccessItem from './QuickAccessItem'
import {
  ICON_CALENDAR,
  ICON_ONE_TIME_CARD,
  ICON_TAP_PAY,
  LOGO_DUITNOW,
  LOGO_JOMPAY,
} from '../constants/assets'

type Props = {}

const QuickAccess = (props: Props) => {
  return (
    <ScrollView horizontal scrollEnabled>
      <View className="flex-row px-1">
        <QuickAccessItem icon={LOGO_DUITNOW} name="Duitnow" />
        <QuickAccessItem icon={LOGO_JOMPAY} name="JomPay" />
        <QuickAccessItem icon={ICON_CALENDAR} name="Payment Reminder" />
        <QuickAccessItem icon={ICON_TAP_PAY} name={`Tap\nto Pay`} />
        <QuickAccessItem icon={ICON_CALENDAR} name={`Sub-\nscription`} />
        <QuickAccessItem icon={ICON_ONE_TIME_CARD} name="One-Time Card" />
      </View>
    </ScrollView>
  )
}

export default QuickAccess
