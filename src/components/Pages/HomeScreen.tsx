import {
  View,
  ScrollView,
  Dimensions,
  Button as ButtonNative,
  TouchableOpacity,
  Image,
} from 'react-native'
import QuickAccess from '../QuickAccess'
import Widgets from '../Widgets'
import Button from '../Atoms/Button/Button'
import Checkbox from '../Atoms/Checkbox/Checkbox'
import { useState } from 'react'
import SwipeButtonComp from '../Atoms/SwipeButton/SwipeButton'
import Toggle from '../Atoms/Toggle/Toggle'
import {
  ICON_CHECKLIST_GREEN,
  ICON_CONGRATULATIONS,
  ICON_PHONEBOOK_BLUE,
  ICON_RIGHT_ARROW_WHITE,
  ICON_SEARCH,
  ICON_SHARE,
  ICON_TIMER,
} from '../../constants/assets'
import ButtonBar from '../Molecules/ButtonBar/ButtonBar'
import SearchBar from '../Molecules/SearchBar/SearchBar'
import AccountSelection from '../Molecules/AccountSelection/AccountSelection'
import TextBox from '../Molecules/TextBox'

import NumericKeypad from '../Atoms/NumericPad/NumericPad'
import PayTo from '../Molecules/PayTo/PayTo'
import TotalBalance from '../Molecules/TotalBalance/TotalBalance'
import TransferStep1 from '../Molecules/TransferSteps/TransferStep1'
import Text from '../Atoms/Text/Text'
import RecipientDetail from '../Organisms/RecipientDetail/RecipientDetail'
import ContactDetails from '../Molecules/ContactDetails/ContactDetails'
import TransferSuccess from '../Molecules/TransferSuccess/TransferSuccess'
import MobileIcons from '../Organisms/Mobileicons/MobileIcons'
import InputFloatingLabel from '../Atoms/InputFloatingLabel/InputFloatingLabel'
import TacText from '../Atoms/TacText/TacText'
import SecurePhrase from '../Molecules/SecurePhrase/SecurePhrase'
import PopUp from '../Atoms/PopUp/PopUp'

