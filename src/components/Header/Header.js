import { getAuth, signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import app from '../../firebase.init';
import './Header.css'

const auth = getAuth(app)

const Header = () => {
    // const { user, handleSignOut } = useFirebase();
    const [user] = useAuthState(auth)

    return (
        <div className='header'>
            <nav>
                <Link to={'/'}>Home</Link>
                <Link to={'/'}>Products</Link>
                <Link to={'/order'}>Order</Link>
                <Link to={'/register'}>Register</Link>
                {user?.displayName && user.displayName}
                {/* {
                    <Link to={'/login'}>LogIn</Link>

                } */}
                {
                    user?.uid
                        ?
                        <span className='sign-out' onClick={() => signOut(auth)}>Sign Out</span>
                        :
                        <Link to={'/login'}>LogIn</Link>

                }
            </nav>
        </div>
    );
};

export default Header;