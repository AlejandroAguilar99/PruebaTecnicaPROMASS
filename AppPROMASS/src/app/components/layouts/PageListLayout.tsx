import React from "react";
import { ActivityIndicator, FlatList, RefreshControl, StyleSheet, View, ListRenderItem } from 'react-native';
import { LoadingContent } from "../LoadingContent";
import { ShowCmp } from "../cmp/ShowCmp";
import { LabelText } from "../text/LabelText";
import { Colors } from "../../styles/Colors";

interface Props {
    data: any[];
    isLoading: boolean;
    isRefreshing?: boolean;
    renderCard: ListRenderItem<any>;
    onRefresh: () => void;
    empty?: {
        text?: string,
    };
}

export const PageListLayout= ({
    data = [],
    isLoading = false,
    isRefreshing = false,
    renderCard,
    onRefresh = () => { },
    empty = {
        text: 'No hay ningun item disponible',
    },
}: Props) => {

    // Computed
    const showEmpty = data.length == 0 && !isLoading ;

    // Componente
    return (
        <View style={{ flex: 1 }}>
            {/* Loading page */}
            <LoadingContent
                title='Cargando...'
                style={{ title: { fontWeight: "normal" } }}
                show={isLoading}
            />

            {/* Contenido */}
            <ShowCmp value={!isLoading}>
                <View style={{ flex: 1 }}>
                    <FlatList
                        data={data}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={(item) => renderCard(item)}
                        showsVerticalScrollIndicator={false}
                        maxToRenderPerBatch={10}
                        ListHeaderComponent={
                            <View style={{}}>
                                <ShowCmp value={showEmpty}>
                                    <View style={[sty.empty]}>
                                        <LabelText
                                            size={60}
                                            color={Colors.primary}
                                            value={empty.text!}
                                            style={sty.emptyMessageText}
                                        />
                                    </View>
                                </ShowCmp>
                            </View>
                        }
                        refreshControl={
                            <RefreshControl
                                refreshing={isRefreshing}
                                onRefresh={onRefresh}
                                progressViewOffset={150}
                                /* Android */
                                progressBackgroundColor={Colors.primary}
                                colors={[Colors.secondary]}
                                /* IOS */
                                style={{ backgroundColor: Colors.primary  }}
                                tintColor={Colors.secondary}
                            />
                        }
                    // onEndReachedThreshold={0.5}
                    // onEndReached={ onScrollEnd }
                    />
                </View>
            </ShowCmp>
        </View>
    );
}

const sty = StyleSheet.create({
    empty: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 50,
    },
    emptyMessage: {
        flexDirection: 'column',
    },
    emptyMessageText: {
        marginTop: 10,
        fontWeight: 'bold',
        color: Colors.text,
    },
    loadingNewPage: {
        marginVertical: 20,
    }
});