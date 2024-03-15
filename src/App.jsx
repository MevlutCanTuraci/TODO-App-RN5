import { React, useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Alert } from "react-native";
import ToDoAdd from "./components/ToDoAdd";
import ToDoList from "./components/ToDoList";
import ToDoItem from "./components/ToDoItem";
import Header from "./components/Header";

const App = () => {

    const [toDoList, setToDoList] = useState([]);
    const [todoCount, setTodoCount] = useState(0);

    const generateId = () => Math.floor(Math.random() * 1000);

    useEffect(() => {
        setToDoList([
            {
                id: generateId(),
                todo: "Ekmek alınacak",
                completed: false
            },
            {
                id: generateId(),
                todo: "Ödev Yapılacak",
                completed: true
            },
            {
                id: generateId(),
                todo: "Yemek Yap",
                completed: false
            },
            {
                id: generateId(),
                todo: "Masaüstü düzenlenecek",
                completed: true
            }
        ]);

    }, []);


    useEffect(() => {
        setTodoCount(toDoList.filter(todo => !todo.completed).length)
    }, [toDoList]);


    const renderItem = ({item}) => {
        return <ToDoItem todoItem={item} onPress={handlerTodoItem} onLongPress={handlerTodoItemDelete} />
    }

    const handlerTodoItem = (data) => {
        setToDoList(
            toDoList.map(todoItem => {
                if (todoItem.id === data.id) {
                    return {
                     ...todoItem,
                        todo: data.todo,
                        completed:!todoItem.completed
                    }
                }
                return todoItem;
            })
        )
    }

    const handlerTodoItemDelete = (data) => {

        if (!data.completed) {
            Alert.alert('Uyarı', "Tamamlanmamış ToDo'yu silmek istiyor musunuz?", [
                {
                  text: 'Hayır',
                  style: 'cancel',
                },
                {text: 'Evet, sil', onPress: () => {
                    setToDoList(
                        toDoList.filter(todoItem => todoItem.id!== data.id)
                    );
                }},
              ]);
        }
        else {
            setToDoList(
                toDoList.filter(todoItem => todoItem.id!== data.id)
            )
        }
    }

    const handleAddTodo = (todo, setTodo) => {

        if(todo != null) {
            setToDoList([
            ...toDoList,
                {
                    id: generateId(),
                    todo: todo,
                    completed: false
                }
            ]);

            setTodo(null);
        }
    }


    return (
        <SafeAreaView style={styles.container}>

            <Header unCopletedTodo={todoCount} />

            <ToDoList todoList={toDoList} renderItem={renderItem} />
            
            <ToDoAdd onSaveTodo={handleAddTodo} />

        </SafeAreaView>
    );
}

export default App;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#102027'
    }

});