import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashboardPage from './pages/dashboardPage';
import RewardDetailsPage from './pages/rewardDetailsPage';
import HomePage from './pages/homePage';

const App = () => {
  return (<>
    <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/dashboard" element={<DashboardPage/>} />
          <Route path="/reward/:id" element={<RewardDetailsPage/>} />
        </Routes>
    </BrowserRouter>
  </>
  );
};

export default App;
