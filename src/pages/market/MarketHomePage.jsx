import React, { useState } from 'react'
import FarmEditButton from '../../components/FarmEditButton';
import ButtonFarmDirect from '../../components/ButtonFarmDirect';
import FarmDetailsFormModal from '../../modal/FarmDetailsFormModal';
import FarmAddressDetailsFormModal from '../../modal/FarmAddressDetailsFormModal';
import UserFarmerShoperModal from '../../modal/UserFarmerShoperModal';

const MarketHomePage = ({ setActiveMarketTab }) => {
  const [showModalShoperFarmer, setShowModalShoperFarmer] = useState(false); // State to manage modal visibility
  const [showModalAddress, setShowModalAddress] = useState(false); // State to manage modal visibility


  const handleEditFarmerShoper = () => {
    setShowModalShoperFarmer(true); // Show the modal when the button is clicked
  };

  const handleCloseEditShoperFarmer = () => {
    setShowModalShoperFarmer(!showModalShoperFarmer);
  };

  const handleEditAddress = () => {
    setShowModalAddress(true); // Show the modal when the button is clicked
  };

  const handleCloseEditAddress = () => {
    setShowModalAddress(!showModalAddress);
  };


  const handleSetupFarmClick = () => {
    setActiveMarketTab('Done'); // Update the active tab 
  };

  return (
    <div className='flex flex-col w-full h-[600px] px-2 py-0 items-center 
    mt-4 gap-4 overflow-auto mb-20'>
      <ButtonFarmDirect title='Save Farm Details' onClick={handleSetupFarmClick} />
      <div className='w-full h-auto p-4 rounded-xl bg-[#ffffff] text-[#000000]
      flex flex-col shadow-md gap-5'>
        <div className='flex gap-2 justify-between'>
          <p className='font-bold'>
          MarketHomePage
            </p>
          <FarmEditButton handleClick={handleEditFarmerShoper} />
        </div>
      </div>
      <div className='w-full h-auto p-4 rounded-xl bg-[#ffffff] text-[#000000]
      flex flex-col shadow-md gap-5'>
        <div className='flex items-left gap-2 justify-between w-full'>
          <div className='flex flex-col'>
          <p className='font-bold'>Your Name</p>
          <p>Aldo LS</p>
          </div>
          <FarmEditButton  />
        </div>
      </div>
      <div className='w-full h-auto p-4 rounded-xl bg-[#ffffff] text-[#000000]
      flex flex-col shadow-md gap-5'>
        <div className='flex items-left gap-2 justify-between w-full'>
          <div className='flex flex-col w-4/5'>
            <p className='font-bold'>Address:</p>
            <span className='text-sm font-normal'>
              4567 Meridian Street
              Bellingham, WA 98225
            </span>
          </div>
          <FarmEditButton handleClick={handleEditAddress} />
        </div>
      </div>
      <div className='w-full h-auto p-4 rounded-xl bg-[#ffffff] text-[#000000]
      flex flex-col shadow-md gap-5'>
        <div className='flex flex-col items-left gap-2 justify-between w-full'>
          <p className='font-bold'>Create Your Wallet</p>
          <div className='flex flex-col justify-center items-center'>
            <ButtonFarmDirect title='Create Your Wallet' />
          </div>
        </div>
      </div>
      <div className='w-full h-auto p-4 rounded-xl bg-[#ffffff] text-[#000000]
      flex flex-col shadow-md gap-5'>
        <div className='flex items-left gap-2 justify-between w-full'>
          <div className='flex flex-col w-4/5'>
            <p className='font-bold'>Change Password</p>
          </div>
          <FarmEditButton />
        </div>
      </div>
      {showModalShoperFarmer && <UserFarmerShoperModal closeModal={handleCloseEditShoperFarmer} />}
      {showModalAddress && <FarmAddressDetailsFormModal closeModal={handleCloseEditAddress} />}
    </div>
  )
}

export default MarketHomePage