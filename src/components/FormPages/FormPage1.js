import React, { Component } from 'react';
import FormError from './FormError';

export class FormPage1 extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    render() {
        const { values, handleChange } = this.props;

        return (
        <div className="form-page-background">
            <div className="form-box form-page-1 input-margin">
                <form>
                    <fieldset>
                        <legend><span className="number">{values.step}</span> Registration</legend> 
                        <FormError errorMessage={values.errorMessage}  />
                        <input 
                            required
                            onChange={handleChange('name')} 
                            defaultValue={values.name} 
                            type="text" 
                            name="name" 
                            placeholder="Your Name *"
                        />
                        <input 
                            required
                            onChange={handleChange('email')} 
                            defaultValue={values.email} 
                            type="email" 
                            name="email" 
                            placeholder="Your Email *"
                        />
                        <input 
                            required
                            onChange={handleChange('password')} 
                            defaultValue={values.password} 
                            type="password" 
                            name="password" 
                            placeholder="Password *"
                        /> 
                        <input 
                            required
                            onChange={handleChange('confirm_password')} 
                            defaultValue={values.confirm_password} 
                            type="password" 
                            name="confirm_password" 
                            placeholder="Confirm Password *"
                        />
                        <input 
                            required
                            onChange={handleChange('phone_number')} 
                            defaultValue={values.phone_number} 
                            type="tel" 
                            name="phone_number" 
                            placeholder="Your Phone Number *" 
                            maxLength="16"
                        />
                        <input 
                            required
                            onChange={handleChange('home_address')} 
                            defaultValue={values.home_address} 
                            type="text" 
                            name="home_address" 
                            placeholder="Your Home Address *"/>
                        <input 
                            required
                            onChange={handleChange('birthdate')} 
                            defaultValue={values.birthdate} 
                            type="date" 
                            name="birthdate" 
                            max="2002-01-01"
                        />    
                    </fieldset>
                    <input 
                        onClick={this.continue} 
                        type="submit" 
                        value="Continue"   
                    />
                </form>
            </div>
        </div>
        )
    }
}

export default FormPage1;
