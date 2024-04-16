import React, { useState } from 'react';
import TopTab from '../../../components/TopTab';
import BottomTab from '../../../components/BottomTab';
import WelcomeFarmPage from '../../farm-register/WelcomeFarmPage';
import FarmDetailsForm from '../../farm-register/FarmDetailsForm';
import { Helmet } from 'react-helmet';
import FarmRegisterDone from '../../farm-register/FarmRegisterDone';
import UserFormDetails from '../../users/UserFormDetails';
import FirstProduct from '../../product-page/FirstProduct';


const Product = () => {
  const [activeProductTab, setActiveProductTab] = useState('UserFormDetils');

  const renderContent = () => {
    switch (activeProductTab) {
      case 'UserFormDetils':
        return <FirstProduct setActiveProductTab={activeProductTab} />;
      default:
        return <WelcomeFarmPage />;
    }
  };
  
  return (
    <div className='relative h-[100vh] overflow-y-auto'>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Farm Product - Farm Direct</title>
      </Helmet>
      <TopTab setActiveProductTab={setActiveProductTab}  activeProductTab={activeProductTab}  />
      {renderContent()}
      <BottomTab activeTab='Product' />
    </div>
  );
};

export default Product;
