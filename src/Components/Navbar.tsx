import React from 'react'
import Image from 'next/image';
import weblogo from '../pages/Webweaver.png'
import clg from '../pages/mietlogo.png'

const Navbar = () => {
  return (
    <div className='w-full md:h-24 h-20 flex justify-between'>
             <Image src={weblogo}
                    alt="weblogo" 
                        className=" md:ml-12  ml-6"
                        height={20}
                        width={100}
              />
              {/* <span className='text-3xl font-bold italic pb-7 mr-3'>WebWeavers</span> */}
             <Image     src={clg}
                        alt="clg"
                        className="h-full mr-3 mt-2"
                        height={20}
                        width={100}
             />
    </div>
  )
}

export default Navbar