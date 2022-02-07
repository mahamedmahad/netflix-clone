
import firebase from "firebase";

const firebaseConfig = {
    apiKey: process.env.REACT_FIREBASE_API_KEY,
    authDomain: "netflix-clone-449fc.firebaseapp.com",
    projectId: "netflix-clone-449fc",
    storageBucket: "netflix-clone-449fc.appspot.com",
    messagingSenderId: "805188191980",
    appId: "1:805188191980:web:fac91a3a07b60b5d8847c9"
};

const firebaseapp = firebase.initializeApp(firebaseConfig)

const db = firebaseapp.firestore()
const auth = firebase.auth()
const storage = firebase.storage()

export {auth, storage}

export default db;