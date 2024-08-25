import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { dashboardState } from '../recoil/atoms';
import RewardItem from './RewardItem';
import { BiSearch } from "react-icons/bi";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";


const RewardsList = () => {
  const rewards = useRecoilValue(dashboardState);
  const [filteredRewards, setFilteredRewards] = useState([]);
  const [sortBy, setSortBy] = useState('date');
  const [order, setOrder] = useState('dsc');
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    const filter = rewards
    .filter((reward) => reward.brand.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => {
      if (sortBy === 'points') {
        if(order === 'dsc') return b.rewardPoints - a.rewardPoints;
        return a.rewardPoints - b.rewardPoints;
      }
      if(order === 'dsc') return new Date(b.purchaseDate) - new Date(a.purchaseDate);
      return new Date(a.purchaseDate) - new Date(b.purchaseDate);
    });
    setFilteredRewards(filter);
    setPage(1);
  }, [rewards, searchTerm, order, sortBy])

  const totalItems = filteredRewards.length;
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
            className="p-2 border-2 border-gray-400 rounded-lg w-64 text-gray-700"
          />
          <BiSearch className='absolute text-gray-600 text-xl right-4' />
        </div>

        <div className='space-x-1'>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="p-2 border-2 border-gray-400 text-gray-700 rounded-lg"
          >
            <option value="date">Sort by Date</option>
            <option value="points">Sort by Points</option>
          </select>

          <select
            value={order}
            onChange={(e) => setOrder(e.target.value)}
            className="p-2 border-2 border-gray-400 text-gray-700 rounded-lg"
          >
            <option value="asc">Ascending</option>
            <option value="dsc">Descending</option>
          </select>
        </div>

      </div>
      <ul className="grid grid-cols-2 gap-y-6 gap-x-9">
        {filteredRewards.slice((page - 1) * 20, page * 20).map((reward) => (
          <RewardItem key={reward.id} reward={reward} />
        ))}
      </ul>

      <div className='flex justify-center gap-3 mt-8 mb-4 text-black text-2xl font-black'>
        <button onClick={handlePrevClick}><GrPrevious /></button>
        <div>{page} / {totalPages}</div>
        <button onClick={handleNextClick}><GrNext /></button>
      </div>

    </div>
  );
};

export default RewardsList;
