import { StyleSheet } from "react-native";
import { Colors } from "./Colors";

export const globalSty = StyleSheet.create({
    flex: {
        flex: 1,
    },
    title:{
        color: Colors.text,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    separator:{
        borderColor: Colors.primary,
        borderTopWidth: 1,
        marginVertical: 20,
    },
    titleHeader: {
        color: Colors.text,
        backgroundColor: Colors.primary,
        fontSize: 16,
        marginTop: 10,
        marginBottom: 4,
        paddingVertical: 4,
    },
});