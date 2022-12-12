import { ScrollView } from 'react-native'
import TodoListCell from './TodoListCell'

const TodoList = ({todos, onRemove}) => {
    return (
        <ScrollView>
            {todos.map(todo => (
                <TodoListCell
                    key = {todo.id}
                    textValue = {todo['todo']}
                    id = {todo.id} 
                    onRemove = {onRemove}
                />
            ))}
        </ScrollView>
    )
}

export default TodoList

/*
        <ScrollView>
            {todos.map(todo => (
                <TodoListCell
                    key = {todo.id}
                    {...todo}
                    onRemove = {onRemove}
                />
            ))}
        </ScrollView>
*/