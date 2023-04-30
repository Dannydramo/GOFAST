import { createContext, useEffect, useState } from "react";
import {
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase";

const AuthContext = createContext({
  signOutUser: () => {},
  signUpUser: () => {},
  logInUser: () => {},
  googleSignUpUser: () => {},
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);

  // Create User With Email And Password
  const signUpUser = (email, password) => {
    setLoading(true);
    // Create User with Email and Password Function
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Login User Function
  const logInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Sign Out User Function
  const signOutUser = () => {
    return signOut(auth);
  };

  // Google Sign In Function
  const googleProvider = new GoogleAuthProvider();
  const googleSignUpUser = async () => {
    try {
      return signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.log(error);
    }
  };

  // Manages User State
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signOutUser,
        signUpUser,
        logInUser,
        googleSignUpUser,
        user,
        loading,
        setLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
