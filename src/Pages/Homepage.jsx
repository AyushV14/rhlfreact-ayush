import React, { useState, useEffect } from 'react';
import "../CSS/Homepage.css";
import campaignData from '../assets/data/campaigndonate.json';
import CampaignCard from './homecomponents/CampaignCard'; 
import Assureyou from './homecomponents/Assureyou';
import Medicalemg from './homecomponents/Medicalemg';
import Partners from './homecomponents/Partners';
import Category from './homecomponents/Category';

function Homepage() {
  const importImage = (imageName) => {
    return new URL(`../assets/images/${imageName}`, import.meta.url).href;
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState('next');

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change interval as needed

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleSlideChange = (newIndex, dir) => {
    setIsTransitioning(true);
    setDirection(dir);

    setTimeout(() => {
      setCurrentIndex(newIndex);
      setIsTransitioning(false);
    }, 500); // Match this with CSS transition duration
  };

  const nextSlide = () => {
    handleSlideChange((currentIndex + 1) % campaignData.length, 'next');
  };

  const prevSlide = () => {
    handleSlideChange(currentIndex === 0 ? campaignData.length - 1 : currentIndex - 1, 'prev');
  };

  return (
    <div className="homepage-container w-full flex flex-col py-8 gap-8 bg-white mt-10">
      <h1 className="heading text-5xl text-center font-light">
        <span className="text-gray-700 font-medium">Together</span> We Make a <span className="text-black font-bold">Difference</span>
      </h1>

      <div className="subtext ml-[390px] text-lg text-gray-500 max-w-4xl">
        <p>Real Happiness Of Life Foundation for social change and inclusion works for the social</p>
        <p>development and integration of underprivileged individuals, groups, and communities in India.</p>
      </div>

      <div className="flex flex-col justify-center items-center relative">
        <img src={importImage('homepage.png')} alt="Homepage" className="w-full" />
        <img
          src={importImage('mealtab.png')}
          alt="Meal Tab"
          className="w-[60%] mt-[-40px] z-10"
        />
      </div>

      <div>
        <h1 className="heading text-4xl text-center font-light">
          <span className="text-gray-700 font-medium">Donate to one of our </span>
          <span className="text-pink-500 font-bold">campaigns</span>
        </h1>
        <p className='flex items-center justify-center mt-5 font-light text-[20px] text-[#5a5a5a]'>
          By donating, you take a step towards creating a better world. Every rupee counts!
        </p>

        <div className="relative w-full overflow-hidden mt-7">
          <div className={`flex justify-center items-center transition-transform duration-500 ${isTransitioning ? (direction === 'next' ? 'translate-x-[-30%]' : 'translate-x-[30%]') : ''}`}>
            <div className={`w-[50%] h-[280px] transform transition-transform duration-300 ${isTransitioning ? (direction === 'next' ? 'translate-x-[-30%]' : 'translate-x-[30%]') : ''}`}>
              <CampaignCard campaign={campaignData[currentIndex]} />
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col pl-24 pr-16 gap-20'>
          <Medicalemg />
          <Category />
          {/* <Assureyou /> */}
          <Partners />
      </div>
    </div>
  );
}

export default Homepage;
