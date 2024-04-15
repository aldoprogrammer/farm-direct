import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'; // Import the specific arrow icon
import BackgroundNoImage from '../assets/topHeaderNoImage.png';
import TopBarLogoLink from '../assets/topBarLogoLink.png';
import TopComponent from '../assets/TopComponent.png';

const TopTab = ({ activeFarmTab, setActiveFarmTab }) => {
  const handleBack = () => {
    setActiveFarmTab('WelcomeFarmPage');
  }
  return (
    <>
      {activeFarmTab == 'FarmDetails' && (
        <div className='bg-[#65A30D] h-12 w-full p-2 flex items-center justify-between text-[#FFFFFF]'>
          <div className='flex items-center gap-3 cursor-pointer ml-2' onClick={handleBack}>
            {/* Use the FontAwesomeIcon component */}
            <FontAwesomeIcon icon={faArrowLeftLong} className='font-bold' /> {/* Specify the arrow icon */}
            <p className='text-base'>Dashboard</p>
          </div>
          <h6 className='font-bold text-[18px]'>
            Farm Details
          </h6>
        </div>
      )}
      <div className='h-44 w-full bg-[#78716C] relative justify-center items-center'>
        {/* Render the logo link only if the active tab is not 'FarmDetails' */}
        {activeFarmTab !== 'FarmDetails' && (
          <Link to="/">
            <img src={TopBarLogoLink} alt="Home" className='w-24 h-12 absolute top-0 left-0 cursor-pointer' />
          </Link>
        )}
        <img src={BackgroundNoImage} alt="Background" className='w-20 h-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl z-1' />
        <h5 className='text-white font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl z-10'>
          Your Farm
        </h5>
        <img src={TopComponent} alt="Background" className='w-full h-5 absolute bottom-0' />
      </div>
    </>
  );
};

export default TopTab;
