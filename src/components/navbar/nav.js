import React from 'react';
import "./nav.css";
import { Link } from 'react-router-dom';
import logo from "../../assets/images/rajpolicelogo.png";
const nav = () => {
  return (
    <>
      <div className="nav_container">
        <div className="logo">
          <img src={logo} alt="police_logo" />
        </div>
        <Link to="/">
        <div className="title">
            RAJASTHAN POLICE HACKATHON 1.0
        </div>
        </Link>
        <div className="logo">
          <img src={logo} alt="police_logo" />
        </div>
      </div>
    </>
  )
}

export default nav
