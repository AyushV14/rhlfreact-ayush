import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../CSS/MedicalEmg.css";
import social1 from "../../assets/images/Causes/social/social1.png";
import social2 from "../../assets/images/Causes/social/social2.png";
import Clinic from "../Clinic";

// Define categories with icons
const categories = [
  { id: 1, name: "Urgent", icon: "🔆" },
  { id: 2, name: "Animals", icon: "🐾" },
  { id: 3, name: "Children", icon: "👶" },
  { id: 4, name: "Elderly", icon: "👵" },
  { id: 5, name: "Faith", icon: "🙏" },
  { id: 6, name: "Disaster-Relief", icon: "🛠️" },
  { id: 7, name: "Hunger", icon: "🍴" },
  { id: 8, name: "Education", icon: "🎓" },
  { id: 9, name: "Women", icon: "👩" },
  { id: 10, name: "safa", icon: "🙏" },
  { id: 11, name: "ter-Relief", icon: "🛠️" },
  { id: 12, name: "nger", icon: "🍴" },
  { id: 13, name: "ucation", icon: "🎓" },
  { id: 14, name: "men", icon: "👩" },
];

// Sample data for campaigns with different categories and images
const campaigns = [
  // Urgent category
  {
    id: 1,
    title: "Flood Relief Fund",
    author: "By Disaster Relief Org",
    totalRaised: "₹1,04,960",
    totalRequired: "₹2,500,000",
    backers: 114,
    progress: "4%",
    category: "Urgent",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    title: "Emergency Medical Aid",
    author: "By Health Aid",
    totalRaised: "₹1,04,960",
    totalRequired: "₹2,500,000",
    backers: 114,
    progress: "4%",
    category: "Urgent",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    title: "Urgent Shelter for Homeless",
    author: "By Shelter Foundation",
    totalRaised: "₹1,04,960",
    totalRequired: "₹2,500,000",
    backers: 114,
    progress: "4%",
    category: "Urgent",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    title: "Critical Food Supplies",
    author: "By Hunger Relief",
    totalRaised: "₹1,04,960",
    totalRequired: "₹2,500,000",
    backers: 114,
    progress: "4%",
    category: "Urgent",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 5,
    title: "Winter Clothing Drive",
    author: "By Warmth Project",
    totalRaised: "₹1,04,960",
    totalRequired: "₹2,500,000",
    backers: 114,
    progress: "4%",
    category: "Urgent",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 6,
    title: "Fire Recovery Fund",
    author: "By Fire Relief Org",
    totalRaised: "₹1,04,960",
    totalRequired: "₹2,500,000",
    backers: 114,
    progress: "4%",
    category: "Urgent",
    image: "https://via.placeholder.com/150",
  },

  // Animals category
  {
    id: 7,
    title: "Help Abandoned Dogs",
    author: "By Animal Rescue",
    totalRaised: "₹1,04,960",
    totalRequired: "₹2,500,000",
    backers: 114,
    progress: "4%",
    category: "Animals",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 8,
    title: "Save Injured Wildlife",
    author: "By Wildlife Care",
    totalRaised: "₹1,04,960",
    totalRequired: "₹2,500,000",
    backers: 114,
    progress: "4%",
    category: "Animals",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 9,
    title: "Stray Cat Shelter",
    author: "By Pet Haven",
    totalRaised: "₹1,04,960",
    totalRequired: "₹2,500,000",
    backers: 114,
    progress: "4%",
    category: "Animals",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 10,
    title: "Animal Vaccination Drive",
    author: "By Health for Pets",
    totalRaised: "₹1,04,960",
    totalRequired: "₹2,500,000",
    backers: 114,
    progress: "4%",
    category: "Animals",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 11,
    title: "Feed Stray Animals",
    author: "By By Food for Pets",
    totalRaised: "₹1,04,960",
    totalRequired: "₹2,500,000",
    backers: 114,
    progress: "4%",
    category: "Animals",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 12,
    title: "Rescue Farm Animals",
    author: "By Farm Friend Org",
    totalRaised: "₹1,04,960",
    totalRequired: "₹2,500,000",
    backers: 114,
    progress: "4%",
    category: "Animals",
    image: "https://via.placeholder.com/150",
  },

  // Continue adding 6 sample campaigns for each category with different images
  // ...
];

