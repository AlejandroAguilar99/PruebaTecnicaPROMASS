import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native';
import { Colors } from '../../styles/Colors';


interface Props{
    color?: string,
    hidden?: boolean,
}

export const NotchTop = ({
    color = Colors.primary,
    hidden = false,
}:Props) => {
    
    //Component
    return (
        <SafeAreaView style={{backgroundColor: color}}>
            <StatusBar
                backgroundColor={color}
                barStyle="light-content"
                hidden={hidden}
            />
        </SafeAreaView>
    )
}
