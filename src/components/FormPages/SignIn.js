import React, { useState } from 'react';
import firebase from '../../Firebase/Firebase';
import { useForm } from 'react-hook-form';
import { navigate } from '@reach/router';
import '../../App.css';
import FormError from './FormError';

export const SignIn = () => {
    const { register, handleSubmit } = useForm();
    const [errorMessage, setErrorMessage] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);

    const signIn = values => {

        firebase
        .auth()
        .signInWithEmailAndPassword(values.email, values.password)
        .then(() => {
            console.log('Added user info to the Firestore Database');
        })
        .then(() => {
            navigate('/profile');
        })
        .catch((err) => {
            setErrorMessage(err.message);
        });
    }

    const forgotPassword = values => {
        if (values.email == null) {
            setErrorMessage('Enter your email address first');
        } 
        
        firebase
        .auth()
        .sendPasswordResetEmail(values.email)
        .then(() => {
            setSuccessMessage('Email has been sent');
        })
        .catch(() => {
            setErrorMessage('Email did not send');
        });
    }

        return (
        <div className="form-page-background">
            <div className="form-box form-page-1 input-margin">
                <form onSubmit={handleSubmit(signIn)}>
                    <fieldset>
                    <FormError errorMessage={errorMessage} successMessage={successMessage} />
                        <legend>Sign In</legend>
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="Your Email *" 
                            ref={register}
                        />
                        <input 
                            type="password" 
                            name="password" 
                            placeholder="Password *" 
                            ref={register}
                        />
                    </fieldset>
                    <input type="submit" value="Sign In" onClick={handleSubmit(signIn)} />
                    <span style={{ color: '#fc5185' }} onClick={handleSubmit(forgotPassword)}>Forgot Password?</span>
                </form>
                </div>
        </div>
        )
}


export default SignIn;