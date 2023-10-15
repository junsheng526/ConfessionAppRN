import { StyleSheet, View } from 'react-native'
import Text from '../Text/Text'

type NumberingProps = {
   children?: React.ReactNode
}

const Numbering = ({ children }: NumberingProps) => {
  return (
    <View style={styles.icon}>
        {children}
    </View>
  )
}

export default Numbering

export const styles = StyleSheet.create({
  icon: {
    backgroundColor: '#002659',
    width: 25,
    height: 25,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
