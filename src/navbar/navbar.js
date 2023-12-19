import React from 'react'
import "./nav.css"
const navbar = (props) => {
  return (
    <>
    <div className='nav_container' >
      <div className='raj_police_logo'>
        <img src="./rajpolicelogo.png" />
      </div>

      <div className="current_page">
        {props.pagename}
      </div>

      <div className="myprofile">
        MyProfile
      </div>
    </div>
    </>
  )
}

export default navbar
