import React from 'react';
import Image from 'next/image';
import hero3 from '../pages/heroimage.png';

interface HerosectionProps {
  scrollToAboutUs: () => void;
}

const Herosection: React.FC<HerosectionProps> = ({ scrollToAboutUs }) => {
  return (
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
                  <button 
                    className="btn btn-primary bg-[#3468ec] font-mono text-white hover:bg-[#3468ec] ml-12 rounded-full px-6 py-3 mt-4"
                    onClick={scrollToAboutUs} // Add this handler
                  >
                    Explore More
                  </button>
                  <button className="btn btn-primary border-2 border-[#3468ec] font-mono ml-4 text-black hover:bg-[#3468ec] hover:text-white rounded-full px-6 py-3 mt-4">
                    Register
                  </button>
                </div>
              </div>
              <div className="w-full md:w-1/2 px-4">
                <div className="img ">
                  <Image
                    src={hero3}
                    alt="hero3"
                    height={400}
                    width={400}
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Herosection;
