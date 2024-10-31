import React from 'react';

const CampaignCard = ({ campaign }) => {
  const importImage = (imageName) => {
    return new URL(`../../assets/images/${imageName}`, import.meta.url).href;
  };

  return (
    <div className="campaign-card w-full bg-white shadow-lg rounded-lg flex h-[300px] overflow-hidden">
      <img
        src={importImage(campaign.image)}
        alt={campaign.title}
        className="w-2/5 h-full object-cover"
      />
      <div className="campaign-details w-3/5 p-3 flex flex-col justify-between">
        <h3 className="text-lg font-semibold truncate">{campaign.title}</h3>
        <p className="text-gray-600 line-clamp-3 text-sm">{campaign.description}</p>

        <div className="campaign-info mt-1 text-gray-600">
          <div className="amount-raised mb-1">
            <p className="font-bold text-black">Amount Raised:</p>
            <p>₹ {campaign.amountRaised}</p>
          </div>
          <div className="goal mb-1">
            <p className="font-bold text-black">Goal:</p>
            <p>₹ {campaign.goal}</p>
          </div>
          <div className="time-left mb-1">
            <p className="font-bold text-black">Time Left:</p>
            <p>{campaign.timeLeft}</p>
          </div>
        </div>

        <div className="action-buttons flex  mt-2 mb-10">
          <button className="donate-button bg-red-500 text-white py-2 px-4 rounded-lg w-[40%]"
            style={{
              background: 'linear-gradient(to right, #FF8E00, #FF1F00)',
              color: 'white',
            }}
          >
            Donate Monthly
          </button>
        </div>
      </div>
    </div>
  );
};

export default CampaignCard;
