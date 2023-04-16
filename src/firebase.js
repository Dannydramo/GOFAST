import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAhgNE2w7qEmzCy9ZkATOaOZH-B2HBU9W0",
  authDomain: "gofast-auth.firebaseapp.com",
  databaseURL: "https://gofast-auth-default-rtdb.firebaseio.com",
  projectId: "gofast-auth",
  storageBucket: "gofast-auth.appspot.com",
  messagingSenderId: 539601556122,
  appId: "1:539601556122:web:2274fff02274186cdc8523",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;
