import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './Header.css'

const Header = () => {
    const { user, handleSignOut } = useFirebase();
    return (
        <div className='header'>
            <nav>
                <Link to={'/'}>Home</Link>
                <Link to={'/'}>Products</Link>
                <Link to={'/order'}>Order</Link>
                <Link to={'/register'}>Register</Link>
                {user?.displayName && user.displayName}
                {
                    user?.uid
                        ?
                        <span className='sign-out' onClick={handleSignOut}>Sign Out</span>
                        :
                        <Link to={'/login'}>LogIn</Link>

                }
            </nav>
        </div>
    );
};

export default Header;