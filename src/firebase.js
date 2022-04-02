import {initializeApp} from "firebase/app";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signOut,
    signInWithEmailAndPassword
} from "firebase/auth";
import {
    getFirestore, collection, onSnapshot,
    getDocs, addDoc, deleteDoc, doc,
    query, where, orderBy,
    serverTimestamp, getDoc, updateDoc
} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAZIJJ6XwI_Dzs044WWUHeIsZNk9yywxt0",
    authDomain: "fir-course-ae660.firebaseapp.com",
    projectId: "fir-course-ae660",
    storageBucket: "fir-course-ae660.appspot.com",
    messagingSenderId: "898605311636",
    appId: "1:898605311636:web:199649c28e4b4bb49a3681"
};

const app = initializeApp(firebaseConfig);

//init services
const auth = getAuth(app);
const db = getFirestore(app);

const colRef = collection(db, "books")

//queries
// const q = query(colRef, where("author", "==", "John Grishem"), orderBy("title", "asc"));
const q = query(colRef, orderBy("createdAt"));

//Without subscribe
// getDocs(colRef)
//     .then((snapshot) => {
//         let books = [];
//         snapshot.docs.forEach((doc) => {
//             books.push({...doc.data(), id: doc.id});
//         })
//         console.log(books)
//     })
//     .catch(err => {
//         console.log(err.message)
//     })

//With subscribe
// onSnapshot(q, (snapshot) => {
//     let books = [];
//     snapshot.docs.forEach((doc) => {
//         books.push({...doc.data(), id: doc.id});
//     })
//     console.log(books)
// })

export const addBook = (title, author) => {
    addDoc(colRef, {
        title: title,
        author: author,
        createdAt: serverTimestamp()
    }).then()
}

export const deleteBook = (id) => {
    const docRef = doc(db, "books", id);
    deleteDoc(docRef).then()
}

export const updateBook = (id, title, author) => {
    const docRef = doc(db, "books", id);
    updateDoc(docRef, {title: title, author: author}).then()
}

// const docRef = doc(db, "books", "jydVAN861uwsPYal1Zvi")

//
// Without subscribe
// getDoc(docRef)
//     .then((doc) => {
//     console.log(doc.data(), doc.id)
// })

// With subscribe
// onSnapshot(docRef, (doc) => {
//     console.log(doc.data(), doc.id)
// })


//AUTHENTICATION

export const signUpUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
        .then((cred) => {
            console.log("User created: " + cred.user)
        })
        .catch((err) => {
            console.log(err.message)
        })
}

export const logInUser = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
        .then((cred) => {
            console.log("User signed in: " + cred.user)
        })
        .catch((err) => {
            console.log(err.message)
        })
}

export const signOutUser = () => {
    signOut(auth)
        .then(() => {
            console.log("User is signed out")
        })
        .catch((err) => {
            console.log(err.message)
        })
}