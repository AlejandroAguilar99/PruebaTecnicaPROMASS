import React from 'react'
import { TouchableOpacity } from 'react-native'
import { FontAwesomeIcon } from '../icons/FontAwesomeIcon'
import { Colors } from '../../styles/Colors'

interface Props {
    icon?: string;
    disabled?: boolean;
    onPress: () => void;
}

export const FloatingButton = ({
    icon = 'plus',
    disabled,
    onPress
}: Props) => {
    //Component
    return (
        <TouchableOpacity
            disabled={disabled}
            style={{
                borderWidth: 1,
                alignItems: 'center',
                justifyContent: 'center',
                width: 70,
                position: 'absolute',
                bottom: 10,
                right: 10,
                height: 70,
                backgroundColor: Colors.primary,
                borderRadius: 100,
            }}
            onPress={onPress}
        >
            <FontAwesomeIcon name={icon} size={30} color={Colors.secondary} />
        </TouchableOpacity>
    )
}
