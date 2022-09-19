import { StyleSheet } from "react-native"

export const layoutStyle = StyleSheet.create({
    WHcenter: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    boxShadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.2,
        shadowRadius: 11,
        elevation: 10,
    }
})