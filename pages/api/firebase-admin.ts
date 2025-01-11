import { initializeApp, getApps, cert } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { getFirestore } from 'firebase-admin/firestore';

export const initializeFirebaseAdmin = () => {
  if (!getApps().length) {
    const privateKey = process.env.FIREBASE_PRIVATE_KEY
      ? process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n')
      : undefined;

    if (!privateKey) {
      throw new Error('FIREBASE_PRIVATE_KEY is not set in environment variables');
    }

    const app = initializeApp({
      credential: cert({
        projectId: process.env.NEXT_PULIC_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        privateKey: privateKey,
      }),
    });

    return { adminApp: app, adminAuth: getAuth(app), adminDb: getFirestore(app) };
  }

  const app = getApps()[0];
  return { adminApp: app, adminAuth: getAuth(app), adminDb: getFirestore(app) };
};