import React from 'react'
import { Text as RNText, StyleSheet } from 'react-native'
import { IText } from '..'

const Text = ({ text, children, style, fontStyle, color }: IText) => {
  return (
    <RNText
      style={[
        {
          letterSpacing: 0.5,
          fontFamily:
            fontStyle === 'extra-bold'
              ? 'Alliance-ExtraBold'
              : fontStyle === 'bold'
              ? 'Alliance-Bold'
              : 'Alliance-Medium',
        },
        style,
      ]}
    >
      {text}
      {children}
    </RNText>
  )
}

export default Text

