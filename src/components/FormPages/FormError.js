import React, { Component } from 'react'

export class FormError extends Component {
    render() {
        const {errorMessage} = this.props;

        return (
            <legend className="error-message">
                {errorMessage}
            </legend>
        );
    }
}

export default FormError;
