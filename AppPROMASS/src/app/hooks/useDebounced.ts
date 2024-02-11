import { useEffect, useRef, useState } from "react";



export const useDebounced = (text:string, time:number = 300) => {
    //Variables
    const [value, setValue] = useState(text);
    const waitSearch = useRef(true);

    //Effect
    useEffect(() => {
        //El primer cargado no hacer nada
        if(waitSearch.current){
            waitSearch.current = false;
            return;
        }
        //Realizar debounced
        const timeout = setTimeout( () => {
            setValue(text);
        }, time);
        
        //Borrar effect pasado
        return () => {
            clearTimeout(timeout);
        }
    }, [text]);

    return value;
}