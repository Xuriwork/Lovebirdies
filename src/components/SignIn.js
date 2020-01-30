import React from 'react';
import '../App.css';

function SignIn() {
        return (
        <div class="form-page-background">
            <div class="form-box">
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