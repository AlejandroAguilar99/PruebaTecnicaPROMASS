import React from 'react'
import { useEntradasApi } from '../../../api/entradas/useEntradasApi';

export const useBlog = () => {
    //Hooks
    const api = useEntradasApi();

    //Methods
    const getEntradas = async () => {
        try {
            const { data } = await api.getEntradas();
            return data;
        } catch (error) {
            console.log('Error', error);
        }
    }

    const createEntrada = async (
        title: string, autor: string, date: string, content: string
    ) => {
        try {
            const { data } = await api.insertEntrada(title, autor, date, content);
            return data;
        } catch (error) {
            console.log('create entrada', error);
        }
    }

    return {
        getEntradas,
        createEntrada
    }
}
