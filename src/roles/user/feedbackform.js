import React, { useState } from 'react';
import styled from 'styled-components';
import Select from 'react-select';
import Navbar from '../../navbar/navbar';
import { Link } from 'react-router-dom';

const FullPageContainer = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  margin: 0;
`;

const FormContainer = styled.form`
  width: 100%;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
`;

const RadioGroup = styled.div`
  display: flex;
`;

const RadioButton = styled.label`
  margin-right: 20px;
  display: flex;
  align-items: center;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

const SubmitButton = styled.button`
  background-color: #2355d5;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
`;

const customStyles = {
  control: (provided) => ({
    ...provided,
    width: '100%',
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    boxSizing: 'border-box',
  }),
};

const policeStationOptions = [
  { value: 'station1', label: 'Jaipur' },
  { value: 'station2', label: 'Jodhpur' },
  { value: 'station3', label: 'Kota' },
  { value: 'station4', label: 'Bikaner' },
  { value: 'station5', label: 'Ajmer' },
  { value: 'station6', label: 'Udaipur' },
  { value: 'station7', label: 'Bharatpur' },
  { value: 'station8', label: 'Alwar' },
  { value: 'station9', label: 'Bhilwara' },
  { value: 'station10', label: 'Sikar' },
  { value: 'station11', label: 'Pali' },
  { value: 'station12', label: 'Sri Ganganagar' },
  { value: 'station13', label: 'Hanumangarh' },
  { value: 'station14', label: 'Beawar' },
  { value: 'station15', label: 'Jaisalmer' },
  { value: 'station16', label: 'Churu' },
  { value: 'station17', label: 'Dungarpur' },
  { value: 'station18', label: 'Banswara' },
  { value: 'station19', label: 'Tonk' },
  { value: 'station20', label: 'Sawai Madhopur' },
  { value: 'station21', label: 'Dausa' },
  { value: 'station22', label: 'Barmer' },
  { value: 'station23', label: 'Sirohi' },
  { value: 'station24', label: 'Jhunjhunu' },
  { value: 'station25', label: 'Nagaur' },
  { value: 'station26', label: 'Ganganagar' },
  { value: 'station27', label: 'Karauli' },
  { value: 'station28', label: 'Chittorgarh' },
  { value: 'station29', label: 'Jalore' },
  { value: 'station30', label: 'Rajsamand' },
  { value: 'station31', label: 'Bundi' },
  { value: 'station32', label: 'Baran' },
  { value: 'station33', label: 'Kishangarh' },
  { value: 'station34', label: 'Neemuch' },
  { value: 'station35', label: 'Pratapgarh' },
  { value: 'station36', label: 'Pali' },
  { value: 'station37', label: 'Chhabra' },
  { value: 'station38', label: 'Fatehpur' },
  { value: 'station39', label: 'Phulera' },
  { value: 'station40', label: 'Baroda' },
  { value: 'station41', label: 'Banswara' },
  { value: 'station42', label: 'Deoli' },
  { value: 'station43', label: 'Rajgarh' },
  { value: 'station44', label: 'Shahpura' },
  { value: 'station45', label: 'Kapurthala' },
  { value: 'station46', label: 'Khandela' },
  { value: 'station47', label: 'Pilani' },

];

const FeedbackForm = () => {
  const [policeStation, setPoliceStation] = useState('');
  const [satisfaction, setSatisfaction] = useState('');
  const [feedbackText, setFeedbackText] = useState('');
  const [personalFeedback, setPersonalFeedback] = useState('');

  const handleSatisfactionChange = (event) => {
    setSatisfaction(event.target.value);
    setFeedbackText('');
  };

  const handleFeedbackTextChange = (event) => {
    setFeedbackText(event.target.value);
  };

  const handlePersonalFeedbackChange = (event) => {
    setPersonalFeedback(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', { policeStation, satisfaction, feedbackText, personalFeedback });
  };

  return (
    <>
      <Navbar pagename="Feedback Form" />
      <FullPageContainer>
        <FormContainer onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="policeStation">Select Police Station:</Label>
            <Select
              id="policeStation"
              value={policeStationOptions.find((option) => option.value === policeStation)}
              onChange={(selectedOption) => setPoliceStation(selectedOption.value)}
              options={policeStationOptions}
              styles={customStyles}
              placeholder="Select a Police Station"
            />
          </FormGroup>
          <FormGroup>
            <Label>Are you happy with the services provided?</Label>
            <RadioGroup>
              <RadioButton>
                <input
                  type="radio"
                  value="yes"
                  checked={satisfaction === 'yes'}
                  onChange={handleSatisfactionChange}
                  required
                />
                Yes
              </RadioButton>
              <RadioButton>
                <input
                  type="radio"
                  value="no"
                  checked={satisfaction === 'no'}
                  onChange={handleSatisfactionChange}
                  required
                />
                No
              </RadioButton>
            </RadioGroup>
          </FormGroup>
          {satisfaction === 'yes' || satisfaction === 'no' ? (
            <FormGroup>
              <Label htmlFor="feedbackText">
                {satisfaction === 'yes' ? 'What made you happy?' : 'What disappointed you?'}
              </Label>
              <TextArea
                id="feedbackText"
                value={feedbackText}
                onChange={handleFeedbackTextChange}
                required
              />
            </FormGroup>
          ) : null}
          <FormGroup>
            <Label htmlFor="personalFeedback">Personal Feedback:</Label>
            <TextArea
              id="personalFeedback"
              value={personalFeedback}
              onChange={handlePersonalFeedbackChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Link to="/success"> <SubmitButton type="submit">Submit</SubmitButton>
            </Link>
          </FormGroup>
        </FormContainer>
      </FullPageContainer>
    </>
  );
};

export default FeedbackForm;
