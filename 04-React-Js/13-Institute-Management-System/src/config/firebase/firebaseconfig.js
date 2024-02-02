import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDhzGvFCcdkc01OSflmO6vx8tvn4irupBE",
    authDomain: "institute-management-123.firebaseapp.com",
    projectId: "institute-management-123",
    storageBucket: "institute-management-123.appspot.com",
    messagingSenderId: "711013008333",
    appId: "1:711013008333:web:8cf8df78c2750d9016fa84",
    measurementId: "G-VDFP9KBFSY"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app