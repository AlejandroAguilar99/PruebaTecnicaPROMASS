import React, { useState } from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { BasicButton } from '../../../app/components/buttons/BasicButton'
import { TextButton } from '../../../app/components/buttons/TextButton'
import { Colors } from '../../../app/styles/Colors'
import { Fonts } from '../../../app/styles/Fonts'
import responsiveDimensions from '../../../app/styles/ResponsiveDimensions'
import { LabelText } from '../../../app/components/text/LabelText'
import { useNavigation } from '@react-navigation/native'
import { StackNavigation } from '../../../routes/StackNavigator'
import { TxtInput } from '../../../app/components/inputs/TxtInput'
import { useStoreMethods } from '../../root/hooks/useStoreMethods'

export const InputsSection = () => {
    //Hooks
    const navigation = useNavigation<StackNavigation>();
    const { storeAutorName } = useStoreMethods();

    //State
    const [text, onChangeText] = useState('');

    //Methods
    const onSaveName = async () => {
        await storeAutorName(text);
        navigation.navigate('Blog')
    }

    //Component
    return (
        <View style={sty.container}>
            <View style={sty.content}>
                <TxtInput
                    value={text}
                    placeholder='Ingrese su nombre'
                    onChangeValue={onChangeText}
                />
                <LabelText
                    value='Será utilizado para firmar las entradas que realice'
                    style={sty.descriptionText}
                />
            </View>
            <View >
                <BasicButton
                    title='Empezar'
                    onPress={onSaveName}
                />
                <TextButton
                    title='Ingresar sin nombre de autor'
                    onPress={() => navigation.navigate('Blog')}
                />
            </View>
        </View>
    )
}

const sty = StyleSheet.create({
    container: {
        flex: 2,
        backgroundColor: 'white',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        justifyContent: 'space-evenly'
    },
    content: {
        alignItems: 'center',
    },
    descriptionText: {
        color: Colors.inputText,
        fontSize: Fonts.small,
        textAlign: 'center',
        marginTop: 20,
        marginHorizontal: responsiveDimensions.width * .10
    }
});