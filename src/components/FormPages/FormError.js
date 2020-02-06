import React, { Component } from 'react';

export class FormError extends Component {
    render() {
        const {errorMessage, successMessage} = this.props;

        return (
            errorMessage !== null ? (
                <div>
                    <legend className="error-message">
                        {errorMessage}
                    </legend> 
                    <legend className="error-message success-message">
                        {successMessage}
                    </legend>
                </div>
            ) : null    
        );
    }
}

export default FormError;
