import React from 'react';
import { Link } from 'react-router-dom';
import BackgroundNoImage from '../assets/topHeaderNoImage.png';
import TopBarLogoLink from '../assets/topBarLogoLink.png';
import TopComponent from '../assets/TopComponent.png';

const TopTab = () => {
  return (
    <div className='h-44 w-full bg-[#78716C] relative justify-center items-center'>
      <Link to="/">
        <img src={TopBarLogoLink} alt="Home" className='w-24 h-12 absolute top-0 left-0 cursor-pointer' />
      </Link>
      <img src={BackgroundNoImage} alt="Background" className='w-20 h-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl z-1' />
      <h5 className='text-white font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl z-10'>
        Your Farm
      </h5>
      <img src={TopComponent} alt="Background" 
        className='w-full h-5 absolute bottom-0' />
    </div>
  );
};

export default TopTab;
