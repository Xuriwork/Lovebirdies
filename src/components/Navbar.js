import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import '../App.css';
import Hamburger from '../assets/images/icons/icons8-menu.svg';

export default class Navbar extends Component {
    render() {
        return (
            <header>
                <nav>
                <ul>
                    <li>About</li>
                    <li>Blog</li>
                    <li>Testimonials</li>
                    <li>Gallery</li>
                    <div>
                        <button><Link>Sign In</Link></button>
                        <button>Sign Up</button>
                    </div>
                </ul>
                <img className="hamburger" src={Hamburger} alt="Hamburger Icon"/>
                </nav>
            </header>
        )
    }
}