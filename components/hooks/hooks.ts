import { initializeFirebaseClient } from '../../firebaseConfig';

export const UseFirebase = () => {
  const { app, auth, db, storage } = initializeFirebaseClient();
  return { app, auth, db, storage };
};