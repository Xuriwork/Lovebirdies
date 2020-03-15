import React, { Component } from 'react';
import firebase from '../../Firebase/Firebase';
import { navigate } from '@reach/router';
import FormError from './FormError';

export class ConfirmPage extends Component {
constructor(props) {
    super(props);
    this.state = {
        errorMessage: null, 
    }
}
    
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    continue = e => {
        e.preventDefault();
        const { values } = this.props;
        
        firebase
        .auth()
        .createUserWithEmailAndPassword(values.email, values.password)
        .then((user) => {

            const userInfo = {
                name: values.name,
                email: values.email,
                phone_number: values.phone_number,
                home_address: values.home_address,
                birthdate: values.birthdate,
                security1: [
                    values.security1.questionVals[0],
                    values.security1_answer],
                security2: [
                    values.security2.questionVals[1],
                    values.security2_answer],
                security3: [
                    values.security3.questionVals[2],
                    values.security3_answer],
            };
            user.user.updateProfile({
                displayName: values.name
            })
            
            console.log('Email: ' + values.email + ' Password: ' + values.password);
            console.log("Sign Up Success!");
            firebase.firestore()
            .collection('users')
            .doc(user.user.email)
            .set(userInfo)
            .then(() => {
                console.log('Added user info to the Firestore Database');
            })
            .catch((err) => {
                this.setState({ errorMessage: 'Firestore error: ' + err });
            });
            navigate('/profile')
            this.props.nextStep();
        })
        .catch((err) => {
            this.setState({ errorMessage: err.message });
        });
    }; 

    render() {
        const { values } = this.props;
        
        return (
        <div className="form-page-background" style={{ height: 'auto', padding: '20px 0' }}>
            <div className="form-box form-page-1 input-margin" style={{ width: '500px' }}>
                <form onSubmit={this.signUp} className="confirm-page-form">
                    <fieldset>
                        <legend><span className="number">{values.step}</span>Confirm Information</legend>
                        <FormError errorMessage={this.state.errorMessage} />
                        <label>Name</label>
                        <input 
                            disabled
                            defaultValue={values.name} 
                            type="text" 
                            name="name" 
                            placeholder="Your Name"
                        />
                        <label>Your Email Address</label>
                        <input 
                            disabled
                            defaultValue={values.email} 
                            type="email" 
                            name="email" 
                            placeholder="Your Email Address"
                        /> 
                        <label>Password</label>
                        <input 
                            disabled
                            defaultValue={values.password} 
                            type="text" 
                            name="password" 
                            placeholder="Password"
                        /> 
                        <label>Phone Number</label>
                        <input 
                            disabled
                            defaultValue={values.phone_number} 
                            type="number" 
                            name="phone_number" 
                            placeholder="Your Phone Number"
                        /> 
                        <label>Home Address</label>
                        <input 
                            disabled
                            defaultValue={values.home_address} 
                            type="text" 
                            name="home_address" 
                            placeholder="Your Home Address"
                        /> 
                        <label>Birthdate</label>
                        <input 
                            disabled
                            defaultValue={values.birthdate} 
                            type="date" 
                            name="birthdate" 
                            max="2002-01-01"
                        /> 
                    </fieldset>
                    <fieldset className="input-margin-small">
                        <label htmlFor="security1">Security Question #1</label>
                        <input 
                            disabled
                            defaultValue={values.security1.security1}
                        />  
                        <input 
                            disabled
                            defaultValue={values.security1_answer} 
                        />
                        <label htmlFor="security2">Security Question #2</label>
                        <input 
                            disabled
                            defaultValue={values.security2.security2}
                        /> 
                        <input 
                            disabled
                            defaultValue={values.security2_answer} 
                        />
                        <label htmlFor="security3">Security Question #3</label>
                        <input 
                            disabled
                            defaultValue={values.security3.security3}
                        /> 
                        <input 
                            disabled
                            defaultValue={values.security3_answer} 
                        />
                    </fieldset>
                    <input 
                        onClick={this.back} 
                        type="submit" value="Back" 
                        className="back-button"  
                    />
                    <input 
                        type="submit" 
                        value="Sign Up" 
                        onClick={this.continue}
                    />
                </form>
            </div>
        </div>
        )
    }
}

export default ConfirmPage;
