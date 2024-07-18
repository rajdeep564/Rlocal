import React from 'react'
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import MidSection from './Components/MidSection';

function HomeScreen() {
  return (
    <div className=''>
      <div className='px-4 md:px-20 py-4'>
        <Navbar/>
        <Hero/>
        <MidSection/>
      </div>
    </div>
  )
}

export default HomeScreen
