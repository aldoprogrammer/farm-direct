import React, { useState } from 'react';
import FarmEditButton from '../../components/FarmEditButton';
import ButtonFarmDirect from '../../components/ButtonFarmDirect';
import ThumbnailProduct from '../../assets/product1.png';
import ThumbnailProduct2 from '../../assets/product2.png';
import ThumbnailProduct3 from '../../assets/product3.png';
import FarmDetailsFormModal from '../../modal/FarmDetailsFormModal';
import FarmAddressDetailsFormModal from '../../modal/FarmAddressDetailsFormModal';
import UserFarmerShoperModal from '../../modal/UserFarmerShoperModal';
import { faCartShopping, faSeedling, faStoreAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Option, Rating, Select } from '@material-tailwind/react';

const DetailsProductMarketHomePage = ({ setActiveMarketTab }) => {
  const [showModalShoperFarmer, setShowModalShoperFarmer] = useState(false);
  const [showModalAddress, setShowModalAddress] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState("1 Package"); // Initial state

  const handleEditFarmerShoper = () => {
    setShowModalShoperFarmer(true);
  };

  const handleCloseEditShoperFarmer = () => {
    setShowModalShoperFarmer(!showModalShoperFarmer);
  };

  const handleEditAddress = () => {
    setShowModalAddress(true);
  };

  const handleCloseEditAddress = () => {
    setShowModalAddress(!showModalAddress);
  };

  const handleSetupFarmClick = () => {
    setActiveMarketTab('Done');
  };

  const handlePackageChange = (e) => {
    setSelectedPackage(e.target.value); // Update the selected package
  };


  return (
    <div className='flex flex-col w-full h-[600px] px-2 py-0 items-center mt-4 gap-4 overflow-auto mb-20'>
      {/* thumbnail product section */}
      <div className='w-full 
        h-auto rounded-xl bg-[#ffffff] 
        text-[#000000] flex flex-col 
        shadow-md p-4 gap-2'>
        <div className='w-2/5 flex mx-auto'>
          <img src={ThumbnailProduct} alt="" className='w-full h-full' />
        </div>
        <div className='flex flex-col w-full mt-2 gap-4'>
          {/* title */}
          <div className='flex items-center justify-between'>
            <h5 className='font-bold text-[#44403C]'>
              Organic Fertilizer.
            </h5>
            <Rating value={3} readonly />
          </div>

          {/* desc */}
          <p>
            Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id
            est laborum.
          </p>
          {/* amount and price */}
          <div className='flex items-center justify-between'>
            <div className="w-[70%]">
              <Select label="Select Package">
                <Option>1 Package</Option>
                <Option>2 Package</Option>
                <Option>3 Package</Option>
              </Select>
            </div>
            <h6 className='font-black text-[#44403C] mt-1 md:text-4xl font-roboto-slab text-xl'>
              $7.00 LB
            </h6>
          </div>

          <button className='w-fit bg-[#65A30D]
             py-[14px] px-8 rounded-md text-[#FFFFFF] my-2 
             flex flex-row items-center gap-3 mx-auto'>
            <FontAwesomeIcon icon={faCartShopping} className='text-white w-4 h-4' />
            <p>Purchase</p>
          </button>
        </div>
      </div>
      {showModalShoperFarmer && <UserFarmerShoperModal closeModal={handleCloseEditShoperFarmer} />}
      {showModalAddress && <FarmAddressDetailsFormModal closeModal={handleCloseEditAddress} />}
    </div>
  );
};

export default DetailsProductMarketHomePage;
