import { SafeAreaView, StyleSheet, View } from 'react-native'
import { collection,  getDocs } from "firebase/firestore"
import { useState, useEffect } from 'react';
import { db } from '../firebaseConfig'

import TodoList from '../Components/TodoList'
import AddTodo from '../Components/AddTodo'
import CreateDone from '../DB/CreateDone';
import DeleteTodo from '../DB/DeleteTodo';

const Todo = () => { 
    const [todos, setTodos] = useState([]); 

    useEffect(() => {
      ReadTodo()
    },[])

    const ReadTodo = async () => {
      try {
          const data = await getDocs(collection(db, 'todos'))
          setTodos(data.docs.map(doc => ({...doc.data(), id: doc.id})))
      } catch (error) {
          console.log(error.message)
      }
    }

    const onRemove = (id) => () => {
      CreateDone({id})
      ReadTodo()
    };

    return (
        <SafeAreaView style = {styles.safeView}>
        <View style = {styles.card}>
          <TodoList todos = {todos} onRemove = {onRemove} ReadTodo = {ReadTodo}></TodoList>
          <AddTodo  ReadTodo = {ReadTodo}></AddTodo>
        </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safeView: {
      flex: 1,
    },
    card: {
      backgroundColor: '#fff',
      flex: 1,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      borderBottomStartRadius: 10,
      marginLeft: 10,
      marginRight: 10,
      marginTop: 10,
      marginBottom: 10
    },
    header: {
      fontSize: 30, 
      fontWeight: 'bold',
      padding: 30
    }
  });

export default Todo