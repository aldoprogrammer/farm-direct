import React, { useState } from 'react';
import TopTab from '../../../components/TopTab';
import BottomTab from '../../../components/BottomTab';
import WelcomeFarmPage from '../../farm-register/WelcomeFarmPage';
import FarmDetailsForm from '../../farm-register/FarmDetailsForm';
import { Helmet } from 'react-helmet';
import FarmRegisterDone from '../../farm-register/FarmRegisterDone';
import UserFormDetails from '../../users/UserFormDetails';
import FirstProduct from '../../product-page/FirstProduct';
import EditPage from '../../product-page/EditPage';
import MarketHomePage from '../../market/MarketHomePage';


const Market = () => {
  const [activeMarketTab, setActiveMarketTab] = useState('UserFormDetils');

  const renderContent = () => {
    switch (activeMarketTab) {
      case 'UserFormDetils':
<MarketHomePage setActiveMarketTab={setActiveMarketTab} />
        case 'EditProductPage':
        return <EditPage setActiveMarketTab={activeMarketTab} />;
      default:
        return <WelcomeFarmPage />;
    }
  };
  
  return (
    <div className='relative h-[100vh] overflow-y-auto'>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Farm Market - Farm Direct</title>
      </Helmet>
      <TopTab setActiveMarketTab={setActiveMarketTab}  activeMarketTab={activeMarketTab}  />
      {renderContent()}
      <BottomTab activeTab='Market' />
    </div>
  );
};

export default Market;
