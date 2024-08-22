import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { dashboardState } from '../recoil/atoms';
import RewardItem from './RewardItem';
import { BiSearch } from "react-icons/bi";

const RewardsList = () => {
  const rewards = useRecoilValue(dashboardState);
  const [sortBy, setSortBy] = useState('date');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredRewards = rewards
    .filter((reward) => reward.brand.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => {
      if (sortBy === 'points') {
        return b.rewardPoints - a.rewardPoints;
      }
      return new Date(b.purchaseDate) - new Date(a.purchaseDate);
    });

  return (
    <div className='pt-40 mx-10 mb-5'>
      <div className="flex justify-between mb-8">
        <div className='relative flex items-center'>
          <input
            type="text"
            placeholder="Search by brand"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="p-2 border-2 border-gray-400 rounded-lg w-64"
          />
          <BiSearch className='absolute text-gray-600 text-xl right-4' />
        </div>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="p-2 border-2 border-gray-400 text-gray-700 rounded-lg"
        >
          <option value="date">Sort by Date</option>
          <option value="points">Sort by Points</option>
        </select>
      </div>
      <ul className="grid grid-cols-2 gap-y-6 gap-x-9">
        {filteredRewards.map((reward) => (
          <RewardItem key={reward.id} reward={reward} />
        ))}
      </ul>
    </div>
  );
};

export default RewardsList;