function CategorySection() {
  const [selectedCategory, setSelectedCategory] = useState(
    campaigns.filter((item) => item.category === "Urgent")
  );

  const filterType = (category) => {
    setSelectedCategory(campaigns.filter((item) => item.category === category));
  };

  return (
    // <div className="px-[100px] font-sans bg-blue-50 min-h-screen">
    //   {/* Category Filter Section */}
    //   <div className="flex gap-3 mb-8 justify-center">
    //     {categories.map((category) => (
    //       <button
    //         key={category.id}
    //         onClick={() => filterType(category.name)}
    //         className={`px-4 py-2 rounded-lg text-sm font-medium flex items-center justify-center ${
    //           selectedCategory.length && selectedCategory[0].category === category.name
    //             ? 'bg-orange-500 text-white'
    //             : 'bg-gray-200 text-gray-700'
    //         }`}
    //       >
    //         {category.icon} {category.name}
    //       </button>
    //     ))}
    //   </div>

    //   {/* Campaign Cards Section */}
    //   <div className="flex flex-wrap justify-center gap-6">
    //     {selectedCategory.map((campaign) => (
    //       <div
    //         key={campaign.id}
    //         className="bg-white p-4 rounded-lg shadow-lg border border-gray-200 flex flex-col items-center w-full sm:w-1/2 lg:w-1/3"
    //       >
    //         <img
    //           src={campaign.image}
    //           alt={campaign.title}
    //           className="w-full h-40 object-cover rounded-md mb-4"
    //         />
    //         <h3 className="text-lg font-semibold text-center mb-2">{campaign.title}</h3>
    //         <p className="text-sm text-gray-600 mb-2 text-center">By {campaign.author}</p>
    //         <p className="text-sm font-medium text-gray-800 text-center">
    //           <span className="font-bold">{campaign.raised}</span> Raised
    //         </p>
    //         <p className="text-sm font-medium text-gray-800 text-center mb-4">
    //           <span className="font-bold">{campaign.backers}</span> Backers
    //         </p>
    //         <button className="w-full py-2 px-4 bg-orange-500 text-white rounded-md font-semibold hover:bg-orange-600">
    //           Donate Now
    //         </button>
    //       </div>
    //     ))}
    //   </div>
    // </div>
    <div className="flex flex-col gap-2 w-screen content-center overflow-hidden">
      <div className='flex items-center justify-between'>
        <div className="section-header md:ml-24  ">
          <div className="section-straight"></div>
          <p className="section-head">Categories</p>
        </div>
        <Link className="view-all-link" to="/clinic">View All →</Link> 
      </div>

      <div className="flex overflow-x-auto gap-6 pb-4 w-[85%] ml-[7%]">
        {categories.map((category) => (
          <div
            key={category.id}
            onClick={() => filterType(category.name)}
            className={`px-4 py-2 rounded-lg text-sm font-medium flex items-center justify-center ${
              selectedCategory.length &&
              selectedCategory[0].category === category.name
                ? "bg-orange-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            style={{ minWidth: "auto", flexShrink: 0 }} // Ensure each category div expands with content
          >
            {category.icon} {category.name}
          </div>
        ))}
      </div>

      {/* <div className="flex overflow-x-auto gap-6 pb-4 w-[90%] mx-auto">
        {categories.map((category) => (
          <div
            key={category.id}
            onClick={() => filterType(category.name)}
            className={`px-4 py-2 rounded-lg text-sm font-medium flex items-center justify-center whitespace-nowrap ${
              selectedCategory.length &&
              selectedCategory[0].category === category.name
                ? "bg-orange-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            style={{ display: "inline-flex" }} // Ensure the width grows based on the text
          >
            {category.icon} {category.name}
          </div>
        ))}
      </div> */}

      {/* Emergency Cards Section */}
      <div className="flex flex-wrap justify-center gap-6 w-[95%] mx-auto">
        {/* Only show 6 cards (2 rows of 3 cards) */}
        {selectedCategory.slice(0, 6).map((emergency) => (
          <div
            className="emergency-card w-full sm:w-1/2 md:w-1/3 lg:w-1/3"
            key={emergency.id}
          >
            <div className="emergency-card_mainSection">
              <div className="emergency-card_imageSection">
                <img
                  src={emergency.image}
                  alt="Campaign"
                  className="emergency-card_image"
                  loading="lazy"
                />
                <span className="tax-benefit-tooltip">
                  Tax Benefit <span className="tooltip-icon">i</span>
                </span>
              </div>
              <div className="emergency-card_details">
                <div className="emergency-card_summary">
                  <h4 className="emergency-card_title">{emergency.title}</h4>
                  <div className="emergency-card_author">
                    <span className="author-img">
                      {emergency.author.charAt(3)}
                    </span>
                    <span>{emergency.author}</span>
                  </div>
                </div>
                <div className="emergency-card_stats">
                  <div className="emergency-card_statsWrapper">
                    <div className="emergency-card_progressBarHeading">
                      <span className="emergency-card_totalRaised">
                        {emergency.totalRaised}
                      </span>
                      <span className="emergency-card_totalRequired">
                        Raised
                      </span>
                    </div>
                    <div className="emergency-card_totalBackers">
                      {emergency.backers} Backers
                    </div>
                  </div>
                  <div
                    className="dk-progress-bar_backgroundBar"
                    title={`${emergency.progress} Raised`}
                    style={{
                      height: "8px",
                      borderRadius: "4px",
                      marginTop: "8px",
                    }}
                  >
                    <div
                      className="dk-progress-bar_progressBar"
                      style={{
                        width: emergency.progress,
                        height: "8px",
                        borderRadius: "4px",
                        background:
                          "linear-gradient(to right, #FF8E00, #FF1F00)",
                      }}
                    >
                      <div
                        className="dk-progress-bar_animatedProgressBar"
                        style={{ borderRadius: "4px" }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="emergency-card_buttonSection">
                  <button className="emergency-card_shareButton">Share</button>
                  <a
                    className="emergency-card_donateButton"
                    href="#"
                    style={{
                      background: "linear-gradient(to right, #FF8E00, #FF1F00)",
                      color: "white",
                    }}
                  >
                    Donate Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategorySection;
