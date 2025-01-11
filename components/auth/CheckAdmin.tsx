import { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { UseFirebase } from '../hooks/hooks';

const useAdminCheck = (userId: string) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const {db} = UseFirebase()
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
