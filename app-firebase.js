import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyChj2CAODJbcNoHqAtWE1A7k3PVwwvPevQ",
  authDomain: "whatsup2-3c2af.firebaseapp.com",
  projectId: "whatsup2-3c2af",
  storageBucket: "whatsup2-3c2af.appspot.com",
  messagingSenderId: "461815840790",
  appId: "1:461815840790:web:e8dc887e86effc66113537"
};


const app = initializeApp(firebaseConfig)
const db = getDatabase(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider };