import React from 'react'
import { ViewContainer } from '../../../app/components/layouts/ViewContainer'
import { ScrollView, StyleSheet, View } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import { StackParamList } from '../../../routes/StackNavigator'
import { LabelText } from '../../../app/components/text/LabelText'
import { Colors } from '../../../app/styles/Colors'
import { CardSection } from '../shared/components/CardSection'
import dayjs from 'dayjs'
import { globalSty } from '../../../app/styles/GlobalStyles'
import { FloatingButton } from '../../../app/components/buttons/FloatingButton'
import { useOfflineMethods } from '../shared/hooks/useOfflineMethods';

interface Props extends StackScreenProps<StackParamList, 'Details'> { };

export const DetailsScreen = ({ route }: Props) => {
    //Hooks
    const { saveEntrada } = useOfflineMethods();
    //Computed
    const { item } = route.params;
    //Methods

    //Component
    return (
        <ViewContainer title={item.Titulo} goBack>
            <ScrollView style={sty.container}>
                <CardSection
                    icon='calendar'
                    title={dayjs(item.Fecha).format('DD/MM/YYYY')}
                    style={sty.components}
                />
                <LabelText
                    value={`Escrito por ${item.Autor}`}
                    color={Colors.gray}
                    style={sty.components}
                />
                <View style={globalSty.separator} />
                <LabelText
                    value={item.Contenido}
                    color={Colors.inputText}
                    style={sty.content}
                />
            </ScrollView>
            <FloatingButton
                onPress={() => saveEntrada(item)}
                icon='save'
            />
        </ViewContainer>
    )
}

const sty = StyleSheet.create({
    container: {
        padding: 20
    },
    components: {
        alignSelf: 'center'
    },
    content: {
        lineHeight: 40,
    }
});