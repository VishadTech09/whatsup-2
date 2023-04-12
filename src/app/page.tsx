"use client"
import Sidebar from './components/sidebar';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './../../app-firebase.js';
import Login from './components/login';
import Loading from './components/loading';
import { useEffect } from 'react';
import { db } from '../../app-firebase';
import { ref, set } from "firebase/database";


export default function Home() {

  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      console.log("User", user);
      set(ref(db, '/users/' + user.uid), {
        email: user.email,
        lastSeen: Date(),
        photoUrl: user.photoURL,
        displayName: user.displayName,
      });
    }
    console.log('user loaded');

  }, [user]);
  if (loading) return <Loading />
  if (!user) return <Login />;

  return (
    <div>
      <Sidebar></Sidebar>
    </div>

  )
}
