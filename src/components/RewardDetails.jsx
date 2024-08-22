import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { dashboardState } from '../recoil/atoms';
import { ImCross } from "react-icons/im";


const RewardDetails = () => {
  const { id } = useParams();
  const rewards = useRecoilValue(dashboardState);
  const reward = rewards.find((reward) => reward.id === parseInt(id));
  const navigate = useNavigate();

  if (!reward) {
    return <p>Reward not found</p>;
  }

  const handleClick = () => {
    navigate("/");
  }

  return (
    <div className="p-10 shadow-2xl shadow-gray-900 rounded-lg bg-[#090909eb] border-white border-4">
      <div className='flex flex-row justify-between gap-20'>
        <div>
          <h2 className="text-4xl font-bold pb-8 text-[#c3193b]">{reward.brand}</h2>
          <p className="mb-2 text-2xl">Purchase Date: {new Date(reward.purchaseDate).toLocaleDateString()}</p>
          <p className='text-2xl'>Reward Points: {reward.rewardPoints}</p>
        </div>
        <button className='text-xl font-extrabold mb-auto' onClick={handleClick}>
          <ImCross />
        </button>
      </div>
      
    </div>
  );
};

export default RewardDetails;
