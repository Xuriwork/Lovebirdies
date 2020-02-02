import React from 'react';
import '../../App.css';

function SignIn() {
        return (
        <div className="form-page-background">
            <div className="form-box form-page-1 input-margin">
                <form>
                    <fieldset>
                        <legend>Sign In</legend>
                        <input type="email" name="email" placeholder="Email Address"/>
                        <input type="password" name="password" placeholder="Password"/>
                    </fieldset>
                    <input type="submit" value="Sign In" />
                </form>
                </div>
        </div>
        )
}

export default SignIn;