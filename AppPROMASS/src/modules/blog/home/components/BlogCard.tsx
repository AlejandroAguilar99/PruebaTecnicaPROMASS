import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "../../../../app/styles/Colors";
import { FontAwesomeIcon } from "../../../../app/components/icons/FontAwesomeIcon";
import { Entradas } from "../../../../api/entradas/interface/Entradas.interfaces";
import { CardSection } from "../../shared/components/CardSection";
import { StackNavigation } from "../../../../routes/StackNavigator";

interface Props {
    item: Entradas
}

export const BlogCard = ({
    item,
}: Props) => {
    // Hooks
    const navigation = useNavigation<StackNavigation>();
    // Computed

    // Functions
    const onPress = () => {
        navigation.navigate("Details", {
            item
        });
    }

    // Component
    return (
        <TouchableOpacity
            activeOpacity={0.6}
            onPress={onPress}
        >
            <View style={sty.container}>
                <CardSection
                    title={item.Titulo}
                    icon="quote-left"
                    color={Colors.primary}
                />
                <CardSection
                    title={item.Autor}
                    text="Creado por"
                    icon="user-edit"
                    color={Colors.primary}
                />
                <CardSection
                    title={item.Fecha}
                    icon="calendar"
                    color={Colors.primary}
                />
                <CardSection
                    title={`${item.Contenido.substring(0, 70)}...`}
                    icon="align-left"
                    color={Colors.primary}
                />
            </View>
        </TouchableOpacity>
    );
}

const sty = StyleSheet.create({
    container: {
        backgroundColor: Colors.lightYellow,
        marginBottom: 14,
        paddingVertical: 8,
        paddingHorizontal: 10,
        borderRadius: 6,
        borderLeftWidth: 14,
        borderLeftColor: Colors.secondary,
    },
    header: {
        paddingTop: 10,
        paddingHorizontal: 8,
        marginRight: 8,
    },
    title: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 6,
    },
});