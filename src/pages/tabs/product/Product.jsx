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
import ProductMarketPreview from '../../product-page/ProductMarketPreview';


const Product = () => {
  const [activeProductTab, setActiveProductTab] = useState('FirstProduct');

  const renderContent = () => {
    switch (activeProductTab) {
      case 'FirstProduct':
        return <FirstProduct setActiveProductTab={setActiveProductTab} />;
      case 'EditProductPage':
        return <EditPage setActiveProductTab={setActiveProductTab} />;
      case 'ProductMarketPreview':
        return <ProductMarketPreview setActiveProductTab={setActiveProductTab} />;
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
      <TopTab setActiveProductTab={setActiveProductTab} activeProductTab={activeProductTab} />
      {renderContent()}
      <BottomTab activeTab='Product' />
    </div>
  );
};

export default Product;
