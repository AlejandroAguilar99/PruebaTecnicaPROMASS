import React from 'react'
import { View } from 'react-native'
import { ViewContainer } from '../../app/components/layouts/ViewContainer'
import { FloatingButton } from '../../app/components/buttons/FloatingButton'
import { SearchInput } from '../../app/components/inputs/SearchInput'
import { useNavigation } from '@react-navigation/native'
import { StackNavigation } from '../../routes/StackNavigator'

export const BlogScreen = () => {
  //Hooks
  const navigation = useNavigation<StackNavigation>();
  
  //State

  //Methods
  const onPressAdd = () => {
    navigation.navigate('CreateEntrada');
  }

  //Component
  return (
    <ViewContainer title='Blog' settings>
      <SearchInput />
      <FloatingButton onPress={onPressAdd} />
    </ViewContainer>
  )
}
