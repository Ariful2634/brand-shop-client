// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDKEkizz5n-oOKRrY7ixKCKD29TvJLY4g",
  authDomain: "tech-shop-5a579.firebaseapp.com",
  projectId: "tech-shop-5a579",
  storageBucket: "tech-shop-5a579.appspot.com",
  messagingSenderId: "652679192654",
  appId: "1:652679192654:web:49f9d94b55701d9e73a31f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app)
export default auth;