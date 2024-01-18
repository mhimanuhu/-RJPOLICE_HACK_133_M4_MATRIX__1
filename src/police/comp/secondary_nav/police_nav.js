import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./policenav.css";

const PoliceNav = () => {
  const location = useLocation();

  return (
    <>
      <div className="pol_nav_container">
        <Link to="/police/dashboard/addnumbers">
          <div className={`nav_item ${location.pathname === "/police/dashboard/addnumbers" ? "active" : ""}`}>
            ADD NUMBERS
          </div>
        </Link>
        <Link to="/police/dashboard/viewranks">
          <div className={`nav_item ${location.pathname === "/police/dashboard/viewranks" ? "active" : ""}`}>
            VIEW RANKINGS
          </div>
        </Link>
        <Link to="/police/dashboard/view_feedback">
          <div className={`nav_item ${location.pathname === "/police/dashboard/view_feedback" ? "active" : ""}`}>
            VIEW FEEDBACK
          </div>
        </Link>
        <Link to="/police/dashboard/view_complaints">
          <div className={`nav_item ${location.pathname === "/police/dashboard/view_complaints" ? "active" : ""}`}>
            VIEW COMPLAINTS
          </div>
        </Link>
      </div>
    </>
  )
}

export default PoliceNav;
