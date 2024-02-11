import React from 'react'
import { TouchableOpacity } from 'react-native'
import { FontAwesomeIcon } from '../icons/FontAwesomeIcon'
import { Colors } from '../../styles/Colors'

interface Props {
    onPress: () => void;
}

export const FloatingButton = ({ onPress }: Props) => {
    //Component
    return (
        <TouchableOpacity
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
            <FontAwesomeIcon name='plus' size={30} color={Colors.secondary} />
        </TouchableOpacity>
    )
}
