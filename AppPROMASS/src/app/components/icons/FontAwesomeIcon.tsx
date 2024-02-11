import React from "react";
import { StyleProp, TextStyle } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';


interface Props{
    name: string,
    color?: string,
    size?: number,
    solid?: boolean,
    brand?: boolean,
    style?: StyleProp<TextStyle>,
}

export const FontAwesomeIcon = ({
    name,
    color="black",
    size=14,
    solid,
    brand,
    style,
}:Props) => {
    //Component
    return (
        <Icon 
            name={name}
            color={color}
            size={size}
            solid={solid}
            brand={brand}
            style={style}
        /> 
    );
}