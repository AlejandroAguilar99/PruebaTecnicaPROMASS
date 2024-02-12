import React from 'react'
import { useHttp } from '../useHttp';
import { Entradas } from './interface/Entradas.interfaces';

export const useEntradasApi = () => {
    // Hooks
    const http = useHttp();
    // Computed

    // Methods
    const getEntradas = () => http.api.get<Entradas[]>(`entrada_controller.php?op=getEntradas`);

    const insertEntrada = (titulo: string, autor: string, fecha: string, contenido: string) =>
        http.api.post(`entrada_controller.php?op=insertEntrada`, {
            titulo,
            autor,
            fecha,
            contenido
        });

    return {
        getEntradas,
        insertEntrada
    };
}
