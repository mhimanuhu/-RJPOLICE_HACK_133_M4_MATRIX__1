import React, { useState } from 'react';
import './complain.css'; // Import the CSS file
import Navbar from "../../components/navbar/nav";
import UserNav from '../user_nav/usernav';
const ComplaintForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    contactNumber: '',
    email: '',
    address: '',
    city: '',
    district: '',
    policeStation: '',
    complaintType: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to submit the form data, e.g., send it to a server or API

    // For now, let's just log the form data
    console.log('Form Data:', formData);

    // Reset the form after submission
    setFormData({
      name: '',
      contactNumber: '',
      email: '',
      address: '',
      city: '',
      district: '',
      policeStation: '',
      complaintType: '',
      description: '',
    });
  };

  return (
    <>
    <Navbar />
    <UserNav />
    <div className="container">
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <div className="form-group-item">
            <label className="form-label">
              Name: | नाम:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input"
                placeholder="Enter your Name"
              />
            </label>
          </div>
          <div className="form-group-item">
            <label className="form-label">
              Contact Number: | मोबाइल नंबर:
              <input
                type="tel"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                required
                className="form-input"
                placeholder='Enter your number'
              />
            </label>
          </div>
        </div>

        <label className="form-label">
          Email: | ईमेल
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="form-input"
            placeholder='Enter your email'
          />
        </label>

        <label className="form-label">
          Address: | पता:
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            className="form-textarea"
            placeholder='Enter your address'
          />
        </label>

        <div className="form-group">
          <div className="form-group-item">
            <label className="form-label">
              City: | शहर
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
                className="form-input"
                placeholder='Enter your city'
              />
            </label>
          </div>
          <div className="form-group-item">
            <label className="form-label">
              District: | ज़िला
              <input
                type="text"
                name="district"
                value={formData.district}
                onChange={handleChange}
                required
                className="form-input"
                placeholder='Enter your district'
              />
            </label>
          </div>
          <div className="form-group-item">
            <label className="form-label">
              Police Station: | पुलिस स्टेशन
              <input
                type="text"
                name="policeStation"
                value={formData.policeStation}
                onChange={handleChange}
                required
                className="form-input"
                placeholder='Enter Police Station Name'
              />
            </label>
          </div>
        </div>

        <label className="form-label">
          Complaint Type: | शिकायत प्रकार
          <select
            name="complaintType"
            value={formData.complaintType}
            onChange={handleChange}
            required
            className="form-select"
            placeholder="Type your Complaint"
          >
            <option value="" disabled>
              Select a complaint type | शिकायत का प्रकार चुनें
            </option>
            <option value="Theft">Theft</option>
            <option value="Assault">Assault</option>
            <option value="Fraud">Fraud</option>
            {/* Add more options as needed */}
          </select>
        </label>

        <label className="form-label">
          Description: | विवरण
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            className="form-textarea"
            placeholder='Give descriptionn of your complaint'
          />
        </label>
    
        <button type="submit" className="form-button">
          Submit Complaint | शिकायत प्रस्तुत करें
        </button>
      </form>
    </div>
    </>
  );
};

export default ComplaintForm;
