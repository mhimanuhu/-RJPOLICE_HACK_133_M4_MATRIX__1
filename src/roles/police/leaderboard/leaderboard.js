import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from '../../../navbar/navbar';
import './leaderboard.css';

const LeaderboardContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const SearchInput = styled.input`
  margin-right: 10px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const LeaderboardCards = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const PoliceStationCard = styled.div`
  width: 100%;
  margin-bottom: 20px;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PoliceStationLogo = styled.img`
  max-width: 100%;
  max-height: 100px;
  margin-bottom: 10px;
`;

const PoliceStationDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const citiesOfRajasthan = [
  "Jaipur",
  "Udaipur",
  "Jodhpur",
  "Ajmer",
  "Bikaner",
  "Kota",
  "Alwar",
  "Sikar",
  "Bharatpur",
  "Pali",
  "Sawai Madhopur",
  "Chittorgarh",
  "Hanumangarh",
  "Barmer",
  "Sirohi",
  "Jhunjhunu",
  "Dausa",
  "Tonk",
  "Nagaur",
  "Jaisalmer",
  "Churu",
  "Bhilwara",
  "Dungarpur",
  "Karauli",
  "Banswara",
  "Jhalawar",
  "Dholpur",
  "Sirohi",
  "Rajsamand",
  "Sikar",
  "Bundi",
  "Bharatpur",
  "Baran",
  "Pratapgarh",
  "Chittorgarh",
  "Sri Ganganagar",
  "Jalore",
  "Kota",
  "Chittorgarh",
  "Dhaulpur",
  "Bikaner",
  "Bhilwara",
  "Banswara",
  "Baran",

]; // Your array of cities

const policeStationsData = citiesOfRajasthan.map((city, index) => ({
  id: index + 1,
  name: `${city} Police Station`,
  logo: 'rajpolicelogo.png',
  points: Math.floor(Math.random() * 100) + 100, // Random points between 100 and 199
}));

const LeaderboardPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPoliceStations = policeStationsData
    .filter((station) => station.name.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => b.points - a.points); // Sort in high to low points

  return (
    <>
      <Navbar pagename="Leaderboard Rankings . . . " />
      <LeaderboardContainer>
        <FilterContainer>
          <SearchInput
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </FilterContainer>
        <LeaderboardCards>
          {filteredPoliceStations.map((station) => (
            <div className="id_container" key={station.id}>
              <div className="logo">
                <img src={station.logo} alt={`${station.name} logo`} />
              </div>
              <div className="station_name">{station.name}</div>
              <div className="station_points">{station.points}</div>
            </div>
          ))}
        </LeaderboardCards>
      </LeaderboardContainer>
    </>
  );
};

export default LeaderboardPage;
