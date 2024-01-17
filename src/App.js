import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Auth from "./user/authentication/authenticate";
import Reset from "./user/authentication/reset";
import Feedback from "./user/feedback/form";
import Dashboard from "./police/dashboard/dashboard";
import Add from './police/dashboard/add';
import Ranks from "./police/dashboard/rank";
import ViewFeed from "./police/dashboard/viewfeed";


const App = () => {
  return (
    <Routes>
   <Route path="/" element={<Auth />} />
   <Route path="/reset" element={<Reset />} />
   <Route path="/user/feedback" element={<Feedback />} />
   <Route path="/police/dashboard" element={<Dashboard />} />
   <Route path="/police/dashboard/addnumbers" element={<Add />} />
   <Route path="/police/dashboard/viewranks" element={<Ranks />} />
   <Route path="/police/dashboard/view_feedback" element={<ViewFeed />} />
</Routes>
  );
};

export default App;
