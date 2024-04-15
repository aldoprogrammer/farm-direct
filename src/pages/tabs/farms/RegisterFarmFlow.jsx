import React, { useState } from 'react';
import TopTab from '../../../components/TopTab';
import BottomTab from '../../../components/BottomTab';
import WelcomeFarmPage from '../../farm-register/WelcomeFarmPage';
import FarmDetailsForm from '../../farm-register/FarmDetailsForm';
import { Helmet } from 'react-helmet';
import FarmRegisterDone from '../../farm-register/FarmRegisterDone';

const RegisterFarmFlow = () => {
  const [activeFarmTab, setActiveFarmTab] = useState('WelcomeFarmPage');

  const renderContent = () => {
    switch (activeFarmTab) {
      case 'WelcomeFarmPage':
        return <WelcomeFarmPage setActiveFarmTab={setActiveFarmTab} />;
      case 'FarmDetails':
        return <FarmDetailsForm setActiveFarmTab={setActiveFarmTab} />;
      case 'Done':
        return <FarmRegisterDone />;
      default:
        return <WelcomeFarmPage />;
    }
  };

  return (
    <div className='relative h-[100vh] overflow-y-auto'>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Farm Details</title>
      </Helmet>
      <TopTab setActiveFarmTab={setActiveFarmTab}  activeFarmTab={activeFarmTab}  />
      {renderContent()}
      <BottomTab setActiveTab='Farm' />
    </div>
  );
};

export default RegisterFarmFlow;
