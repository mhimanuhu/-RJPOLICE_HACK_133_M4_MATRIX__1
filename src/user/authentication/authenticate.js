import React from 'react';
import "./authenticate.css";
import Navbar from "../../components/navbar/nav";

import { Fade } from "react-awesome-reveal";
import { Link } from 'react-router-dom';
const authenticate = () => {
  return (
    <>
    <Navbar />
     <Fade>
      <Link target='_blank' to="https://drive.google.com/file/d/1wsVnbuuTxEWIbpe5V0-0RaRXaDR0-U5A/view?usp=sharing">
      <div className='presentation'>
        View Presentation
      </div>
      </Link>
      <Link to="/police/dashboard" >
      <div style={{marginTop:"10px"}}  className='change role'>Switch to Police Role</div >
      </Link>
    <div className="authencation_container">
      <div className="title_authenticate">
        AUTHENTICATION | प्रमाणीकरण
      </div>
      <div className="form_container">
        <label for="username">
            Username | उपयोगकर्ता नाम
            <input id="username" value="manusharma" type="text" placeholder="Enter your Username" />
        </label>
        <label for="password">
            Password | पासवर्ड
            <input id="password" value="manusharma" type="password" placeholder="Enter your Password" />
        </label>
        <div className="submit_forgot">
            <Link to="/user/feedback" ><div  type="submit" className="submit" >AUTHENTICATE | प्रमाणित करें</div></Link>
           <Link to="/reset" ><span>Forgot Password | पासवर्ड भूल गए</span></Link> 
        </div>
      </div>
    </div>
    </Fade>
    </>
  )
}

export default authenticate
