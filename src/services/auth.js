import { onAuthStateChanged, signInWithPopup, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { auth, googleProvider, db } from '../firebase';

export const subscribeToAuthChanges = (callback) => {
  return onAuthStateChanged(auth, async (firebaseUser) => {
    if (firebaseUser) {
      try {
        const userDoc = await getDoc(doc(db, 'users', firebaseUser.uid));
        const userData = userDoc.exists() ? userDoc.data() : {};
        callback({ ...firebaseUser, ...userData });
      } catch (error) {
        console.error("Error fetching user document in auth listener:", error);
        // Fallback to basic user
        callback({ ...firebaseUser });
      }
    } else {
      callback(null);
    }
  });
};

export const loginWithGoogleService = async () => {
  const result = await signInWithPopup(auth, googleProvider);
  const u = result.user;
  try {
    await setDoc(doc(db, 'users', u.uid), {
      uid: u.uid,
      displayName: u.displayName,
      email: u.email,
      photoURL: u.photoURL,
      bio: '',
      followers: [],
      following: [],
      createdAt: new Date().toISOString(),
    }, { merge: true });
  } catch (err) {
    console.warn("Could not save user to Firestore (likely rules missing), but login succeeded:", err);
  }
  return result;
};

export const registerWithEmailService = async (email, password, username) => {
  const result = await createUserWithEmailAndPassword(auth, email, password);
  await updateProfile(result.user, { displayName: username });
  try {
    await setDoc(doc(db, 'users', result.user.uid), {
      uid: result.user.uid,
      displayName: username,
      email,
      photoURL: '',
      bio: '',
      followers: [],
      following: [],
      createdAt: new Date().toISOString(),
    });
  } catch (err) {
    console.warn("Could not save user to Firestore (likely rules missing), but register succeeded:", err);
  }
  return result;
};

export const loginWithEmailService = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const logoutService = () => signOut(auth);
