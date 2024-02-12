import React, { useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import { Colors } from '../../app/styles/Colors';
import { NotchTop } from '../../app/components/layouts/NotchTop';
import { HeaderSection } from './components/HeaderSection';
import { InputsSection } from './components/InputsSection';

export const LoginScreen = () => {

    //Component
    return (
        <View style={sty.container}>
            <NotchTop />
            <HeaderSection />
            <InputsSection />
        </View>
    )
}

const sty = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primary,
    },
});