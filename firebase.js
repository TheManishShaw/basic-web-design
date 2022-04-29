import firebase from "firebase/app";

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDAsmoV8_vj3CbgCkgGt3Hkogn7dl2kVMM",
    authDomain: "testing-a74ce.firebaseapp.com",
    projectId: "testing-a74ce",
    storageBucket: "testing-a74ce.appspot.com",
    messagingSenderId: "728904331894",
    appId: "1:728904331894:web:ba1fd79a3882f306f96557"
});

var db = firebaseApp.firestore();

export { db };