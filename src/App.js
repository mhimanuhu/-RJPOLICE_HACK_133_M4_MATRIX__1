import React, { useState, useEffect } from 'react';
import FeedbackForm from './roles/user/feedbackform';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Loader from './components/loading/loading';
import LeaderboardPage from './roles/police/leaderboard/leaderboard';
import ProfilePage from './roles/user/profile'; 
import Success from './roles/user/success';

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
    <Router>
      <div>
        {loading ? (
          <div>
            <Loader />
          </div>
        ) : (
          <Routes> {/* Use Routes instead of Switch */}
            <Route path="/" element={<FeedbackForm />} /> {/* Add default route */}
            <Route path="/leaderboard" element={<LeaderboardPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/success" element={<Success/>} />
          </Routes>
        )}
      </div>
    </Router>
  );
};

export default App;
