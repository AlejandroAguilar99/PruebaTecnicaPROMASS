import React from "react";
import {
    StyleProp, StyleSheet, Text, TextStyle,
    TouchableOpacity, ViewStyle,
} from "react-native";
import { ShowCmp } from "../cmp/ShowCmp";
import { FontAwesomeIcon } from "../icons/FontAwesomeIcon";
import { Colors } from "../../styles/Colors";
import { Fonts } from "../../styles/Fonts";
import { LabelText } from "../text/LabelText";
import responsiveDimensions from "../../styles/ResponsiveDimensions";

interface Props {
    title: string,
    onPress?: () => void | Promise<void>,
    disabled?: boolean,
    // Secondary
    activeOpacity?: number,
    icon?: {
        name?: string,
        color?: string,
    },
    style?: {
        container?: StyleProp<ViewStyle>,
        title?: StyleProp<TextStyle>,
        icon?: StyleProp<TextStyle>,
    }
};

export const BasicButton = ({
    title,
    onPress,
    disabled = false,
    activeOpacity = 0.6,
    icon = {},
    style = {},
}: Props) => {

    // Methods
    const getOpacity = () => {
        if (disabled) return 0.4;
        return 1.0;
    }

    const onPressButton = async () => {
        if (onPress) await onPress();
    }


    //Component
    return (
        <TouchableOpacity
            activeOpacity={activeOpacity}
            disabled={disabled}
            onPress={onPressButton}
            style={[sty.container, style.container, { opacity: getOpacity() }]}
        >
            <ShowCmp value={icon.name}>
                <FontAwesomeIcon
                    name={icon.name || 'help-circle'}
                    color={icon.color || 'white'}
                    style={[sty.icon, style.icon]}
                />
            </ShowCmp>
            <LabelText
                value={title}
                style={[sty.title, style.title]}
            />
        </TouchableOpacity>
    )
}


const sty = StyleSheet.create({
    container: {
        backgroundColor: Colors.secondary,
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf:'center',
        paddingHorizontal: 12,
        paddingVertical: 4,
        width: 250
    },
    activity: {
        paddingHorizontal: 4,
    },
    icon: {
        fontSize: 14,
        color: Colors.inputText,
    },
    title: {
        color: Colors.inputText,
        fontWeight: 'bold',
        fontSize: Fonts.normal,
        paddingHorizontal: 6,
        textAlign:'center'
    },
});