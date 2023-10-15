import AccountSelectionComponent from './AccountSelection'
import { ICON_CHECKLIST_GREEN } from '../../../constants/assets'

export default {
  title: 'Atoms/AccountSelection',
  component: AccountSelectionComponent,
  argTypes: {
    title: 'SavePlus-i',
    subtitle: '5555 2121 3456 7891',
    amount: 'RM 14,725.00',
  },
}
export const AccountSelection = {
  args: {
    title: 'SavePlus-i',
    subtitle: '5555 2121 3456 7891',
    amount: 'RM 14,725.00',
  },
}

export const AccountSelectionIcon = {
  args: {
    title: 'SavePlus-i',
    subtitle: '5555 2121 3456 7891',
    amount: 'RM 14,725.00',
    icon: ICON_CHECKLIST_GREEN,
  },
}
