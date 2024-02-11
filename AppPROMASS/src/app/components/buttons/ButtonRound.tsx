import { StyleSheet, StyleProp, ViewStyle, TextStyle } from 'react-native';
import { Colors } from '../../styles/Colors';
import { BasicButton } from './BasicButton';


interface Props{
    title:      string,
    type?:      "primary" | "secondary" | "transparent",
    disabled?:  boolean;
    style?: {
        container?: StyleProp<ViewStyle>,
        title?: StyleProp<TextStyle>,
    },
    onPress?:   () => void,
}
export const ButtonRound = ({
    title,
    type = "primary",
    disabled,
    style={},
    onPress,
}:Props) => {
    // Methods
    const getStyle = ():StyleProp<ViewStyle> => {
        switch (type) {
            case "primary": return { backgroundColor: Colors.secondary };
            case "secondary": return { backgroundColor: Colors.info };
            default: return {
                backgroundColor: undefined,
                borderWidth: 1,
                borderColor: Colors.text,
            };
        }
    }

    // Component
    return (
        <BasicButton
            title={ title }
            onPress={onPress}
            disabled={disabled}
            style={{
                container: [sty.button, getStyle(), style.container],
                title: [style.title]
            }}
        />
    );
}

const sty = StyleSheet.create({
    button: {
        borderRadius: 16,
        paddingVertical: 8,
        // width: '100%',
    },
});