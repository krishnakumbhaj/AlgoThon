import React from 'react';
import Image from 'next/image';
import price1 from '../pages/price1.png';
import price2 from '../pages/price2.png';
import price3 from '../pages/price3.png';

const Prizes = () => {
  return (
    <div className='mt-20'>
      <h2 className='md:text-5xl text-3xl font-bold italic mb-20 md:mb-0 text-center'>
        Epic Prizes for Epic Minds: Are You Ready?
      </h2>
      <div className='w-full flex flex-col items-center h-screen mt-12'>
        <div className='w-5/6 h-4/6 flex flex-col md:flex-row gap-16'>
          {/* First Prize */}
          <div className='w-full md:w-1/2 h-full relative flex justify-center items-end mb-8 md:mb-0'>
            <div className='w-44 h-44 rounded-full absolute top-[-60px] md:top-3'> {/* Adjusted top for mobile */}
              <Image
                src={price1}
                alt="First Prize"
                className="rounded-full w-full h-full"
                height={200}
                width={200}
              />
            </div>
            <div className='w-4/5 h-96 flex justify-center items-end bg-yellow-200 border-4 border-black rounded-b-3xl md:h-5/6'>
              <div className='w-5/6 h-4/5 flex flex-col items-center  justify-center rounded-lg'>
                <h3 className='text-3xl font-bold md:mr-0 mr-4 md:mt-0 mt-5 mb-3 md:mb-7'>🏆First Prize</h3>
                <p className='text-lg  font-semibold'>Total Worth: ₹2,100</p>
                <p className='text-center mt-9'>
                Claim the first prize and showcase your coding excellence. Unlock rewards and prove yourself among the best competitors!
                </p>
              </div>
            </div>
          </div>

          {/* Second Prize */}
          <div className='w-full md:w-1/2 h-full relative flex justify-center items-end mb-8 md:mb-0'>
            <div className='w-44 h-44 rounded-full absolute top-[-60px] md:top-3'> {/* Adjusted top for mobile */}
              <Image
                src={price2}
                alt="Second Prize"
                className="rounded-full w-full h-full"
                height={200}
                width={200}
              />
            </div>
            <div className='w-4/5 h-96 flex justify-center items-end bg-gray-200 border-4 border-black rounded-b-3xl md:h-5/6'>
              <div className='w-5/6 h-4/5 flex flex-col items-center justify-center rounded-lg'>
                <h3 className='md:text-3xl text-[28px] mr-1 md:mt-0 mt-5 font-bold mb-3 md:mb-10'>🥈Second Prize</h3>
                <p className='text-lg mb-2 font-semibold'>Total Worth: ₹1,100</p>
                <p className='text-center mt-8'>
                Secure the runner-up spot with your coding skills. Exciting rewards await you, along with recognition and honor!
                </p>
              </div>
            </div>
          </div>

          {/* Third Prize */}
          <div className='w-full md:w-1/2 h-full relative flex justify-center items-end'>
            <div className='w-44 h-44 rounded-full absolute top-[-60px] md:top-3'> {/* Adjusted top for mobile */}
              <Image
                src={price3}
                alt="Third Prize"
                className="rounded-full w-full h-full"
                height={200}
                width={200}
              />
            </div>
            <div className='w-4/5 h-96 flex justify-center items-end bg-stone-400 border-4 border-black rounded-b-3xl md:h-5/6'>
              <div className='w-5/6 h-4/5 flex flex-col items-center justify-center rounded-lg'>
                <h3 className='text-3xl font-bold md:mr-0 mr-4 md:mt-0 mt-9 mb-8'>🥉 Third Prize</h3>
                <p className='text-lg font-semibold'>Total Worth: ₹501</p>
                <p className='text-center mt-8'>
                Don&apos;t miss out on the third prize. A fantastic opportunity to win while gaining valuable coding experience and rewards!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prizes;
