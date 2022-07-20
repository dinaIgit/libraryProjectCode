import { db } from '../config/firebase-config';
import { doc, getDoc, setDoc, updateDoc, arrayUnion } from 'firebase/firestore';

export const getAllBooks = async () =>{
    try {
        const docRef=doc(db, 'librarydatabase', 'books');
        const docData =await getDoc(docRef);
        if (docData.exists()){
            return docData.data()
        }
        return  {books: []}
    }catch (e) {
        console.log(e.message)
    }
}

