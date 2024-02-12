import React from "react";
import { ActivityIndicator, StyleProp, StyleSheet, Text, TextStyle, View, ViewStyle } from "react-native";
import { ShowCmp } from "./cmp/ShowCmp";


interface Props{
    show?: boolean,
    title?: string,
    color?: string,
    bgColor?: string,
    style?: {
        container?: StyleProp<ViewStyle>,
        title?: StyleProp<TextStyle>,
    }
};

export const LoadingContent = ({
    show=true,
    title,
    color,
    bgColor,
    style={},
}:Props) => {
    // Functions
    const getColor = ():StyleProp<TextStyle> => ({color: color || 'black'});
    const getBgColor = ():StyleProp<ViewStyle> => ({backgroundColor: bgColor});

    // Component
    if(!show) return <></>;
    return (
        <View style={[sty.container, getBgColor(), style.container]}>
            <ActivityIndicator
                color={color || 'black'}
                size={24}
            />
            {/* Title */}
            <ShowCmp value={title}>
                <Text style={[sty.title, getColor(), style.title]}>{title}</Text>
            </ShowCmp>
        </View>
    );
}

const sty = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: 'black',
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold',
    },
});