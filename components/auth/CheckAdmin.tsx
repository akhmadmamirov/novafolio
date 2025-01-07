import { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/firebaseConfig';


const useAdminCheck = (userId: string) => {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const checkAdmin = async () => {
      const docRef = doc(db, 'users', userId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setIsAdmin(docSnap.data().isAdmin);
      }
    };

    if (userId) {
      checkAdmin();
    }
  }, [userId]);

  return isAdmin;
};

export default useAdminCheck;
