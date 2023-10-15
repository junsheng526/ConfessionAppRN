import React, { useEffect, useState, useRef, MutableRefObject } from 'react'
import { View, StyleSheet, TextInput, Text, Animated } from 'react-native'
import { InputProps } from '..'

const InputFloatingLabel = (props: InputProps) => {
  const { label, value, onChange } = props
  const moveText = useRef(new Animated.Value(0)).current
  const inputRef = useRef<TextInput>(null)

  useEffect(() => {
    if (value !== '') {
      moveTextTop()
    } else if (value === '') {
      moveTextBottom()
    }
  }, [value])

  const onFocusHandler = () => {
    if (value !== '') {
      moveTextTop()
    }
  }

  const onBlurHandler = () => {
    if (value === '') {
      moveTextBottom()
    }
  }

  const moveTextTop = () => {
    Animated.timing(moveText, {
      toValue: 1.2,
      duration: 30,
      useNativeDriver: true,
    }).start()
  }

  const moveTextBottom = () => {
    Animated.timing(moveText, {
      toValue: 0,
      duration: 50,
      useNativeDriver: true,
    }).start()
  }

  const yVal = moveText.interpolate({
    inputRange: [0, 1],
    outputRange: [4, -10],
  })

  const animStyle = {
    transform: [
      {
        translateY: yVal,
      },
    ],
  }

  return (
    <View style={styles.container}>
      <TextInput
        ref={inputRef}
        autoCapitalize={'none'}
        style={styles.input}
        value={value}
        onChangeText={(text: string) => onChange(text)}
        onFocus={onFocusHandler}
        onBlur={onBlurHandler}
        blurOnSubmit
      />
      <Animated.View
        style={[styles.animatedStyle, animStyle]}
        onTouchEnd={() => inputRef.current?.focus()}
      >
        <Text style={styles.label}>{label}</Text>
      </Animated.View>
    </View>
  )
}
export default InputFloatingLabel

const styles = StyleSheet.create({
  container: {
    paddingTop: 8,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    height: 64,
    borderRadius: 8,
    width: 310,
  },
  input: {
    fontSize: 14,
    height: '100%',
    color: '#002659',
    fontFamily: 'Alliance-Bold',
  },
  label: {
    color: '#666666',
    fontSize: 12,
    fontFamily: 'Alliance-Medium',
    fontWeight: '500',
  },
  animatedStyle: {
    top: 20,
    left: 18,
    position: 'absolute',
    borderRadius: 90,
    zIndex: 10000,
  },
})
