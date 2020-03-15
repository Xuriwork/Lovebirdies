import React from 'react';
import '../App.css';
import rose from '../assets/images/icons/rose.svg';
import lovepotion from '../assets/images/icons/love-potion.svg';
import phonecall from '../assets/images/icons/phone-call.svg';

const Hero = () => (
    <span className="hero-section">
        <div className="hero-section-background">
            <h1 style={{padding: "80px"}}>
                Finding love can be hard. <br /> <span>Let us help you!</span>
                <p>
                    Dignissimos reprehenderit hic fugiat corporis culpa, asperiores neque vitae rerum doloribus.
                    Cum inventore consequuntur possimus quia dolorem officia.
                </p>
            </h1>
        </div>
        <div className="information-section">
            <div className="information-section-text-box">
                <h1>
                    Meet the one
                </h1>
                <p>
                    Vitae semper quis lectus nulla cras sed
                    purus viverra accumsan in nisl <br /> 
                    venenatis felis eget.
                    Non nisi est sit amet facilisis magna etiam.
                </p>
                <hr />
            </div>
            <div className="information-section-info-boxes">
                <div>
                    <img src={rose} alt="Rose"/>
                    <div className="information-text">
                        <h5>Lorem ipsum dolor sit amet</h5>
                        <p>Voluptatem iure aliquid neque earum tempore beatae quo totam deserunt.</p>
                        <p>Learn more <i className="fa fa-long-arrow-right" /></p>
                    </div>
                </div>
                <div>
                    <img src={lovepotion} alt="Love Potion"/>
                    <div className="information-text">
                        <h5>Lorem ipsum dolor sit amet</h5>
                        <p>Voluptatem iure aliquid neque earum tempore beatae quo totam deserunt.</p>
                        <p>Learn more <i className="fa fa-long-arrow-right" /></p>
                    </div>
                </div>
                <div>
                    <img src={phonecall} alt="Date"/>
                    <div className="information-text">
                        <h5>Lorem ipsum dolor sit amet</h5>
                        <p>Voluptatem iure aliquid neque earum tempore beatae quo totam deserunt.</p>
                        <p>Learn more <i className="fa fa-long-arrow-right" /></p>
                    </div>
                </div>
            </div>
        </div>
    </span>
);

export default Hero;