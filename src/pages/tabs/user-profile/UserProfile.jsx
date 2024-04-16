import React, { useState } from 'react';
import TopTab from '../../../components/TopTab';
import BottomTab from '../../../components/BottomTab';
import WelcomeFarmPage from '../../farm-register/WelcomeFarmPage';
import FarmDetailsForm from '../../farm-register/FarmDetailsForm';
import { Helmet } from 'react-helmet';
import FarmRegisterDone from '../../farm-register/FarmRegisterDone';
import UserFormDetails from '../../users/UserFormDetails';

const UserProfile = () => {
  const [activeUserTab, setActiveUserTab] = useState('UserFormDetils');

  const renderContent = () => {
    switch (activeUserTab) {
      case 'UserFormDetils':
        return <UserFormDetails setActiveUserTab={activeUserTab} />;
      default:
        return <WelcomeFarmPage />;
    }
  };
  
  return (
    <div className='relative h-[100vh] overflow-y-auto'>
      <Helmet>
        <meta charSet="utf-8" />
        <title>User Profile - Farm Direct</title>
      </Helmet>
      <TopTab setActiveUserTab={setActiveUserTab}  activeUserTab={activeUserTab}  />
      {renderContent()}
      <BottomTab activeTab='Account' />
    </div>
  );
};

export default UserProfile;
