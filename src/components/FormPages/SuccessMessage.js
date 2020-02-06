import React, { Component } from 'react';

export class SuccessMessage extends Component {
    render() {
        const { successMessage } = this.props;

        return (
            
            successMessage !== null ? (
                <div className="success-message success-message-box">
                    <h1 style={{ fontSize: '1.5em' }}>{successMessage}</h1>
                </div>
                ) : null  
        )
    }

}

export default SuccessMessage;