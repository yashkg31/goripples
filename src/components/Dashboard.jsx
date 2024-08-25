import React, { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { dashboardState, userDetails } from '../recoil/atoms';
import { fetchRewards } from '../services/api-communicator';
import RewardsList from './RewardsList';
import { RxDashboard } from "react-icons/rx";
import { Link, useNavigate } from 'react-router-dom';


const Dashboard = () => {
  const setRewards = useSetRecoilState(dashboardState);
  const navigate = useNavigate();
  const [user, setUser] = useRecoilState(userDetails);
  const [totalPoints, setTotalPoints] = useState(0);

  useEffect(() => {
    const getRewards = async () => {
      const data = await fetchRewards();
      setRewards(data);
      const total = data.reduce((acc, reward) => acc + reward.rewardPoints, 0);
      setTotalPoints(total);
    };

    getRewards();
  }, [setRewards]);

  const handleLogout = () => {
    setUser({});
    navigate("/");
  }

  return (
    <div>
      <div className='flex justify-between items-center bg-black pt-4 px-6 mb-6 pb-3 shadow-gray-700 shadow-lg w-full fixed z-10'>
        <div>
          <Link to={"/"} className='flex items-center text-5xl text-white font-bold mb-4 gap-x-4'>
            <div><RxDashboard /></div>
            <h1 style={{fontFamily: "Quicksand", fontWeight: 600}}>Dashboard</h1>
          </Link>
          <h2 className="text-2xl font-semibold flex">Total Reward Points: <p className='text-[#da1f44] pl-2 mt-[1px]'>{totalPoints}</p></h2>
        </div>

        <div>
          <div className='flex items-center text-2xl'>
            <p>Welcome, {user.user_data.name}!</p>
            <img src= {user.user_data.image} className='h-8 w-8 m-2'></img>
          </div>
          <button className='underline text-lg hover:text-red-600' onClick={handleLogout}>Logout</button>
        </div>
      </div>
      <RewardsList />
    </div>
  );
};

export default Dashboard;
