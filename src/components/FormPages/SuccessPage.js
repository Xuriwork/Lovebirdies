import React, { Component } from 'react';
import { Link} from '@reach/router';

export class SuccessPage extends Component {

    render() {
        return (
            <div className="form-page-background success-page" style={{ height: '92vh' }}>
                <h1>Thanks for signing up!</h1>
                <Link to='/signin' style={{ textDecoration: 'none' }}>
                <button 
                    
                    style={{ width: 'auto', marginTop: '10px' }}
                >
                Click here to Sign In
                </button>
                </Link>
            </div>
        )
    }
}

export default SuccessPage;
