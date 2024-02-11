import React from "react";
import { StyleProp, StyleSheet, Text, TextStyle, TouchableOpacity, ViewStyle } from "react-native";
import { ShowCmp } from "../cmp/ShowCmp";
import { FontAwesomeIcon } from '../icons/FontAwesomeIcon';


interface Props {
    icon: string,
    title?: string,
    disabled?: boolean,
    activeOpacity?: number,
    color?: string,
    solid?: boolean,
    style?: {
        container?: StyleProp<ViewStyle>,
        icon?: StyleProp<TextStyle>,
        title?: StyleProp<TextStyle>,
        // title?: StyleProp<TextStyle>,
    },
    onPress?: () => void,
};

export const IconButton = ({
    icon,
    title,
    disabled = false,
    activeOpacity = 0.6,
    color = "black",
    solid = false,
    style = {},
    onPress,
}: Props) => {
    // Computed
    const opacity = disabled ? 0.4 : 1.0;

    // Component
    return (
        <TouchableOpacity
            style={[sty.container, style.container, { opacity }]}
            disabled={disabled}
            activeOpacity={activeOpacity}
            onPress={onPress}
        >
            <FontAwesomeIcon
                name={icon}
                style={[sty.icon, { color }, style.icon]}
                solid={solid}
            />
            <ShowCmp value={title}>
                <Text style={[sty.title, { color }, style.title]}>{title}</Text>
            </ShowCmp>
        </TouchableOpacity>
    );
}

const sty = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        paddingHorizontal: 4,
    },
    icon: {
        color: 'black',
        fontSize: 20,
    },
});