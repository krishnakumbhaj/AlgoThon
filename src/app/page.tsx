"use client"
import React from 'react';
import price1 from '../images/price1.png';
import price2 from '../images/price2.png';
import price3 from '../images/price3.png';
import weblogo from '../images/Webweaver.png';
import clg from '../images/mietlogo.png';
import Image from 'next/image';
import Link from 'next/link';

import aboutus from '../images/aboutus1.png';
import hero3 from '../images/heroimage.png'


const page = () => {

  return (
    <div className='bg-gray-100 h-full'>
      <div className='w-full md:h-20 h-20 flex justify-between'>
        <Image src={weblogo}
          alt="weblogo"
          className=" md:ml-12  ml-6"
          height={20}
          width={100}
        />
        {/* <span className='text-3xl font-bold italic pb-7 mr-3'>WebWeavers</span> */}
        <Image src={clg}
          alt="clg"
          className="h-full mr-3 mt-2"
          height={20}
          width={100}
        />
      </div>
      <div className='md:mb-0 mb-12 '>
        <main>
          <section>
            <div className="container mx-auto md:py-4 py-0">
              <div className="flex flex-wrap">
                <div className="w-full md:w-1/2  md:pb-0 pb-20 px-4">
                  <div className="md:py-28 py-20 md:h-auto h-[500px]">
                    <h2 className="md:text-7xl text-5xl md:ml-3 ml-7 font-bold text-[#3d80e4]">
                      Master the Code:
                      <span className="text-[#93add9] font-bold"> Compete, Solve, and Win at AlgoThon!</span>

                    </h2>
                    <p className="text-xl mt-4 px-12 py-3 text-gray-500">
                      Compete in AlgoThon, solve DSA challenges, win prizes, and learn FetchAI insights from Mr. Dev Chauhan. Join us!
                    </p>
                    <br/>
                    <Link href="#about" className="btn btn-primary bg-[#3468ec] font-mono  text-white hover:bg-[#3468ec] ml-12 rounded-full md:px-6 px-3 py-3 mt-4">
                      Explore More
                    </Link>
                    <Link href="https://unstop.com/o/fHgIsiG" className="btn border-2 border-[#3468ec] font-mono ml-4 text-black hover:bg-[#3468ec] hover:text-white rounded-full md:px-6 py-3 px-2  mt-4">
                      Register
                      {/* <IoMdArrowForward /> */}
                    </Link>
                    <br />
                  </div>
                </div>
                <div className="w-full flex justify-center items-center  md:w-1/2 px-4">
                  <div className="img w-3/4">
                    <Image
                      src={hero3}
                      alt="hero3"
                      height={900}
                      width={900}

                      className="w-full md:mt-0 mt-20"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
      <br /><br/> <br/>
      <div id='about' className='w-full h-screen flex justify-center items-center p-4 mb-8'>
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
      <br /><br />
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
                  <h3 className='md:text-3xl text-2xl font-bold md:mr-0 mr-4 md:mt-0 mt-5 mb-3 md:mb-7'>🏆First Prize</h3>
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
                  <h3 className='md:text-3xl text-2xl mr-1 md:mt-0 mt-5 font-bold mb-3 md:mb-10'>🥈Second Prize</h3>
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
                  <h3 className='md:text-3xl text-2xl font-bold md:mr-0 mr-4 md:mt-0 mt-9 mb-8'>🥉 Third Prize</h3>
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
      <br /><br />
      <div className='md:mt-0 md:mb-16 mt-[700px]'>
        <h1 className='md:text-5xl text-3xl text-center font-bold mb-12 italic'>Event TimeLine</h1>
        <ul>
          <li style={{ '--accent-color': '#41516C' } as React.CSSProperties}>
            <div className="date">1:30 PM - 2:00 PM</div>
            <div className="title">FetchAI Meet with Mr. Dev Chauhan</div>
            <div className="descr">
              Kick off AlgoThon with insights from Mr. Dev Chauhan on FetchAI technology and its impact on coding today.
            </div>
          </li>
          <li style={{ '--accent-color': '#FBCA3E' } as React.CSSProperties}>
            <div className="date">2:00 PM - 4:00 PM</div>
            <div className="title">Coding Competition: DSA Round</div>
            <div className="descr">
              Participants tackle challenging DSA problems, testing their coding skills and problem-solving abilities in a competitive setting.
            </div>
          </li>
          <li style={{ '--accent-color': '#E24A68' } as React.CSSProperties}>
            <div className="date">4:00 PM - 4:30 PM</div>
            <div className="title">Prize Distribution Ceremony</div>
            <div className="descr">
              Celebrate the achievements of participants as awards are presented to the top performers in the coding competition.
            </div>
          </li>

        </ul>

      </div>
    </div>
  );
};

export default page;
