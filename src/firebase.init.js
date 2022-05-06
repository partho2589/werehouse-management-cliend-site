// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuXea_TDSgIuAKcQ-tKksWRc4fl9xz-Go",
  authDomain: "pure-fruits-werehouse.firebaseapp.com",
  projectId: "pure-fruits-werehouse",
  storageBucket: "pure-fruits-werehouse.appspot.com",
  messagingSenderId: "423069480739",
  appId: "1:423069480739:web:f185cfa26fdc59e7663e96"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth