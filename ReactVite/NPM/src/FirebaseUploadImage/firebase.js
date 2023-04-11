// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebse configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "upload-image-react-bagus.firebaseapp.com",
  projectId: "upload-image-react-bagus",
  storageBucket: "upload-image-react-bagus.appspot.com",
  messagingSenderId: "564993836645",
  appId: import.meta.VITE_APP_ID
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);