import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react'
import { StackNavigation } from '../../routes/StackNavigator';
import { useStoreMethods } from '../root/hooks/useStoreMethods';
import { View } from 'react-native';
import { globalSty } from '../../app/styles/GlobalStyles';
import { LoadingContent } from '../../app/components/LoadingContent';

export const HomeScreen = () => {
    //Hooks
    const navigation = useNavigation<StackNavigation>();
    const { getAutorName } = useStoreMethods();

    //Methods
    useEffect(() => {
        navigation.addListener('focus', () => {
            onLoad();
        });
    }, []);

    const onLoad = async () => {
        const name = await getAutorName();
        (name != null || name != '') ? navigation.navigate('Blog') : navigation.navigate('Login');
    }
    return (
        <View style={globalSty.flex}>
            <LoadingContent />
        </View>
    )
}
