"use client"
import React, { useRef } from 'react';
import Herosection from '@/Components/Herosection';
import Navbar from '@/Components/Navbar';
import TimelineComponent from '@/Components/TimelineComponent';
import Aboutus from '@/Components/Aboutus';
import Prizes from '@/Components/Prizes';

const Page = () => {
  const aboutUsRef = useRef<HTMLDivElement>(null); // Create a ref for Aboutus section

  const scrollToAboutUs = () => {
    if (aboutUsRef.current) {
      aboutUsRef.current.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to Aboutus
    }
  };

  return (
    <div className='bg-gray-100 h-full'>
      <Navbar />
      <Herosection scrollToAboutUs={scrollToAboutUs} /> {/* Pass the scroll function */}
      <div ref={aboutUsRef}> {/* Attach ref to Aboutus */}
        <Aboutus />
      </div>
      <Prizes />
      <TimelineComponent />
    </div>
  );
};

export default Page;
