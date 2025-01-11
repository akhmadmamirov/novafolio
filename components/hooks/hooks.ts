import { initializeFirebaseClient } from '../../firebaseConfig';

export const useFirebase = () => {
  const { app, auth, db } = initializeFirebaseClient();
  return { app, auth, db };
};