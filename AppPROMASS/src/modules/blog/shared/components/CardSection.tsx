import React from 'react'
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { FontAwesomeIcon } from '../../../../app/components/icons/FontAwesomeIcon';
import { LabelText } from '../../../../app/components/text/LabelText';
import { Fonts } from '../../../../app/styles/Fonts';
import { Colors } from '../../../../app/styles/Colors';

interface Props {
    title: string;
    text?: string;
    icon: string;
    color?: string;
    style?: StyleProp<ViewStyle>
}

export const CardSection = ({
    title,
    text,
    icon,
    color = 'black',
    style
}: Props) => {
    return (
        <View style={[sty.container,style]}>
            <View style={sty.content}>
                <FontAwesomeIcon name={icon} size={Fonts.small} color={color} solid />
                <LabelText
                    value={text}
                    style={[sty.title, { color }]}
                />
                <LabelText
                    value={title}
                    style={[sty.title, { color }]}
                />
            </View>
        </View>
    )
}


const sty = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 4,
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    title: {
        marginLeft: 4,
        fontSize: Fonts.small,
    },
});