import React from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'
import { globalSty } from '../../../app/styles/GlobalStyles'
import { LabelText } from '../../../app/components/text/LabelText'
import { Fonts } from '../../../app/styles/Fonts'
import { Colors } from '../../../app/styles/Colors'

export const HeaderSection = () => {
    return (
        <SafeAreaView style={globalSty.flex}>
            <View style={sty.header}>
                <LabelText
                    value='Bienvenido'
                    style={sty.title}
                />
            </View>
        </SafeAreaView>
    )
}

const sty = StyleSheet.create({
    header: {
        flex: 1,
        justifyContent: 'space-around',
    },
    title: {
        fontSize: Fonts.verybig,
        fontWeight: 'bold',
        color: Colors.text,
        textAlign: 'center'
    },
});