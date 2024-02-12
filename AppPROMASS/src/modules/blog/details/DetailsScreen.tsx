import React from 'react'
import { ViewContainer } from '../../../app/components/layouts/ViewContainer'
import { StyleSheet, View } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import { StackParamList } from '../../../routes/StackNavigator'
import { LabelText } from '../../../app/components/text/LabelText'
import { Colors } from '../../../app/styles/Colors'
import { CardSection } from '../shared/components/CardSection'
import dayjs from 'dayjs'
import { globalSty } from '../../../app/styles/GlobalStyles'

interface Props extends StackScreenProps<StackParamList, 'Details'> { };

export const DetailsScreen = ({ route }: Props) => {
    //Hooks
    //Computed
    const { item } = route.params;
    //Methods

    //Component
    return (
        <ViewContainer title={item.Titulo} goBack>
            <View style={sty.container}>
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
            </View>
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