import React from 'react';

const CampaignCard = ({ campaign }) => {
  const importImage = (imageName) => {
    return new URL(`../../assets/images/${imageName}`, import.meta.url).href;
  };

  return (
    <div className="campaign-card w-full bg-white shadow-lg rounded-lg flex">
      <img
        src={importImage(campaign.image)}
        alt={campaign.title}
        className="w-2/5 rounded-l-lg object-cover"
      />
      <div className="campaign-details w-3/5 p-5 flex flex-col justify-between">
        <h3 className="text-xl font-semibold truncate">{campaign.title}</h3>
        <p className="text-gray-600 line-clamp-2 text-sm">{campaign.description}</p>

        <div className="campaign-info mt-4 text-gray-600">
          <div className="amount-raised mb-2">
            <p className="font-bold text-black">Amount Raised:</p>
            <p>₹ {campaign.amountRaised}</p>
          </div>
          <div className="goal mb-2">
            <p className="font-bold text-black">Goal:</p>
            <p>₹ {campaign.goal}</p>
          </div>
          <div className="time-left mb-2">
            <p className="font-bold text-black">Time Left:</p>
            <p>{campaign.timeLeft}</p>
          </div>
        </div>

        <div className="action-buttons flex flex-col mt-6">
          <button className="donate-button bg-red-500 text-white py-2 px-4 w-[50%] rounded-full">
            Donate Monthly
          </button>
        </div>
      </div>
    </div>
  );
};

export default CampaignCard;
