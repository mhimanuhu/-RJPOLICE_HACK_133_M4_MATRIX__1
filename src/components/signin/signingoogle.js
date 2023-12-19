// GoogleSignInPage.js

import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase'; // Import your Firebase configuration file

const FullPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0;
`;

const SignInContainer = styled.div`
  text-align: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const GoogleSignInButton = styled.button`
  background-color: #4285f4;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const GoogleSignInPage = ({ history }) => {
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    if (user) {
    
      history.push('/feedback-form');
    }
  }, [user, history]);

  const handleSignIn = async () => {
   
    const provider = new auth.GoogleAuthProvider();
    try {
      await auth.signInWithPopup(provider);
    } catch (error) {
      console.error('Error signing in with Google:', error.message);
    }
  };

  return (
    <FullPageContainer>
      <SignInContainer>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <h2>Sign in with Google</h2>
            <GoogleSignInButton onClick={handleSignIn}>
              Sign in with Google
            </GoogleSignInButton>
          </>
        )}
      </SignInContainer>
    </FullPageContainer>
  );
};

export default GoogleSignInPage;
