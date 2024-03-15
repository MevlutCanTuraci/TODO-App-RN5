import { View, Text } from "react-native";
import styles from './Header.styles'

const Header = ({unCopletedTodo}) => {

    return (
        <View style={styles.headerContainer}>
            <View style={styles.headerLeft}>
                <Text style={styles.headerTitle}>Yapılacaklar</Text>
            </View>
            <View style={styles.headerRight}>
                <Text style={styles.headerTotalToDo}>{unCopletedTodo}</Text>
            </View>
        </View>
    );
}

export default Header;