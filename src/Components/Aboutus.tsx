import React from 'react';
import Image from 'next/image';
import aboutus from '../pages/aboutus1.png';

const Aboutus = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center p-4 mb-8'>
      <div className='md:w-4/6 w-full  md:h-4/6  flex flex-col md:flex-row bg-blue-100 rounded-3xl'>
        {/* Image Section */}
        <div className='w-full md:w-1/2 h-full flex justify-center items-center'>
          <Image
            src={aboutus}
            alt="aboutus"
            className="rounded-full"
            height={500}
            width={500}
          />
        </div>

        {/* Text Section */}
        <div className='w-full md:w-1/2 h-full mb-12 md:mb-0 p-7 flex flex-col justify-between md:p-6'>
          <div className='flex items-end h-1/3'>
            <h1 className='text-4xl md:text-5xl italic font-black text-center md:text-left'>
              AlgoThon: Where Logic Meets Speed!
            </h1>
          </div>
          <div className='flex h-2/3 py-12'>
            <h1 className='text-lg md:text-xl italic text-gray-500 font-bold text-center md:text-left'>
              Join us for AlgoThon on 1st October 2024, from 1:30 PM to 4:30 PM at Audi-3, Raman Block. Compete in a DSA coding challenge, attend a FetchAI session, and enjoy exciting prizes for top performers! Don&apos;t miss this opportunity to enhance your skills and connect with fellow coding enthusiasts!
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
