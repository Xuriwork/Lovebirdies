import React, { Component } from 'react';
import '../App.css';

export default class Footer extends Component {
    render() {
        return (


		<footer className="footer-distributed">

			<div className="footer-right">
				<a href="#"><i className="fa fa-facebook"></i></a>
				<a href="#"><i className="fa fa-twitter"></i></a>
				<a href="#"><i className="fa fa-linkedin"></i></a>
				<a href="#"><i className="fa fa-github"></i></a>
			</div>

			<div className="footer-left">
				<p className="footer-links">
					<a className="link-1" href="#">Home</a>
					<a href="#">Blog</a>
					<a href="#">Pricing</a>
					<a href="#">About</a>
					<a href="#">Faq</a>
					<a href="#">Contact</a>
				</p>
				<p>Love Birds &copy; 2020</p>
			</div>

		</footer>
        )
    }
}