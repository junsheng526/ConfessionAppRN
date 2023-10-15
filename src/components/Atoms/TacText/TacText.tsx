import { Touchable, TouchableOpacity, View } from 'react-native'

type TacTextProps = {
  totalRow: number
  selectedRow: number
  setSelectedRow: (val: number) => void
}

const TacText = ({ totalRow, selectedRow, setSelectedRow }: TacTextProps) => {
  return (
    <View style={{ margin: 25, flexDirection: 'row', columnGap: 8 }}>
      {Array.from(Array(totalRow), (e, i) => {
        return (
          <TouchableOpacity
            key={i}
            style={{
              width: 40,
              borderBottomColor: selectedRow === i ? '#002659' : '#FFFFFF',
              borderBottomWidth: 2,
            }}
            onPress={() => setSelectedRow(i)}
          ></TouchableOpacity>
        )
      })}
    </View>
  )
}

export default TacText
