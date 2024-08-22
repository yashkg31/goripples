import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashboardPage from './pages/dashboardPage';
import RewardDetailsPage from './pages/rewardDetailsPage';

const App = () => {
  return (<>
    <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<DashboardPage/>} />
          <Route path="/reward/:id" element={<RewardDetailsPage/>} />
        </Routes>
    </BrowserRouter>
  </>
  );
};

export default App;
