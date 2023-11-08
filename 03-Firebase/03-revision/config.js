import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";


const firebaseConfig = {
    apiKey: "AIzaSyD8n-v6_l1oz-RgKCPUua3nqnbBD00i-sQ",
    authDomain: "revisionb10.firebaseapp.com",
    projectId: "revisionb10",
    storageBucket: "revisionb10.appspot.com",
    messagingSenderId: "808709577294",
    appId: "1:808709577294:web:14c472f7e71ca2bc73411f",
    measurementId: "G-XM5SFPBBEG"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);