import React from 'react';
import Dashboard from '../components/Dashboard';
import { useRecoilValue } from 'recoil';
import { userDetails } from '../recoil/atoms';
import { Link } from 'react-router-dom';

const DashboardPage = () => {
  const user = useRecoilValue(userDetails)

  return (
    <div className="">
      {user.user_data ? <Dashboard /> : <Link className='text-black text-5xl underline hover:text-red-600' to={"/"}>Login first!</Link>}
    </div>
  );
};

export default DashboardPage;
