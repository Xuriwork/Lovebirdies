import React, { Component } from 'react';
import { Link } from '@reach/router';
import '../App.css';
import Hamburger from '../assets/images/icons/icons8-menu.svg';
import heartIcon from '../assets/images/icons/logo192.png';

class Navbar extends Component {
    
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
                    <Link to="/signin" className="signin-button">Sign In</Link>
                    <Link to="/signup" className="signup-button">Sign Up</Link>
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