"use client";
import { useState, useEffect } from "react";
import useAdminCheck from "./CheckAdmin";
import { UseFirebase } from "../hooks/hooks";
import { onAuthStateChanged, User } from 'firebase/auth';

/* eslint-disable @typescript-eslint/no-explicit-any */
export const withAuth = (WrappedComponent: any) => {
  return function WithAuth(props: any) {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState<User | null>(null);
    const isAdmin = useAdminCheck(user?.uid || '');
    const {auth} = UseFirebase();

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        setLoading(false);
      });

      return () => unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (loading) {
      return <div>Loading...</div>;
    }

    if (!user || !isAdmin) {
      return null;
    }
    
    return <WrappedComponent {...props} />;
  };
};