import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBarZxyg8X2-lpTDAqqnvVPaO5REOhbqw4",
    authDomain: "react-alienclouds.firebaseapp.com",
    projectId: "react-alienclouds",
    storageBucket: "react-alienclouds.appspot.com",
    messagingSenderId: "53693664626",
    appId: "1:53693664626:web:103007950bf1b3a7b4e1eb",
    measurementId: "G-L457P3668Z"
};


const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)