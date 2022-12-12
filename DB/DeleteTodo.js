import { deleteDoc, doc } from '@firebase/firestore';

import { db } from '../firebaseConfig'

const DeleteTodo = async ({id, ReadTodo}) => {
    try {
        const docRef = doc(db, 'todos', id)

        await deleteDoc(docRef)
        ReadTodo()
    } catch (error) {
        console.log(error.message)
    }
}

export default DeleteTodo 