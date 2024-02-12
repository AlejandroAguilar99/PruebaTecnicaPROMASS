import { useEffect } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { useForm } from "../../../app/hooks/useForm";
import { Colors } from "../../../app/styles/Colors";
import { ShowCmp } from "../../../app/components/cmp/ShowCmp";
import { BasicModal } from "../../../app/components/modals/BasicModal";
import { TxtInput } from "../../../app/components/inputs/TxtInput";
import { BasicButton } from "../../../app/components/buttons/BasicButton";
import { TextButton } from "../../../app/components/buttons/TextButton";
import { LabelText } from "../../../app/components/text/LabelText";




interface Props {
    show: boolean,
    title: string,
    value?: string,
    placeholder?: string,
    onClose: () => void,
    onConfirm: (value: string) => void,
    onCancel?: () => void;
}

export const InputModal = ({
    show,
    title,
    placeholder,
    value,
    onClose,
    onConfirm,
    onCancel,
}: Props) => {
    // State
    const form = useForm({
        text: '',
        error: "",
    });
    // Computed
    const { text } = form.values;

    // Values
    useEffect(() => {
        if (show) form.set({
            text: value || "",
            error: "",
        });
    }, [show]);

    const onConfirmHandle = () => {
        // Validaciones
        if (form.values.text.length < 4)
            return form.setField('error', "Debe ingresar un nombre valido");

        // Mandar evento
        if (form.values.text == value) return onClose();
        onConfirm(form.values.text);
    }

    // Component
    return (
        <BasicModal
            show={show}
            onClose={onClose}
        >
            <ScrollView keyboardShouldPersistTaps="handled">
                <View>
                    <LabelText
                        value={title}
                        bold
                        style={{textAlign:'center'}}
                    />
                    <TxtInput
                        value={form.values.text}
                        onChangeValue={(value) => form.setField('text', value)}
                        placeholder={placeholder}
                        style={{textAlign:'center'}}
                    />
                    <ShowCmp value={form.values.error}>
                        <Text style={sty.inputError}>{form.values.error}</Text>
                    </ShowCmp>
                    <View>
                        <TextButton
                            title="Cancelar"
                            onPress={onCancel}
                        />
                        <BasicButton
                            title="Aceptar"
                            onPress={onConfirmHandle}
                        />
                    </View>
                </View>
            </ScrollView>
        </BasicModal>
    );
}

const sty = StyleSheet.create({
    input: {
        color: Colors.text,
        borderBottomColor: Colors.primary,
        borderBottomWidth: 1.4,
        padding: 2,
    },
    inputError: {
        color: Colors.danger,
        textAlign: 'right',
    },
    actions: {
        flexDirection: 'row',
        marginTop: 30,
        justifyContent: 'flex-end',
    },
    button: {
        paddingVertical: 4,
        marginLeft: 12,
    },
    buttonTitle: {
        fontSize: 14,
        fontWeight: 'normal',
    }
});