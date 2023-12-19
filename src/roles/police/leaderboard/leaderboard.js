import React, { useState } from 'react';
import styled from 'styled-components';
import "./leaderboard.css";
import Navbar from '../../../navbar/navbar';
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

const policeStationsData = Array.from({ length: 20 }, (_, index) => ({
    id: index + 1,
    name: `Police Station ${index + 1}`,
    logo: 'rajpolicelogo.png',
    points: Math.floor(Math.random() * 100) + 100, // Random points between 100 and 199
  }));

const LeaderboardPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPoliceStations = policeStationsData.filter((station) =>
    station.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
          <div className="id_container">
            <div className='logo'>
                <img src={station.logo} alt={`${station.name} logo `} />
            </div>
            <div className="station_name">
                {station.name}
            </div>
            <div className="station_points">
                {station.points}
            </div>
          </div>
        ))}
      </LeaderboardCards>
    </LeaderboardContainer>
    </>
  );
};

export default LeaderboardPage;


