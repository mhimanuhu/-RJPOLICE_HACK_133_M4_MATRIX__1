import React, { useState } from 'react';
import './common.css'; 
import Navbar from "../../components/navbar/nav";
import Fade from "react-awesome-reveal";
import S_nav from "../../police/comp/secondary_nav/police_nav";
const ComplaintsPage = () => {
    const [complaints, setComplaints] = useState([
      {
        id: 1,
        name: 'John Doe',
        date: '2024-01-18',
        anonymous: false,
        text: 'Loud Noise',
        description: 'Loud music played during late hours.',
      },
      {
        id: 2,
        name: 'Anonymous User',
        date: '2024-01-17',
        anonymous: true,
        text: 'Vandalism',
        description: 'Graffiti on public property.',
      },
      {
        id: 3,
        name: "Alice Johnson",
        date: "2024-01-16",
        anonymous: false,
        text: "Street Parking Issue",
        description: "Cars parked in no-parking zones causing traffic congestion."
      },
      {
        id: 4,
        name: "Anonymous Contributor",
        date: "2024-01-15",
        anonymous: true,
        text: "Garbage Dumping",
        description: "Illegal dumping of waste in the neighborhood."
      },
      {
        id: 5,
        name: "Mark Thompson",
        date: "2024-01-14",
        anonymous: false,
        text: "Stray Animals",
        description: "Stray dogs roaming around, posing a safety risk."
      },
      {
        id: 6,
        name: "Anonymous Resident",
        date: "2024-01-13",
        anonymous: true,
        text: "Broken Street Light",
        description: "Street light not functioning, needs repair."
      },
      {
        id: 7,
        name: "Emily Davis",
        date: "2024-01-12",
        anonymous: false,
        text: "Potholes",
        description: "Multiple potholes on the main road causing damage to vehicles."
      },
      {
        id: 8,
        name: "Anonymous Citizen",
        date: "2024-01-11",
        anonymous: true,
        text: "Unattended Garden",
        description: "Community garden not being maintained, becoming an eyesore."
      },
      {
        id: 9,
        name: "Robert Miller",
        date: "2024-01-10",
        anonymous: false,
        text: "Traffic Congestion",
        description: "Heavy traffic during rush hours, need traffic management."
      },
      {
        id: 10,
        name: "Anonymous Observer",
        date: "2024-01-09",
        anonymous: true,
        text: "Illegal Parking",
        description: "Cars parked on sidewalks, hindering pedestrian movement."
      },
      {
        id: 11,
        name: "Sophie White",
        date: "2024-01-08",
        anonymous: false,
        text: "Littering",
        description: "Excessive litter in the park, impacting the environment."
      },
      {
        id: 12,
        name: "Anonymous Resident",
        date: "2024-01-07",
        anonymous: true,
        text: "Noisy Construction",
        description: "Construction work with loud machinery during non-permitted hours."
      },
      {
        id: 13,
        name: "David Clark",
        date: "2024-01-06",
        anonymous: false,
        text: "Graffiti",
        description: "Graffiti on public buildings, needs immediate cleanup."
      },
      {
        id: 14,
        name: "Anonymous Neighbor",
        date: "2024-01-05",
        anonymous: true,
        text: "Sidewalk Obstruction",
        description: "Overgrown bushes blocking the sidewalk, creating hazards."
      },
      {
        id: 15,
        name: "Jessica Turner",
        date: "2024-01-04",
        anonymous: false,
        text: "Broken Playground Equipment",
        description: "Children's playground equipment in disrepair, posing safety concerns."
      },
      {
        id: 16,
        name: "Anonymous Contributor",
        date: "2024-01-03",
        anonymous: true,
        text: "Abandoned Vehicles",
        description: "Abandoned cars on the street, need removal."
      }
      // Add more complaints as needed
    ]);
  
    const [showAnonymous, setShowAnonymous] = useState(true);
  
    const handleFilterChange = (e) => {
      setShowAnonymous(e.target.checked);
    };
  
    const filteredComplaints = showAnonymous
      ? complaints
      : complaints.filter((complaint) => !complaint.anonymous);
  
    return (
        <>
        <Navbar />
        <S_nav />
        <Fade>
      <div className="complaints-container">
        <h1 className="complaints-title">Police Department Complaints</h1>
  
        <label className="complaints-filter-label">
          <input
            type="checkbox"
            checked={showAnonymous}
            onChange={handleFilterChange}
          />
          Show Anonymous Complaints
        </label>
  
        <table className="complaints-table">
          <thead>
            <tr>
              <th className="complaints-table-header">ID</th>
              <th className="complaints-table-header">Name</th>
              <th className="complaints-table-header">Date</th>
              <th className="complaints-table-header">Complaint Text</th>
              <th className="complaints-table-header">Description</th>
              <th className="complaints-table-header">Anonymous</th>
            </tr>
          </thead>
          <tbody>
            {filteredComplaints.map((complaint) => (
              <tr key={complaint.id}>
                <td className="complaints-table-cell">{complaint.id}</td>
                <td className="complaints-table-cell">
                  {complaint.anonymous ? 'Anonymous' : complaint.name}
                </td>
                <td className="complaints-table-cell">{complaint.date}</td>
                <td className="complaints-table-cell">{complaint.text}</td>
                <td className="complaints-table-cell">{complaint.description}</td>
                <td className="complaints-table-cell">
                  {complaint.anonymous ? 'Yes' : 'No'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
     </Fade>
      </>
    );
  };
  
  export default ComplaintsPage;