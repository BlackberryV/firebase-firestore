import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore, collection, getDocs, addDoc, deleteDoc, doc} from "firebase/firestore";
import {useCollection} from "react-firebase-hooks/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAZIJJ6XwI_Dzs044WWUHeIsZNk9yywxt0",
    authDomain: "fir-course-ae660.firebaseapp.com",
    projectId: "fir-course-ae660",
    storageBucket: "fir-course-ae660.appspot.com",
    messagingSenderId: "898605311636",
    appId: "1:898605311636:web:199649c28e4b4bb49a3681"
};

const app = initializeApp(firebaseConfig);

// const auth = getAuth(app);
const db = getFirestore(app);

const colRef = collection(db, "books")

export const getBooks = getDocs(colRef)
    .then((snapshot) => {
        let books = [];
        snapshot.docs.forEach((doc) => {
            books.push({...doc.data(), id: doc.id});
        })
        console.log(books)
    })
    .catch(err => {
        console.log(err.message)
    })

export const addBook = (title, author) => {
    addDoc(colRef, {
        title: title,
        author: author,
    }).then()
}

export const deleteBook = (id) => {
    const docRef = doc(db, "books", id);
    deleteDoc(docRef).then()
}