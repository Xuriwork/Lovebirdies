import React, { Component } from 'react'

export class FormPage1 extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    render() {
        const { values, handleChange } = this.props;

        return (
        <div className="form-page-background">
            <div className="form-box">
                <form>
                    <fieldset>
                        <legend><span className="number">{values.step}</span> Registration</legend>
                        <input 
                            onChange={handleChange('name')} 
                            defaultValue={values.name} 
                            type="text" 
                            name="name" 
                            placeholder="Your Name *"
                        />
                        <input 
                            onChange={handleChange('email')} 
                            defaultValue={values.email} 
                            type="email" 
                            name="email" 
                            placeholder="Your Email *"
                        />
                        <input 
                            onChange={handleChange('password')} 
                            defaultValue={values.password} 
                            type="password" 
                            name="password" 
                            placeholder="Password *"
                        />
                        <input 
                            onChange={handleChange('phone_number')} 
                            defaultValue={values.phone_number} 
                            type="number" 
                            name="phone_number" 
                            placeholder="Your Phone Number *"
                        />
                        <input 
                            onChange={handleChange('home_address')} 
                            defaultValue={values.home_address} 
                            type="text" 
                            name="home_address" 
                            placeholder="Your Home Address *"/>
                        <input 
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

export default FormPage1
