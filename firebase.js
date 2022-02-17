// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA_oMNJCSQHEaeWlcB8M_MJv80qtvc0bmo",
    authDomain: "twitter-clone-c1cb1.firebaseapp.com",
    projectId: "twitter-clone-c1cb1",
    storageBucket: "twitter-clone-c1cb1.appspot.com",
    messagingSenderId: "580997455451",
    appId: "1:580997455451:web:39ce8e0587644d689c697e"
  };

  // Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };