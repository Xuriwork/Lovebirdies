import React, { Component } from 'react';
import '../../App.css';
import FormPage1  from './FormPage1';
import FormPage2 from './FormPage2';
import ConfirmPage from './ConfirmPage';
import SuccessPage from './SuccessPage';

export class SignUp extends Component {
constructor(props) {
    super(props);
    this.state = {
        step: 1,
        errorMessage: null, 
        userID: null,
        name: '',
        email: '', 
        password: '',
        confirm_password: '',
        phone_number: '',
        home_address: '',
        birthdate: '',
        security1: '',
        security1_answer: '',
        security2: '',
        security2_answer: '',
        security3: '',
        security3_answer: '',
    }

    this.handleChange = this.handleChange.bind(this);
    
}

    handleChange = input => e => {
        this.setState({ [input]: e.target.value }, () => {
            if (this.state.password !== this.state.confirm_password) {
                this.setState({ errorMessage: 'Passwords do not match' });
            } else {
                this.setState({ errorMessage: null })
            }
        })
    }

    handleChangeForSelect = valueOfSelect => e => {
        this.setState({ [valueOfSelect]: e })
    }

    // Proceed to next step
    nextStep = () => {
        const { step } = this.state;
        if (this.state.errorMessage == null) {
        this.setState({
            step: step + 1
        });
        }
    }

    // Proceed to next step
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    render() {
        
        const { step, errorMessage, userID, name, email, password, confirm_password, phone_number, home_address, birthdate, security1, security1_answer, security2_answer, security2, security3, security3_answer } = this.state;
        const values = { step, errorMessage, userID, name, email, password, confirm_password, phone_number, home_address, birthdate, security1, security1_answer, security2, security2_answer, security3, security3_answer }
       
        switch(step) {
            default: 
                case 1:
                    return (
                    <FormPage1 
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values} 
                    />
                )
                case 2: 
                    return (
                    <FormPage2 
                        nextStep={this.nextStep}
                        prevStep={this.prevStep} 
                        handleChangeForSelect={this.handleChangeForSelect} 
                        handleChange={this.handleChange}
                        values={values} 
                    />
                )
                case 3: 
                    return (
                    <ConfirmPage
                        nextStep={this.nextStep}
                        prevStep={this.prevStep} 
                        values={values} 
                    />
                )
                case 4: 
                    return ( 
                    <SuccessPage />

                )
        }
    }
}

export default SignUp;