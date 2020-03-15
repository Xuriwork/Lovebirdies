import React from 'react';

const SuccessMessage = (props) => (
    props.successMessage !== null ? (
        <div className="success-message-box">
            <span style={{ fontSize: '1.5em' }}>{props.successMessage}</span>
        </div>
    ) : null  
)

export default SuccessMessage;
