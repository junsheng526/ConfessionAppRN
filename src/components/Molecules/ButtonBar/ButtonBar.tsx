import React, { useState } from 'react'
import Button from '../../Atoms/Button/Button'
import { ICON_STAR_OUTLINE } from '../../../constants/assets'
import { StyleSheet, View } from 'react-native'
import Toggle from '../../Atoms/Toggle/Toggle'

type ButtonBarProps = {
  toogle?: boolean
}

const ButtonBar = ({ toogle }: ButtonBarProps) => {
  const [toggleValue, setToggleValue] = useState(false)
  return (
    <View style={styles.container}>
      <Button label={'Button'} icon={ICON_STAR_OUTLINE} />
      {toogle && <Toggle value={toggleValue} onValueChange={setToggleValue} />}
    </View>
  )
}

export default ButtonBar

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    height: 55,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 8,
  },
})
