import { PropsWithChildren } from 'react';
import { SafeAreaView, StyleProp, StyleSheet, View, ViewStyle } from "react-native";


interface Props extends PropsWithChildren{
    style?: StyleProp<ViewStyle>,
}
export const ViewLayout = ({
    children,
    style,
}:Props) => {
    //Component
    return (
        <SafeAreaView style={[sty.container, style]}>
            { children }
        </SafeAreaView>
    );
}

const sty = StyleSheet.create({
    container: {

    }
});