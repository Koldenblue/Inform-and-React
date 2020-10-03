import React from 'react';
import './heroBar.css';

function HeroBar(props) {
  if (props.positioning === 'top')
  return (
    <div className='hero-bar'></div>
  )
  else if (props.positioning === 'mid')
  return (
    <div className='hero-bar-mid'></div>
  )
  else if (props.positioning === 'bottom')
  return (
    <div className='hero-bar-bottom'>Website Designed by Team <em>Inform and React!</em><p>Anissa Shanks, Kevin Fujimoto, Kevin Miller, Sophia Castillo, Tim Hellman</p></div>
  )
}

export default HeroBar;