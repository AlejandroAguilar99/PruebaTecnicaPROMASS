import React, { useEffect, useRef, useState } from 'react'
import { View, TextInput, TouchableOpacity, Keyboard, StyleSheet } from 'react-native';
import { useForm } from '../../hooks/useForm';
import { useDebounced } from '../../hooks/useDebounced';
import { Colors } from '../../styles/Colors';
import { FontAwesomeIcon } from '../icons/FontAwesomeIcon';
import { FilterModal } from '../../../modules/blog/home/components/FilterModal';

interface Props {
    onChange?: (value: string) => void,
    onPressIcon?: (value: string) => void,
}

export const SearchInput = ({
    onChange,
    onPressIcon,
}: Props) => {
    
    // State
    const waitSearch = useRef(true);
    const form = useForm({
        term: '',
    });
    // Computed
    const textDebounced = useDebounced(form.values.term, 350);

    // Methods
    useEffect(() => {
        //Esperamos al primer contenido
        if (waitSearch.current) {
            if (textDebounced.length > 0)
                waitSearch.current = false;
            else
                return;
        }
        // Ejecutar cambio de texto
        if (onChange) onChange(textDebounced);
    }, [textDebounced])

    const onClickIcon = () => {
        Keyboard.dismiss();
        //Evento
        if (onPressIcon) onPressIcon(form.values.term);
    }

    //Component
    return (
        <View style={sty.container}>
            <View style={[sty.content, { backgroundColor: Colors.light }]}>
                <TextInput
                    style={[sty.input]}
                    keyboardType={"default"}
                    keyboardAppearance="dark"
                    placeholder={"Buscar"}
                    placeholderTextColor={Colors.placeholderText}
                    autoCorrect={false}
                    autoComplete={"off"}
                    autoCapitalize={"none"}
                    selectTextOnFocus={true}
                    value={form.values.term}
                    onChangeText={(text) => form.setField("term", text)}
                />

                <TouchableOpacity
                    activeOpacity={0.4}
                    onPress={onClickIcon}
                >
                    <FontAwesomeIcon
                        size={20}
                        name='search'
                        color={Colors.placeholderText}
                    />
                </TouchableOpacity>
            </View>
            <FilterModal />
        </View>
    )
}

const sty = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignContent: 'center',
    },
    content: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 6,
        paddingHorizontal: 10,
        marginBottom: 10,
        marginRight: 10
    },
    input: {
        color: Colors.inputText,
        flex: 1,
        paddingVertical: 8,
    },
});