const HomeScreen = () => {
  const [check, setCheck] = useState(false)
  const [check2, setCheck2] = useState(true)
  const [toggle, setToggle] = useState(false)
  const [toggle2, setToggle2] = useState(true)

  const [search, setSearch] = useState('')
  const [selectedTac, setSelectedTac] = useState(0)
  const [inputText, setInputText] = useState('')
  const [inputTextLabel, setInputTextLabel] = useState('')
  const [inputTextWithButton, setInputTextWithButton] = useState('')
  const contactData = [
    {
      name: 'Alvin Tan',
      phone: '+6011 23243164',
    },
    {
      name: 'Justin Julius',
      phone: '+6011 23243164',
    },
  ]

  const windowHeight = Dimensions.get('window').height

  return (
    <ScrollView style={{ maxHeight: '92%' }}>
      <Widgets />
      <Text className="text-black text-lg font-bold mx-2">QUICK ACCESS</Text>
      <QuickAccess />

      {/* ------------  PROCESSING POP-UP ------------ */}
      <View className="m-2.5" style={{ rowGap: 10 }}>
        <Text fontStyle="extra-bold" className="text-primary">
          PROCESSING POP-UP
        </Text>
        <View className="pt-10">
          <PopUp title='Pop- Up Title' message='Pop-Up Message' icon={ICON_TIMER} iconStyle={{width: 70, height: 70, top: -30}}  />
        </View>
      </View>

      {/* ------------  CONGRATULATIONS POP-UP ------------ */}
      <View className="m-2.5" style={{ rowGap: 10 }}>
        <Text fontStyle="extra-bold" className="text-primary">
          CONGRATULATIONS POP-UP
        </Text>
        <View className="pt-10">
          <PopUp title='Pop- Up Title' message='Pop-Up Message' icon={ICON_CONGRATULATIONS} iconStyle={{width: 105, height: 95, top: -45}} />
        </View>
      </View>

      {/* ------------  SECUREPHRASE ------------ */}
      <View className="m-2.5" style={{ rowGap: 10 }}>
        <Text fontStyle="extra-bold" className="text-primary">
          SECUREPHRASE
        </Text>
        <SecurePhrase />
      </View>

      {/* ------------  TEXT BOX WITH BUTTON ------------ */}
      <View className="m-2.5" style={{ rowGap: 10 }}>
        <Text fontStyle="extra-bold" className="text-primary">
          TEXT BOX WITH BUTTON
        </Text>
        <TextBox
          inputText={inputTextWithButton}
          setInputText={setInputTextWithButton}
          placeholder="Username"
        >
          <TouchableOpacity
            style={{
              backgroundColor: '#002659',
              height: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              width: 60,
              borderTopRightRadius: 8,
              borderBottomRightRadius: 8,
            }}
          >
            <Image
              style={{ height: 18 }}
              resizeMode="contain"
              source={ICON_RIGHT_ARROW_WHITE}
            />
          </TouchableOpacity>
        </TextBox>
      </View>

      {/* ------------  TAC TEXT ------------ */}
      <View className="m-2.5" style={{ rowGap: 10 }}>
        <Text fontStyle="extra-bold" className="text-primary">
          TAC TEXT FIELD
        </Text>
        <TacText
          totalRow={6}
          selectedRow={selectedTac}
          setSelectedRow={setSelectedTac}
        />
      </View>

      {/* ------------  TEXT BOX WITH/WITHOUT ICON ------------ */}
      <View className="m-2.5" style={{ rowGap: 10 }}>
        <Text fontStyle="extra-bold" className="text-primary">
          TEXT BOX WITH/WITHOUT ICON
        </Text>
        <TextBox inputText={inputText} setInputText={setInputText} />
        <TextBox
          inputText={inputText}
          setInputText={setInputText}
          icon={ICON_PHONEBOOK_BLUE}
          keyboardType="phone-pad"
        />
      </View>

      {/* ------------  FLOATING LABEL TEXT BOX ------------ */}
      <View className="m-2.5" style={{ rowGap: 10 }}>
        <Text fontStyle="extra-bold" className="text-primary">
          FLOATING LABEL TEXT BOX
        </Text>
        <InputFloatingLabel
          value={inputTextLabel}
          onChange={setInputTextLabel}
          label="Title"
        />
      </View>

      {/* ------------  PRIMARY BUTTON ------------ */}
      <View className="m-2.5" style={{ rowGap: 10 }}>
        <Text fontStyle="extra-bold" className="text-primary">
          PRIMARY BUTTON
        </Text>
        <Button
          label={'Button'}
          width={342}
          onPress={() => console.log('onpress')}
          type="primary"
          textColor="#FFFFFF"
        />
        <Button
          label={'Button'}
          onPress={() => console.log('onpress')}
          type="primary"
          width={147}
          textColor="#FFFFFF"
        />
      </View>

      {/* ------------  SECONDARY BUTTON 1 ------------ */}
      <View
        className="m-2.5"
        style={{ rowGap: 10, justifyContent: 'flex-start' }}
      >
        <Text fontStyle="extra-bold" className="text-primary">
          SECONDARY BUTTON 1
        </Text>
        <Button
          label={'Button'}
          width={342}
          onPress={() => console.log('onpress')}
          type="secondary"
        />
        <Button
          label={'Button'}
          onPress={() => console.log('onpress')}
          type="secondary"
          width={163}
        />
        <View style={{ width: 342 }}>
          <ButtonBar />
        </View>
        <View style={{ width: 342 }}>
          <ButtonBar toogle />
        </View>
      </View>

      {/* ------------  SECONDARY BUTTON 2 ------------ */}
      <View className="m-2.5" style={{ rowGap: 10 }}>
        <Text fontStyle="extra-bold" className="text-primary">
          SECONDARY BUTTON 2
        </Text>

        <Button
          label={'Button'}
          width={342}
          onPress={() => console.log('onpress')}
          type="secondary"
          outlined
        />
        <View style={{ flexDirection: 'row', columnGap: 8 }}>
          <Button
            label={'Button'}
            onPress={() => console.log('onpress')}
            type="secondary"
            width={163}
            outlined
          />
          <Button
            label={'Button'}
            onPress={() => console.log('onpress')}
            type="secondary"
            width={163}
            icon={ICON_SHARE}
            outlined
            justify="flex-start"
          />
        </View>
      </View>

      {/* ------------  DISABLE BUTTON ------------ */}
      <View className="m-2.5" style={{ rowGap: 10 }}>
        <Text fontStyle="extra-bold" className="text-primary">
          DISABLE BUTTON
        </Text>
        <Button
          label={'Button'}
          width={310}
          onPress={() => console.log('onpress')}
          type="primary"
          disabled
          textColor="#FFFFFF"
        />
        <Button
          label={'Button'}
          onPress={() => console.log('onpress')}
          type="primary"
          width={150}
          disabled
          textColor="#FFFFFF"
        />
      </View>

      {/* ------------  PRIMARY SWIPE BUTTON ------------ */}
      <View className="m-2.5" style={{ rowGap: 10 }}>
        <Text fontStyle="extra-bold" className="text-primary">
          PRIMARY SWIPE BUTTON
        </Text>
        <View className="w-[310px]">
          <SwipeButtonComp />
        </View>
      </View>

      {/* ------------  CHECK BOX ------------ */}
      <View className="m-2.5" style={{ rowGap: 10 }}>
        <Text fontStyle="extra-bold" className="text-primary">
          CHECK BOX
        </Text>
        <View style={{ flexDirection: 'row', margin: 10, gap: 10 }}>
          <Checkbox value={check} onValueChange={setCheck} />
          <Checkbox value={check2} onValueChange={setCheck2} />
        </View>
      </View>

      {/* ------------  TOGGLE BUTTON ------------ */}
      <View className="m-2.5" style={{ rowGap: 10 }}>
        <Text fontStyle="extra-bold" className="text-primary">
          TOGGLE BUTTON
        </Text>
        <View style={{ flexDirection: 'row' }}>
          <Toggle value={toggle} onValueChange={setToggle} />
          <Toggle value={toggle2} onValueChange={setToggle2} />
        </View>
      </View>

      {/* ------------  SEARCH BAR ------------ */}
      <View className="m-2.5" style={{ rowGap: 10 }}>
        <Text fontStyle="extra-bold" className="text-primary">
          SEARCH BAR
        </Text>
        <SearchBar icon={ICON_SEARCH} value={search} setValue={setSearch} />
      </View>

      {/* ------------  ACCOUNT SELECTION ------------ */}
      <View className="m-2.5" style={{ rowGap: 10 }}>
        <Text fontStyle="extra-bold" className="text-primary">
          ACCOUNT SELECTION
        </Text>
        <AccountSelection
          title="SavePlus-i"
          subtitle="5555 2121 3456 7891"
          amount="RM 14,725.00"
        />
        <AccountSelection
          title="SavePlus-i"
          subtitle="5555 2121 3456 7891"
          amount="RM 14,725.00"
          icon={ICON_CHECKLIST_GREEN}
        />
      </View>

      {/* ------------  KEYPAD ------------ */}
      <View className="m-2.5" style={{ rowGap: 10 }}>
        <Text fontStyle="extra-bold" className="text-primary">
          KEYPAD
        </Text>
        <NumericKeypad />
      </View>

      {/* ------------  TRANSFER STEPS FRAME ------------ */}
      <View className="mt-10">
        <Text fontStyle="extra-bold" className="text-primary ml-5">
          TRANSFER STEPS FRAME
        </Text>
        <View style={{ height: windowHeight, padding: 8 }}>
          <TransferStep1 />
        </View>
      </View>

      <View style={{ padding: 16 }}>
        <MobileIcons />
      </View>

      {/* ------------  PAY TO ------------ */}
      <View className="mt-5">
        <Text fontStyle="extra-bold" className="text-primary ml-5">
          PAY TO
        </Text>
        <PayTo />
      </View>

      {/* ------------  BALANCE ------------ */}
      <View className="mt-5">
        <Text fontStyle="extra-bold" className="text-primary ml-5">
          BALANCE
        </Text>
        <TotalBalance />
      </View>

      {/* ------------  REFERENCE LIST ------------ */}
      <View className="mt-10">
        <RecipientDetail />
      </View>

      {/* ------------  CONTACT LIST ------------ */}
      <View className="m-5">
        <Text className="text-primary text-xl" fontStyle="extra-bold">
          CONTACT LIST
        </Text>
        <View
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.50)',
            borderRadius: 8,
            flexDirection: 'column',
            rowGap: 16,
            padding: 16,
            width: 310,
          }}
        >
          {contactData.map((contact, idx) => {
            return (
              <ContactDetails
                key={idx}
                name={contact.name}
                phone={contact.phone}
              />
            )
          })}
        </View>
      </View>

      {/* ------------  ALERT MESSAGE ------------ */}
      <View className="mt-5 pb-10">
        <TransferSuccess />
      </View>
    </ScrollView>
  )
}

export default HomeScreen
