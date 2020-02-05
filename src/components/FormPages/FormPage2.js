import React, { Component } from 'react';
import Select from 'react-select';
import FormError from './FormError';

export class FormPage2 extends Component {
constructor(props) {
    super(props);
    this.state = {
        security1: '',
        security2: '',
        security3: '',
        questionVals: [null, null, null],
        filterOptions: [
            {
            value: "What was your childhood nickname?",
            label: "What was your childhood nickname ?"
            },
            {
            value: "In what city did you meet your spouse / significant other?",
            label: "In what city did you meet your spouse / significant other?"
            },
            {
            value: "What is the name of your favorite childhood friend?",
            label: "What is the name of your favorite childhood friend?"
            },
            {
            value: "What street did you live on in third grade?",
            label: "What street did you live on in third grade?"
            },
            {
            value: "What is the middle name of your youngest child?",
            label: "What is the middle name of your youngest child?"
            },
            {
            value: "What is the middle name of your oldest sibling?",
            label: "‘What is the middle name of your oldest sibling?"
            },
            {
            value: "What school did you attend for sixth grade?",
            label: "What school did you attend for sixth grade"
            },
            {
            value: "What was the name of your first stuffed animal?",
            label: "What was the name of your first stuffed animal?"
            },
            {
            value: "In what city or town did your mather and father meet?",
            label: "In what city or town did your mather and father meet?"
            }
        ]
        };

}

    continue = e => {
        e.preventDefault();
        const { values } = this.props;
        if (values.security1 === '' && values.security2 === '' && values.security3 === '') {
            this.setState({ errorMessage: 'Select all fields' });
        } else {
            this.setState({ errorMessage: null })
            this.props.nextStep();
        }
        
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    handleQuestionValChange = (option, index) => {
        const newQuestionVals = this.state.questionVals;
        newQuestionVals[index] = option;
        this.setState(state => {
        return {
            questionVals: newQuestionVals
        };
        });
    };

  getAvailableOptions = () => {
    const availableOptionsLeft = this.state.filterOptions;
    return availableOptionsLeft.filter(questionOption => {
      return this.state.questionVals.indexOf(questionOption) === -1;
    });
  };

  render() {
      const { values, handleChangeForSelect } = this.props;

    return (
        <div className="form-page-background">
            <div className="form-box form-page-1" style={{ width: '500px' }}>
                <form>
                    <fieldset>
                        <legend><span className="number">{values.step}</span> Registration</legend>
                        <FormError errorMessage={this.state.errorMessage} /> 
                        <label htmlFor="sq1">Security Question #1</label>
                        <Select
                            name="filters"
                            placeholder="Question #1"
                            value={this.state.questionVals[0]}
                            defaultValue={values.security1}
                            options={this.getAvailableOptions()}
                            onChange={security1 => { 
                                this.handleQuestionValChange(security1, 0);
                                this.setState({security1: security1.label});
                                this.setState(handleChangeForSelect('security1'));
                            }}
                        />
                        <label htmlFor="sq2">Security Question #2</label>
                        <Select
                            name="filters"
                            placeholder="Question #2"
                            value={this.state.questionVals[1]}
                            defaultValue={values.security2}
                            options={this.getAvailableOptions()}
                            onChange={security2 => { 
                                this.handleQuestionValChange(security2, 1);
                                this.setState({security2: security2.value});
                                this.setState(handleChangeForSelect('security2'));
                            }}

                        /> 
                        <label htmlFor="sq3">Security Question #3</label>
                        <Select
                            placeholder="Question #3"
                            value={this.state.questionVals[2]}  
                            options={this.getAvailableOptions()}
                            onChange={security3 => {
                                this.handleQuestionValChange(security3, 2);
                                this.setState({security3: security3.value});
                                this.setState(handleChangeForSelect('security3'));
                            }}
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
                        value="Continue" 
                    />
                </form>
            </div>
        </div>
    );
  }
}


export default FormPage2;