import React from 'react'
import { StyleSheet, TextInput } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Fonts } from '../../styles/Fonts';
import responsiveDimensions from '../../styles/ResponsiveDimensions';

interface Props {
    value: string;
    placeholder?:string;
    onChangeValue: (value: string) => void;
}

export const TxtInput = ({
    value = '',
    placeholder,
    onChangeValue
}: Props) => {
    //Component
    return (
        <TextInput
            value={value}
            placeholder={placeholder}
            onChangeText={onChangeValue}
            style={sty.textInput}
        />
    )
}

const sty = StyleSheet.create({
    textInput: {
        alignSelf:'center',
        backgroundColor: Colors.light,
        borderRadius: 20,
        fontSize: Fonts.small,
        padding: 10,
        width: responsiveDimensions.width * .80,
        margin:10
    },
});