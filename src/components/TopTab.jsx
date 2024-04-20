import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong, faCheckCircle, faCheckSquare, faCog, faPlus } from '@fortawesome/free-solid-svg-icons'; // Import the specific arrow icon
import BackgroundNoImage from '../assets/topHeaderNoImage.png';
import TopBarLogoLink from '../assets/topBarLogoLink.png';
import TopComponent from '../assets/TopComponent.png';
import DoneFarmerRegisBG from '../assets/done-farmer-regis-bg.png'; // Import the background image for "Done" tab
import PencilIcon from '../assets/pencilIcon.png';
const TopTab = ({ activeFarmTab, setActiveFarmTab, activeMarketTab, setActiveMarketTab, activeProductTab, setActiveProductTab }) => {
  const handleBack = () => {
    setActiveFarmTab('WelcomeFarmPage');
  };

  const handleBackMarketTab = () => {
    setActiveMarketTab('MarketHomePage');
  };

  const handleBackProductTab = () => {
    setActiveProductTab('FirstProduct');
  };

  let backgroundImage = BackgroundNoImage; // Default background image

  if (activeFarmTab === 'Done') {
    backgroundImage = DoneFarmerRegisBG; // Change background image for "Done" tab
  }

  return (
    <>
    {/* dashboard tab  */}
      {activeFarmTab === 'FarmDetails' && (
        <div className='bg-[#65A30D] h-12 w-full p-2 flex items-center justify-between text-[#FFFFFF]'>
          <div className='flex items-center gap-3 cursor-pointer ml-2' onClick={handleBack}>
            <FontAwesomeIcon icon={faArrowLeftLong} className='font-bold' /> {/* Specify the arrow icon */}
            <p className='text-base'>Dashboard</p>
          </div>
          <h6 className='font-bold text-[18px]  font-roboto-slab'>Farm Details</h6>
        </div>
      )}
      {activeMarketTab === 'DetailsProductMarketHomePage' && (
        <div className='bg-[#65A30D] h-12 w-full p-2 flex items-center justify-between text-[#FFFFFF]'>
          <div className='flex items-center gap-3 cursor-pointer ml-2' onClick={handleBackMarketTab}>
            <FontAwesomeIcon icon={faArrowLeftLong} className='font-bold' /> {/* Specify the arrow icon */}
            <p className='text-base'>Market</p>
          </div>
          <h6 className='font-bold text-[18px] font-roboto-slab'>
          Selected Product
          </h6>
        </div>
      )}
      {activeProductTab === 'EditProductPage' && (
        <div className='bg-[#65A30D] h-12 w-full p-2 flex items-center justify-between text-[#FFFFFF]'>
          <div className='flex items-center gap-3 cursor-pointer ml-2' onClick={handleBackProductTab}>
            <FontAwesomeIcon icon={faArrowLeftLong} className='font-bold' /> {/* Specify the arrow icon */}
            <p className='text-base'>Dashboard</p>
          </div>
          <h6 className='font-bold text-[18px]  font-roboto-slab'>
          Edit Your Product
            </h6>
        </div>
      )}

      {activeFarmTab == 'Done' && (
        <div className='h-44 w-full bg-[#78716C] relative justify-center items-center' style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', filter: 'none' }}>
          {/* Render the logo link only if the active tab is not 'FarmDetails' */}
          {activeFarmTab !== 'FarmDetails' && (
            <Link to="/">
              <img src={TopBarLogoLink} alt="Home" className='w-24 h-12 absolute top-0 left-0 cursor-pointer' />
            </Link>
          )}
          <div className='absolute bottom-3 right-3 bg-[#65A30D] w-[40px] h-[40px] p-2 rounded-full
          flex items-center justify-center text-white z-20 cursor-pointer'>
            <img src={PencilIcon} alt="" className='w-4 h-4' />
          </div>
          <div className='flex items-center gap-2 absolute bottom-4 left-2 text-white'>
            <FontAwesomeIcon icon={faCog} className='w-6 h-6' /> {/* Use FontAwesomeIcon for the cog icon */}
            <p className='text-2xl font-normal'>56&deg;</p> {/* Use &deg; for the degree symbol */}
          </div>
          <h5 className='text-white font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl z-10'>
            Silver Bells Acres
          </h5>
          <img src={TopComponent} alt="Background" className='w-full h-5 absolute bottom-0' />
        </div>
      )}
      {activeFarmTab !== 'Done' && (
        <div className='h-44 w-full bg-[#78716C] relative justify-center items-center'>
          {/* Render the logo link only if the active tab is not 'FarmDetails' */}
          {activeFarmTab !== 'FarmDetails' && (
            <Link to="/">
              <img src={TopBarLogoLink} alt="Home" className='w-24 h-12 absolute top-0 left-0 cursor-pointer' />
            </Link>
          )}
          <div className='absolute bottom-3 right-3 bg-[#65A30D] w-[40px] h-[40px] p-2 rounded-full
          flex items-center justify-center text-white z-20 cursor-pointer'>
            <FontAwesomeIcon icon={faPlus} /> {/* Specify the plus icon */}
          </div>
          <img src={BackgroundNoImage} alt="Background" className='w-20 h-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl z-1' />
          <h5 className='text-white font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl z-10'>
            Your Farm
          </h5>
          <img src={TopComponent} alt="Background" className='w-full h-5 absolute bottom-0 z-10' />
        </div>
      )}
      {/* tab in market page */}
      {activeMarketTab == 'MarketHomePage' && (
      <div className='w-full flex flex-row items-center 
      justify-center mx-auto bg-[#FFFFFF] h-[70px] shadow-md
      overflow-hidden'>
        <div className='w-[90%] flex items-center gap-3 justify-center
        '>
          <div className='w-auto overflow-x-auto flex items-center gap-2
          py-4'>
            <div className="flex items-center gap-2 border-[#D8D8DA] border-[2px] rounded-md py-[4px] px-[10px]">
              <FontAwesomeIcon icon={faCheckCircle} className="text-[#17B530] font-bold" />
              <p style={{ whiteSpace: "nowrap" }}>Near Me</p>
            </div>
            <div className="flex items-center gap-2 
          border-[#D8D8DA] border-[2px] rounded-md w-fit py-[4px] px-[10px]">
              <FontAwesomeIcon icon={faCheckCircle}
                className="text-[#17B530] font-bold" />
              <p>Supplies</p>
            </div>
            <div className="flex items-center gap-2 
          border-[#D8D8DA] border-[2px] rounded-md w-fit py-[4px] px-[10px]">
              <FontAwesomeIcon icon={faCheckCircle}
                className="text-[#17B530] font-bold" />
              <p>Supplies</p>
            </div>
            <div className="flex items-center gap-2 
          border-[#D8D8DA] border-[2px] rounded-md w-fit py-[4px] px-[10px]">
              <FontAwesomeIcon icon={faCheckCircle}
                className="text-[#17B530] font-bold" />
              <p>Delivery</p>
            </div>
            <div className='w-[40px] h-[40px] p-4 rounded-full
          flex items-center justify-center text-black
          cursor-pointer border-[2px] border-[#D8D8DA]'>
              <FontAwesomeIcon icon={faPlus} /> {/* Specify the plus icon */}
            </div>
          </div>
        </div>
      </div>
      )}
    </>
  );
};

export default TopTab;
