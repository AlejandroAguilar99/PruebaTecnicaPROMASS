import { StyleProp, Text, TextStyle } from "react-native"
import { Colors } from "../../styles/Colors";
import { Fonts } from "../../styles/Fonts";

interface Props {
    value?: any;
    color?: string;
    size?: number;
    hidden?: boolean;
    numberOfLines?: number;
    bold?: boolean;
    style?: StyleProp<TextStyle>;
}

export const LabelText = ({
    value,
    hidden,
    color,
    size,
    bold,
    numberOfLines,
    style,
}: Props) => {
    
    // Computed
    const textStyle: StyleProp<TextStyle> = {
        color: color || Colors.text,
        fontSize: size || Fonts.normal,
        fontWeight: bold ? "bold" : undefined,
    };

    // Component
    if (hidden || value == undefined || value == null) return <></>;
    return (
        <Text
            style={[textStyle, style]}
            numberOfLines={numberOfLines}
        >
            {value}
        </Text>
    );
}