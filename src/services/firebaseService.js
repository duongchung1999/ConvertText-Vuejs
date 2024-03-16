import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push, set, update, remove, get } from 'firebase/database';

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
const db = getDatabase(app);

export const fetchData = async (path) => {
  const dataRef = ref(db, path);
  const snapshot = await get(dataRef);
  
  // const data = snapshot.val();
  // return data ? Object.entries(data).reduce((acc, [key, value]) => {
  //   acc.push({ id: key, ...value });
  //   return acc;
  // }, []) : [];
  const data = Object.keys(snapshot.val());
  return data;

};

export const addData = async (newData) => {
  const dataRef = ref(db, 'your_collection');
  await push(dataRef, newData);
};

export const setData = async (id, setData) => {
  const dataRef = ref(db, 'your_collection/' + id);
  await set(dataRef, setData);
};

export const updateData = async (path, newData) => {
  try {
    const dataRef = ref(db, path);
    await update(dataRef, newData);
    console.log("Data updated successfully!");
  } catch (error) {
    console.error("Error updating data:", error);
  }
};

export const deleteData = async (id) => {
  const dataRef = ref(db, 'your_collection/' + id);
  await remove(dataRef);
};

