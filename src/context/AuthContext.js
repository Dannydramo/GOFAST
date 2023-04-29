import { createContext, useEffect, useState } from "react";
import {
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
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
  const signUpUser = (email, password, displayName) => {
    setLoading(true);
    // Create User with Email and Padddword Function
    return createUserWithEmailAndPassword(auth, email, password)
      .then((credential) => {
        //  Adds Username to the created account
        return updateProfile(auth.currentUser, {
          displayName: displayName,
        })
          .then(() => {
            // Checks if the added username was successful
            console.log("User profile updated successfully");
            return credential.user;
          })
          .catch((error) => {
            console.log("Error updating user profile:", error);
            throw error;
          });
      })
      .catch((error) => {
        console.log("Error creating user account:", error);
        throw error;
      });
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
