import React, { Component } from 'react';
import firebase from '../Firebase';
import { navigate } from '@reach/router';
import { Link } from '@reach/router';
import '../App.css';
import Hamburger from '../assets/images/icons/icons8-menu.svg';
import heartIcon from '../assets/images/icons/logo192.png';

class Navbar extends Component {

    signOut = e => {
        firebase
            .auth()
            .signOut()
            .then(() => {
                navigate('/home');
                window.location.reload(false);
            }).catch((err) => {
                console.log(err);
            });
    }

    render() {
          
        return (
            <div>
                <header className="header">
                    <Link className="logo" to="/">
                        <img className="logo" src={heartIcon} alt="logo" />
                    </Link>
                    <nav>
                        <ul className="nav-links">
                            <li><span></span></li>
                            <li><span>About</span></li>
                            <li><span>Blog</span></li>
                            <li><span>Testimonials</span></li>
                            <li><span>Gallery</span></li>
                        </ul>
                    </nav>
                    { this.props.user == null ? (
                    <React.Fragment>
                        <Link to="/signin" className="signin-button" style={{ marginLeft: 'auto' }}>Sign In</Link>
                        <Link to="/signup" className="signup-button">Sign Up</Link>
                    </React.Fragment>
                    ) : 
                    <React.Fragment>
                        <button className="signup-button" style={{ marginLeft: 'auto' }} onClick={this.signOut}>Sign Out</button>
                    </React.Fragment>
                    }
                    <img src={Hamburger} className="hamburger" alt="Hamburger Menu" />
                </header>
                <div id="mobile-menu" className="overlay">
                    <span className="close">&times;</span>
                    <div className="overlay-content">
                        <span>About</span>
                        <span>Blog</span>
                        <span>Testimonials</span>
                        <span>Gallery</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar;