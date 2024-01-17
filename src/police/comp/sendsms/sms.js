// Import necessary libraries
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as XLSX from 'xlsx';

import { Fade } from "react-awesome-reveal";
import "./sms.css";

// Main component
const BulkSMSUploader = () => {
  const [data, setData] = useState([]);
  const [draftSMS, setDraftSMS] = useState('');

  // Function to handle file upload (CSV or XLSX)
  const handleFileUpload = (e) => {
    const file = e.target.files[0];

    // Check the file type
    const fileType = file.name.split('.').pop().toLowerCase();

    if (fileType === 'csv') {
      // Parse CSV file using react-papaparse
      import('papaparse').then(({ default: Papa }) => {
        Papa.parse(file, {
          complete: (result) => {
            setData(result.data);
            toast.success('CSV file uploaded successfully!');
          },
          header: false,
        });
      });
    } else if (fileType === 'xlsx') {
      // Parse XLSX file using xlsx
      const reader = new FileReader();

      reader.onload = (e) => {
        const workbook = XLSX.read(e.target.result, { type: 'binary' });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];

        const parsedData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
        setData(parsedData);
        toast.success('XLSX file uploaded successfully!');
      };

      reader.readAsBinaryString(file);
    } else {
      toast.error('Unsupported file type. Please upload a CSV or XLSX file.');
    }
  };

  // Function to handle sending SMS
  const handleSendSMS = () => {
    // Implement your logic for sending SMS using the 'draftSMS' and 'data' state
    // For example, you can use an API to send SMS
    console.log('Sending SMS:', draftSMS, data);
    toast.success('SMS sent successfully!');
  };

  return (
    <div>
        <Fade>
       <h2>ADD NUMBERS  </h2>
      <input type="file" accept=".csv, .xlsx" onChange={handleFileUpload} />
      <div className='draft' >
        <label >Draft SMS:</label>
        <input placeholder="Enter your message" type="text" value={draftSMS} onChange={(e) => setDraftSMS(e.target.value)} />
      </div>
      <button className='sendsms' onClick={handleSendSMS}>Send SMS</button>
      <table className="sms-table">
        <thead>
          <tr>
            <th>Sr No</th>
            <th>Phone No</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row[0]}</td>
              <td>{row[1]}</td>
            </tr>
          ))}
        </tbody>
      </table>

      

      

      <ToastContainer />
      </Fade>
    </div>

  );
};

export default BulkSMSUploader;
