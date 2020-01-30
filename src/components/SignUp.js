import React, { Component } from 'react';
import '../App.css';
import FormPage1  from './FormPages/FormPage1';
import FormPage2 from './FormPages/FormPage2';
import ConfirmPage from './FormPages/ConfirmPage';

export class SignUp extends Component {

    state = {
        step: 1,
        name: '',
        email: '',
        phone_number: '',
        home_address: '',
        birthdate: '',
        security1: '',
        security2: '',
        security3: '',
    }

    // Proceed to next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }

    // Proceed to next step
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    // Handles field changes
    handleChange = input => e => {
        this.setState({ [input]: e.target.value })
    }

    handleChangeForSelect = valueOfSelect => e => {
        this.setState({ [valueOfSelect]: e })
    }

    render() {
        const { step } = this.state;
        const { name, email, phone_number, home_address, birthdate, security1, security2, security3 } = this.state;
        const values = { step, name, email, phone_number, home_address, birthdate, security1, security2, security3 }

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
                return <h1>Success</h1>
        }
    }

    }

export default SignUp;