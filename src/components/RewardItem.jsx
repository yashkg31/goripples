import React from 'react';
import { Link } from 'react-router-dom';
import { GiTakeMyMoney } from "react-icons/gi";


const RewardItem = ({ reward }) => {
  return (
    <li className="border-2 border-white p-4 py-6 rounded-lg hover:shadow-lg hover:shadow-black transition-shadow duration-300 bg-[#090909eb]">
      <Link to={`/reward/${reward.id}`} className='flex justify-between items-center'>
        <div>
          <h1 className="font-bold text-xl pb-1 text-[#c3193b]">{reward.brand}</h1>
          <p>Purchase Date: {new Date(reward.purchaseDate).toLocaleDateString()}</p>
          <p>Reward Points: {reward.rewardPoints}</p>
        </div>
        <div>
          <GiTakeMyMoney className='text-5xl' />
        </div>
      </Link>
    </li>
  );
};

export default RewardItem;
