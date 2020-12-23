import firebase from "firebase"

const firebaseApp=firebase.initializeApp({
    apiKey: "AIzaSyA9SUKxqIzsbyUIRdCBS3BJC7DVO68CeDw",
    authDomain: "facebook-mesenger-5597e.firebaseapp.com",
    databaseURL: "https://facebook-mesenger-5597e.firebaseio.com",
    projectId: "facebook-mesenger-5597e",
    storageBucket: "facebook-mesenger-5597e.appspot.com",
    messagingSenderId: "71140511214",
    appId: "1:71140511214:web:b387c185bb70bbc17d12ff",
    measurementId: "G-5Z7NMS25Q1"
});

const db=firebaseApp.firestore();

export default db