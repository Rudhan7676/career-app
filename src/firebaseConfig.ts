import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore, collection, addDoc, query, where, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "YOUR_FIREBASE_API_KEY",
  authDomain: "YOUR_FIREBASE_AUTH_DOMAIN",
  projectId: "YOUR_FIREBASE_PROJECT_ID",
  storageBucket: "YOUR_FIREBASE_STORAGE_BUCKET",
  messagingSenderId: "YOUR_FIREBASE_MESSAGING_SENDER_ID",
  appId: "YOUR_FIREBASE_APP_ID",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

// Sign in with Google
const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    console.log("User signed in:", result.user);
  } catch (error) {
    console.error("Error signing in:", error);
  }
};

// Logout
const logout = async () => {
  try {
    await signOut(auth);
    console.log("User signed out");
  } catch (error) {
    console.error("Error signing out:", error);
  }
};

// Save career selection
const saveCareerSelection = async (career: string, userEmail: string) => {
  try {
    await addDoc(collection(db, "careerSelections"), {
      career,
      userEmail,
      timestamp: new Date(),
    });
  } catch (error) {
    console.error("Error saving career:", error);
  }
};

// Get career suggestions based on quiz responses
const getCareerSuggestions = async (userEmail: string) => {
  const q = query(collection(db, "careerSelections"), where("userEmail", "==", userEmail));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((doc) => doc.data());
};

export { auth, db, signInWithGoogle, logout, saveCareerSelection, getCareerSuggestions };
