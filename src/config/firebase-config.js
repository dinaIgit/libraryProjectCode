import {initializeApp} from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCoDsBvxdYua2UFKvZByyAnoPoJNQrAvJY",
    authDomain: "projectlibrary-db2c6.firebaseapp.com",
    databaseURL: "https://projectlibrary-db2c6-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "projectlibrary-db2c6",
    storageBucket: "projectlibrary-db2c6.appspot.com",
    messagingSenderId: "177118270107",
    appId: "1:177118270107:web:e8ff465fe3211d22292c3e"
};

export const fb = initializeApp(firebaseConfig);
export const db = getFirestore(fb);