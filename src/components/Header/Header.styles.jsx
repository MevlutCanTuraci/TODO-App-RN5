import { StyleSheet } from "react-native";

export default StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between', // Bu, iki görünümü yatay olarak aralıklı olarak yerleştirir
        alignItems: 'center', // Bu, her iki görünümü dikey olarak hizalar
        paddingHorizontal: 10, // Görünümler arasındaki yatay boşluğu ayarlar
        marginTop: 20 // Header'ı üste yerleştirir
    },
    headerTitle: {
        color: '#ffa500',
        fontWeight: 'bold',
        fontSize: 25,
        textAlign: 'left'
    },
    headerTotalToDo: {
        color: '#ffa500',
        fontWeight: 'bold',
        fontSize: 25
    },
    headerLeft: {
        flex: 1 // Sol taraftaki görünümün esnekliğini ayarlar
    },
    headerRight: {
        flex: 1,
        alignItems: 'flex-end' // Sağ taraftaki görünümü sağa hizalar
    }
});