import React, { Component } from 'react'
import Select from 'react-select';

export class FormPage2 extends Component {
    state = {
      selectValues: { label: this.props.val, value: this.props.val },
    }

    options = [
        { label: 'Answer 1', value: 1 },
        { label: 'Answer 2', value: 2 },
        { label: 'Answer 3', value: 3 },
    ]

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const { values, handleChangeForSelect } = this.props;

        return (
        <div className="form-page-background">
            <div className="form-box" style={{ width: '500px' }}>
                <form>
                    <fieldset>
                        <legend><span className="number">{values.step}</span> Registration</legend>
                        <label htmlFor="sq1">Security Question #1</label>
                        <Select 
                            options={this.options} 
                            onChange={handleChangeForSelect('security1')}
                            defaultValue={values.security1}
                            name="sq1"
                        />  
                        <label htmlFor="sq2">Security Question #2</label>
                        <Select 
                            name="sq2"
                            options={this.options}
                            defaultValue={values.security2}
                            onChange={handleChangeForSelect('security2')}
                        />
                        <label htmlFor="sq3">Security Question #3</label>
                        <Select 
                            name="sq3"
                            options={this.options}
                            defaultValue={values.security3}
                            onChange={handleChangeForSelect('security3')}
                        />
                    </fieldset>
                    <input 
                        onClick={this.back} 
                        type="submit" 
                        value="Back" 
                        className="back-button" 
                    />
                    <input 
                        onClick={this.continue} 
                        type="submit" 
                        value="Confirm" 
                    />
                </form>
            </div>
        </div>
        )
    }
}

export default FormPage2;

