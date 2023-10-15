import { useRef, useState } from 'react'
import {
  StyleSheet,
  View,
  Dimensions,
  Image,
  Pressable,
  TouchableOpacity,
} from 'react-native'
import NumericPad from 'react-native-numeric-pad'
import {
  ICON_ARROW_LEFT_CIRCLE,
  ICON_CHECKLIST_KEYPAD,
} from '../../../constants/assets'
import Text from '../Text/Text'

type NumericKeypadProps = {
  setInput: (val: string) => void
  openKeyboard: boolean
}

const RightBottom = () => {
  return (
    <Image style={{ width: 70, height: 70 }} source={ICON_CHECKLIST_KEYPAD} />
  )
}

const LeftBottom = () => {
  return (
    <Image style={{ width: 25, height: 25 }} source={ICON_ARROW_LEFT_CIRCLE} />
  )
}

const NumericKeypad = () => {
  const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, , 'left', 0, 'right']
  const [value, setValue] = useState('8.00')

  const deleteValue = () => {
    setValue(value.slice(0, -1))
  }

  const doneValue = () => {
    setValue('0')
  }

  const onSelectNumber = (numbSelected: any) => {
    if (numbSelected === 'left') {
      deleteValue()
    } else if (numbSelected === 'right') {
      doneValue()
    } else {
      setValue((prevCount) => prevCount + numbSelected.toString())
    }
  }

  return (
    <View>
      <View style={styles.valueContainer}>
        <Text style={styles.textContainer}>
          RM <Text style={styles.textValue}>{value}</Text>
        </Text>
      </View>
      <View style={styles.keypadContainer}>
        {number.map((numb, idx) => {
          return (
            <TouchableOpacity
              key={idx}
              style={styles.containerText}
              onPress={() => onSelectNumber(numb)}
            >
              {numb === 'right' ? (
                <RightBottom />
              ) : numb === 'left' ? (
                <LeftBottom />
              ) : (
                <Text style={styles.btnTextStyle}>{numb}</Text>
              )}
            </TouchableOpacity>
          )
        })}
      </View>
    </View>
  )
}

export default NumericKeypad

export const styles = StyleSheet.create({
  valueContainer: {
    width: '100%',
    textAlign: 'center',
  },
  textContainer: {
    textAlign: 'center',
    color: '#002659',
    fontSize: 40,
    marginBottom: 10,
    fontFamily: 'Alliance-Medium',
  },
  textValue: {
    color: '#002659',
    fontFamily: 'Alliance-ExtraBold',
  },
  keypadContainer: {
    flexDirection: 'row',
    flexGrow: 1,
    flexWrap: 'wrap',
    gap: 32,
    marginHorizontal: 32,
    justifyContent: 'center',
  },
  keypad: {
    color: 'red',
  },
  containerText: {
    backgroundColor: '#FFFFFF',
    borderRadius: 100,
    width: 70,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnTextStyle: {
    color: '#002659',
    fontSize: 32,
    fontFamily: 'Alliance-Bold',
  },
})
