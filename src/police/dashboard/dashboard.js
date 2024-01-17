import React from 'react';
import Navbar from '../../components/navbar/nav';
import S_nav from "../comp/secondary_nav/police_nav";
const dasbhoard = () => {
  return (
    <>

    <Navbar />
    <S_nav />
    <div className="welcome">
      <h1>Hello User</h1>
      <p>Rajasthan Police Welcomes You !!</p>
      <p>Explore tabs and identify public issues</p>
    </div>
    </>
  )
}

export default dasbhoard
