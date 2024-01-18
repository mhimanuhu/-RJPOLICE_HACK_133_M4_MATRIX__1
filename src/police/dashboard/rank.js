import React from 'react';
import "./common.css";
import Navbar from '../../components/navbar/nav';
import S_nav from "../comp/secondary_nav/police_nav";
import logo from "../../assets/images/rajpolicelogo.png";

import { Slide } from "react-awesome-reveal";
import { Link } from 'react-router-dom';
const PoliceStationRankingTable = () => {
  // Example data for police stations
  const policeStations = [
    { id: 1, name: 'Khatipura Station', points: 100 },
    { id: 2, name: 'Kardhani Station', points: 90 },
    { id: 3, name: 'Murlipura Station', points: 80 },
    // Add more police stations as needed
  ];

  const handleViewFeed = (stationId) => {
    // Handle the "View Feed" button click for the given police station ID
    console.log(`View Feed clicked for Police Station ID: ${stationId}`);
    // Add your logic for viewing the feed here
  };

  return (
    <>
    <Navbar />
    <S_nav />
    <Slide>
    <table className="ranking-table">
      <thead>
        <tr>
          <th>Police Logo</th>
          <th>Police Station Name</th>
          <th>Points</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {policeStations.map((station) => (
          <tr key={station.id}>
            <td>
              <img src={logo} alt={`Logo of ${station.name}`} className="logo" />
            </td>
            <td>{station.name}</td>
            <td>{station.points}</td>
            <td>
             <Link to="/police/dashboard/view_feedback"> <button className="view-feed-btn" onClick={() => handleViewFeed(station.id)}>
                View Feed
              </button></Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </Slide>
    </>
  );
};

export default PoliceStationRankingTable;
