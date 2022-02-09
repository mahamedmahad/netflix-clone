import firebase from "firebase";
import 'firebase/firestore'
import 'firebase/auth';
//import {seedDatabase} from '../seed';

//config

const config = {
    apiKey: "AIzaSyDgvE64lgtbKrmRFzyEjnl1vsdyxiwWNyA",
    authDomain: "netflix-clone-449fc.firebaseapp.com",
    projectId: "netflix-clone-449fc",
    storageBucket: "netflix-clone-449fc.appspot.com",
    messagingSenderId: "805188191980",
    appId: "1:805188191980:web:fac91a3a07b60b5d8847c9"
}
const firebaseApp = firebase.initializeApp(config)

const auth = firebaseApp.auth()

//push it to the fireStore db
//seedDatabase(firebaseApp)

export {firebaseApp, auth}