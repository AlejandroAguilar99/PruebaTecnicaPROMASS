import React, { useState } from 'react'
import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import DatePicker from 'react-native-date-picker';
import { Colors } from '../../../app/styles/Colors';
import { Fonts } from '../../../app/styles/Fonts';
import responsiveDimensions from '../../../app/styles/ResponsiveDimensions';
import dayjs from 'dayjs';

interface Props {
    date: Date;
    onChangeDate: (date: Date) => void;
}

export const DateInput = ({
    date,
    onChangeDate,
}: Props) => {
    //State
    const [showPicker, setShowPicker] = useState(false);
    //Component
    return (
        <View>
            <TouchableOpacity
                style={sty.button}
                activeOpacity={0.6}
                onPress={() => setShowPicker(true)}
            >
                <Text style={sty.buttonText}>{dayjs(date).format('DD/MM/YYYY')}</Text>
            </TouchableOpacity>
            <DatePicker
                open={showPicker}
                date={date}
                maximumDate={new Date()}
                modal={true}
                mode='date'
                title={'Selecciona la fecha'}
                onConfirm={date => [onChangeDate(date), setShowPicker(false)]}
                onCancel={() => setShowPicker(false)}
                theme={Platform.OS === 'android' ? 'dark' : 'light'}
            />
        </View>
    )
}

const sty = StyleSheet.create({
    buttonText: {
        fontSize: Fonts.small,
    },
    button: {
        alignSelf: 'center',
        backgroundColor: Colors.light,
        borderRadius: 20,
        padding: 10,
        width: responsiveDimensions.width * .80,
        margin: 10
    },
});