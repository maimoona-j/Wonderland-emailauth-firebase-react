// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDd0wDQ698pxvka7DGH7iexnNQ99Qui_2g",
  authDomain: "emailauth-react-firebase.firebaseapp.com",
  projectId: "emailauth-react-firebase",
  storageBucket: "emailauth-react-firebase.appspot.com",
  messagingSenderId: "880566389751",
  appId: "1:880566389751:web:7a8058696524dbbed2fcf2"
};

// Initialize Firebase
 initializeApp(firebaseConfig);
 export const db = getFirestore()