import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC7m_Hcc-VV_4olOPqtrBeIJVQxjoWP29k",
    authDomain: "twitter-clone-coding-d1a0b.firebaseapp.com",
    projectId: "twitter-clone-coding-d1a0b",
    storageBucket: "twitter-clone-coding-d1a0b.appspot.com",
    messagingSenderId: "994443817337",
    appId: "1:994443817337:web:d67c63265cefdc71d93fa8",
    measurementId: "G-93SM9W80L4",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const storage = getStorage(app);

export const db = getFirestore(app);
