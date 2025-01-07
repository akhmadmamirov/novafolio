// AdminEditor.tsx
import { useEffect, useState } from 'react';
import { auth } from '@/firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';
import useAdminCheck from '@/components/auth/CheckAdmin';
import { User } from 'firebase/auth';

const AdminEditor = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const isAdmin = useAdminCheck(user?.uid || '');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <div>Please log in to access the editor.</div>;
  }

  if (!isAdmin) {
    return <div>You do not have admin access.</div>;
  }

  return (
    <div>
      <h1>Admin Editor</h1>
      {/* Admin editor content goes here */}
    </div>
  );
};

export default AdminEditor;
