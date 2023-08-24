import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBIQh4d1DJeU2CPGvSZt8YHvzW2_OykQKU",
  authDomain: "atividade-giovane.firebaseapp.com",
  projectId: "atividade-giovane",
  storageBucket: "atividade-giovane.appspot.com",
  messagingSenderId: "63353001500",
  appId: "1:63353001500:web:54470408313aa50fb7f1d9"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };