import { View, Text, TouchableOpacity } from "react-native";
import styles from './ToDoItem.styles'

const ToDoItem = ({todoItem, onPress, onLongPress}) => {

    return (
        
        <TouchableOpacity onPress={() => onPress(todoItem)} onLongPress={() => onLongPress(todoItem)}>

            <View style={[!todoItem.completed ? styles.container : styles.completed_container]}>
                <Text style={[!todoItem.completed ? styles.item : styles.completed_item]}>
                    {
                        todoItem.todo
                    }
                </Text>
            </View>

        </TouchableOpacity>
    );

};

export default ToDoItem;
