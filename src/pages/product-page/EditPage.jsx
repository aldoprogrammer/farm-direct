import React, { useState } from 'react'
import FarmEditButton from '../../components/FarmEditButton';
import ButtonFarmDirect from '../../components/ButtonFarmDirect';
import FarmDetailsFormModal from '../../modal/FarmDetailsFormModal';
import FarmAddressDetailsFormModal from '../../modal/FarmAddressDetailsFormModal';
import UserFarmerShoperModal from '../../modal/UserFarmerShoperModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faPlus } from '@fortawesome/free-solid-svg-icons';
import IconUpThumbnailLeftSide from '../../assets/icon-1-thumbanil.png'
import ThumbnailProduct from '../../assets/thumbnail-product.png'
import ProductBell from '../../assets/product-bell.png'
import WhiteEditButton from '../../components/WhiteEditButton';
import TangkaiBunga from '../../assets/tangkai-bunga.png'
import DaunBunga from '../../assets/daun-bunga.png'
import EditProductFormModal from '../../modal/EditProductFormModal';
import AddIOTtoProduct from '../../modal/AddIOTtoProduct';
const EditPage = ({ setActiveProductTab }) => {
  const [showModalEditProduct, setShowModalEditProduct] = useState(false); // State to manage modal visibility
  const [showModalAddress, setShowModalAddress] = useState(false); // State to manage modal visibility
  const [showModalIOTDevices, setShowModalIOTDevices] = useState(false); // State to manage modal visibility

  const handleModalIOTDevices = () => {
    setShowModalIOTDevices(true);
  };

  const handleCloseModalIOTDevices = () => {
    setShowModalIOTDevices(!showModalIOTDevices);
  };
  
  const handleEditProduct = () => {
    setShowModalEditProduct(true); // Show the modal when the button is clicked
  };

  const handleCloseEditProduct = () => {
    setShowModalEditProduct(!showModalEditProduct);
  };

  const handleEditAddress = () => {
    setShowModalAddress(true); // Show the modal when the button is clicked
  };

  const handleCloseEditAddress = () => {
    setShowModalAddress(!showModalAddress);
  };


  const handleSetupFarmClick = () => {
    setActiveProductTab('EditPage'); // Update the active tab 
  };

  const handlePreviewMarketTab = () => {
    setActiveProductTab('ProductMarketPreview');
    console.log('click tab new')
  };

  return (
    <div className='flex flex-col w-full h-[600px] px-2 py-0 items-center 
    mt-4 gap-4 overflow-auto mb-20'>
      <ButtonFarmDirect title='Save Farm Details' onClick={handleSetupFarmClick} />
      <div className='w-full h-auto p-4 rounded-xl bg-[#ffffff] text-[#000000]
      grid grid-cols-3 shadow-md gap-5'>
        <div className='p-2 border-[#F73B3B] border-2
        flex items-center justify-center rounded-md cursor-pointer'>
          <p className='text-base text-[#F73B3B]'>Deactive</p>
        </div>
        <div className='p-2 border-[#65A30D] border-2
        flex items-center justify-center rounded-md'>
          <p className='text-base text-[#202020] cursor-pointer'>Copy</p>
        </div>
        <div className='p-2 border-[#65A30D] border-2
        flex items-center justify-center rounded-md cursor-pointer'
        onClick={handlePreviewMarketTab}>
          <p className='text-base text-[#202020] text-center'>Preview In Market</p>
        </div>
      </div>
      {/* thubmnail product section */}
      <div className='w-full h-[300px] rounded-xl bg-[#ffffff] text-[#000000]
      flex flex-row shadow-md'>
        {/* left side thumbnail */}
        <div className='w-1/5 flex flex-col items-center'>
          <div className='h-1/5 w-full bg-[#65A30D] flex items-end justify-center rounded-tl-md'>
            <img src={IconUpThumbnailLeftSide} alt="" srcset="" className='w-5 h-3' />
          </div>
          <div className='h-3/5 w-full bg-[#ECFCCB] relative'>
            <p className='text-[#65A30D] text-[10px] text-center'>
              May 24
            </p>
            <img src={DaunBunga} alt="" srcset="" 
            className='absolute md:hidden flex
            bottom-[45%] left-[42%]' />
            <img src={TangkaiBunga} alt="" srcset="" className='absolute
            bottom-0 left-[50%] md:hidden flex' />
            <p className='text-black font-bold absolute left-[20%] top-1/2 w-full
            md:left-[33%]'>
              Apr 24
            </p>
          </div>
          <div className='h-1/5 w-full bg-[#78716C] flex 
          items-center justify-center rounded-bl-md text-white'>
            <p className='text-center text-[12px]'>Apr 1</p>
          </div>

        </div>
        {/* right side thumbnail */}
        <div className='w-4/5 h-full p-4 flex flex-row relative gap-2'>
          <div className='relative'>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full">
              <h6 className='text-[22px] text-center font-bold text-white'>Apr 20</h6>
            </div>
            <img src={ThumbnailProduct} alt="" srcset="" className='w-full h-full' />
            <div className='absolute bottom-[0px] right-1'>
              <WhiteEditButton />
            </div>
          </div>
          <div className='flex flex-col gap-1'>
            <FontAwesomeIcon icon={faBell} className='w-5 h-10 absolute top-1 right-2 text-[#78716C]' />
            <h6 className='font-bold mt-1'>No Notifications</h6>
            <p className='text-sm'>Last Summary:</p>
            <ul className="list-disc pl-4">
              <li className='text-[12px]'>Watered on Apr 19</li>
              <li className='text-[12px]'>Fertilized on Apr 19</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='w-full h-auto p-4 rounded-xl bg-[#ffffff] text-[#000000]
      flex flex-col shadow-md gap-5'>
        <div className='flex items-center gap-2 justify-between'>
          <div className='flex flex-col gap-1'>
            <p className='font-bold'>Name:</p>
            <p>Cabbage</p>
          </div>
          <div className='flex items-center gap-1'>
            <div className='rounded-full w-4 h-4 bg-[#FFBE18]'></div>
            <p>Not listed</p>
          </div>
        </div>
        <div className='flex items-center gap-2 justify-between'>
          <div className='flex flex-col gap-1'>
            <p className='font-bold'>Date planted:</p>
            <p>Apr 1 2024</p>
          </div>
        </div>
        <div className='flex items-center gap-2 justify-between'>
          <div className='flex flex-col gap-1'>
            <p className='font-bold'>
            Expected to be harvested:
              </p>
            <p>
            May 24 2024
              </p>
          </div>
        </div>
        <div className='flex items-center gap-2 justify-between'>
          <div className='flex flex-col gap-1'>
            <p className='font-bold'>
            Blockchain ID:              </p>
            <p>
            648938457392035              </p>
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <p className='font-bold'>Quantity:</p>
          23
        </div>
        <div className='flex items-center gap-2 justify-between'>
          <div className='flex flex-col gap-1'>
            <p className='font-bold'>
            Price per LB:           </p>
            <p>
            $7.00             </p>
          </div>
        </div>
        <div className='flex items-center gap-2 justify-between w-full'>
          <div className='flex flex-col gap-1'>
            <p className='font-bold'>Price:</p>
            20$
          </div>
          <FarmEditButton handleClick={handleEditProduct} />

        </div>
       
      </div>
      <div className='w-full h-auto p-4 rounded-xl bg-[#ffffff] text-[#000000]
      flex flex-col shadow-md gap-5'>
        <div className='flex gap-2 justify-between'>
          <p className='font-bold'>
            Product Description
          </p>
          <FarmEditButton />
        </div>
      </div>
      {/* IOT Devices */}
      <div className='w-full h-auto p-4 rounded-xl bg-[#ffffff] text-[#000000]
      flex flex-col shadow-md gap-5'>
        <div className='flex flex-col items-left gap-2 justify-between w-full'>
          <p className='font-bold'>IoT Devices:</p>
          <div className='flex flex-col justify-center items-center'>
            <ButtonFarmDirect title='Discover IoT Devices' onClick={handleModalIOTDevices} />
          </div>
        </div>
      </div>
      <div className='w-full h-auto p-4 rounded-xl bg-[#ffffff] text-[#000000]
      flex flex-col shadow-md gap-5 mb-4'>
        <div className='flex gap-2 justify-between'>
          <p className='font-bold'>
            Product History
          </p>
          <FarmEditButton />
        </div>
      </div>
    {showModalIOTDevices && <AddIOTtoProduct closeModal={handleCloseModalIOTDevices} />}
      {showModalEditProduct && <EditProductFormModal closeModal={handleCloseEditProduct} />}
    </div>
  )
}

export default EditPage