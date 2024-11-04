import React from 'react';
import "../CSS/Homepage.css";
import campaignData from '../assets/data/campaigndonate.json';
import CampaignCard from './homecomponents/CampaignCard'; 
import Medicalemg from './homecomponents/Medicalemg';
import Partners from './homecomponents/Partners';
import Category from './homecomponents/Category';

function Homepage() {
  const importImage = (imageName) => {
    return new URL(`../assets/images/${imageName}`, import.meta.url).href;
  };

  return (
    <div className="homepage-container w-full flex flex-col py-8 gap-8 bg-white mt-10 justify-center items-center">
      <h1 className="heading text-5xl text-center font-light">
        <span className="text-gray-700 font-medium">Together</span> We Make a <span className="text-black font-bold">Difference</span>
      </h1>

      <div className="subtext justify-center items-center text-lg text-gray-500 max-w-4xl">
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

      <div className='flex items-center justify-center flex-col'>
        <h1 className="heading text-4xl text-center justify-center font-light">
          <span className="text-gray-700 font-medium">Donate to one of our </span>
          <span className="text-pink-500 font-bold">campaigns</span>
        </h1>
        <p className='subtext flex items-center justify-center mt-5 font-light text-[20px] text-[#5a5a5a]'>
          By donating, you take a step towards creating a better world. Every rupee counts!
        </p>
        {/* Campaign Card */}
        <div className="">
          <CampaignCard campaignData={campaignData} />
        </div>
      </div>

      <div className='flex flex-col gap-20'>
        <Medicalemg />
        <Category />
        {/* <Assureyou /> */}
        <Partners />
      </div>
    </div>
  );
}

export default Homepage;
