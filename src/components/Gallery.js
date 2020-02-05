import React, { Component } from 'react';

import one from '../assets/images/Gallery/blur-carefree-cute-feelings-289237.jpg';
import two from '../assets/images/Gallery/brown-leather-zip-up-jacket-984908.jpg';
import three from '../assets/images/Gallery/couple-kissing-3479057.jpg';
import four from '../assets/images/Gallery/man-wearing-white-shirt-kissing-woman-in-her-nose-888894.jpg';
import five from '../assets/images/Gallery/photo-of-couple-in-love-1822500.jpg'
import six from '../assets/images/Gallery/selective-focus-photography-of-man-and-woman-sitting-on-2174662.jpg'
import seven from '../assets/images/Gallery/man-standing-in-front-of-woman-in-white-wedding-dress-3014856.jpg';
import eight from '../assets/images/Gallery/man-wearing-t-shirt-1587646.jpg';

export class Gallery extends Component {
    render() {
        return (
            <div class="gallery-section">
                <div class="gallery-container">
                    <div class="horizontal"><img src={one} alt="Happy man and woman" /></div>
                    <div><img src={two} alt="Happy man and woman" /></div>
                    <div><img src={three} alt="Happy man and woman" /></div>
                    <div class="vertical"><img src={four} alt="Happy man and woman" /></div>
                    <div class="vertical"><img src={five} alt="Happy man and woman" /></div>
                    <div><img src={six} alt="Happy man and woman" /></div>
                    <div><img src={seven} alt="Happy man and woman" /></div>
                    <div class="horizontal"><img src={eight} alt="Happy man and woman" /></div>
                </div>
            </div>
        )
    }
}

export default Gallery;
