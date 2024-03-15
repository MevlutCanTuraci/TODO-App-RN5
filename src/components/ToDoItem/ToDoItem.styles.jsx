import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: '#7da453',
        padding: 10,
        margin:10,
        marginBottom: 3,
        borderRadius: 5,
        flex:'stretch',
    },
    item: {
        color: 'white',
        fontSize: 15
    },
    
    completed_item: {
        textDecorationLine: 'line-through',
        color: '#808080',
        fontSize: 15
    },
    completed_container: {
        backgroundColor: '#37474f',
        padding: 10,
        margin:10,
        marginBottom: 3,
        borderRadius: 5,
        flex:'stretch',
    }
});