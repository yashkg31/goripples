import React from 'react'

function Homepage() {
  return (
    <div className='flex-row xl:flex justify-center items-center bg-[#090909eb] gap-7 p-10 rounded-2xl shadow-2xl shadow-black w-2/3 xl:h-2/3 h-auto m-auto border-white border-4'>

      <div className='space-y-3 xl:mb-none mb-8'>
        <div className='text-5xl text-[#c3193b]'
          style={{ fontFamily: "Quicksand", fontWeight: 800 }}>
          Welcome to your Rewards Dashboard!
        </div>
        <div className='text-xl'>
          Now, all your collected rewards are conveniently gathered in one place. Easily view, manage, and redeem your rewards from various brands, all within a single platform. Stay organized and make the most of your loyalty points, ensuring you never miss out on any benefits.
        </div>
      </div>
      <img alt='home' src="/home.jpg" className='h-[400px] rounded-lg '></img>
    </div>
  )
}

export default Homepage