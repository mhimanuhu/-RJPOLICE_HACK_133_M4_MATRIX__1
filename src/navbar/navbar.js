import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import "./nav.css";

const navbar = (props) => {
  return (
    <>
      <div className="nav_container">
        <div className="raj_police_logo">
        <Link to="/" > 
          <img src="./rajpolicelogo.png" />
          </Link>
        </div>

        <div className="current_page">
          {props.pagename}
        </div>
         <div className='profile_leaderboard'>
         <Link to="/profile" > 
         <div className='navlink'>My Profile</div>
        </Link>

        <Link to="/Leaderboard" > 
         <div className='navlink'>Leaderboard</div>
        </Link>

         </div>
        
      </div>
    </>
  );
};

export default navbar;
