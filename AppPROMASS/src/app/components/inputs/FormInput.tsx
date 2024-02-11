import React, { useState } from 'react'
import { StyleSheet, TextInput } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Fonts } from '../../styles/Fonts';
import responsiveDimensions from '../../styles/ResponsiveDimensions';

interface Props {
  value: string;
  placeholder?: string;
  onChangeValue: (value: string) => void;
}

export const FormInput = ({
  value,
  placeholder,
  onChangeValue
}: Props) => {
  //Component
  return (
    <TextInput
      value={value}
      onChangeText={onChangeValue}
      placeholder={placeholder}
      multiline={true}
      numberOfLines={10}
      style={sty.textInput} />
  )
}

const sty = StyleSheet.create({
  textInput: {
    backgroundColor: Colors.light,
    borderRadius: 20,
    fontSize: Fonts.small,
    padding: 10,
    margin:10,
    width: responsiveDimensions.width * .80,
    height: 200,
    textAlignVertical: 'top',
    alignSelf: 'center'
  },
});