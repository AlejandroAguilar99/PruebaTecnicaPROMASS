import React, { useMemo } from 'react'
import { BasicModal } from '../../../../app/components/modals/BasicModal'
import { StyleSheet, View } from 'react-native'
import { IconButton } from '../../../../app/components/buttons/IconButton'
import { Colors } from '../../../../app/styles/Colors'
import { useForm } from '../../../../app/hooks/useForm'
import { LabelText } from '../../../../app/components/text/LabelText'
import { RadioButton, RadioButtonProps, RadioGroup } from 'react-native-radio-buttons-group'
import { Fonts } from '../../../../app/styles/Fonts'
import { useBlogActions } from '../../context/useBlogActions'

export const FilterModal = () => {
    //Hooks
    const actions = useBlogActions();

    //State
    const form = useForm({
        showModal: false,
        selectedId: '1',
    });

    const radioButtons: RadioButtonProps[] = useMemo(() => ([
        { id: '1', label: 'Titulo', value: 'title' },
        { id: '2', label: 'Autor', value: 'autor' },
        { id: '3', label: 'Contenido', value: 'content' },
    ]), []);

    //Methods
    const onToggleModal = () => {
        form.setField('showModal', !form.values.showModal);
    }

    const onSelectFilter = (value: string) => {
        form.setField('selectedId', value);
        (parseInt(value) == 1) && actions.setFilter('title');
        (parseInt(value) == 2) && actions.setFilter('autor');
        (parseInt(value) == 3) && actions.setFilter('content');
    }
    //Component
    return (
        <View>
            <IconButton
                icon='filter'
                color={Colors.secondary}
                style={{ container: sty.container, icon: sty.icon }}
                onPress={onToggleModal}
            />
            <BasicModal
                show={form.values.showModal}
                onClose={onToggleModal}
            >
                <View>
                    <LabelText
                        value='Filtrar por'
                        bold
                    />
                    {radioButtons.map((button) => (
                        <RadioButton
                            key={button.id}
                            id={form.values.selectedId}
                            selected={button.id == form.values.selectedId}
                            onPress={() => onSelectFilter(button.id)}
                            color={Colors.secondary}
                            label={button.label}
                            labelStyle={{ color: 'white', fontSize: Fonts.normal }}
                        />
                    ))}
                </View>
            </BasicModal>
        </View>
    )
}

const sty = StyleSheet.create({
    container: {
        height: 45,
        width: 45,
        backgroundColor: Colors.primary,
        borderRadius: 10,
    },
    icon: {
        fontSize: 15
    }
});