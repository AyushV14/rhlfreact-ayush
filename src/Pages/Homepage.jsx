import React, { useState, useEffect } from 'react';
import "../CSS/Homepage.css";
import campaignData from '../assets/data/campaigndonate.json';
import CampaignCard from './homecomponents/CampaignCard'; // Adjust the path as necessary
import Assureyou from './homecomponents/Assureyou';
import Causessupport from './homecomponents/Causessupport';
import Medicalemg from './homecomponents/Medicalemg';
import Testimonials from './homecomponents/Testimonials';
import Partners from './homecomponents/Partners';

function Homepage() {
  const importImage = (imageName) => {
    return new URL(`../assets/images/${imageName}`, import.meta.url).href;
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Automatically move to the next slide every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [currentIndex]);

  const handleSlideChange = (newIndex) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setIsTransitioning(false);
    }, 500); // Time for the transition (matches CSS transition duration)
  };

  const nextSlide = () => {
    handleSlideChange((currentIndex + 1) % campaignData.length);
  };

  const prevSlide = () => {
    handleSlideChange(currentIndex === 0 ? campaignData.length - 1 : currentIndex - 1);
  };

  return (
    <div className="homepage-container w-full flex flex-col  py-8 gap-8 bg-white mt-10">
      <h1 className="heading text-5xl text-center font-light">
        <span className="text-gray-700 font-medium">Together</span> We Make a <span className="text-black font-bold">Difference</span>
      </h1>

      <div className="subtext  ml-[390px]  text-lg text-gray-500 max-w-4xl">
        <p>Real Happiness Of Life Foundation for social change and inclusion works for the social</p>
        <p>development and integration of underprivileged individuals, groups, and communities in India.</p>
      </div>

      {/* Main page img */}
      <div className="flex flex-col justify-center items-center relative">
        <img src={importImage('homepage.png')} alt="Homepage" className="w-full" />
        <img
          src={importImage('mealtab.png')}
          alt="Meal Tab"
          className="w-[60%] mt-[-40px] z-10" // Negative margin for overlap
        />
      </div>

      {/* Children hover section */}
      <div className="flex flex-col justify-center items-center relative my-8">
        <img src={importImage('3Tabs.png')} alt="Children" className="w-[100%] mt-10" />
        <img
          src={importImage('children.png')}
          alt="3 Tabs"
          className="w-[100%] mt-[-350px] z-20"
        />
      </div>

      {/* Donate Campaign Section with Carousel of Cards */}
      <div>
        <h1 className="heading text-4xl text-center font-light">
          <span className="text-gray-700 font-medium">Donate to one of our </span>
          <span className="text-pink-500 font-bold">campaigns</span>
        </h1>

        <div className="relative w-full overflow-hidden mt-7">
          <div className="flex justify-center items-center space-x-3 ">
            {/* Previous card preview */}
            <div
              className={`w-[25%]  opacity-50 transform transition-transform duration-500 ${isTransitioning ? 'scale-75' : 'scale-90'} overflow-hidden`}
              onClick={prevSlide}
              style={{ clipPath: 'inset(0 0 0 50%)' }} // Show only the right part of the previous card
            >
              <CampaignCard campaign={campaignData[currentIndex === 0 ? campaignData.length - 1 : currentIndex - 1]} />
            </div>

            {/* Current Card */}
            <div
              className={`w-[55%] transform transition-transform duration-500 ${isTransitioning ? 'scale-95 opacity-50' : 'scale-100 opacity-100'}`}
            >
              <CampaignCard campaign={campaignData[currentIndex]} />
            </div>

            {/* Next card preview */}
            <div
              className={`w-[25%]  opacity-50 transform transition-transform duration-500 ${isTransitioning ? 'scale-75' : 'scale-90'} overflow-hidden`}
              onClick={nextSlide}
              style={{ clipPath: 'inset(0 50% 0 0)' }} // Show only the left part of the next card
            >
              <CampaignCard campaign={campaignData[(currentIndex + 1) % campaignData.length]} />
            </div>
          </div>

          {/* Left arrow button */}
          {/* <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-indigo-600 text-white p-2 rounded-full shadow-md focus:outline-none transition duration-200 hover:bg-indigo-700"
            onClick={prevSlide}
          >
            <span className="material-icons">chevron_left</span>
          </button> */}

          {/* Right arrow button */}
          {/* <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-indigo-600 text-white p-2 rounded-full shadow-md focus:outline-none transition duration-200 hover:bg-indigo-700"
            onClick={nextSlide}
          >
            <span className="material-icons">chevron_right</span>
          </button> */}
        </div>
      </div>

      {/* medicalimpact */}
      <Medicalemg/>

      {/* Causes we support */}
      <Causessupport/>

      {/* Testimonals */}
      <Testimonials/>

      {/* Assure you section */}
      <Assureyou />

      {/* partners section */}
      <Partners/>
    </div>
  );
}

export default Homepage;
