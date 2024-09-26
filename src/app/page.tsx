"use client"
import React from 'react';
import Herosection from '@/Components/Herosection';
import Navbar from '@/Components/Navbar';
import TimelineComponent from '@/Components/TimelineComponent';
import Aboutus from '@/Components/Aboutus';
import Prizes from '@/Components/Prizes';

const page = () => {

  return (
    <div className='bg-gray-100 h-full'>
      <Navbar />
      <Herosection /> {/* Pass the scroll function */}
      <Aboutus />
      <Prizes />
      <TimelineComponent />
    </div>
  );
};

export default page;
