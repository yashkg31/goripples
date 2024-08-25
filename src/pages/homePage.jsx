import React from 'react'
import Homepage from '../components/Homepage'
import Login from '../components/Login'
import AboutUs from '../components/AboutUs'

function HomePage() {

  return (
    <>
      <div className='flex-col justify-center items-center space-y-16 my-14'>
        <Homepage />
        <Login />
        <AboutUs />
      </div>
      <div className='flex justify-between items-center bg-black p-5 text-[18px]'>
        <div className=''>
          Contact us:
          <br />
          yashguptajobs@gmail.com
          <br />
          +91-8171955401
        </div>
        <div className='mr-12 text-xl'>
          Made with 🩶
        </div>
        <div>
          Copyright ©2024
          <br />
          All right reserved.
        </div>
      </div>
    </>
  )
}

export default HomePage