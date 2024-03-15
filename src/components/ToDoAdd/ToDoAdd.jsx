import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native"
import styles from "./ToDoAdd.styles";

const ToDoAdd = ({onSaveTodo}) => {

    const [todo, setTodo] = useState(null);

    const handleOnSaveTodo = () => { 
        onSaveTodo(todo, setTodo);
    };

    const handleOnChangeText = (text) => { 
        setTodo(text);
    };

    return (
        <View style={styles.container}>
            
            <TextInput 
                placeholder="Yapılacak..."
                placeholderTextColor="#808080"
                style={styles.todoInput}
                onChangeText={handleOnChangeText}
                value={todo}
            />

            <TouchableOpacity style={[styles.saveBtn, todo ? styles.saveBtn_active : styles.saveBtn_disabled]} 
                onPress={handleOnSaveTodo}
                disabled={!todo}
            >
                <Text style={styles.saveBtn_title}>
                    Kaydet
                </Text>
            </TouchableOpacity>

        </View>
    );

}

export default ToDoAdd;