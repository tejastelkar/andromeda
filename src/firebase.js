import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBTfaHB3NIaLmSBihGOHN1mQu2prNHbOS8",
  authDomain: "andromeda-a47c0.firebaseapp.com",
  projectId: "andromeda-a47c0",
  storageBucket: "andromeda-a47c0.firebasestorage.app",
  messagingSenderId: "375039404437",
  appId: "1:375039404437:web:414bed7dab71f4f6c0ee9c",
  measurementId: "G-SQ69CNLW5Y"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const googleProvider = new GoogleAuthProvider();

export default app;
