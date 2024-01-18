import React from 'react';
import "./usernav.css";

import { Link } from 'react-router-dom';
const user_nav = () => {
  return (
    <>

    <div className="pol_nav_container">
        <Link to="/user/feedback"><div className="nav_item">
            FEEDBACK FORM | प्रतिक्रिया रूप
        </div></Link>
        <Link to="/user/register_complain" ><div className="nav_item">
            REGISTER COMPLAINT | शिकायत दर्ज करें
        </div></Link>
        
        
    </div>

    </>
  )
}

export default user_nav
