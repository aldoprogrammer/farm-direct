import React from 'react';
import { useNavigate } from 'react-router-dom';
import MarketTabIcon from '../assets/marketTabIcon.png';
import FarmTabIcon from '../assets/farmTabIcon.png';
import AccountTabIcon from '../assets/accountTabIcon.png';
import ProductTabIcon from '../assets/productTabIcon.png';

const BottomTab = ({ activeTab }) => {
  const navigate = useNavigate();

  const handleTabClick = (tabName, path) => {
    if (tabName !== 'Account') {
      navigate(path);
    }
  };

  return (
    <footer className='bg-[#44403C] w-full h-12 justify-between items-center grid grid-cols-4 fixed bottom-0'>
      <div
        className={`flex cursor-pointer h-full justify-center items-center ${activeTab === 'Market' ? 'bg-[#65A30D]' : ''}`}
        onClick={() => handleTabClick('Market', '/market')}
      >
        <img src={MarketTabIcon} alt="Market" className="h-4 w-4" />
      </div>
      <div
        className={`flex cursor-pointer h-full justify-center items-center ${activeTab === 'Farm' ? 'bg-[#65A30D]' : ''}`}
        onClick={() => handleTabClick('Farm', '/farm')}
      >
        <img src={FarmTabIcon} alt="Farm" className="h-4 w-4" />
      </div>
      <div
        className={`flex cursor-pointer h-full justify-center items-center ${activeTab === 'Product' ? 'bg-[#65A30D]' : ''}`}
        onClick={() => handleTabClick('Product', '/product')}
      >
        <img src={ProductTabIcon} alt="Product" className="h-4 w-4" />
      </div>
      <div
        className={`flex cursor-pointer h-full justify-center items-center ${activeTab === 'Account' ? 'bg-[#65A30D]' : ''}`}
        onClick={() => navigate('/user-profile')} // Directly navigate to the account tab
      >
        <img src={AccountTabIcon} alt="Account" className="h-4 w-4" />
      </div>
    </footer>
  );
};

export default BottomTab;

