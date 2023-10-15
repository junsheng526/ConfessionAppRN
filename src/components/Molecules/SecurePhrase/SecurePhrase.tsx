import { View } from 'react-native'
import Button from '../../Atoms/Button/Button'
import { useState } from 'react'

const SecurePhrase = () => {
  const [selectedButton, setSelectedButton] = useState(1)

  return (
    <View className="m-2.5">
      <Button
        label={'Securephrase'}
        width={325}
        bgColor="#46A1BE"
        textColor="#FFFFFF"
      />
      <View style={{ flexDirection: 'row', columnGap: 8, marginTop: 24 }}>
        <Button
          label={'Yes'}
          width={158}
          onPress={() => console.log('onpress')}
          bgColor={
            selectedButton === 2 ? '#FFFFFF' : 'rgba(255, 255, 255, 0.33)'
          }
          outlined
          borderColor="#FFFFFF"
        />
        <Button
          label={'No'}
          width={158}
          onPress={() => console.log('onpress')}
          bgColor={
            selectedButton === 2 ? '#FFFFFF' : 'rgba(255, 255, 255, 0.33)'
          }
          outlined
          borderColor="#FFFFFF"
        />
      </View>
      <View style={{ flexDirection: 'row', columnGap: 8, marginTop: 30 }}>
        <Button
          label={'Yes'}
          width={158}
          onPress={() => console.log('onpress')}
          bgColor={
            selectedButton === 2 ? '#FFFFFF' : 'rgba(255, 255, 255, 0.33)'
          }
          outlined
          borderColor="#FFFFFF"
        />
        <Button
          label={'No'}
          width={158}
          onPress={() => console.log('onpress')}
          bgColor={
            selectedButton === 1 ? '#FFFFFF' : 'rgba(255, 255, 255, 0.33)'
          }
          outlined
          borderColor="#FFFFFF"
        />
      </View>
      <View style={{ flexDirection: 'row', columnGap: 8, marginTop: 30 }}>
        <Button
          label={'Yes'}
          width={158}
          onPress={() => console.log('onpress')}
          bgColor={
            selectedButton === 1 ? '#FFFFFF' : 'rgba(255, 255, 255, 0.33)'
          }
          outlined
          borderColor="#FFFFFF"
        />
        <Button
          label={'No'}
          width={158}
          onPress={() => console.log('onpress')}
          bgColor="rgba(255, 255, 255, 0.33)"
          outlined
          borderColor="#FFFFFF"
        />
      </View>
    </View>
  )
}

export default SecurePhrase
