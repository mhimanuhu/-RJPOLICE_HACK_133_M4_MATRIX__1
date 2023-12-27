import React from 'react';
import Navbar from '../../navbar/navbar';
import "./profile.css";
function ProfilePage() {
  return (
    <>
    <Navbar pagename="MY PROFILE" />
   <div className='profile_container'>
    <div className='section1'>
      <img src="./manu.png" alt='profile image' />
    </div>
    <div className='section2'>
      <p>Manu Sharma</p>
      <p>Jaipur</p>
    </div>
    <div className='logout'>
      Logout
    </div>
   </div>
    </>
  );
}

export default ProfilePage;
