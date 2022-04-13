import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css'
import { auth } from '../firebase/firebase.init'
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const provider = new GoogleAuthProvider();

const Signup = () => {
    
    const navigate = useNavigate()
    const handleWithGoogle = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user
                console.log(user);
                navigate("/")
            })
            .catch((error) => {
                const errorMessage = error.message
                console.log(errorMessage);
            });
    }

    const handleOnSubmit = (event) => {
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.pass.value
        console.log(email);
        // console.log(password);

        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log(result.user);
            })
            .catch((error) => {
                console.log(error.message)
                console.log(error.code)
            });
    }



    return (
        <div>
            <div className="login-container">
                <h5>SignUp</h5>
                <form onSubmit={handleOnSubmit} >
                    <input className='email-field' type="email" name="email" placeholder='enter email' id="" />
                    <title>Password</title>
                    <input className='password-field' type="password" name="pass" placeholder='password' id="" />
                    <input className='password-field' type="password" name="" placeholder='confirm-password' id="" />
                    <button className='login-btn'>Sign Up</button>
                </form>
                <p className='registering'>
                    <span >already have an account?</span>
                    <Link to="/login">Login</Link>
                </p>

                <div className="google-container">
                    <button onClick={() => handleWithGoogle()} className='google-btn'>Continue with google</button>
                </div>
            </div>
        </div>
    );
};

export default Signup;