import React, { useEffect } from 'react'
import { ViewContainer } from '../../../app/components/layouts/ViewContainer'
import { FloatingButton } from '../../../app/components/buttons/FloatingButton'
import { SearchInput } from '../../../app/components/inputs/SearchInput'
import { useNavigation } from '@react-navigation/native'
import { StackNavigation } from '../../../routes/StackNavigator'
import { useBlog } from '../../shared/hooks/useBlog'
import { PageListLayout } from '../../../app/components/layouts/PageListLayout'
import { useForm } from '../../../app/hooks/useForm'
import { BlogCard } from './components/BlogCard'
import { Entradas } from '../../../api/entradas/interface/Entradas.interfaces'
import { useBlogGetters } from '../context/useBlogGetters'

interface Form {
  data: Entradas[];
  dataFiltered: Entradas[];
  isLoading: boolean;
}

export const BlogScreen = () => {
  //Hooks
  const navigation = useNavigation<StackNavigation>();
  const { getEntradas } = useBlog();
  const { filterSelected } = useBlogGetters();
  //State
  const form = useForm<Form>({
    data: [],
    dataFiltered: [],
    isLoading: true,
  });

  //Methods
  useEffect(() => {
    navigation.addListener('focus', () => {
      onLoad();
    });
  }, []);

  const onLoad = async () => {
    form.setField('isLoading', true);
    try {
      const data = await getEntradas();
      form.set({
        data,
        dataFiltered: data,
        isLoading: false,
      });
    } catch (error) {
      console.log(error);
    }
    form.setField('isLoading', false);
  }

  const onPressAdd = () => {
    navigation.navigate('CreateEntrada');
  }

  const onChangeDebounced = (text: string) => {
    text = text.toLowerCase();
    let dataFiltered = [];

    if (text.length == 0) {
      dataFiltered = form.values.data;
    } else {
      switch (filterSelected) {
        case 'title':
          dataFiltered = form.values.data.filter(item => item.Titulo.toLowerCase().includes(text));
          break;

        case 'autor':
          dataFiltered = form.values.data.filter(item => item.Autor.toLowerCase().includes(text));
          break;

        case 'content':
          dataFiltered = form.values.data.filter(item => item.Contenido.toLowerCase().includes(text));
          break;

        default:
          dataFiltered = form.values.data.filter(item => item.Titulo.toLowerCase().includes(text));
          break;
      }
    }

    form.set({
      ...form,
      dataFiltered,
    });
  }

  //Component
  return (
    <ViewContainer title='Blog' settings>
      <SearchInput
        onChange={onChangeDebounced}
      />
      <PageListLayout
        data={form.values.dataFiltered}
        isLoading={form.values.isLoading}
        onRefresh={onLoad}
        renderCard={({ item }) => <BlogCard item={item} />}
      />
      <FloatingButton onPress={onPressAdd} />
    </ViewContainer>
  )
}
