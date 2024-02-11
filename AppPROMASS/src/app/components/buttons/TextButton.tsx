import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Colors } from "../../styles/Colors";
import { Fonts } from "../../styles/Fonts";
import { LabelText } from "../text/LabelText";

interface Props {
    title: string,
    onPress?: () => void,
}

export const TextButton = ({
    title,
    onPress,
}: Props) => {
    if (!title) return <></>;

    // Component
    return (
        <TouchableOpacity
            activeOpacity={0.6}
            onPress={onPress}
        >
            <View style={sty.container}>
                <LabelText
                    value={title}
                    style={sty.text}
                />
            </View>
        </TouchableOpacity>
    );
}

const sty = StyleSheet.create({
    container: {
        margin: 10,
        flexGrow: 1,
    },
    text: {
        color: Colors.info,
        fontSize: Fonts.small,
        textAlign: 'center',
    },
});