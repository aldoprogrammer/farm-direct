import React, { useState } from 'react'
import FarmEditButton from '../../components/FarmEditButton';
import ButtonFarmDirect from '../../components/ButtonFarmDirect';
import FarmDetailsFormModal from '../../modal/FarmDetailsFormModal';
import FarmAddressDetailsFormModal from '../../modal/FarmAddressDetailsFormModal';

const FarmDetailsForm = () => {
  const [showModalFarmBussiness, setShowModalFarmBussiness] = useState(false); // State to manage modal visibility
  const [showModalAddress, setShowModalAddress] = useState(false); // State to manage modal visibility


  const handleEditFarmBussiness = () => {
    setShowModalFarmBussiness(true); // Show the modal when the button is clicked
  };

  const handleCloseEditFarmBussiness = () => {
    setShowModalFarmBussiness(!showModalFarmBussiness);
  };

  const handleEditAddress = () => {
    setShowModalAddress(true); // Show the modal when the button is clicked
  };

  const handleCloseEditAddress = () => {
    setShowModalAddress(!showModalAddress);
  };

  return (
    <div className='flex flex-col w-full h-[600px] px-2 py-0 items-center 
    mt-4 gap-4 overflow-auto mb-20'>
      <div className='w-full h-auto p-4 rounded-xl bg-[#ffffff] text-[#000000]
      flex flex-col shadow-md gap-5'>
        <div className='flex items-center gap-2 justify-between'>
          <p className='font-bold'>Farm (Business) Name:</p>
          <div className='flex items-center gap-1'>
            <div className='rounded-full w-4 h-4 bg-[#FFBE18]'></div>
            <p>Not listed</p>
          </div>
        </div>

        <p className='font-bold mt-4'>Phone Number</p>
        <div className='flex items-center gap-2 justify-between w-full'>
          <p className='font-bold'>Business Id:</p>
          <FarmEditButton handleClick={handleEditFarmBussiness} />
          
        </div>
      </div>
      <div className='w-full h-auto p-4 rounded-xl bg-[#ffffff] text-[#000000]
      flex flex-col shadow-md gap-5'>
        <div className='flex items-left gap-2 justify-between w-full'>
          <p className='font-bold'>Address:</p>
          <FarmEditButton handleClick={handleEditAddress} />
        </div>
      </div>
      <div className='w-full h-auto p-4 rounded-xl bg-[#ffffff] text-[#000000]
      flex flex-col shadow-md gap-5'>
        <div className='flex items-left gap-2 justify-between w-full'>
          <div className='flex flex-col w-4/5'>
            <p className='font-bold'>Blockchain ID:</p>
            <span className='text-sm font-normal'>To register your farm on blockchain,
              create your wallet</span>
          </div>
          <FarmEditButton />
        </div>
      </div>
      <div className='w-full h-auto p-4 rounded-xl bg-[#ffffff] text-[#000000]
      flex flex-col shadow-md gap-5'>
        <div className='flex flex-col items-left gap-2 justify-between w-full'>
        <p className='font-bold'>IoT Devices:</p>
          <div className='flex flex-col justify-center items-center'>
            <ButtonFarmDirect title='Discover IoT Devices' />
          </div>
        </div>
      </div>
      {showModalFarmBussiness && <FarmDetailsFormModal closeModal={handleCloseEditFarmBussiness} />}
      {showModalAddress && <FarmAddressDetailsFormModal closeModal={handleCloseEditAddress} />}
    </div>
  )
}

export default FarmDetailsForm