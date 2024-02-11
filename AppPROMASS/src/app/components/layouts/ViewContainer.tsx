import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { NotchTop } from "./NotchTop";
import { ViewLayout } from "./ViewLayout";
import { Colors } from "../../styles/Colors";
import { Header } from "./Header";

interface Props {
    children: JSX.Element | JSX.Element[],
    title: string,
    styles?: {
        container?: ViewStyle,
        content?: ViewStyle
    },
    goBack?: boolean,
    settings?: boolean,
}

export const ViewContainer = ({
    children,
    title,
    styles = {},
    goBack = false,
    settings,
}: Props) => {
    //Component
    return (
        <View style={{ flex: 1 }}>
            <NotchTop />
            <View style={[sty.container, styles.container]}>
                <ViewLayout style={{ flex: 1 }}>
                    <Header title={title} goBack={goBack} settings={settings} />
                    <View style={[styles.content, sty.content,]}>
                        {children}
                    </View>
                </ViewLayout>
            </View>
        </View>
    );
}

const sty = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
        paddingHorizontal: 0,
        paddingTop: 0,
        flexDirection: 'row',
    },
    content: {
        flex: 1,
        margin: 10,
    }
});