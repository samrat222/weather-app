// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyADqjV5y86k5u2fvY_x3cPubOiUgzCqZCY",
    authDomain: "weather-app-2-64748.firebaseapp.com",
    projectId: "weather-app-2-64748",
    storageBucket: "weather-app-2-64748.appspot.com",
    messagingSenderId: "556653319508",
    appId: "1:556653319508:web:3c0d1161b81a2ca291e4c1",
    measurementId: "G-VXND6ZRYT3"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleAuth = new GoogleAuthProvider()
export const db = getFirestore(app);
