import { StyleSheet } from "react-native"

export const loginStyle = StyleSheet.create({
    main : {
        width: '100%',
        height: '100%',
        backgroundColor: '#a1d8f4',
        flexDirection: 'column'
    },
    logo: {
        width: '100%',
        height: '30%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    loginBox: {
        width: '100%',
        height: '70%',
        padding: 10,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        alignItems: 'center',
    },
    inputBox: {
        width: '100%',
        height: '30%',
        minHeight: 150,
        marginVertical: '10%',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    input: {
        height: 50,
        width: '80%',
        marginBottom: 20,
        borderRadius: 25,
        paddingHorizontal: 20,
        paddingTop: 4,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    inputText: {
        marginLeft: 10,
        fontSize: 20
    },
    buttonBox: {
        height: '70%',
        minHeight: 50,
        width: '60%',
        justifyContent: 'space-around'
    },
    loginBtn: {
        height: '10%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    loginBtnTch: {
        backgroundColor: '#7777dd',
        flex: 1,
        height: 50,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center'
    },
    loginBtnTchText: {
        fontSize: 20,
        color: '#fff'
    },
    signinBtn: {
        height: '10%'
    },
    signinBtnText: {
        textDecorationLine: 'underline',
        fontSize: 15,
    },
    snsBtn: {
        height: '30%',
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
})