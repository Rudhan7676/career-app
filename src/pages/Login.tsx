import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithGoogle, auth } from "../firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect user to Dashboard if already logged in
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/dashboard");
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  return (
    <div>
      <h1>Login</h1>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
  );
};

export default Login;
