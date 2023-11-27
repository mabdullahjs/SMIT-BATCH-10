import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-storage.js";

const firebaseConfig = {
    apiKey: "AIzaSyAgm2rCrB3Mgm0JgIgCEXT-FL2SfiGTW3Y",
    authDomain: "personal-blogging-smit.firebaseapp.com",
    projectId: "personal-blogging-smit",
    storageBucket: "personal-blogging-smit.appspot.com",
    messagingSenderId: "947527510518",
    appId: "1:947527510518:web:046428f71b19349143ffd7",
    measurementId: "G-BQNZNDLY2Z"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);