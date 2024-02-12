import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ViewContainer } from '../../app/components/layouts/ViewContainer'
import { LabelText } from '../../app/components/text/LabelText'
import { FormInput } from '../../app/components/inputs/FormInput'
import { useForm } from '../../app/hooks/useForm'
import { TxtInput } from '../../app/components/inputs/TxtInput'
import { DateInput } from './components/DateInput'
import dayjs from 'dayjs'
import { BasicButton } from '../../app/components/buttons/BasicButton'
import { useNavigation } from '@react-navigation/native'
import { StackNavigation } from '../../routes/StackNavigator'
import { useStoreMethods } from '../root/hooks/useStoreMethods'
import { useBlog } from '../shared/hooks/useBlog'
import { ShowCmp } from '../../app/components/cmp/ShowCmp'
import { Colors } from '../../app/styles/Colors'



export const CreateEntradaScreen = () => {
  //Hooks
  const navigation = useNavigation<StackNavigation>();
  const { getAutorName } = useStoreMethods();
  const { createEntrada } = useBlog();
  //Computed
  const date = new Date();

  //State
  const form = useForm({
    title: '',
    autor: '',
    date: date,
    content: '',
    error: '',
  });

  //Methods
  useEffect(() => {
    onLoad();
  }, []);

  const onLoad = async () => {
    const name = await getAutorName();
    (name != null) && form.setField('autor', name);
  }

  const onCreate = async () => {
    // Validaciones
    if (form.values.title == '' || form.values.autor == '' || form.values.content == '')
      return form.setField('error', "Todos los campos son obligatorios, verifique");
    try {
      await createEntrada(form.values.title, form.values.autor, dayjs(form.values.date).format('YYYY-MM-DD'), form.values.content);
      navigation.goBack();
    } catch (error) {
      console.log(error);
    }
  }


  //Component
  return (
    <ViewContainer title='Crear Entrada' goBack>
      <TxtInput
        value={form.values.title}
        placeholder='Ingrese el titulo'
        onChangeValue={value => form.setField('title', value)}
      />
      <TxtInput
        value={form.values.autor}
        placeholder='Nombre del autor'
        onChangeValue={value => form.setField('autor', value)}
      />
      <DateInput
        date={form.values.date}
        onChangeDate={date => form.setField('date', date)}
      />
      <FormInput
        value={form.values.content}
        placeholder='Ingrese el contenido'
        onChangeValue={value => form.setField('content', value)}
      />
      <BasicButton
        title='Guardar'
        onPress={onCreate}
      />
      <ShowCmp value={form.values.error}>
        <Text style={sty.inputError}>{form.values.error}</Text>
      </ShowCmp>
    </ViewContainer>
  )
}

const sty = StyleSheet.create({
  inputError: {
    color: Colors.danger,
    textAlign: 'center',
  },
});