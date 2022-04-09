import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { getAuth } from 'firebase/auth';
import app from '../../firebase.init';


const auth = getAuth(app)

const Login = () => {
    // const { signInWithGoogle } = useFirebase();
    const [signInWithGoogle, user] = useSignInWithGoogle(auth)
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
                <button onClick={() => signInWithGoogle()}>SignIn With Google</button>
            </div>
        </div>
    );
};

export default Login;