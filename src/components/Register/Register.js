import React from 'react';

const Register = () => {
    return (
        <div>
            <h2>Register Now!!</h2>
            <form>
                <input type="text" placeholder='Your Name' name="" />
                <br />
                <input type="email" name="" placeholder='Your Email Id' />
                <br />
                <input type="password" name="" placeholder='Input Password' />
                <br />
                <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;