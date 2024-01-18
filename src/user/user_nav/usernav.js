import React from 'react';
import "./usernav.css";

import { Link } from 'react-router-dom';
const user_nav = () => {
  return (
    <>

    <div className="pol_nav_container">
        <Link to="/user/feedback"><div className="nav_item">
            FEEDBACK FORM
        </div></Link>
        <Link to="/user/register_complain" ><div className="nav_item">
            REGISTER COMPLAINT
        </div></Link>
        
        
    </div>

    </>
  )
}

export default user_nav
