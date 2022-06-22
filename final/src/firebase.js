import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrxqBNCy1I3YdyVDkadgF3Q0gIyo67pTQ",
  authDomain: "fake-ig-aa71e.firebaseapp.com",
  projectId: "fake-ig-aa71e",
  storageBucket: "fake-ig-aa71e.appspot.com",
  messagingSenderId: "311249117285",
  appId: "1:311249117285:web:fbb0338f4ed453ba2e268c",
  measurementId: "G-MCV70KHVMZ"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage=firebase.storage();
export {db,auth,storage};