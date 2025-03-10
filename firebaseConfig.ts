import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID
};

// Initialize Firebase for client side
export const initializeFirebaseClient = () => {
  if (!getApps().length) {
    const app = initializeApp(firebaseConfig);
    return { app, auth: getAuth(app), db: getFirestore(app), storage : getStorage(app) };
  }
  return {
    app: getApps()[0],
    auth: getAuth(),
    db: getFirestore(),
    storage : getStorage()
  };
};