import React, { useEffect, useState } from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import { auth } from '../firebase/firebase.init'
import { onAuthStateChanged, signOut } from "firebase/auth";

const Header = () => {
    const [user, setUser] = useState({})
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
        });
    }, [])

    const handleLogout = () => {
       
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    }

    return (
        <div className='header-container'>
            <div className="header-logo">
                <h1>Emajon</h1>
            </div>
            <div className="header">
                <Link to="/"> Home</Link>
                {user?.uid ?
                    <button onClick={handleLogout} >Logout</button>
                    : <Link to="/login"> Log-in</Link>}

            </div>
        </div>
    );
};

export default Header;