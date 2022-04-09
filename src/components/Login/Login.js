import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const { signInWithGoogle } = useFirebase();
    return (
        <div>
            <h3>Please LogIn!!</h3>
            <form>
                <input type="email" name="" placeholder='Your Email Id' id="" />
                <br />
                <input type="password" name="" placeholder='Input Password' id="" />
                <br />
                <input type="submit" value="LogIn" />
            </form>
            <div style={{ margin: '1rem' }}>
                <button onClick={signInWithGoogle}>SignIn With Google</button>
            </div>
        </div>
    );
};

export default Login;