import React from 'react';
import FarmWelcomeIcon1 from '../../assets/farmWelcomeIcon1.png';
import FarmWelcomeIcon2 from '../../assets/farmWelcomeIcon2.png';
import FarmWelcomeIcon3 from '../../assets/farmWelcomeIcon3.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons'; // Import the plus icon

const FarmRegisterDone = ({ setActiveFarmTab }) => {
  // Define JSON data for the text content
  const welcomeData = [
    {
      icon: FarmWelcomeIcon1,
      text: 'Cultivate your ideal produce with AI and IoT driven insights'
    },
    {
      icon: FarmWelcomeIcon2,
      text: 'Showcase and sale your produce in our Blockchain Marketplace'
    },
    {
      icon: FarmWelcomeIcon3,
      text: 'Gain insights on market trends and get recommendations'
    }
  ];

  const handleSetupFarmClick = () => {
    setActiveFarmTab('FarmDetails'); // Update the active tab to 'FarmDetails'
  };

  return (
    <div className='flex flex-col w-full h-[600px] px-0 py-0 items-center  
    mt-4 gap-4 overflow-auto mb-20'>
      {/* subtab */}
      <div className='w-full h-12'>
        <div className='w-fit border-b-[#65A30D] border-2
        flex items-center justify-center p-2 border-[#FFFBEB]' >
          <p className='font-normal text-base'>
            Your Product
            </p>
        </div>
      </div>
      {/* content */}
      <div className='flex flex-col items-center gap-4'>
      <p className='text-center text-base text-[#44403C] font-[600]'>
        You are almost there...
      </p>
      <h2 className='text-2xl text-[#44403C] font-extrabold'>
        Set up your first Dashboard!
      </h2>
      {/* Map over the JSON data to render the content */}
      {welcomeData.map((item, index) => (
        <div key={index} className='flex justify-between items-center gap-y-4 gap-x-3 w-4/5'>
          <img src={item.icon} alt={`Icon ${index + 1}`} className='w-8 h-10' />
          <p className='text-[#44403C] text-left text-sm'>{item.text}</p>
        </div>
      ))}
      <button
        onClick={handleSetupFarmClick} // Call the handleSetupFarmClick function on button click
        className='w-fit bg-[#65A30D] py-[1rem] px-8 rounded-md text-[#FFFFFF] my-2 mx-auto
        flex flex-row items-center gap-3'>
        <FontAwesomeIcon icon={faPlus} /> {/* Specify the plus icon */}
        <p>Add Your First Product</p>
      </button>
      </div>
    </div>
  );
};

export default FarmRegisterDone;
