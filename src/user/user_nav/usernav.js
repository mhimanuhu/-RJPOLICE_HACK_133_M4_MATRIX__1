import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './usernav.css';

const UserNav = () => {
  const location = useLocation();

  return (
    <>
      <div className="pol_nav_container">
        <Link to="/user/feedback">
          <div className={`nav_item ${location.pathname === "/user/feedback" ? "active" : ""}`}>
            FEEDBACK FORM | प्रतिक्रिया रूप
          </div>
        </Link>
        <Link to="/user/register_complain">
          <div className={`nav_item ${location.pathname === "/user/register_complain" ? "active" : ""}`}>
            REGISTER COMPLAINT | शिकायत दर्ज करें
          </div>
        </Link>
      </div>
    </>
  );
}

export default UserNav;
