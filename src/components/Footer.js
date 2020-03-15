import React from 'react';
import '../App.css';

const Footer = () => (

	<footer className="footer-distributed">

		<div className="footer-right">
			<span href="#"><i className="fa fa-facebook"></i></span>
			<span href="#"><i className="fa fa-twitter"></i></span>
			<span href="#"><i className="fa fa-linkedin"></i></span>
			<span href="#"><i className="fa fa-github"></i></span>
		</div>

		<div className="footer-left">
			<p className="footer-links">
				<span className="link-1">Home</span>
				<span>Blog</span>
				<span>Pricing</span>
				<span>About</span>
				<span>Faq</span>
				<span>Contact</span>
			</p>
			<p>Love Birds &copy; 2020</p>
		</div>

	</footer>
)

export default Footer;