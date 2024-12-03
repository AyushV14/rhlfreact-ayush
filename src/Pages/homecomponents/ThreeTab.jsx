import React from 'react';
import kakhagImage from '../../assets/images/3tabs/kakhag.png';
import children from '../../assets/images/3tabs/children.png';
import donate from '../../assets/images/3tabs/donate.png';
import touch from '../../assets/images/3tabs/touch.png';
import hand from '../../assets/images/3tabs/hand.png';

const ThreeTab = () => {
  return (
    <div 
      className="flex justify-center mt-20 w-full h-[60vh]" 
      style={{ backgroundImage: `url(${kakhagImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className='flex flex-col items-center '>
        <div className='flex flex-col md:flex-row md:gap-x-10  '>
          <a href="/programmes">
          <div className='flex gap-x-3 p-2 bg-white rounded-md max-w-40 cursor-pointer  '>
            <img src={donate} alt=""  className='w-24 h-16'/>
            <p>i want to <span className='font-bold'>Donate</span></p>
          </div>
          </a>
          <div className='bg-[#1B1B1B] rounded-md p-3 flex flex-col gap-y-2 text-white text-base max-w-[180px]'> 
            <div className='flex gap-x-3'>
              <img src={hand} alt="" className='w-[35px] h-[45px]' />
              <p className='font-normal '>I want to <span className='font-bold'>Volunteer</span></p>
            </div>
            <div>
              <p className='font-light'>Spread smiles by investing your time</p>
            </div>
          </div>
          <a href="/contact">
          <div className='flex gap-x-3 p-2 bg-white rounded-md max-w-40 cursor-pointer'>
            <img src={touch} alt="" className='w-14 h-12'/>
            <p>Get in <span className='font-bold'>Touch</span></p>
          </div>
          </a>
        </div>
        <img src={children} alt=" " className='w-full h-[35%] md:h-[80%] mt-[30px] md:mt-[10px]' />
      </div>

    </div>
  );
};

export default ThreeTab;
