import { useState } from "react"


export const useForm = <T extends object>(initValues:T) => {
    // State
    const [values, setValues] = useState(initValues);

    // Methods
    const set = <K extends Partial<T>>( data:K ) => {
        setValues( (values) => {
            return {
                ...values,
                ...data,
            }
        });
    }

    const setField = <K extends keyof T>(key:K, value:T[K]) => {
        setValues( (values) => {
            return {
                ...values,
                [key]: value,
            }
        });
    }

    const reset = () => {
        setValues(initValues);
    }

    const resetField = <K extends keyof T>(key:K) => {
        setValues( (values) => {
            return {
                ...values,
                [key]: initValues[key],
            }
        });
    }


    return {
        values,
        setValues,
        set,
        setField,
        reset,
        resetField,
    }
}