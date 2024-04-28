import React, { useState } from 'react';
import TopTab from '../../../components/TopTab'; // Import the TopTab component
import BottomTab from '../../../components/BottomTab';
import WelcomeFarmPage from '../../farm-register/WelcomeFarmPage';
import FarmDetailsForm from '../../farm-register/FarmDetailsForm';
import { Helmet } from 'react-helmet';
import FarmRegisterDone from '../../farm-register/FarmRegisterDone';
import UserFormDetails from '../../users/UserFormDetails';
import FirstProduct from '../../product-page/FirstProduct';
import EditPage from '../../product-page/EditPage';


const Product = () => {
  const [activeProductTab, setActiveProductTab] = useState('FirstProduct');
  const [activeFirstProductTab, setActiveFirstProductTab] = useState('EmptyList'); // Add activeFirstProductTab state

  const renderContent = () => {
    switch (activeProductTab) {
      case 'FirstProduct':
        return <EditPage setActiveProductTab={setActiveProductTab} setActiveFirstProductTab={setActiveFirstProductTab} activeFirstProductTab={activeFirstProductTab} />; // Pass setActiveFirstProductTab to FirstProduct
      case 'EditProductPage':
        return <EditPage setActiveProductTab={setActiveProductTab} />;
      case 'ProductMarketPreview':
        
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
      <TopTab setActiveProductTab={setActiveProductTab} activeProductTab={activeProductTab} activeFirstProductTab={activeFirstProductTab} />
      {renderContent()}
      <BottomTab activeTab='Product' setActiveProductTab={setActiveProductTab} />
    </div>
  );
};

export default Product;
