import React from 'react';
import "./policenav.css";
import { Link } from 'react-router-dom';
const police_nav = () => {
  return (
    <>
    <div className="pol_nav_container">
        <Link to="/police/dashboard/addnumbers"><div className="nav_item">
            ADD NUMBERS
        </div></Link>
        <Link to="/police/dashboard/viewranks" ><div className="nav_item">
            VIEW RANKINGS
        </div></Link>
        
        <Link to="/police/dashboard/view_feedback" ><div className="nav_item">
            VIEW FEEDBACK
        </div></Link>
    </div>
    </>
  )
}

export default police_nav
