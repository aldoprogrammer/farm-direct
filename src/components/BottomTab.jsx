import React, { useState } from 'react';
import MarketTabIcon from '../assets/marketTabIcon.png';
import FarmTabIcon from '../assets/farmTabIcon.png';
import AcccountTabIcon from '../assets/accountTabIcon.png';
import ProductTabIcon from '../assets/productTabIcon.png';

const BottomTab = ({ setActiveTab }) => {
  const [activeTab, setActive] = useState('Farm');

  const handleTabClick = (tabName) => {
    setActive(tabName);
    setActiveTab(tabName); // Update the active tab in the parent component
  };

  return (
    <footer className='bg-[#44403C] w-full h-12 justify-between items-center grid grid-cols-4 absolute bottom-0'>
      <div
        className={`flex cursor-pointer h-full justify-center items-center ${activeTab === 'Market' ? 'bg-[#65A30D]' : ''}`}
        onClick={() => handleTabClick('Market')}
      >
        <img src={MarketTabIcon} alt="Market" className="h-4 w-4" />
      </div>
      <div
        className={`flex cursor-pointer h-full justify-center items-center ${activeTab === 'Farm' ? 'bg-[#65A30D]' : ''}`}
        onClick={() => handleTabClick('Farm')}
      >
        <img src={FarmTabIcon} alt="Farm" className="h-4 w-4" />
      </div>
      <div
        className={`flex cursor-pointer h-full justify-center items-center ${activeTab === 'Account' ? 'bg-[#65A30D]' : ''}`}
        onClick={() => handleTabClick('Account')}
      >
        <img src={AcccountTabIcon} alt="Account" className="h-4 w-4" />
      </div>
      <div
        className={`flex cursor-pointer h-full justify-center items-center ${activeTab === 'Product' ? 'bg-[#65A30D]' : ''}`}
        onClick={() => handleTabClick('Product')}
      >
        <img src={ProductTabIcon} alt="Product" className="h-4 w-4" />
      </div>
    </footer>
  );
};

export default BottomTab;
