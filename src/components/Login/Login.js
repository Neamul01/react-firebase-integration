import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { getAuth } from 'firebase/auth';
import app from '../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';


const auth = getAuth(app)

const Login = () => {
    // const { signInWithGoogle } = useFirebase();
    const [signInWithGoogle, user] = useSignInWithGoogle(auth)
    const location = useLocation();
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/';

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(() => {
                navigate(from, { replace: true })
            })
    }
    return (
        <div>
            <h3>Please LogIn!!</h3>
            <form>
                <input type="email" name="" placeholder='Your Email Id' />
                <br />
                <input type="password" name="" placeholder='Input Password' />
                <br />
                <input type="submit" value="LogIn" />
            </form>
            <div style={{ margin: '1rem' }}>
                <button onClick={handleGoogleSignIn}>SignIn With Google</button>
            </div>
        </div>
    );
};

export default Login;