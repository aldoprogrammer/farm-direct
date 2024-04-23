import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MarketTabIcon from '../assets/marketTabIcon.png';
import AccountTabIcon from '../assets/accountTabIcon.png';
import { faSeedling } from '@fortawesome/free-solid-svg-icons';
import ProductTabIcon from '../assets/productTabIcon.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BottomTab = ({ activeTab, setActiveMarketTab  }) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check login status from localStorage when component mounts
    const loginStatus = localStorage.getItem('login');
    setIsLoggedIn(loginStatus === 'true');
  }, []);

  const handleTabClick = (tabName, path) => {
    if (tabName !== 'Account') {
      navigate(path);
    }
  };

  return (
    <footer className={`bg-[#44403C] w-full h-12 justify-between items-center fixed bottom-0 ${isLoggedIn ? 'grid grid-cols-4' : 'grid grid-cols-2'}`}>
      <div
        className={`flex cursor-pointer h-full justify-center items-center ${activeTab === 'Market' ? 'bg-[#B45309]' : ''}`}
        onClick={() => handleTabClick('Market', '/market')}
      >
        <img src={MarketTabIcon} alt="Market" className="h-4 w-4" />
      </div>
      {/* Render Farm tab only if logged in */}
      {isLoggedIn && (
        <div
          className={`flex cursor-pointer h-full justify-center items-center ${activeTab === 'Farm' ? 'bg-[#65A30D]' : ''}`}
          onClick={() => handleTabClick('Farm', '/farm')}
        >
          <FontAwesomeIcon icon={faSeedling} className='text-white w-4 h-4' />
        </div>
      )}
      {/* Render Product tab only if logged in */}
      {isLoggedIn && (
        <div
          className={`flex cursor-pointer h-full justify-center items-center ${activeTab === 'Product' ? 'bg-[#65A30D]' : ''}`}
          onClick={() => handleTabClick('Product', '/product')}
        >
          <img src={ProductTabIcon} alt="Product" className="h-4 w-4" />
        </div>
      )}
      {/* Render Account tab */}
      <div
        className={`flex cursor-pointer h-full justify-center items-center ${activeTab === 'Account' ? 'bg-[#B45309]' : ''}`}
        onClick={() => navigate('/user-profile')} // Directly navigate to the account tab
      >
        <img src={AccountTabIcon} alt="Account" className="h-4 w-4" />
      </div>
    </footer>
  );
};

export default BottomTab;
