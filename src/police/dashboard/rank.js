import React from 'react';
import "./common.css";
import Navbar from '../../components/navbar/nav';
import S_nav from "../comp/secondary_nav/police_nav";
import logo from "../../assets/images/rajpolicelogo.png";
const PoliceStationRankingTable = () => {
  // Example data for police stations
  const policeStations = [
    { id: 1, name: 'Station A', points: 100 },
    { id: 2, name: 'Station B', points: 90 },
    { id: 3, name: 'Station C', points: 80 },
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
              <button className="view-feed-btn" onClick={() => handleViewFeed(station.id)}>
                View Feed
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </>
  );
};

export default PoliceStationRankingTable;
