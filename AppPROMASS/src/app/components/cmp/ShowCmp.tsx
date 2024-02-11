import React from "react";

interface Props<T>{
    value: T,
    children: JSX.Element | JSX.Element[],
}

export const ShowCmp = <T extends any>({
    value,
    children
}:Props<T>) => {
    if(!value) return <></>;

    // Component
    return (
        <>
            { children }
        </>
    );
    
}