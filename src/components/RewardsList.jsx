import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { dashboardState } from '../recoil/atoms';
import RewardItem from './RewardItem';
import { BiSearch } from "react-icons/bi";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";


const RewardsList = () => {
  const rewards = useRecoilValue(dashboardState);
  const [sortBy, setSortBy] = useState('date');
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);

  const filteredRewards = rewards
    .filter((reward) => reward.brand.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => {
      if (sortBy === 'points') {
        return b.rewardPoints - a.rewardPoints;
      }
      return new Date(b.purchaseDate) - new Date(a.purchaseDate);
    });

    const totalItems = rewards.length;
    
    const totalPages = parseInt(totalItems/20 + 1);
    

    const handlePrevClick = () => {
      if(page >= 2)
        setPage(prev => prev - 1)
    }

    const handleNextClick = () => {
      if(page < totalPages)
        setPage(prev => prev + 1)
    }

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
        {filteredRewards.slice((page - 1) * 20, page * 20).map((reward) => (
          <RewardItem key={reward.id} reward={reward} />
        ))}
      </ul>

      <div className='flex justify-center gap-3 mt-8 mb-4 text-black text-2xl font-black'>
        <button onClick={handlePrevClick}><GrPrevious /></button>
        <button onClick={handleNextClick}><GrNext /></button>
      </div>

    </div>
  );
};

export default RewardsList;
