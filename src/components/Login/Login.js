import React from 'react';

const Login = () => {
    return (
        <div>
            <h3>Please LogIn</h3>
            <form>
                <input type="email" name="" placeholder='Your Email Id' id="" />
                <br />
                <input type="password" name="" placeholder='Input Password' id="" />
                <br />
                <input type="submit" value="LogIn" />
            </form>
        </div>
    );
};

export default Login;