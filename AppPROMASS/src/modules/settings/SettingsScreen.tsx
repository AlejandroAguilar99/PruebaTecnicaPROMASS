import React, { useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import { ViewContainer } from '../../app/components/layouts/ViewContainer'
import { BasicButton } from '../../app/components/buttons/BasicButton'
import responsiveDimensions from '../../app/styles/ResponsiveDimensions'
import { Colors } from '../../app/styles/Colors'
import { InputModal } from './components/InputModal'
import { useForm } from '../../app/hooks/useForm'
import { LabelText } from '../../app/components/text/LabelText'
import { useStoreMethods } from '../root/hooks/useStoreMethods'
import { useOfflineMethods } from '../blog/shared/hooks/useOfflineMethods'

export const SettingsScreen = () => {
  //Hooks
  const { getAutorName, storeAutorName } = useStoreMethods();
  const { clearEntradas } = useOfflineMethods();
  //State
  const form = useForm({
    showEditName: false,
    name: '',
  });

  //Methods
  useEffect(() => {
    onLoad();
  }, []);

  const onLoad = async () => {
    const name = await getAutorName();
    (name != null) && form.setField('name', name);
  }

  const onConfirm = async (value: string) => {
    await storeAutorName(value);
    form.setField('showEditName', false)
  }

  //Components
  return (
    <ViewContainer title='Configuración' goBack styles={{ content: sty.content }}>
      <View>
        <LabelText
          value={`El nombre de autor actual es ${form.values.name}`}
          color='black'
        />
        <View style={{ height: 40 }} />
        <BasicButton
          title='Cambiar nombre'
          onPress={() => form.setField('showEditName', true)}
        />
      </View>
      <BasicButton
        title='Borrar entradas guardadas'
        onPress={clearEntradas}
        style={{ container: sty.deleteBtn, title: { color: Colors.text } }}
      />
      <InputModal
        show={form.values.showEditName}
        title='Editar nombre de autor'
        value={form.values.name}
        onClose={() => form.resetField('showEditName')}
        onConfirm={value => onConfirm(value)}
        onCancel={() => form.setField('showEditName', false)}
      />
    </ViewContainer>
  )
}

const sty = StyleSheet.create({
  content: {
    justifyContent: 'space-evenly'
  },
  deleteBtn: {
    backgroundColor: Colors.danger,
    width: 350
  }
});