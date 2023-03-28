// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCkDeMEU2u2gK2RTdJoDSMR6GdAnW8kKU",
  authDomain: "upload-image-react-bagus.firebaseapp.com",
  projectId: "upload-image-react-bagus",
  storageBucket: "upload-image-react-bagus.appspot.com",
  messagingSenderId: "564993836645",
  appId: "1:564993836645:web:6b9df9123382e60f4b288c"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);