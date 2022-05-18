// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCxlM3U93zpkKZ4C_SuloAR0pqiH0_foZY",
    authDomain: "job-task-one.firebaseapp.com",
    projectId: "job-task-one",
    storageBucket: "job-task-one.appspot.com",
    messagingSenderId: "339785674672",
    appId: "1:339785674672:web:5e929c8aa499b7fa777075"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;