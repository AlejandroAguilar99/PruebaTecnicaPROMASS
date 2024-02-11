import React from 'react'
import { StyleSheet, View } from 'react-native'
import { ViewContainer } from '../../app/components/layouts/ViewContainer'
import { BasicButton } from '../../app/components/buttons/BasicButton'
import responsiveDimensions from '../../app/styles/ResponsiveDimensions'
import { Colors } from '../../app/styles/Colors'
import { InputModal } from './components/InputModal'
import { useForm } from '../../app/hooks/useForm'

export const SettingsScreen = () => {
  //State
  const form = useForm({
    showEditName:false,
    name:'',
  });
  return (
    <ViewContainer title='Configuración' goBack styles={{ content: sty.content }}>
      <BasicButton
        title='Cambiar nombre'
        onPress={() => form.setField('showEditName',true)}
      />
      <BasicButton title='Borrar entradas guardadas' style={{ container: sty.deleteBtn, title: { color: Colors.text } }} />
      <InputModal
        show={form.values.showEditName}
        title='Editar nombre de autor'
        value={form.values.name}
        onClose={() => form.resetField('showEditName')}
        onConfirm={() => form.setField('showEditName', false)}
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