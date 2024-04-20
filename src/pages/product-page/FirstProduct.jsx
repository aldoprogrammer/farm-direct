import React, { useState } from 'react'
import FarmEditButton from '../../components/FarmEditButton';
import ButtonFarmDirect from '../../components/ButtonFarmDirect';
import FarmDetailsFormModal from '../../modal/FarmDetailsFormModal';
import FarmAddressDetailsFormModal from '../../modal/FarmAddressDetailsFormModal';
import UserFarmerShoperModal from '../../modal/UserFarmerShoperModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const FirstProduct = ({ setActiveProductTab }) => {
  const [showModalShoperFarmer, setShowModalShoperFarmer] = useState(false); // State to manage modal visibility
  const [showModalAddress, setShowModalAddress] = useState(false); // State to manage modal visibility


  const handleEditProduct = () => {
    setActiveProductTab('EditProductPage'); // Update the active tab 
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
    setActiveProductTab('EditProductPage'); // Update the active tab 
  };

  return (
    <div className='flex flex-col w-full h-[600px] px-2 py-0 items-center 
    mt-4 gap-4 overflow-auto mb-20'>
      <div className='flex flex-col gap-4 justify-center items-center
      h-full'>
      <ButtonFarmDirect title='Save Farm Details' onClick={handleSetupFarmClick} />
          <p className='font-bold text-2xl'>
          Your Produce List is Empty
          </p>
          <p className='text-center text-base
           text-[#44403C] font-[500]'>
          Add Your First Product
        </p>
          </div>
      <div className='fixed bottom-16 right-3 bg-[#65A30D] w-[40px] h-[40px] p-2 rounded-full
          flex items-center justify-center text-white z-20 cursor-pointer'>
        <FontAwesomeIcon icon={faPlus} /> {/* Specify the plus icon */}
      </div>
      {showModalShoperFarmer && <UserFarmerShoperModal closeModal={handleCloseEditShoperFarmer} />}
    </div>
  )
}

export default FirstProduct