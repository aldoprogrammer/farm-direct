import React, { useState } from 'react'
import FarmEditButton from '../../components/FarmEditButton';
import ButtonFarmDirect from '../../components/ButtonFarmDirect';
import FarmDetailsFormModal from '../../modal/FarmDetailsFormModal';
import FarmAddressDetailsFormModal from '../../modal/FarmAddressDetailsFormModal';
import UserFarmerShoperModal from '../../modal/UserFarmerShoperModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp, faBell, faDollarSign, faPlus, faTemperatureLow, faTint, faWater } from '@fortawesome/free-solid-svg-icons';
import IconUpThumbnailLeftSide from '../../assets/icon-1-thumbanil.png'
import ThumbnailProduct from '../../assets/thumbnail-product.png'
import ProductBell from '../../assets/product-bell.png'
import WhiteEditButton from '../../components/WhiteEditButton';
import TangkaiBunga from '../../assets/tangkai-bunga.png'
import DaunBunga from '../../assets/daun-bunga.png'
import EditProductFormModal from '../../modal/EditProductFormModal';
import ReactSpeedometer from 'react-d3-speedometer';
const ProductMarketPreview = ({ setActiveProductTab }) => {
  const [showModalEditProduct, setShowModalEditProduct] = useState(false); // State to manage modal visibility
  const [showModalAddress, setShowModalAddress] = useState(false); // State to manage modal visibility


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


    // State to track the active tab
    const [activeSubHeadTab, setActiveSubHeadTab] = useState('Cabbage');

    // Function to handle tab click
    const handleTabClick = (tabName) => {
      setActiveSubHeadTab(tabName);
    };

  return (
    <div className='flex flex-col w-full h-[600px] px-2 py-0 items-center 
    mt-4 gap-4 overflow-auto mb-20'>
      <ButtonFarmDirect title='Save Farm Details' onClick={handleSetupFarmClick} />
      {/* sub tab header */}
      <div className='w-full h-12 grid grid-cols-3'>
      {/* Cabbage Tab */}
      <div 
        className={`w-full border-b-[#65A30D] border-2 flex items-center justify-center p-2 border-[#FFFBEB] cursor-pointer 
        ${activeSubHeadTab !== 'Cabbage' && 'border-b-0'}`}
        onClick={() => handleTabClick('Cabbage')}
      >
        <p className='font-normal text-base'>
          Cabbage
        </p>
      </div>
      {/* Cane Sugar Tab */}
      <div 
        className={`w-full border-b-[#65A30D] border-2 flex items-center justify-center p-2 border-[#FFFBEB] cursor-pointer ${activeSubHeadTab !== 'Cane Sugar' && 'border-b-0'}`}
        onClick={() => handleTabClick('Cane Sugar')}
      >
        <p className='font-normal text-base'>
          Cane Sugar
        </p>
      </div>
      {/* Carrots Tab */}
      <div 
        className={`w-full border-b-[#65A30D] border-2 flex items-center justify-center p-2 border-[#FFFBEB] cursor-pointer ${activeSubHeadTab !== 'Carrots' && 'border-b-0'}`}
        onClick={() => handleTabClick('Carrots')}
      >
        <p className='font-normal text-base'>
          Carrots
        </p>
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
      {/* speedo meter */}
      <div className='grid grid-cols-2 gap-2 w-full'>
        {/* speedo left */}
        <div className='w-full h-auto p-4 rounded-xl bg-[#ffffff] text-[#000000]
      flex flex-col shadow-md gap-5 relative'>
          <FontAwesomeIcon icon={faTint} className='absolute top-3 left-3 text-[#65A30D] text-xl' />
          <ReactSpeedometer
            value={55} // Adjust the initial value as needed
            minValue={0}
            maxValue={100}
            needleColor="steelblue"
            needleTransitionDuration={4000}
            needleTransition="easeElastic"
            textColor={"#000000"}
            width={150} // Set a smaller width here
            height={150} // Set a smaller height here
            currentValueText={"66%"}
          />
        </div>
        {/* speedo right */}
        <div className='w-full h-auto p-4 rounded-xl bg-[#ffffff] text-[#000000]
      flex flex-col shadow-md gap-5 relative'>
          <FontAwesomeIcon icon={faTemperatureLow} className='absolute top-3 left-3 text-[#65A30D] text-xl' />
          <ReactSpeedometer
            value={55} // Adjust the initial value as needed
            minValue={0}
            maxValue={100}
            needleColor="steelblue"
            needleTransitionDuration={4000}
            needleTransition="easeElastic"
            textColor={"#000000"}
            width={150} // Set a smaller width here
            height={150} // Set a smaller height here
            currentValueText={"55°C"}
          />



        </div>
      </div>

    {/* nitrogen data */}
    <div className='w-full h-auto p-4 rounded-xl bg-[#ffffff] text-[#000000]
      flex flex-col shadow-md gap-5'>
        <div className='grid grid-cols-3 items-left 
        gap-2 justify-between w-full'>
          <div className='flex flex-col gap-1 text-center'>
            <h6 className='text-[#44403C] text-xl font-extrabold'>Nitrogen
            <br />N (PPM)</h6>
            <p className='text-3xl text-[#65A30D] font-bold'>30</p>
            <p className='text-sm text-[#44403C]'>20-50 ppm</p>
          </div>
          <div className='flex flex-col gap-1 text-center'>
            <h6 className='text-[#44403C] text-xl font-extrabold'>
            Phosphorus
            <br />P (PPM)</h6>
            <div className='flex items-center justify-center'>
            <FontAwesomeIcon icon={faArrowDown} className=' text-2xl text-[#EA7806]' />

            <p className='text-3xl text-[#EA7806] font-bold ml-[2px]'>9</p>
            </div>
            <p className='text-sm text-[#44403C]'>10-30 ppm</p>
          </div>
          <div className='flex flex-col gap-1 text-center'>
            <h6 className='text-[#44403C] text-xl font-extrabold'>Potassium
            <br />K (PPM)</h6>
            <div className='flex items-center justify-center'>
            <FontAwesomeIcon icon={faArrowUp} className=' text-2xl text-[#EA7806]' />
            <p className='text-3xl text-[#EA7806] font-bold ml-[2px]'>50</p>
            </div>
            <p className='text-sm text-[#44403C]'>10-40 ppm</p>
          </div>
        </div>
        <div className='flex flex-col justify-center items-center'>
            <ButtonFarmDirect title='Button Text' />
          </div>
      </div>
      {/* two grid above market predict */}
      <div className='grid grid-cols-2 gap-2 w-full'>
        {/* left  box */}
        <div className='w-full h-auto p-4 rounded-xl bg-[#ffffff] text-[#000000]
      flex flex-col shadow-md gap-5 items-center justify-center'>
         <p className='text-[#44403C] text-3xl font-bold'>PH 12</p>
        </div>
        {/* box right */}
        <div className='w-full h-auto p-4 pb-8 rounded-xl bg-[#ffffff] text-[#000000]
      flex flex-col shadow-md gap-2 items-center justify-center'>
         <p className='text-[#44403C] text-xl font-bold
         text-center'>Soil Organic 
Matter SOM</p>
<p className='text-[#44403C] text-3xl font-bold'>23%</p>

        </div>
      </div>

      <div className='w-full min-h-[120px] h-auto p-4 rounded-xl bg-[#ffffff] text-[#000000]
  flex flex-col shadow-md gap-5 mb-3'>
        <div className='flex flex-col gap-2 justify-between'>
          <div className='flex items-center gap-1'>
            <FontAwesomeIcon icon={faDollarSign} className='text-[#65A30D] text-lg' />
            <p className='font-bold'>Market Prediction</p>
          </div>
          {/* market prediction */}
          <div className='flex flex-col items-center justify-center h-auto mt-2'>
            <p className='font-bold'>Dummy data for now</p>
          </div>
        </div>
      </div>

      {showModalEditProduct && <EditProductFormModal closeModal={handleCloseEditProduct} />}
    </div>
  )
}

export default ProductMarketPreview