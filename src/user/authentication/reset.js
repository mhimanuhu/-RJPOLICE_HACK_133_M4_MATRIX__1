import React from 'react'
import Navbar from "../../components/navbar/nav";
import { Link } from 'react-router-dom';
const reset = () => {
  return (
    <>
    <Navbar />
    <div className="authencation_container">
      <div className="title_authenticate">
        RESET PASSWORD
      </div>
      <div className="form_container">
        <label for="username">
            Enter your username / email
            <input id="username" value="manusharma@raj.gov.in" type="text" placeholder="Enter your Username / Email" />
        </label>
        
        <div className="submit_forgot">
           <Link to=""> <div  type="submit" className="submit" >SEND LINK</div></Link>
           <Link to="/" ><span>Back to Login</span></Link> 
        </div>
      </div>
    </div>

    </>
  )
}

export default reset
