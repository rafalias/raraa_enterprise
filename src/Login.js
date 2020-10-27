import React, { useState } from 'react';
import './Login.css'
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login(){

    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                    history.push('/')
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email,password)
            .then((auth) => {
                if(auth){
                    history.push('/') //redirect to page
                }
            })
            .catch(error => alert(error.message))
    }

    return(
        <div className='login'>
            <Link to="/">
                <img className="login_logo" src="https://raraa.s3-ap-southeast-1.amazonaws.com/logo.png" />
            </Link>

            <div className="login_container">
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>

                    <button type='submit' className='login_signInButton' onClick={signIn}>Sign In</button>
                </form>

                <button className="login_registerButton" onClick={register}>Create your raraa account</button>
            </div>
        </div>
    )
}

export default Login