import React, { createContext, useContext, useEffect, useState } from "react";
import { auth, googleProvider, facebookProvider } from "../firebase/firebaseConfig";
import { signInWithPopup, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Monitorar usuário logado
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // Métodos de login
  const loginGoogle = () => signInWithPopup(auth, googleProvider);
  const loginFacebook = () => signInWithPopup(auth, facebookProvider);
  const loginEmail = (email, password) => signInWithEmailAndPassword(auth, email, password);
  const registerEmail = (email, password) => createUserWithEmailAndPassword(auth, email, password);
  const logout = () => signOut(auth);

  return (
    <AuthContext.Provider value={{ user, loginGoogle, loginFacebook, loginEmail, registerEmail, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
