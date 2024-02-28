// firebaseService.js

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs, doc, setDoc, deleteDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
    authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.VUE_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.VUE_APP_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const fetchData = async () => {
  const dataRef = collection(db, 'your_collection');
  const snapshot = await getDocs(dataRef);
  
  const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  return data;
};

export const addData = async (newData) => {
  const dataRef = collection(db, 'your_collection');
  await addDoc(dataRef, newData);
};

export const updateData = async (id, updatedData) => {
  const dataRef = doc(db, 'your_collection', id);
  await setDoc(dataRef, updatedData, { merge: true });
};

export const deleteData = async (id) => {
  const dataRef = doc(db, 'your_collection', id);
  await deleteDoc(dataRef);
};
