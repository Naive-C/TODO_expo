import { Button, StyleSheet, TextInput, View } from 'react-native'
import CreateTodo from '../DB/CreateTodo'
import { useState } from 'react';
import ReadTodo from '../DB/ReadTodo';


const AddTodo = ({ReadTodo}) => {
    const [newTodoItem, setNewTodoItem] = useState('');
    
    const todoInputHandler = newTodo => {
        setNewTodoItem(newTodo)
      };
    
      const addTodoHandler = () => {
        setNewTodoItem('')
        CreateTodo({newTodoItem, ReadTodo})
      };

    return (
        <View style = {styles.inputContainer}>
            <TextInput style = {styles.input}
                placeholder = {'할 일 목록 추가'}
                value = {newTodoItem}
                onChangeText = {todoInputHandler}
                placeholderTextColor = {'#dcdcdc'}
            />

            <View style = {styles.button}>
                <Button title = {'추가'} onPress = {addTodoHandler}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 10
    },
    input: {
      flex: 1,
      padding: 20,
      borderBottomColor: '#bbb',
      borderBottomWidth: 1,
      fontSize: 24,
      marginLeft: 20,
    },
    button: {
      marginRight: 10,
    },
  });
  
  export default AddTodo;