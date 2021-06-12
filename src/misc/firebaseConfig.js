import firebase from 'firebase/app';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCQbpnB3KagmSdnoVTyJKgr4voIrZkkuag",
    authDomain: "image-up-5fb01.firebaseapp.com",
    projectId: "image-up-5fb01",
    storageBucket: "image-up-5fb01.appspot.com",
    messagingSenderId: "175901638508",
    appId: "1:175901638508:web:12f1fb7b9b5521bf8cbd49"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}else {
    firebase.app(); // if already initialized, use that one
}

export const storage = firebase.storage();