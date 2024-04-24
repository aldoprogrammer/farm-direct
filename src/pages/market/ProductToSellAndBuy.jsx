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
import { Rating } from '@material-tailwind/react';
import PurchaseModal from '../../modal/PurchaseModal';

const ProductToSellAndBuy = ({ setActiveMarketTab }) => {
  const [showModalPurchase, setShowModalPurchase] = useState(false);
  const [showModalAddress, setShowModalAddress] = useState(false);


  const handlePurchaseModal = () => {
    setShowModalPurchase(true);
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
    },
    {
      image: ThumbnailProduct2,
    },
    {
      image: ThumbnailProduct3,
    },
    {
      image: ThumbnailProduct,
    },
    {
      image: ThumbnailProduct2,
    }
  ];

  return (
    <div className='flex flex-col w-full h-[600px] px-2 py-0 items-center mt-4 gap-4 overflow-auto mb-20'>
      {/* thumbnail product section */}
      {/* product section */}
      <div className='w-full gap-5 grid grid-cols-1
       md:grid-cols-2 lg:grid-cols-3 mb-4'>
      {dataDummyMarket.map((item, index) => (
        <div key={index}
          className='w-full rounded-xl bg-[#ffffff]
           text-[#000000] h-[215px] flex flex-row 
           shadow-md p-4 gap-2 md:h-[225px]'
          >
          <div className='w-2/5'>
            <img src={item.image} alt="" className='w-full 
            h-full rounded-md cursor-pointer' 
            onClick={handleDetailsMarketProduct}
            />
          </div>
          <div className='flex flex-col gap-1 w-3/5'>
            <h5 className='font-bold text-[#44403C] 
             text-xl
            cursor-pointer'
            onClick={handleDetailsMarketProduct}>
              Description of the <br />
              product name
            </h5>
            <h6 className='font-black text-[#44403C] 
            mt-1 md:text-2xl font-roboto-slab text-xl'>
              $7.00 LB
            </h6>
            <Rating value={3} readonly />
            <button className='w-fit bg-[#65A30D] py-[14px] px-8 rounded-md text-[#FFFFFF] my-2 flex flex-row items-center gap-3'
                         onClick={handlePurchaseModal}
            >
              <FontAwesomeIcon icon={faCartShopping} className='text-white w-4 h-4' />
              <p>Purchase</p>
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

export default ProductToSellAndBuy;
