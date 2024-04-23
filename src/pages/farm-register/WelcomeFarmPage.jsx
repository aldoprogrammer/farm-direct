import React, { useState } from 'react';
import FarmDirectLogo from '../../assets/favicon.png';
import FarmWelcomeIcon1 from '../../assets/farmWelcomeIcon1.png';
import FarmWelcomeIcon2 from '../../assets/farmWelcomeIcon2.png';
import FarmWelcomeIcon3 from '../../assets/farmWelcomeIcon3.png';
import AlmostThereIcon from '../../assets/almost-there-icon.png';
import ButtonFarmDirect from '../../components/ButtonFarmDirect';
import PencilIcon from '../../assets/pencilIcon.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
const WelcomeFarmPage = ({ setActiveFarmTab }) => {
  const navigate = useNavigate();
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
    setActiveFarmTab('FarmDetails'); // Update the active tab 
  };
  

  const [welcomeTabPage, setWelcomeTabPage] = useState('welcome');
  const handleWelcomeTabClick = () => {
    setWelcomeTabPage('almostDone');
  }

  const handleWelcomeAlmostTabClick = () => {
    setWelcomeTabPage('welcome');
  }

  return (
    <div className='flex flex-col w-full h-[600px] px-2 py-0 items-center justify-center 
    mt-4 gap-4 overflow-auto mb-20'>
      {/* welcome to farm tab */}
      {welcomeTabPage === 'welcome' && (
 <>
 <button
        onClick={handleWelcomeTabClick} // Call the handleSetupFarmClick function on button click
        className='w-fit bg-[#65A30D] py-[1rem] px-8 rounded-md text-[#FFFFFF] my-2 mx-auto
        flex flex-row items-center gap-3'>
        <p>
          Change The Page
        </p>
      </button>
 <img src={FarmDirectLogo} alt="FarmDirectLogo" className='w-20 h-20' />
 <h2 className='text-2xl text-[#44403C] font-extrabold'>Welcome to FarmDirect!</h2>
 <p className='text-center text-base text-[#44403C] font-[600]'>
   Jumpstart your farming journey
   <br />with just a few clicks
 </p>
 {/* Map over the JSON data to render the content */}
 {welcomeData.map((item, index) => (
   <div key={index} className='flex justify-between 
   items-center gap-y-4 gap-x-3 w-4/5 mx-0 
   md:mx-auto md:justify-normal md:w-2/5'>
     <img src={item.icon} alt={`Icon ${index + 1}`} className='w-8 h-10' />
     <p className='text-[#44403C] text-left text-sm'>{item.text}</p>
   </div>
 ))}
 <button
   onClick={handleSetupFarmClick}
   className='w-fit bg-[#65A30D] py-[1rem] px-8 rounded-md text-[#FFFFFF] my-2 mx-auto
   flex flex-row items-center gap-3'>
   <img src={PencilIcon} alt="" className='w-4 h-4' />
   <p>Setup Your Farm</p>
 </button>
 </>
      )}
     
      {/* you are almost there tab */}
      {welcomeTabPage === 'almostDone' && (
        <>
         <button
        onClick={handleWelcomeAlmostTabClick} // Call the handleSetupFarmClick function on button click
        className='w-fit bg-[#65A30D] py-[1rem] px-8 rounded-md text-[#FFFFFF] my-2 mx-auto
        flex flex-row items-center gap-3'>
        <p>
          Change The Page
        </p>
      </button>
        <h2 className='text-2xl text-[#44403C] font-extrabold'>
        You are almost there...
          </h2>
          
          <p className='text-center text-base
           text-[#44403C] font-[500]'>
          Set up your first Dashboard!
        </p>
        <img src={AlmostThereIcon} alt="FarmDirectLogo" className='w-20 h-20' />
        <button
          onClick={handleSetupFarmClick} // Call the handleSetupFarmClick function on button click
          className='w-fit bg-[#65A30D] py-[1rem] px-8 rounded-md text-[#FFFFFF] my-2 mx-auto
          flex flex-row items-center gap-3'>
          <FontAwesomeIcon icon={faPlus} /> {/* Specify the plus icon */}
          <p>
          Add Your First Product
          </p>
        </button>
        </>
      )}
      
    </div>

  );
};

export default WelcomeFarmPage;
