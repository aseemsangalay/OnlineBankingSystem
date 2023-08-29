import React, { useState } from 'react';
import '../styles/about.css'
import Navbar from '../components/Navbar';
import pay_card from '../assets/card.png'
  
const About = () => {
    const [change, setChange] = useState(true);
    return (
        <div className='home_wrap'>
            <Navbar initial={"about"}/>
            <div style={{'display': 'flex', 'padding': '30px', 'justifyContent': 'center',
             'alignItems': 'center'}}>
                <div style={{'width': '35%'}}>
                    <h1 className='about_heading'>
                        You do the Bussiness, <br />
                        We will handle the money!
                    </h1>
                    <span className='about_desc'>
                        Internet banking portal for State Bank of India. 
                        The portal provides anywhere, anytime, online access to 
                        accounts. The fastest and next generation payment methods for easing 
                        your experience.
                    </span>
                </div>
                <img style={{'height': '450px', 'marginLeft': '40px'}} src={pay_card} alt="about_img" /> 
            </div>
        </div>
    );
}
export default About;