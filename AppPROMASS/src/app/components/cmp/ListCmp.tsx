import React from "react";
import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';


interface RenderItemProps<T>{
    item: T,
    index: number,
}

interface Props<T>{
    data: T[],
    renderItem: (props:RenderItemProps<T>) => JSX.Element,
    emptyComponent?: JSX.Element,
    keyExtractor?: (item:T) => string,
    styles?: {
        container?: StyleProp<ViewStyle>,
        item?: StyleProp<ViewStyle>,
    }
}


export const ListCmp = <T extends {}>({
    data,
    renderItem,
    emptyComponent,
    keyExtractor,
    styles={},
}:Props<T>) => {

    // Methods
    const getKey = (item:T, idx:number):string => {
        if(keyExtractor) return keyExtractor(item);   
        return idx.toString();
    };

    const getComponent = () => {
        if(data.length == 0) return emptyComponent ? emptyComponent : <></>;

        return (
            data.map( (item, index) => {
                return (
                    <View 
                        key={ getKey(item, index) }
                        style={styles.item}
                    >
                        { renderItem({item, index}) }
                    </View>
                );
            })
        );
    }


    // Component
    return (
        <View style={[sty.container, styles.container]}>
            { getComponent() }
        </View>
    );
}

const sty = StyleSheet.create({
    container: {
        // flex: 1,
        // backgroundColor: 'red',
    }
});