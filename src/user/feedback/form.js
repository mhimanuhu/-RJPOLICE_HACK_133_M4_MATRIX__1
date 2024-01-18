import React, { useState } from 'react';
import './form.css';
import UserNav from "../user_nav/usernav";

import { Fade } from "react-awesome-reveal";
import Navbar from '../../components/navbar/nav';
const App = () => {
  const [formData, setFormData] = useState({
    date: '',
    mobile: '',
    otp: '',
    name: '',
    address: '',
    city: '',
    pinCode: '', 
    email: '',
    feedback: '',
    policeDistrict: '',
    policeStation: '',
    rating: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };

  const handleReset = () => {
    setFormData({
      date: '',
      mobile: '',
      otp: '',
      name: '',
      address: '',
      city: '',
      pinCode: '',
      email: '',
      feedback: '',
      policeDistrict: '',
      policeStation: '',
      rating: '',
    });
  };

  return (
    <>
    <Navbar />
    <UserNav />
    <Fade>
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <label>Date:</label>
          <input type="date" name="date" value={formData.date} onChange={handleChange} required />
        </div>
        <div className="form-row">
          <label>Mobile:</label>
          <input type="tel" name="mobile" placeholder="Enter your Mobile Number" value={formData.mobile} onChange={handleChange} required />
        </div>
        <div className="form-row">
          <label>Get OTP:</label>
          <button type="button">Get OTP</button>
        </div>
        <div className="form-row">
          <label>Enter OTP:</label>
          <input placeholder="Enter OTP" type="text" name="otp" value={formData.otp} onChange={handleChange} required />
        </div>
        <div className="form-row">
          <label>Name:</label>
          <input type="text" placeholder="Enter your Name" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="form-row">
          <label>Address:</label>
          <input name="address" placeholder="Enter your Address" value={formData.address} onChange={handleChange} required />
        </div>
        <div className="form-row">
          <label>City / Village:</label>
          <input placeholder="Enter your city / village" type="text" name="city" value={formData.city} onChange={handleChange} required />
        </div>
        <div className="form-row">
          <label>Pin Code:</label>
          <input type="number" placeholder="Enter your PIN Code" name="pinCode" value={formData.pinCode} onChange={handleChange} required />
        </div>
        <div className="form-row">
          <label>Email:</label>
          <input placeholder="Enter your Email ID" type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-row">
          <label>Details:</label>
          <input placeholder="Enter your Feedback / Details" name="feedback" value={formData.feedback} onChange={handleChange} required />
        </div>
        <div className="form-row">
          <label>Police District:</label>
          <input
            placeholder="Enter Police District"
            type="text"
            name="policeDistrict"
            value={formData.policeDistrict}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-row">
          <label>Police Station:</label>
          <input
            placeholder="Enter Police Stationn Name"
            type="text"
            name="policeStation"
            value={formData.policeStation}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-row">
          <label>Rating:</label>
          <input placeholder="Enter your Rating" type="number" name="rating" value={formData.rating} onChange={handleChange} required />
        </div>
        <div className="form-buttons">
          <button type="submit">Submit</button>
          <button type="button" onClick={handleReset}>
            Reset
          </button>
        </div>
      </form>
    </div>
    </Fade>
    </>
  );
};

export default App;
