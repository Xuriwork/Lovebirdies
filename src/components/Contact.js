import React from 'react';

const Contact = () => {
    return (
        <div className="contact-section">
            <h1>WANT TO STAY INFORMED?</h1>
            <p>Sign Up For Our Newsletter Now!</p>
            <span style={{ display: 'flex' }}>
                <input type="email" placeholder="Enter your email" /> 
                <input type="submit" />
            </span>
        </div>
    )
}

export default Contact;
