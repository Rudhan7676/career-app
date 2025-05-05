import { useNavigate } from 'react-router-dom';
import { signInWithGoogle } from '../firebaseConfig';
import '../styles/SignIn.css';

const SignIn = () => {
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      navigate('/dashboard');
    } catch (error) {
      console.error('Error signing in with Google:', error);
    }
  };

  return (
    <div className="signin-container">
      <div className="signin-card fade-in">
        <div className="signin-header">
          <h1>CareerPath</h1>
          <p>Discover Your Perfect Career Path</p>
        </div>
        
        <div className="signin-buttons">
          <button onClick={handleGoogleSignIn} className="btn btn-google">
            <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google logo" />
            Sign in with Google
          </button>
          
          <div className="signin-divider">
            <span>or</span>
          </div>
          
          <button onClick={() => navigate('/dashboard')} className="btn btn-guest">
            Continue as Guest
          </button>
        </div>
        
        <div className="signin-footer">
          <p>By continuing, you agree to our Terms of Service and Privacy Policy</p>
        </div>
      </div>
      
      <div className="signin-background">
        <div className="background-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
