import { deleteDoc, doc } from '@firebase/firestore';

import { db } from '../firebaseConfig'

const DeleteDone = async ({id, ReadDone}) => {
    try {
        const docRef = doc(db, 'done', id)

        await deleteDoc(docRef)
        ReadDone()
    } catch (error) {
        console.log(error.message)
    }
}

export default DeleteDone