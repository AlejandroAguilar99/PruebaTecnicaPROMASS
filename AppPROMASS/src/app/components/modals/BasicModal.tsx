import React from "react";
import { Modal, StyleProp, StyleSheet, TextStyle, TouchableOpacity, View, ViewStyle } from "react-native";
import { Colors } from "../../styles/Colors";


interface Props {
    show: boolean,
    autoClose?: boolean,
    children: JSX.Element,
    onClose: () => void,
    style?: {
        bgColor?: string,
        container?: StyleProp<ViewStyle>,
    },
}

export const BasicModal = ({
    show,
    autoClose = true,
    children,
    style = {},
    onClose,
}: Props) => {
    // Functions
    const onPressDeathArea = () => {
        if (!autoClose) return;
        onClose();
    }

    // Component
    return (
        <Modal
            visible={show}
            animationType={"slide"}
            transparent={true}
        >
            <TouchableOpacity
                style={{ flex: 1 }}
                activeOpacity={1}
                onPress={onPressDeathArea}
            >
                <View style={sty.container}>
                    <View style={[sty.content, style.container]}>
                        {children}
                    </View>
                </View>
            </TouchableOpacity>
        </Modal>
    );
}

const sty = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.6)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        width: '90%',
        backgroundColor: Colors.primary,
        borderRadius: 20,
        paddingHorizontal: 50,
        paddingVertical: 50,
        overflow: 'hidden',
    },
    title: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
    },
    description: {
        color: 'black',
        fontSize: 14,
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 6,
    },
    button: {
        backgroundColor: 'transparent',
        borderRadius: 4,
    },
    buttonTitle: {
        color: 'black',
        fontWeight: 'bold',
    },
});