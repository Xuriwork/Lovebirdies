import React from 'react';

const FormError = (props) => (
    props.errorMessage !== null ? (
        <div>
            <legend className="error-message">
                {props.errorMessage}
            </legend> 
            <legend className="error-message success-message">
                {props.successMessage}
            </legend>
        </div>
    ) : null    
)

export default FormError;
