import React from 'react';
import HeroImage from '../images/Group 77.png'

function Hero() {
    return (
        <div className='hero'>
            <img className='hero--img' src={HeroImage} alt='Hero img'></img>
            <h1 className='hero--header'>Online Experiences</h1>
            <p className='hero--text'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </div>
    );
}

export default Hero;