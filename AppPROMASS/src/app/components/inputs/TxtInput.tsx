import React from 'react'
import { StyleProp, StyleSheet, TextInput, TextStyle } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Fonts } from '../../styles/Fonts';
import responsiveDimensions from '../../styles/ResponsiveDimensions';

interface Props {
    value: string;
    placeholder?: string;
    onChangeValue: (value: string) => void;
    style?: StyleProp<TextStyle>
}

export const TxtInput = ({
    value = '',
    placeholder,
    onChangeValue,
    style
}: Props) => {
    //Component
    return (
        <TextInput
            value={value}
            placeholder={placeholder}
            onChangeText={onChangeValue}
            style={[sty.textInput, style]}
        />
    )
}

const sty = StyleSheet.create({
    textInput: {
        alignSelf: 'center',
        backgroundColor: Colors.light,
        borderRadius: 20,
        fontSize: Fonts.small,
        padding: 10,
        width: responsiveDimensions.width * .80,
        margin: 10
    },
});