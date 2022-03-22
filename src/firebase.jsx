import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyCQ9AmNXz8PxRmvkGFXC03GkluDjUXwabo",
    authDomain: "clone-7f006.firebaseapp.com",
    projectId: "clone-7f006",
    storageBucket: "clone-7f006.appspot.com",
    messagingSenderId: "888533880808",
    appId: "1:888533880808:web:82007354baf447ed0a5e5d",
    measurementId: "G-2TS5336TJ5"
};

const app = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export { auth }