import React from 'react'
import { View } from 'react-native'
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



export const CreateEntradaScreen = () => {
  //Hooks
  const navigation = useNavigation<StackNavigation>();
  //Computed
  const date = new Date();
  //State
  const form = useForm({
    title: '',
    autor: '',
    date: date,
    content: '',
  });

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
        onPress={()=>navigation.goBack()}
      />
    </ViewContainer>
  )
}
