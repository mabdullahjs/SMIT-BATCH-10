 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
 import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
 import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";


 const firebaseConfig = {
   apiKey: "AIzaSyC-fS-ntDDD0SLO5WtCSLM00nFXVMxVPCM",
   authDomain: "revision-firebase-1c98d.firebaseapp.com",
   projectId: "revision-firebase-1c98d",
   storageBucket: "revision-firebase-1c98d.appspot.com",
   messagingSenderId: "366494916254",
   appId: "1:366494916254:web:5074997d693ea638f9258f",
   measurementId: "G-9VJZZYN4E1"
 };

 // Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
