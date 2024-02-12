import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

export const useStoreMethods = () => {

    const storeAutorName = async (value: string) => {
        try {
            await AsyncStorage.setItem('autorName', value);
        } catch (e) {
            // saving error
            Alert.alert('Error', 'No fue posible almacenar el nombre');
        }
    }

    const getAutorName = async () => {
        try {
            const value = await AsyncStorage.getItem('autorName');
            if (value !== null) {
                // value previously stored
                return value;
            }
            return null;
        } catch (e) {
            console.log('No fue posible obtener el nombre');
        }
    }

    return {
        storeAutorName,
        getAutorName,
    }
}
