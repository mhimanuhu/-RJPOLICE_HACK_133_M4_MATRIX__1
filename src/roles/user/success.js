import React, { useState, useEffect } from 'react';
import './success.css'; // Assuming you have a CSS file for styling

const Success = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay and then set loading to false
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulated 2 seconds delay

    // Cleanup the timeout on component unmount
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="success-container">
      
        <div className="checkmark">&#10003;</div>
      
      {loading ? null : <div className="success-message">Success!</div>}
    </div>
  );
};

export default Success;
