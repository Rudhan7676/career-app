import { signInWithGoogle } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleLogin = async () => {
    await signInWithGoogle();
    navigate("/dashboard");
  };

  return (
    <div>
      <h1>Welcome to Career Guidance App</h1>
      <button onClick={handleLogin}>Sign in with Google</button>
    </div>
  );
};

export default Home;
