import { StyleSheet } from "react-native";

export default StyleSheet.create({

    container: {
        backgroundColor: '#37474f',
        padding: 15,
        paddingBottom: 10,
        margin: 10,
        borderRadius: 10,
        flex: 'stretch',
    },
    todoInput: {
        height: 40,
        borderBottomWidth: 1, // Sadece alt sınırı ayarlar
        borderColor: '#78909c', // Sınır rengi
        color: 'white',
        fontSize: 17
    },
    saveBtn: {
        color: 'white',
        padding: 10,
        margin: 10,
        marginTop: 15,
        borderRadius: 10,
        alignItems: 'center'
    },
    saveBtn_title: {
        color: 'white',
        fontSize: 16
    },

    saveBtn_disabled: {
        backgroundColor: '#808080'
    },

    saveBtn_active:{
        backgroundColor: '#ffa500',
    }
    

});