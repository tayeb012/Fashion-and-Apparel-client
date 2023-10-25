import React, { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const ThemeContext = createContext("light");
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);

  const logOut = () => {
    return signOut(auth);
  };
  const googleSignIn = () => {
    return signInWithPopup(auth, provider);
  };

  const registerUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      // console.log("Observing current user", currentUser);
    });
    return () => unSubscribe();
  }, []);

  const themeInfo = { theme, setTheme };
  const authInfo = {
    user,
    logOut,
    loading,
    registerUser,
    loginUser,
    googleSignIn,
  };

  return (
    <ThemeContext.Provider value={themeInfo}>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </ThemeContext.Provider>
  );
};

export default AuthProvider;
