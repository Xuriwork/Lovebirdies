import React, { Component } from 'react';
import firebase from '../../Firebase';
import { navigate } from '@reach/router';
import '../../App.css';
import FormError from './FormError';

export class SignIn extends Component {
constructor(props) {
    super(props);
    this.state = {
        email: null,
        password: '',
        errorMessage: '',
    }

    this.handleChange = this.handleChange.bind(this);
}

    handleChange = input => e => {
        this.setState({ [input]: e.target.value }, () => {
        })
    }

    signIn = e => {
        e.preventDefault();
        firebase
        .auth()
        .signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(() => {
            console.log('Added user info to the Firestore Database');
        })
        .then(() => {
            navigate('/profile');
        })
        .catch((err) => {
            this.setState({ errorMessage: err.message });
        });
    }

    forgotPassword = e => {
        if (this.state.email == null) {
            this.setState({ errorMessage: 'Enter your email address first' });
        } 
        
        const email = this.state.email;

        console.log(email);
        firebase
        .auth()
        .sendPasswordResetEmail(email)
        .then(() => {
            this.setState({ successMessage: 'Email has been sent' });
        })
        .catch(() => {
            this.setState({ errorMessage: 'Email did not send' });
        });
    }

    render() {
        const { errorMessage, successMessage } = this.state;

        return (
        <div className="form-page-background">
            <div className="form-box form-page-1 input-margin">
                <form>
                    <fieldset>
                    <FormError errorMessage={errorMessage} successMessage={successMessage} />
                        <legend>Sign In</legend>
                        <input 
                            required
                            onChange={this.handleChange('email')} 
                            defaultValue={this.email} 
                            type="email" 
                            name="email" 
                            placeholder="Your Email *"
                        />
                        <input 
                            required
                            onChange={this.handleChange('password')} 
                            defaultValue={this.password} 
                            type="password" 
                            name="password" 
                            placeholder="Password *"
                        />
                    </fieldset>
                    <input type="submit" value="Sign In" onClick={this.signIn} />
                    <span style={{ color: '#fc5185' }} onClick={this.forgotPassword}>Forgot Password?</span>
                </form>
                </div>
        </div>
        )
    }
}


export default SignIn;