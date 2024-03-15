import { FlatList, Text } from "react-native";
import styles from './ToDoList.styles'

const ToDoList = ({todoList, renderItem}) => {

    return (
        <FlatList 
            style={styles.container}
            data={todoList}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
        />
    );

};

export default ToDoList;