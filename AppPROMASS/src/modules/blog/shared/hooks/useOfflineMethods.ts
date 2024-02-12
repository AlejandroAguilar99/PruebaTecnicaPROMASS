import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react'
import { Entradas } from '../../../../api/entradas/interface/Entradas.interfaces';
import Toast from 'react-native-toast-message';

export const useOfflineMethods = () => {

    const getEntradas = async () => {
        try {
            const entradas = await AsyncStorage.getItem('entradas');
            return entradas != null ? JSON.parse(entradas) : [];
        } catch (e) {
            // error reading value
        }
    };

    const checkIfDownloaded = async (value: Entradas) => {
        try {
            const entradas: Entradas[] = await getEntradas();
            if (entradas == null) return false;
            return entradas.find((entrada) => entrada.Id == value.Id) != undefined
        } catch (error) {
            console.log('Error', error);
            return false;
        }
    }

    const saveEntrada = async (value: Entradas) => {
        const isDownloaded = await checkIfDownloaded(value);
        if (isDownloaded) {
            Toast.show({
                type: 'error',
                text1: 'Error',
                text2: 'Esta entrada ya está descargada',
            });
        } else {
            try {
                var entradas: Entradas[] = await getEntradas();
                const arrayTemp = JSON.stringify([...entradas, value]);
                await AsyncStorage.setItem('entradas', arrayTemp);
                Toast.show({
                    type: 'success',
                    text1: 'Entrada guardada',
                });
            } catch (error) {
                console.log('Error', error);
            }
        }
    }

    const clearEntradas = async () => {
        try {
            const arrayTemp = JSON.stringify([]);
            await AsyncStorage.setItem('entradas', arrayTemp);
            Toast.show({
                type: 'error',
                text1: 'Las entradas descargadas fueron borradas',
            });
        } catch (error) {
            console.log('Error', error);
        }
    }


    return {
        getEntradas,
        checkIfDownloaded,
        saveEntrada,
        clearEntradas
    }
}
