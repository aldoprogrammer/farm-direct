import React, { useEffect, useState } from 'react'
import FarmEditButton from '../../components/FarmEditButton';
import ButtonFarmDirect from '../../components/ButtonFarmDirect';
import FarmDetailsFormModal from '../../modal/FarmDetailsFormModal';
import FarmAddressDetailsFormModal from '../../modal/FarmAddressDetailsFormModal';
import UserFarmerShoperModal from '../../modal/UserFarmerShoperModal';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const UserFormDetails = ({ setActiveFarmTab }) => {
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
    setActiveFarmTab('Done'); // Update the active tab 
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check login status from localStorage when component mounts
    const loginStatus = localStorage.getItem('login');
    setIsLoggedIn(loginStatus === 'true');
  }, []);


  return isLoggedIn ? (
    <div className='flex flex-col w-full h-[600px] px-2 py-0 items-center 
    mt-4 gap-4 overflow-auto mb-20'>
      <ButtonFarmDirect title='Save Farm Details' onClick={handleSetupFarmClick} />
      <div className='w-full h-auto p-4 rounded-xl bg-[#ffffff] text-[#000000]
      flex flex-col shadow-md gap-5'>
        <div className='flex gap-2 justify-between'>
        <div className='flex flex-col'>
          <p className='font-bold'>
          Profile type:
          </p>
          <p>Farmer</p>

          </div>
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
          <FarmEditButton />
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
      flex flex-col shadow-md gap-5 mb-6'>
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
  ) : (
    <div className='flex flex-col w-full h-[600px] px-2 py-0 items-center 
    mt-4 gap-4 overflow-auto mb-20'>
      <div className='w-full h-auto 
      p-4 text-[#000000] justify-center items-center
      flex flex-col gap-5'>
        <h2 className='text-[#44403C] text-xl font-roboto-slab 
         font-extrabold'>
          Welcome to FarmDirect
        </h2>
        <p className='text-center text-[#44403C]'>
          Sign up to access all our exciting features <br />
          for shoppers and for farmers! <br />
          You can switch account types at any time!
        </p>
        <FontAwesomeIcon icon={faUser} size='4x' color='#B45309' />

        <Link to='/register'>
          <ButtonFarmDirect title='I want to farm and sell produce' />
        </Link>
        
        <Link to='/register'>
          <ButtonFarmDirect title='I want to buy local farm produce' />
        </Link>
      </div>
    </div>
  )
}

export default UserFormDetails