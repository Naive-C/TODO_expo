import { addDoc, doc, getDoc, collection } from '@firebase/firestore';
import { db } from '../firebaseConfig'
import DeleteTodo from './DeleteTodo';

const CreateDone = async ({id}) => {
    try {
        const docRef = doc(db, 'todos', id)
        const docSnap = await getDoc(docRef);
        const data = docSnap.data()
        const value = data['todo']

        await addDoc(collection(db, 'done'), {
            done: value
        })
        DeleteTodo({id})
    } catch (error) {
        console.log(error.message)
    }
}

export default CreateDone 