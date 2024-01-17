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
    <div className="authencation_container">
      <div className="title_authenticate">
        AUTHENTICATION
      </div>
      <div className="form_container">
        <label for="username">
            Username
            <input id="username" value="manusharma" type="text" placeholder="Enter your Username" />
        </label>
        <label for="password">
            Password
            <input id="password" value="manusharma" type="password" placeholder="Enter your Password" />
        </label>
        <div className="submit_forgot">
            <Link to="/user/feedback" ><div  type="submit" className="submit" >AUTHENTICATE</div></Link>
           <Link to="/reset" ><span>Forgot Password</span></Link> 
        </div>
      </div>
    </div>
    </Fade>
    </>
  )
}

export default authenticate
