import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBSpCKGmaxzNCi8CZrQyUUOOtP4qvAOUOo",
  authDomain: "auth-47f26.firebaseapp.com",
  projectId: "auth-47f26",
  storageBucket: "auth-47f26.appspot.com",
  messagingSenderId: "580297805388",
  appId: "1:580297805388:web:e172ec6844cf8cb687aee9"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);