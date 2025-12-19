// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  DocumentData,
  FirestoreDataConverter,
  getFirestore,
  QueryDocumentSnapshot,
  WithFieldValue,
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDZSyu7PkhRfCkrmdU7RrWz9iEdmanUjQ",
  authDomain: "yumi-portfolio.firebaseapp.com",
  projectId: "yumi-portfolio",
  storageBucket: "yumi-portfolio.firebasestorage.app",
  messagingSenderId: "49054374796",
  appId: "1:49054374796:web:92766f72adf739ee9f54a9",
  measurementId: "G-M7S3QSR9FT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const converter = <T>(): FirestoreDataConverter<T> => ({
  toFirestore: (data: WithFieldValue<T>) => {
    return data ?? {};
  },
  fromFirestore: (snapshot: QueryDocumentSnapshot) => {
    const data = snapshot.data();
    return data as T;
  },
});

export { app, db, converter };
