import React, { useState } from 'react'
import FarmEditButton from '../../components/FarmEditButton';
import ButtonFarmDirect from '../../components/ButtonFarmDirect';
import FarmDetailsFormModal from '../../modal/FarmDetailsFormModal';
import FarmAddressDetailsFormModal from '../../modal/FarmAddressDetailsFormModal';
import UserFarmerShoperModal from '../../modal/UserFarmerShoperModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp, faBell, faCartShopping, faDollarSign, faPlus, faTemperatureLow, faTint, faWater } from '@fortawesome/free-solid-svg-icons';
import IconUpThumbnailLeftSide from '../../assets/icon-1-thumbanil.png'
import ThumbnailProduct from '../../assets/thumbnail-product.png'
import ProductBell from '../../assets/product-bell.png'
import WhiteEditButton from '../../components/WhiteEditButton';
import TangkaiBunga from '../../assets/tangkai-bunga.png'
import DaunBunga from '../../assets/daun-bunga.png'
import EditProductFormModal from '../../modal/EditProductFormModal';
import ReactSpeedometer from 'react-d3-speedometer';
import ExploreMarket from '../../assets/explore-market.png';
import { useNavigate } from 'react-router-dom';
const VegetablesIOT = ({ setActiveFarmTab }) => {
  const [showModalEditProduct, setShowModalEditProduct] = useState(false); // State to manage modal visibility
  const [showModalAddress, setShowModalAddress] = useState(false); // State to manage modal visibility
  const navigate = useNavigate();

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
    navigate('/market')
  };

  // Dummy JSON data for vegetable tabs
  const vegetablesTabData = [
    { id: 1, name: 'Carrot' },
    { id: 2, name: 'Tomato' },
    { id: 3, name: 'Broccoli' },
    { id: 4, name: 'Spinach' },
    { id: 5, name: 'Cucumber' },
    { id: 6, name: 'Bell Pepper' },
    { id: 7, name: 'Onion' },
    { id: 8, name: 'Lettuce' }
  ];
  // State to track the active tab
  const [activeSubHeadTab, setActiveSubHeadTab] = useState(vegetablesTabData[0].name);

  // Function to handle tab click
  const handleTabClick = (tabName) => {
    setActiveSubHeadTab(tabName);
  };

  const editFarmDetails = () => {
    setActiveFarmTab('FarmDetails');
  }





  return (
    <div className='flex flex-col w-full h-[600px] px-2 py-0 items-center 
    mt-4 gap-4 overflow-auto mb-20'>
      {/* sub tab header */}
      <div className='flex flex-row w-full'>
        <div className='w-full h-12 flex overflow-x-auto gap-2'>
          {/* Map over the vegetable tabs array to render each tab */}

          {vegetablesTabData.map((tab) => (
            <div
              key={tab.id}
              className={`w-[290px] border-b-[#65A30D] border-2 flex items-center justify-center p-2 border-[#FFFBEB] cursor-pointer ${activeSubHeadTab !== tab.name && 'border-b-0'}`}
              onClick={() => handleTabClick(tab.name)}
            >
              <p className='font-normal text-base text-center'>
                {tab.name}
              </p>
            </div>
          ))}
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
            <div className='absolute bottom-[0px] 
            right-1'
              onClick={editFarmDetails}
            >
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
            <h6 className='text-[#44403C] text-[16px]  font-extrabold'>Nitrogen
              <br />N (PPM)</h6>
            <p className='text-3xl text-[#65A30D] font-bold'>30</p>
            <p className='text-sm text-[#44403C]'>20-50 ppm</p>
          </div>
          <div className='flex flex-col gap-1 text-center'>
            <h6 className='text-[#44403C] text-[16px]  font-extrabold'>
              Phosphorus
              <br />P (PPM)</h6>
            <div className='flex items-center justify-center'>
              <FontAwesomeIcon icon={faArrowDown} className=' text-2xl text-[#EA7806]' />

              <p className='text-3xl text-[#EA7806] font-bold ml-[2px]'>9</p>
            </div>
            <p className='text-sm text-[#44403C]'>10-30 ppm</p>
          </div>
          <div className='flex flex-col gap-1 text-center'>
            <h6 className='text-[#44403C] text-[16px] font-extrabold'>Potassium
              <br />K (PPM)</h6>
            <div className='flex items-center justify-center'>
              <FontAwesomeIcon icon={faArrowUp} className=' text-2xl text-[#EA7806]' />
              <p className='text-3xl text-[#EA7806] font-bold ml-[2px]'>50</p>
            </div>
            <p className='text-sm text-[#44403C]'>10-40 ppm</p>
          </div>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <button
            onClick={handleSetupFarmClick} // Call the handleSetupFarmClick function on button click
            className='w-fit bg-[#65A30D] py-[1rem] px-8 rounded-md text-[#FFFFFF] my-2 mx-auto
              flex flex-row items-center gap-3 mt-6'>
            <FontAwesomeIcon icon={faCartShopping} className='text-white w-4 h-4' />
            <p className='font-bold'>Shop For Fertilizer</p>
          </button>
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

      <div className='w-full h-auto  
      rounded-xl bg-[#ffffff] text-[#000000]
  flex flex-col shadow-md gap-5 mb-3'>
        <div className='flex flex-col p-4 gap-2 justify-between'>
          <div className='flex items-center gap-1'>
            <FontAwesomeIcon icon={faDollarSign} className='text-[#65A30D] text-lg' />
            <p className='font-bold'>Market Prediction</p>
          </div>
          {/* market prediction */}

        </div>
        <div className='flex flex-col items-center justify-center h-auto mt-2'>
          <img src={ExploreMarket} alt="" style={{ width: '100%' }} />
        </div>

      </div>

      {showModalEditProduct && <EditProductFormModal closeModal={handleCloseEditProduct} />}
    </div>
  )
}

export default VegetablesIOT