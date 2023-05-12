import { initializeApp } from 'firebase/app';
import {
  getAuth,
  setPersistence,
  browserSessionPersistence,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  signInWithRedirect,
} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBgf3ijz_AYCkAN3adcoOarAOJWppVsKrI',
  authDomain: 'earthquake-tracking-app-69329.firebaseapp.com',
  projectId: 'earthquake-tracking-app-69329',
  storageBucket: 'earthquake-tracking-app-69329.appspot.com',
  messagingSenderId: '866162852877',
  appId: '1:866162852877:web:379694a248b4f360970144',
  measurementId: 'G-X260D3H89Y',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

// Set session persistence for auth
// setPersistence(auth, browserSessionPersistence);

export {
  auth,
  firestore,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  signInWithRedirect,
};
