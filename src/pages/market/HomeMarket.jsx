import React, { useState } from 'react';
import FarmEditButton from '../../components/FarmEditButton';
import ButtonFarmDirect from '../../components/ButtonFarmDirect';
import ThumbnailProduct from '../../assets/farmerBg1.png';
import ThumbnailProduct2 from '../../assets/farmerBg2.png';
import ThumbnailProduct3 from '../../assets/product3.png';
import FarmDetailsFormModal from '../../modal/FarmDetailsFormModal';
import FarmAddressDetailsFormModal from '../../modal/FarmAddressDetailsFormModal';
import UserFarmerShoperModal from '../../modal/UserFarmerShoperModal';
import { faCartShopping, faSeedling, faStoreAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Rating } from '@material-tailwind/react';
import PurchaseModal from '../../modal/PurchaseModal';

const HomeMarket = ({ setActiveMarketTab }) => {
  const [showModalPurchase, setShowModalPurchase] = useState(false);
  const [showModalAddress, setShowModalAddress] = useState(false);


  const handleSeekingProducts = () => {
    setActiveMarketTab('MarketHomePage');
  };

  const handleCloseModalPurchase = () => {
    setShowModalPurchase(!showModalPurchase);
  };

  const handleEditAddress = () => {
    setShowModalAddress(true);
  };

  const handleCloseEditAddress = () => {
    setShowModalAddress(!showModalAddress);
  };

  const handleDetailsMarketProduct = () => {
    setActiveMarketTab('DetailsProductMarketHomePage');
  };

  const dataDummyMarket = [
    {
      image: ThumbnailProduct,
      farmerName: "Silver Bells Farm"
    },
    {
      image: ThumbnailProduct2,
      farmerName: "Jane Smith"
    },
    {
      image: ThumbnailProduct,
      farmerName: "Alice Johnson"
    },
    {
      image: ThumbnailProduct2,
      farmerName: "Bob Williams"
    },
    {
      image: ThumbnailProduct,
      farmerName: "Emily Brown"
    }
  ];

  return (
    <div className='flex flex-col w-full h-[600px] px-2 py-0 items-center mt-4 gap-4 overflow-auto mb-20'>
      <h2 className='text-[#000000] text-xl font-roboto-slab 
         font-black '>
        Welcome to our Market Place!
      </h2>
      {/* product section */}
      <div className='w-full gap-5 grid grid-cols-1
       md:grid-cols-2 lg:grid-cols-3 mb-4'>
        {dataDummyMarket.map((item, index) => (
          <div key={index}
            className='w-full rounded-xl 
           text-[#000000] h-[153px] flex flex-row 
           shadow-md p-4 gap-2 cursor-pointer'
            style={{ backgroundImage: `url(${item.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            onClick={handleSeekingProducts}
          >
            <div className='flex flex-col gap-1 w-3/5 mt-2'>
              <h5 className='font-bold text-white 
            md:text-2xl text-xl
            cursor-pointer'
                onClick={handleDetailsMarketProduct}>
                {item.farmerName}
              </h5>
              <Rating value={3} readonly />
              <button className='w-fit bg-[#65A30D] py-[7px] px-4 rounded-md text-[#FFFFFF] my-2 flex flex-row items-center gap-3'

              >
                {/* <FontAwesomeIcon icon={faCartShopping} className='text-white w-4 h-4' /> */}
                <p>Visit</p>
              </button>
            </div>
          </div>
        ))}
      </div>
      {showModalPurchase && <PurchaseModal closeModal={handleCloseModalPurchase} />}
      {showModalAddress && <FarmAddressDetailsFormModal closeModal={handleCloseEditAddress} />}
    </div>
  );
};

export default HomeMarket;
