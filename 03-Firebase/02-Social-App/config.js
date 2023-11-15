import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-storage.js";

const firebaseConfig = {
    apiKey: "AIzaSyBkU7hUSCIU-_L7L2XhNt1b_XUqPx9660U",
    authDomain: "socialapp-b10.firebaseapp.com",
    projectId: "socialapp-b10",
    storageBucket: "socialapp-b10.appspot.com",
    messagingSenderId: "624127911231",
    appId: "1:624127911231:web:69602315eb65b256fb5f8a",
    measurementId: "G-NPP3MZ96B5"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);