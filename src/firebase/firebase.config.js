// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWrqaCImiNjFmO5XqGLES5-J-6f-zayS8",
  authDomain: "new-feeds-client.firebaseapp.com",
  projectId: "new-feeds-client",
  storageBucket: "new-feeds-client.appspot.com",
  messagingSenderId: "76384043281",
  appId: "1:76384043281:web:52cd861005ea83b2b98cb0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;