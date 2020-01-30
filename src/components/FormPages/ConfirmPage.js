import React, { Component } from 'react';
import Select from 'react-select';

export class ConfirmPage extends Component {
    state = {
        isDisabled: true,
    };

    toggleDisabled = () =>
        this.setState(state => ({ isDisabled: true }));

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    confirm = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    render() {
        const { isDisabled } = this.state;
        const { values } = this.props;
        
        return (
        <div className="form-page-background" style={{ height: 'auto', padding: '20px 0' }}>
            <div className="form-box">
                <form>
                    <fieldset>
                        <legend><span className="number">{values.step}</span>Confirm Information</legend>
                        <input 
                            disabled
                            defaultValue={values.name} 
                            type="text" 
                            name="name" 
                            placeholder="Your Name *"
                        />
                        <input 
                            disabled
                            defaultValue={values.email} 
                            type="email" 
                            name="email" 
                            placeholder="Your Email *"
                        />
                        <input 
                            disabled
                            defaultValue={values.password} 
                            type="password" 
                            name="password" 
                            placeholder="Password *"
                        />
                        <input 
                            disabled
                            defaultValue={values.phone_number} 
                            type="number" 
                            name="phone_number" 
                            placeholder="Your Phone Number *"
                        />
                        <input 
                            disabled
                            defaultValue={values.home_address} 
                            type="text" 
                            name="home_address" 
                            placeholder="Your Home Address *"/>
                        <input 
                            disabled
                            defaultValue={values.birthdate} 
                            type="date" 
                            name="birthdate" 
                            max="2002-01-01"
                        />    
                    </fieldset>
                    <fieldset>
                        <label htmlFor="security1">Security Question #1</label>
                        <Select 
                            defaultValue={values.security1}
                            isDisabled={isDisabled}
                            options={this.options} 
                            name="security1" 
                        />
                        <label htmlFor="security2">Security Question #2</label>
                        <Select 
                            defaultValue={values.security2}
                            isDisabled={isDisabled}
                            options={this.options} 
                            name="security2"
                        />
                        <label htmlFor="security3">Security Question #3</label>
                        <Select 
                            defaultValue={values.security3}
                            isDisabled={isDisabled}
                            options={this.options}
                            name="security3"
                        />   
                    </fieldset>
                    <input 
                        onClick={this.back} 
                        type="submit" value="Back" 
                        className="back-button"  
                    />
                    <input 
                        onClick={this.confirm} 
                        type="submit" 
                        value="Confirm & Continue"     
                    />
                </form>
            </div>
        </div>
        )
    }
}

export default ConfirmPage;
