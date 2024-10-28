import React, { useState } from 'react';

export default function Causessupport() {
  const [selectedImage, setSelectedImage] = useState('healthselect.png'); // Default selected image
  const [images] = useState([
    { name: 'health', selected: 'healthselect.png', default: 'health.png' },
    { name: 'social', selected: 'socialselect.png', default: 'social.png' },
    { name: 'animal', selected: 'animalselect.png', default: 'animal.png' },
    { name: 'disaster', selected: 'disasterselect.png', default: 'disaster.png' },
  ]);

  const importImage = (imageName) => {
    return new URL(`../../assets/images/Causes/${imageName}`, import.meta.url).href;
  };

  const handleImageClick = (image) => {
    setSelectedImage(image.selected);
  };

  return (
    <div className='w-full flex flex-col items-center mt-20'>
      <h2 className='font-normal text-[24px] text-[#4A4A4A]'>Causes we support</h2>
      <div className='flex gap-10'>
        {images.map((image) => (
          <img 
            key={image.name}
            src={importImage(selectedImage === image.selected ? image.selected : image.default)} 
            alt={image.name} 
            onClick={() => handleImageClick(image)} 
            className='cursor-pointer'
          />
        ))}
      </div>

    </div>
  );
}
