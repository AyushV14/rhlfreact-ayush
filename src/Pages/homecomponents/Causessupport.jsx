import React, { useState, useEffect, useRef } from 'react';

export default function Causessupport() {
  const [selectedCategory, setSelectedCategory] = useState('health');
  const [showScrollButtons, setShowScrollButtons] = useState({ left: false, right: true });
  const scrollContainerRef = useRef(null);

  const categories = {
    health: {
      info: {
        title: 'Help heal, share the care',
        description: 'We aim to improve health and well-being by addressing essential needs such as hunger, providing medical care, and supporting those with disabilities to ensure everyone has access to necessary healthcare and nutrition.',
      },
      smallCards: [
        { image: 'health1.png', title: 'Midday meal scheme', description: '120 have already donated!' },
        { image: 'health2.png', title: 'Funds for Blind School', description: '82 have already donated!' },
        { image: 'health3.png', title: 'Help a child walk', description: '44 have already donated!' },
        { image: 'health4.png', title: 'Food Drive in Nagpur', description: '112 have already donated!' },
      ],
    },
    social: {
      info: {
        title: 'Transform lives together',
        description: 'We aim to enhance well-being by supporting children, the elderly, and women for equitable opportunities, protection, empowerment, and a better quality of life.',
      },
      smallCards: [
        { image: 'social1.png', title: 'Funds for old age home', description: '77 have already donated!' },
        { image: 'social2.png', title: 'Empower them', description: '46 have already donated!' },
        { image: 'social3.png', title: 'Donate to a school', description: '88 have already donated!' },
        { image: 'social4.png', title: 'Girls’ school needs funds', description: '27 have already donated!' },
      ],
    },
    animal: {
      info: {
        title: 'Donate to save your four-legged friends',
        description: 'We aim to enhance well-being by promoting animal welfare and supporting volunteering in animal care.',
      },
      smallCards: [
        { image: 'animal1.png', title: 'Save this indie pup', description: '28 have already donated!' },
        { image: 'animal2.png', title: 'Gaushala needs funds', description: '18 have already donated!' },
        { image: 'animal3.png', title: 'Help feed strays', description: '38 have already donated!' },
      ],
    },
    disaster: {
      info: {
        title: 'Help rebuild homes and lives',
        description: 'We aim to enhance well-being by providing comprehensive aid during disaster relief efforts for affected communities.',
      },
      smallCards: [
        { image: 'disaster1.png', title: 'The Wayanad flood', description: '2516 have already donated!' },
      ],
    },
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const importImageCategory = (category, imageName) => {
    return new URL(`../../assets/images/Causes/${category}/${imageName}`, import.meta.url).href;
  };

  const scrollLeft = () => {
    const scrollContainer = scrollContainerRef.current;
    scrollContainer.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    const scrollContainer = scrollContainerRef.current;
    scrollContainer.scrollBy({ left: 300, behavior: 'smooth' });
  };

  const updateScrollButtonsVisibility = () => {
    const scrollContainer = scrollContainerRef.current;
    const isAtLeft = scrollContainer.scrollLeft === 0;
    const isAtRight = scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth;

    setShowScrollButtons({ left: !isAtLeft, right: !isAtRight });
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    scrollContainer.addEventListener('scroll', updateScrollButtonsVisibility);

    // Initial check
    updateScrollButtonsVisibility();

    return () => {
      scrollContainer.removeEventListener('scroll', updateScrollButtonsVisibility);
    };
  }, [selectedCategory]);

  return (
    <div className='w-full flex flex-col items-center mt-20'>
      <h2 className='font-=[550] text-[24px] text-[#4A4A4A]'>Causes we support</h2>
      <div className='flex gap-12 mt-4'>
        {Object.keys(categories).map((categoryName) => (
          <img 
            key={categoryName}
            src={importImageCategory(categoryName, selectedCategory === categoryName ? `${categoryName}select.png` : `${categoryName}.png`)} 
            alt={categoryName} 
            onClick={() => handleCategoryClick(categoryName)} 
            className={`cursor-pointer w-14 h-16 ${selectedCategory === categoryName ? 'border-b-2 border-black' : ''}`}
          />
        ))}
      </div>

      {/* Info div */}
      <div className='flex items-start justify-center w-full mt-12'>
        <div className='w-1/4 flex flex-col items-start pl-14 gap-2'>
          <h1 className='font-normal text-xl'>{categories[selectedCategory].info.title}</h1>
          <p className='font-light'>{categories[selectedCategory].info.description}</p>
          <div className="action-buttons flex flex-col mt-3">
            <button className="donate-button bg-pink-600 text-white py-2 px-4 rounded-full">
              Donate to a cause
            </button>
          </div>
        </div>

        {/* Small card section with scroll effect */}
        <div className='w-3/4 pl-12 relative'>
          {showScrollButtons.left && (
            <button onClick={scrollLeft} className='scroll-button scroll-left'>
              <img src={importImageCategory('general', 'scrollleft.png')} alt="Scroll Left" />
            </button>
          )}
          <div id='card-scroll-container' ref={scrollContainerRef} className='flex overflow-x-auto gap-4 snap-x snap-mandatory scrollbar-hide'>
            {categories[selectedCategory].smallCards.map(({ image, title, description }) => (
              <div className='flex flex-col gap-2 snap-start w-1/3 min-w-[300px] max-w-[200px]' key={image}>
                <img src={importImageCategory(selectedCategory, image)} alt={title} className='w-full h-auto object-cover rounded-lg' />
                <h2 className='font-semibold text-xl'>{title}</h2>
                <p className='font-light'>{description}</p>
              </div>
            ))}
          </div>
          {showScrollButtons.right && (
            <button onClick={scrollRight} className='scroll-button scroll-right'>
              <img src={importImageCategory('general', 'scroll.png')} alt="Scroll Right" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
