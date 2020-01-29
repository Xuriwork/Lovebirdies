import React, { Component } from 'react';
import '../App.css';
import rose from '../assets/images/icons/rose.svg';
import lovepotion from '../assets/images/icons/love-potion.svg';
import phonecall from '../assets/images/icons/phone-call.svg';

export default class Hero extends Component {
    render() {
        return (
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
            </span>
        )
    }
}