import React, { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { dashboardState } from '../recoil/atoms';
import { fetchRewards } from '../services/api-communicator';
import RewardsList from './RewardsList';
import { RxDashboard } from "react-icons/rx";


const Dashboard = () => {
  const setRewards = useSetRecoilState(dashboardState);
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

  return (
    <div>

      <div className='bg-black pt-4 px-6 mb-6 pb-3 shadow-gray-700 shadow-lg w-full fixed z-10'>
        
        <div className='flex items-center text-5xl text-white font-bold mb-4 gap-x-4'>
          <div><RxDashboard /></div>
          <h1 style={{fontFamily: "Quicksand"}}>Dashboard</h1>
        </div>

        <h2 className="text-2xl font-semibold flex">Total Reward Points: <p className='text-[#da1f44] pl-2 mt-[1px]'>{totalPoints}</p></h2>
      </div>

      <RewardsList />
    </div>
  );
};

export default Dashboard;
