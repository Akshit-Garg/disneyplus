
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC8wBNaEXw7Hxpyicq2Yvff_fpgN5V8Q2Y",
  authDomain: "disneyplus-clone-7bb28.firebaseapp.com",
  projectId: "disneyplus-clone-7bb28",
  storageBucket: "disneyplus-clone-7bb28.appspot.com",
  messagingSenderId: "1001941092013",
  appId: "1:1001941092013:web:25856ef8252bf4bbac2824",
};

// Use this to initialize the firebase App
const firebaseApp = initializeApp(firebaseConfig);

// Use these for db & auth
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();


export { auth, db, provider, storage };