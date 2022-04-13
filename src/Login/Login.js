import React from 'react';
import './Login.css'
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase/firebase.init'
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';

const provider = new GoogleAuthProvider();


const Login = () => {
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
    const handleSignIn = (event) => {
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.pass.value
        console.log(email);
        // console.log(password);

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode);
            });
    }


    return (
        <div>
            <div className="login-container">
                <h5>Login</h5>
                <form onSubmit={handleSignIn}>
                    <title>Email</title>
                    <input className='email-field' type="email" name="email" placeholder='enter email' id="" />
                    <input className='password-field' type="password" name="pass" placeholder='password' id="" /> <br />
                    <button className='login-btn'>Login</button>
                </form>
                <p className='registering'>
                    <span > not in emajon?</span>
                    <Link to="/signup">creat a new account</Link>
                </p>
                <div className="google-container">
                    <button onClick={() => handleWithGoogle()} className='google-btn'>Continue with google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;