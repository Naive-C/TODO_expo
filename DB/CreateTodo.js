import { addDoc, collection } from '@firebase/firestore';

import { db } from '../firebaseConfig'

const CreateTodo = async ({newTodoItem, ReadTodo}) => {
    try {
        console.log(newTodoItem)
        await addDoc(collection(db, 'todos'), {
            todo: newTodoItem,
        })
        ReadTodo()
    } catch (error) {
        console.log(error.message)
    }
}

export default CreateTodo