/*
import { collection, doc, getDocs } from "firebase/firestore"
import { db } from '../firebaseConfig'

const ReadDone = async () => {
    try {
        const data = await getDocs(collection(db, 'todos'))
        console.log(data.docs.map(doc => doc.data()))
    } catch (error) {
        console.log(error.message)
    }
}

export default ReadDone
*/