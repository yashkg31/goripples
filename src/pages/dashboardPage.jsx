import React from 'react';
import Dashboard from '../components/Dashboard';
import { useRecoilValue } from 'recoil';
import { userDetails } from '../recoil/atoms';

const DashboardPage = () => {
  const user = useRecoilValue(userDetails)

  return (
    <div className="">
      {user.user_data ? <Dashboard /> : <p className='text-black text-5xl'>Login first!</p>}
    </div>
  );
};

export default DashboardPage;
