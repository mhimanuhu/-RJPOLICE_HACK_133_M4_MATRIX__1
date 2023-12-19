import React, { useState, useEffect } from 'react';
import FeedbackForm from './roles/user/feedbackform';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Loader from './components/loading/loading';
import LeaderboardPage from './roles/police/leaderboard/leaderboard';
const App = () => {
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const loadAssets = async () => {
      
      await loadAssetsFunction1();
      await loadAssetsFunction2();
     
      setLoading(false);
    };

    loadAssets();
  }, []);

  const loadAssetsFunction1 = () => {
   
    return new Promise((resolve) => {
     
      setTimeout(resolve, 2000);
    });
  };

  const loadAssetsFunction2 = () => {
   
    return new Promise((resolve) => {
   
      setTimeout(resolve, 1500);
    });
  };
  return (
    <>
     <div>
      {loading ? (
      
        <div>
          <Loader/>
        
        </div>
      ) : (
        <>
        <FeedbackForm/>
        <LeaderboardPage />
        </>
      )}
    </div>
    </>
  )
}

export default App
