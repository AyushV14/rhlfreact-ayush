import React from 'react';

const CampaignCard = ({ campaign }) => {
  const importImage = (imageName) => {
    return new URL(`../../assets/images/${imageName}`, import.meta.url).href;
  };

  return (
    <div className="campaign-card w-full bg-white shadow-lg rounded-lg flex">
      <img src={importImage(campaign.image)} alt={campaign.title} className="w-2/5 rounded-lg object-cover" />
      <div className="campaign-details w-4/5 ml-4 flex flex-col justify-between p-5">
        <h3 className="text-xl font-semibold truncate">{campaign.title}</h3>
        <p className="text-gray-600 line-clamp-2 text-sm">{campaign.description}</p>
        <div className="campaign-info mt-4 flex justify-between text-pink-500">
          <div className="info-item">
            <p className='header'>Amount raised</p>
            <p className="font-bold text-black">Rs. {campaign.amountRaised}</p>
          </div>
          <div className="info-item">
            <p className='header'>Goal</p>
            <p className="font-bold text-black">Rs. {campaign.goal}</p>
          </div>
          <div className="info-item">
            <p className='header'>Time left</p>
            <p className="font-bold text-black">{campaign.timeLeft}</p>
          </div>
        </div>
        <div className="action-buttons flex justify-between items-center mt-6">
          <button className="donate-button bg-pink-500 text-white py-2 px-4 rounded-full">Donate Now</button>
          <button className="share-button flex items-center bg-transparent p-2 rounded-full">
            <img src={importImage('share-small.png')} alt="Share" className="w-4 h-4 mr-1" />
            Share
          </button>
        </div>
      </div>
    </div>
  );
}

export default CampaignCard;
