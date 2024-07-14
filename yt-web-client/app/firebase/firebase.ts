// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { 
    getAuth, 
    signInWithPopup, 
    GoogleAuthProvider,
    onAuthStateChanged ,
    User
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASmvRgmy-fM6fEgdxm1R1OJXsXJhfieUI",
  authDomain: "yt-clone-bbdb2.firebaseapp.com",
  projectId: "yt-clone-bbdb2",
  appId: "1:920334539216:web:e7fc6cda3f9149c47c41d5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

/**
 * Signs in the user with Google authentication provider.
 * @returns A promise that resolves with the user credential.
 */
export function signInWithGoogle(){
    return signInWithPopup(auth, new GoogleAuthProvider()); 
}

/**
 * Signs out the currently authenticated user.
 * @returns A promise that resolves when the sign out is successful.
 */
export function signOut(){
    return auth.signOut();
}

/**
 * Registers a callback to be invoked when the auth state changes.
 * @param callback A function that takes the user as a parameter.
 * @returns A function that removes the callback.
 */
export function onAuthStateChangedHelper(callback: (user: User |null) =>void){
    return onAuthStateChanged(auth, callback);  
}