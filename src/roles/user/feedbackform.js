import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from '../../navbar/navbar';
const FullPageContainer = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  margin: 0;
`;

const FormContainer = styled.form`
  width: 100%;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
`;

const Select = styled.select`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
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
            value={policeStation}
            onChange={(event) => setPoliceStation(event.target.value)}
            required
          >
            <option value="">Select a Police Station</option>
            <option value="station1">Police Station 1</option>
            <option value="station2">Police Station 2</option>
          </Select>
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
          <SubmitButton type="submit">Submit</SubmitButton>
        </FormGroup>
      </FormContainer>
    </FullPageContainer>
    </>
  );
};

export default FeedbackForm;
