import React, { useState } from 'react'
import FarmEditButton from '../../components/FarmEditButton';
import ButtonFarmDirect from '../../components/ButtonFarmDirect';
import FarmDetailsFormModal from '../../modal/FarmDetailsFormModal';
import FarmAddressDetailsFormModal from '../../modal/FarmAddressDetailsFormModal';
import UserFarmerShoperModal from '../../modal/UserFarmerShoperModal';
import ProductTabIcon from '../../assets/produce-empty-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const FirstProduct = ({ setActiveProductTab }) => {
  const [showModalShoperFarmer, setShowModalShoperFarmer] = useState(false); // State to manage modal visibility
  const [activeFirstProductTab, setActiveFirstProductTab] = useState('EmptyList');
  const handleCloseEditShoperFarmer = () => {
    setShowModalShoperFarmer(!showModalShoperFarmer);
  };

  const handleCreateNewProduct = () => {
    setActiveProductTab('EditProductPage'); // Update the active tab 
  };

  const emptyList = () => {
    setActiveFirstProductTab('Listed');
  }

  const notEmptyList = () => {
    setActiveFirstProductTab('EmptyList');
  }

  const produce = [
    { name: "Carrot" },
    { name: "Tomato" },
    { name: "Potato" },
    { name: "Broccoli" },
    { name: "Spinach" },
    { name: "Cucumber" },
    { name: "Lettuce" },
    { name: "Bell Pepper" },
    { name: "Onion" },
    { name: "Zucchini" }
  ];
  

  return (
    <div className='flex flex-col w-full h-[600px] px-2 py-0 items-center 
    mt-4 gap-4 overflow-auto mb-20'>
      {/* product empty */}
      {activeFirstProductTab === 'EmptyList' && (
      <div className='flex flex-col gap-4 justify-center items-center
      h-full'>
         <button
          onClick={emptyList} // Call the handleSetupFarmClick function on button click
          className='w-fit bg-[#65A30D] py-[1rem] px-8 rounded-md text-[#FFFFFF] my-2 mx-auto
          flex flex-row items-center gap-3'>
          <p>
          Show Not Empty Page
          </p>
        </button>
      {/* <ButtonFarmDirect title='Save Farm Details' onClick={handleSetupFarmClick} /> */}
          <p className='font-bold text-2xl'>
          Your Produce List is Empty
          </p>
          <p className='text-center text-base
           text-[#44403C] font-[600]'>
          Add Your First Product
        </p>
        <img src={ProductTabIcon} alt="ProductTabIcon" 
        className='w-20 h-20 mt-10' />
          </div>
      )}

          {/* product listed */}
          {activeFirstProductTab === 'Listed' && (
              <>
              <button
              onClick={notEmptyList} // Call the handleSetupFarmClick function on button click
              className='w-fit bg-[#65A30D] py-[1rem]
               px-8 rounded-md text-[#FFFFFF] 
               my-2 mx-auto
              flex flex-row items-center gap-3'>
              <p>
              Show Empty Page
              </p>
            </button>
              {/* Render produce data */}
          {produce.map((vegetable, index) => (
            <div key={index} className='w-full h-auto px-4 py-1 rounded-full bg-[#ffffff] text-[#000000] flex items-center shadow-md gap-5 justify-between
            mb-1'>
              <p className='font-bold text-base'>{vegetable.name}</p>
              <FarmEditButton />
            </div>
          ))}
        </>
          )}
          
      <div className='fixed bottom-16 right-3 bg-[#65A30D] w-[40px] h-[40px] p-2 rounded-full
          flex items-center justify-center text-white z-20 cursor-pointer'
          onClick={handleCreateNewProduct}>
        <FontAwesomeIcon icon={faPlus} /> {/* Specify the plus icon */}
      </div>
      {showModalShoperFarmer && <UserFarmerShoperModal closeModal={handleCloseEditShoperFarmer} />}
    </div>
  )
}

export default FirstProduct