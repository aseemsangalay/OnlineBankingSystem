import React, { useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import obs_logo from "../assets/logo.svg"
import robot from "../assets/robot.png"
import Navbar from '../components/Navbar';
import "../styles/global.css"
import "../styles/home.css"
  
const Home = () => {

    return (
        <div className='home_wrap'>
            <Navbar />
            <div className='home_elements'>
                <div className='home_text'>
                    <div className='tagline'>The Next</div>
                    <div className='tagline green'>Generation</div>
                    <div className='tagline'>Internet Banking</div>
                </div> 
                <img className='home_image' src={robot} alt="logo" />
            </div>
        </div>
    );
}
export default Home;