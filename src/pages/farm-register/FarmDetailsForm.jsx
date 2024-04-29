import React, { useEffect, useState } from 'react'
import FarmEditButton from '../../components/FarmEditButton';
import ButtonFarmDirect from '../../components/ButtonFarmDirect';
import FarmDetailsFormModal from '../../modal/FarmDetailsFormModal';
import FarmAddressDetailsFormModal from '../../modal/FarmAddressDetailsFormModal';
import { Link } from 'react-router-dom';
import RegisterFarmModal from '../../modal/RegisterFarmModal';
import { ethers } from 'ethers';
import Web3 from 'web3';
import abi from './farm.json'

const FarmDetailsForm = ({ setActiveFarmTab }) => {
  const [state, setState] = useState({
    provider:null,
    signer: null,
    contract:null
  });
  const [account, setAccount] = useState('Not connected');
  const [showModalFarmBussiness, setShowModalFarmBussiness] = useState(false); // State to manage modal visibility
  const [showModalRegisterFarmBlockchain, setShowModalRegisterFarmBlockchain] = useState(false); // State to manage modal visibility
  const [fillUserProfile, setFillUserProfile] = useState('not done');


  useEffect(() => {
    // Check if the value in localStorage is 'done'
    const storedFillUserProfile = localStorage.getItem('fillUserProfile');
    // if (storedFillUserProfile) {
      setFillUserProfile(storedFillUserProfile);
      const getContract = async()=> {
        const contractAddress="0x266e1D8Ee6Ec3C5e4ffF8CFDdf1889e6C023c85b";
        const contractABI=abi.abi;
  
        // Metamask configuration
        try{
        const {ethereum} = window;
        conole.log(ethereum)
  
        const account = await ethereum.request({
        method:"eth_requestAccounts"
      })
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();

      const contract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      )
      console.log(contract)
      setState({provider,signer,contract});
    }catch(error){
      alert(error);
    }
  }
      getContract();
  },[]);

  const handleRegisterFarmBlockchain = () => {
    setShowModalRegisterFarmBlockchain(true); // Show the modal when the button is clicked
  };

  const handleCloseRegisterFarmBlockchain = () => {
    setShowModalRegisterFarmBlockchain(!showModalRegisterFarmBlockchain);
  };

  const handleEditFarmBussiness = () => {
    setShowModalFarmBussiness(true); // Show the modal when the button is clicked
  };

  const handleCloseEditFarmBussiness = () => {
    setShowModalFarmBussiness(!showModalFarmBussiness);
  };


  const handleSetupFarmClick = () => {
    setActiveFarmTab('Done'); // Update the active tab 
  };

  const handleRegisterWalletClick = () => {
    // Set a value in localStorage indicating that the user has filled their profile
    setFillUserProfile('done');
  };

  



  return (
    <div className='flex flex-col w-full h-[600px] px-2 py-0 items-center 
    mt-4 gap-4 overflow-auto mb-20'>
      {/* <ButtonFarmDirect title='Save Farm Details' onClick={handleSetupFarmClick} /> */}
      <div className='w-full h-auto p-4 rounded-xl bg-[#ffffff] text-[#000000]
      flex flex-col shadow-md gap-5'>
        <div className='flex items-center justify-between gap-2'>
          <div className='flex flex-col'>
            <p className='font-bold'>Farm (Business) Name:</p>
            <span className='text-sm font-normal'>Aldo ls</span>
          </div>
          <div className='flex items-center gap-1'>
            <div className='rounded-full w-4 h-4 bg-[#FFBE18]'></div>
            <p>Not listed</p>
          </div>
        </div>
        <div className='flex flex-col'>
          <p className='font-bold'>Phone Number</p>
          <span className='text-sm font-normal'>+62 812 3456 7890</span>
        </div>
        <div className='flex flex-col'>
          <p className='font-bold'>Business Id:</p>
          <span className='text-sm font-normal'>123456789</span>
        </div>
        <div className='flex items-center justify-between w-full gap-2'>
          <div className='flex flex-col'>
          <p className='font-bold'>Address:</p>
          <span className='w-4/5 text-sm font-normal'>
            4567 Meridian Street
            Bellingham, WA 98225
          </span>
          </div>
        </div>
        <div className='flex items-center justify-between w-full gap-2'>
          <div className='grid grid-cols-2 gap-4'>
          <div className='flex flex-col'>
          <p className='font-bold'>Long:</p>
          <span className='text-sm font-normal'>
            4567 98225
          </span>
          </div>
          <div className='flex flex-col'>
          <p className='font-bold'>Lat:</p>
          <span className='text-sm font-normal'>
            4567 98225
          </span>
          </div>
          </div>
          <FarmEditButton handleClick={handleEditFarmBussiness} />

        </div>

      </div>
      {/* Create Your Wallet Button */}

      <div className='w-full h-auto p-4 rounded-xl bg-[#ffffff] text-[#000000]
      flex flex-col shadow-md gap-5'>
        <div className='flex justify-between w-full gap-2 items-left'>
          <div className='flex flex-col'>
            {fillUserProfile === 'done' && (
              <>
                <span className='text-sm font-normal'>
                  To list your products in FarmDirect’s market place
                  you need to register your farm on Blockchain.
                  It’s very easy and safe!
                </span>
              </>
            )}
            {fillUserProfile === 'not done' && (
              <>
                <p className='font-bold'>Blockchain ID:</p>
                <span className='text-sm font-normal'>To register your farm on blockchain, create your wallet</span>
              </>
            )}
            {fillUserProfile === 'register' && (
              <>
                <div className='flex flex-col'>
                  <p className='font-bold'>Blockchain ID:</p>
                  <span>89484673829</span>
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <span className='w-4/5 mx-auto mt-4 text-sm font-normal text-center'>You can create now contracts and list the produce in the market</span>
                </div>
              </>
            )}

          </div>
        </div>
        {fillUserProfile === 'not done' && (
          <div className='flex flex-col items-center justify-center'
            onClick={handleRegisterWalletClick}>
            <ButtonFarmDirect title='Create Your Wallet' />
          </div>
        )}

        {fillUserProfile === 'done' && (
          <div className='flex flex-col items-center justify-center' onClick={handleRegisterFarmBlockchain}>
            <ButtonFarmDirect title='Register On Blockchain' />
          </div>
        )}


      </div>

      <div className='w-full h-auto p-4 rounded-xl bg-[#ffffff] text-[#000000]
      flex flex-col shadow-md gap-5 mb-4'>
        <div className='flex flex-col justify-between w-full gap-2 items-left'>
          <p className='font-bold'>IoT Devices:</p>
          <div className='flex flex-col items-center justify-center'>
            <ButtonFarmDirect title='Discover IoT Devices' />
          </div>
        </div>
      </div>
      {showModalFarmBussiness && <FarmDetailsFormModal closeModal={handleCloseEditFarmBussiness} />}
      {showModalRegisterFarmBlockchain && <RegisterFarmModal closeModal={handleCloseRegisterFarmBlockchain} setFillUserProfile={setFillUserProfile} />}

    </div>
  )
}

export default FarmDetailsForm